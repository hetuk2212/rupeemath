import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { AdvisorForm } from "./AdvisorForm";

export const metadata: Metadata = {
  title: "AI Financial Advisor — Can I Afford This Loan? 2026",
  description:
    "Get a personalized loan affordability analysis in seconds. Enter your salary and expenses — RupeeMath AI tells you if you can afford that loan and how to manage it.",
  keywords: [
    "can I afford this loan",
    "loan affordability calculator India",
    "AI financial advisor India",
    "home loan affordability checker",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/ai-advisor" },
  openGraph: {
    title: "AI Financial Advisor — Can I Afford This Loan? | RupeeMath",
    description: "Enter your salary, expenses, and loan details. RupeeMath AI gives you a personalized affordability verdict in seconds.",
    url: "https://www.rupeemath.co.in/ai-advisor",
  },
};

export default function AIAdvisorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "AI Financial Advisor" }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-sm">
          ✨ New Feature
        </div>
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">
          AI Financial Advisor —{" "}
          <span className="text-primary">Can I Afford This Loan?</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Enter your salary, monthly expenses, and loan details. RupeeMath AI analyzes your
          complete financial picture and gives you an honest, personalized verdict — should you
          take this loan, and how to manage it smartly.
        </p>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "📊 Budget breakdown",
            "✅ Affordability verdict",
            "💡 Savings tips",
            "⚡ Smart recommendation",
          ].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold text-primary"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <AdvisorForm />

      {/* Static content for SEO */}
      <div className="mt-12 space-y-6 text-sm leading-relaxed text-gray-600">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-gray-900">What is the RupeeMath AI Financial Advisor?</h2>
          <p className="mb-3">
            The RupeeMath AI Financial Advisor is a loan affordability analysis tool powered by
            Anthropic Claude — one of the most capable AI systems available today. It goes beyond
            a simple EMI calculator by analysing your complete financial picture: your monthly income,
            every category of expense, existing loan obligations, and the proposed new loan details.
            Within seconds, it produces a personalised assessment of whether you can comfortably afford
            the loan, how it affects your monthly budget and savings, and specific recommendations
            tailored to your situation.
          </p>
          <p>
            Unlike generic loan eligibility calculators that only check if you meet the bank&apos;s FOIR
            threshold, the AI Advisor considers whether taking the loan is financially wise — not just
            whether it is technically sanctionable. A loan can be approved by a bank and still be a poor
            financial decision if it leaves you with negative monthly savings or no emergency fund buffer.
            The AI Advisor flags these situations and suggests adjustments: a different tenure, a lower
            loan amount, or specific expenses to reduce before applying.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-lg font-bold text-gray-900">How to Use the AI Financial Advisor</h2>
          <p className="mb-3">
            Start by entering your monthly take-home salary — the amount credited to your bank account
            after all deductions. Select your city type (Metro or Non-Metro) and age, which the AI uses
            to contextualise your financial stage and expected expenses. Next, fill in your monthly
            expenses across six categories: house rent, food and groceries, travel and fuel, utilities,
            any existing loan EMIs, and miscellaneous entertainment and personal expenses. Being accurate
            here is important — the AI&apos;s analysis is only as good as the inputs you provide.
          </p>
          <p className="mb-3">
            In the loan details section, select the type of loan (home, car, bike, personal, or
            education), enter the loan amount you want, and adjust the tenure slider and interest rate.
            As you fill in these details, the calculator automatically computes your EMI in real time so
            you can see the monthly commitment before submitting. When you click &quot;Analyze My Finances,&quot;
            the AI processes your complete profile and returns a verdict within a few seconds — green for
            clearly affordable, orange for proceed with caution, and red for financially risky.
          </p>
          <p>
            The full analysis includes a before-and-after budget table showing your current monthly
            savings versus savings after the loan EMI, specific sections on where you can cut expenses
            to improve headroom, and one actionable financial tip tailored to your profile. You can
            analyze multiple scenarios — different loan amounts or tenures — by clicking &quot;Analyze
            Again&quot; and adjusting the inputs.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-gray-900">Why Loan Affordability Matters Beyond EMI</h2>
          <p className="mb-3">
            The most common mistake Indian borrowers make is checking only whether the EMI fits within
            the bank&apos;s FOIR limit — typically 40 to 50 percent of monthly income. A bank may approve
            a loan, but that does not mean taking it is financially sound. If the EMI consumes 48
            percent of your income and you also have rent, food, travel, and utilities consuming the
            remaining 52 percent, you are left with zero savings margin. Any unexpected expense —
            a medical emergency, a vehicle repair, or a month of reduced income — immediately becomes
            a financial crisis with no buffer to absorb it.
          </p>
          <p className="mb-3">
            Financial advisors recommend maintaining at least 10 to 15 percent of net income as monthly
            savings even after all EMIs and expenses. This savings rate builds an emergency fund,
            enables investment for future goals, and provides resilience against income disruption.
            The AI Advisor uses this framework — not just the bank&apos;s FOIR — to evaluate whether a loan
            is truly affordable for your specific situation. It also considers age and career stage:
            a 28-year-old with rising income potential is in a different position than a 52-year-old
            approaching retirement, and the AI&apos;s recommendation reflects these differences.
          </p>
          <p>
            India&apos;s household debt levels have risen significantly in the past decade, with more
            families carrying multiple concurrent loans — home loan, car loan, personal loan, and
            consumer EMIs simultaneously. Understanding the cumulative burden before adding a new loan
            is one of the most important financial decisions a household can make. The RupeeMath AI
            Advisor is designed to surface this complete picture clearly, in plain English, without
            requiring you to visit a bank or financial advisor in person.
          </p>
        </section>

      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
        RupeeMath AI provides educational guidance only. It is not a substitute for advice from
        a SEBI-registered financial advisor or a certified CA. All analysis is based on inputs
        you provide and standard Indian banking norms.
      </p>
    </div>
  );
}
