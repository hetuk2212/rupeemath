import { NextRequest, NextResponse } from "next/server";

// Add ANTHROPIC_API_KEY to Vercel Environment Variables before deploying

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "AI advisor is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const {
    salary, city, age,
    rent, food, travel, utilities, existingEmis, misc,
    loanType, loanAmount, tenure, rate, calculatedEmi,
  } = await req.json();

  const systemPrompt = `You are RupeeMath AI — a friendly, honest Indian personal finance advisor. Analyze the user's financial situation and give practical advice in simple English. Always be encouraging but completely honest. Use ₹ symbol for all amounts. Format your response with these exact sections using these exact headings:

VERDICT
MONTHLY BUDGET BREAKDOWN
WHERE YOU CAN SAVE
OUR RECOMMENDATION
ONE SMART TIP

Keep total response under 300 words. Be specific with rupee amounts. Reference Indian financial context.`;

  const userPrompt = `My monthly salary is ₹${salary}.
I live in ${city}.
My age is ${age} years.

Monthly expenses:
Rent: ₹${rent}
Food: ₹${food}
Travel: ₹${travel}
Utilities: ₹${utilities}
Existing EMIs: ₹${existingEmis}
Misc: ₹${misc}

I want to take a ${loanType} of ₹${loanAmount}
for ${tenure} years at ${rate}% interest.
My calculated EMI would be ₹${calculatedEmi}.

Please analyze if I can afford this loan
and give me a complete financial plan.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return NextResponse.json(
        { error: "Could not get AI analysis. Please try again in a moment." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const text: string = data.content?.[0]?.text ?? "";

    if (!text) {
      return NextResponse.json({ error: "Empty response from AI. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ result: text });
  } catch (err) {
    console.error("AI advisor route error:", err);
    return NextResponse.json({ error: "Network error. Please try again." }, { status: 500 });
  }
}
