import type { Metadata } from "next";
import { FDCalculator } from "@/components/calculators/FDCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "FD Calculator 2026 — Fixed Deposit Maturity Calculator India",
  description:
    "Calculate fixed deposit maturity amount instantly. Free FD calculator for all Indian banks — SBI, HDFC, ICICI. Enter amount, rate, tenure — get results in seconds.",
  keywords: ["FD calculator", "fixed deposit calculator", "FD interest calculator India", "FD maturity amount"],
  alternates: { canonical: "https://www.rupeemath.co.in/fd-calculator" },
  openGraph: {
    title: "FD Calculator — Fixed Deposit Returns | RupeeMath",
    description: "Free FD calculator for Indian banks. Calculate maturity amount for any compounding frequency.",
    url: "https://www.rupeemath.co.in/fd-calculator",
  },
};

const faqs = [
  {
    question: "What is the difference between cumulative and non-cumulative FD?",
    answer:
      "In a cumulative FD, the interest is compounded and paid along with the principal at maturity — ideal for wealth accumulation. In a non-cumulative FD, the interest is paid out periodically (monthly, quarterly, half-yearly, or annually) to your bank account — ideal for retirees or those needing regular income. Cumulative FDs earn more due to compounding.",
  },
  {
    question: "Is FD a good investment in 2025?",
    answer:
      "FDs are a safe, guaranteed-return investment suitable for capital preservation and short-to-medium term goals. With rates around 7–8.5% in 2025, they offer better returns than savings accounts. However, after accounting for income tax on interest, the real post-tax return can be lower than inflation for high-income investors. FDs are best used as part of a balanced portfolio alongside equity investments.",
  },
  {
    question: "Do senior citizens get higher FD rates?",
    answer:
      "Yes. Almost all Indian banks offer senior citizens (aged 60 and above) an additional 0.25% to 0.75% interest rate over the regular rate on Fixed Deposits. This benefit applies to all tenures. Senior citizens also get a higher TDS exemption threshold of ₹50,000/year (vs ₹40,000 for others).",
  },
  {
    question: "What is a tax-saving FD?",
    answer:
      "A tax-saving FD is a 5-year Fixed Deposit that qualifies for deduction under Section 80C of the Income Tax Act, up to ₹1.5 lakh per year. It has a mandatory lock-in of 5 years — premature withdrawal is not allowed. The interest earned is still taxable. It is offered by most public and private sector banks at regular FD interest rates.",
  },
  {
    question: "How does compounding frequency affect FD returns?",
    answer:
      "Higher compounding frequency means more interest on interest, resulting in a higher maturity amount. For the same principal, rate, and tenure: monthly compounding > quarterly > half-yearly > annual. The difference is small for short tenures but noticeable over 5–10 years. Most Indian banks compound FD interest quarterly.",
  },
];

export default function FDCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "FD Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        FD Calculator — Calculate Fixed Deposit Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Find out exactly how much your Fixed Deposit will grow. Supports all compounding
        frequencies — monthly, quarterly, half-yearly, and annually.
      </p>
      <FDCalculator />
      <PDFDownload title="FD Calculator Report" />
      <AffiliateCTA
        heading="Get the Best FD Rates"
        subtext="Compare Fixed Deposit rates from top Indian banks and small finance banks."
        ctaLabel="Compare FD Rates →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a Fixed Deposit (FD)?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A <strong>Fixed Deposit (FD)</strong> is one of India&apos;s most popular savings instruments,
            offered by banks and NBFCs. You deposit a lump sum amount for a fixed tenure at a
            predetermined interest rate. Unlike savings accounts, the interest rate on an FD is locked
            in at the time of opening — your returns are guaranteed regardless of market fluctuations.
            FD tenures in India range from 7 days to 10 years, with interest rates varying by bank,
            tenure, and investor type (regular vs senior citizen). Bank FDs are insured by DICGC up to
            <strong> ₹5 lakh per depositor per bank</strong>, making them one of the safest investment
            options available to Indian investors.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath FD Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Principal Amount:</strong> Enter the amount you want to deposit (e.g., ₹1,00,000).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Interest Rate:</strong> Enter the annual interest rate offered by your bank (e.g., 7.5%). Check the bank&apos;s website for the latest rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Tenure:</strong> Enter the FD duration in years (e.g., 5 years).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Compounding Frequency:</strong> Select how often interest is compounded — monthly, quarterly (most common), half-yearly, or annually.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>View results:</strong> Instantly see Maturity Amount, Total Interest Earned, and Effective Annual Rate. The chart shows year-by-year growth of your deposit.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">FD Compounding Frequencies Compared</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The FD maturity formula is: <span className="font-mono font-semibold">A = P × (1 + r/n)^(n×t)</span>, where r is the annual rate, n is the compounding frequency, and t is tenure in years.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 text-left font-semibold text-gray-700">Frequency</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Compounds/year</th>
                  <th className="py-2 text-left font-semibold text-gray-700">₹1L at 7.5% for 5 yrs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Annually</td><td className="py-2">1</td><td className="py-2">₹1,43,563</td></tr>
                <tr><td className="py-2">Half-yearly</td><td className="py-2">2</td><td className="py-2">₹1,44,141</td></tr>
                <tr><td className="py-2">Quarterly</td><td className="py-2">4</td><td className="py-2">₹1,44,438</td></tr>
                <tr><td className="py-2">Monthly</td><td className="py-2">12</td><td className="py-2">₹1,44,636</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">Example figures for illustration. Actual returns depend on the bank&apos;s offered rate.</p>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
