import type { Metadata } from "next";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "SIP Calculator 2025 — Calculate Mutual Fund SIP Returns",
  description:
    "Use our free SIP calculator to estimate your mutual fund returns. Enter monthly investment, rate of return, and tenure to see your maturity amount with a growth chart.",
  keywords: ["SIP calculator", "SIP calculator India", "mutual fund SIP returns", "systematic investment plan calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/sip-calculator" },
  openGraph: {
    title: "SIP Calculator — Calculate Mutual Fund Returns | RupeeMath",
    description: "Free SIP calculator for Indian investors. Get instant maturity estimates with charts.",
    url: "https://www.rupeemath.co.in/sip-calculator",
  },
};

const faqs = [
  {
    question: "What is the ideal SIP amount for a beginner?",
    answer:
      "There is no fixed ideal amount — even ₹500/month is a valid start. A common guideline is to invest at least 10–20% of your monthly income via SIP. The key is consistency: starting early with a small amount beats starting late with a large one, thanks to the power of compounding.",
  },
  {
    question: "What happens if I miss a SIP instalment?",
    answer:
      "Missing one or two SIP instalments does not cancel your SIP. The AMC will retry the debit; if it fails, that month's unit purchase is simply skipped. However, frequent failures (typically 3 consecutive months) may lead to the SIP being deactivated by the fund house.",
  },
  {
    question: "Is SIP better than lump sum investment?",
    answer:
      "For most retail investors, SIP is better because it averages out the cost of purchase (rupee cost averaging) and removes the need to time the market. Lump sum can outperform SIP if invested at a market low, but predicting the bottom is nearly impossible. SIP is lower risk and more disciplined.",
  },
  {
    question: "Can I increase my SIP amount over time?",
    answer:
      "Yes — this is called a Step-Up SIP or Top-Up SIP. You can increase your SIP amount annually (say by 10% each year) to match salary increments. Step-up SIPs are significantly more powerful than flat SIPs over 10–20 year horizons and are offered by most AMCs.",
  },
  {
    question: "How is SIP return different from fixed deposit return?",
    answer:
      "FD returns are fixed and guaranteed (6–7.5% per year currently), making them low-risk but low-reward. SIP returns are market-linked and variable — equity mutual funds have historically delivered 12–15% CAGR over 10+ years, but this is not guaranteed. SIP is suited for long-term wealth creation; FD is suited for capital preservation.",
  },
];

export default function SIPCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "SIP Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SIP Calculator — Estimate Mutual Fund Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Plan your wealth with monthly SIP investments. See how small, regular contributions grow
        into a large corpus over time.
      </p>
      <SIPCalculator />
      <PDFDownload title="SIP Calculator Report" />
      <AffiliateCTA
        heading="Ready to Start Your SIP?"
        subtext="Compare top mutual funds and start investing in minutes."
        ctaLabel="Explore Mutual Funds →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a SIP?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A Systematic Investment Plan (SIP) is a method of investing a fixed amount in a mutual
            fund at regular intervals — typically monthly. Instead of investing a lump sum, you invest
            small amounts consistently over time. SIP leverages the power of <strong>rupee cost
            averaging</strong>: you buy more units when the market is low and fewer when it is high,
            lowering your average cost per unit over time. Combined with <strong>compound interest</strong>,
            even modest monthly investments can grow into substantial wealth over 10–20 years. SIPs
            are available for equity, debt, hybrid, and index mutual funds — making them suitable for
            every type of investor and financial goal.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath SIP Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Monthly Investment:</strong> Enter the amount you plan to invest each month (e.g., ₹5,000). Use the slider or type directly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Expected Return Rate:</strong> Enter the annual return you expect from the mutual fund (e.g., 12% for equity funds). This is an estimate — actual returns vary.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Tenure:</strong> Select the number of years you plan to invest (e.g., 10 years). Longer tenure = more compounding = higher returns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Read the results:</strong> The calculator instantly shows your Maturity Amount, Total Invested, and Wealth Gained — along with a year-by-year growth chart.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Experiment:</strong> Try different amounts and tenures to set your savings goals. Even increasing your SIP by ₹500/month can add lakhs to your final corpus.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">SIP Formula Explained</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The SIP maturity amount is calculated using the future value of an annuity formula:
          </p>
          <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800">
            M = P × [(1 + r)ⁿ – 1] / r × (1 + r)
          </div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><strong>M</strong> — Maturity amount (total corpus at the end)</li>
            <li><strong>P</strong> — Monthly SIP amount (e.g., ₹5,000)</li>
            <li><strong>r</strong> — Monthly interest rate = Annual rate ÷ 12 ÷ 100 (e.g., 12% → 0.01)</li>
            <li><strong>n</strong> — Total number of months (e.g., 10 years → 120 months)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Example: ₹5,000/month at 12% for 10 years → Maturity ≈ ₹11.6 lakh on an investment of ₹6 lakh. The remaining ₹5.6 lakh is pure compound growth.
          </p>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
