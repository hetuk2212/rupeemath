import type { Metadata } from "next";
import { RDCalculator } from "@/components/calculators/RDCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "RD Calculator India 2025 — Recurring Deposit Maturity",
  description: "Calculate your Recurring Deposit maturity amount. Enter monthly deposit, interest rate, and tenure to see RD returns with quarterly compounding breakdown.",
  keywords: ["rd calculator india", "recurring deposit calculator", "rd maturity calculator", "rd interest calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/rd-calculator" },
};

const faqs = [
  { question: "How is RD interest calculated in India?", answer: "RD interest in India is calculated with quarterly compounding. Each monthly deposit is treated as a separate fixed deposit that matures at the end of the RD tenure. The interest for each deposit is calculated as: Principal × (1 + r/400)^(remaining_quarters). The total maturity is the sum of the matured value of all monthly deposits. This is why your actual RD maturity is slightly higher than simple interest calculations." },
  { question: "Is RD interest taxable?", answer: "Yes. RD interest is fully taxable as 'Income from Other Sources' at your applicable income tax slab rate. Banks deduct TDS at 10% when total interest from all RDs in a bank exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). If your total income is below the taxable limit, submit Form 15G (for general public) or Form 15H (for senior citizens) to avoid TDS." },
  { question: "What is the minimum RD tenure in India?", answer: "The minimum RD tenure is typically 6 months (some banks offer 3 months). The maximum is 10 years. Most banks offer RDs in multiples of 3 months. Post Office RDs have a fixed 5-year tenure. For short-term goals of 6 months to 2 years, RD is one of the best risk-free savings instruments available." },
  { question: "Can I break an RD before maturity?", answer: "Yes, RDs can be prematurely closed, but a penalty is charged — typically 1% on the applicable rate for the completed period. Some banks may not allow premature closure before a minimum period (e.g., 3–6 months). In case of emergency, you can also avail an overdraft or loan against your RD at a small spread over the RD rate, without breaking the RD." },
  { question: "Which is better — RD or SIP for monthly investments?", answer: "For risk-free, guaranteed returns, RD is better. For long-term wealth creation (10+ years), SIP in equity mutual funds is significantly better — historical CAGR of 12–15% vs RD's 6.5–7.5%. RD is ideal for short-term goals (less than 3 years) or emergency fund building. SIP is better for retirement, home purchase (5+ years away), or education planning. The right choice depends on your tenure and risk tolerance." },
];

export default function RDPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "RD Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        RD Calculator — Recurring Deposit Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your Recurring Deposit maturity with quarterly compounding. See exact interest earned on every rupee deposited.
      </p>
      <RDCalculator />
      <PDFDownload title="RD Calculator Report" />
      <AffiliateCTA
        heading="Open an RD with High Interest Rates"
        subtext="Compare RD rates from 50+ banks and start a Recurring Deposit online."
        ctaLabel="Compare RD Rates →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a Recurring Deposit (RD)?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A <strong>Recurring Deposit (RD)</strong> is a savings scheme offered by banks and post offices where you deposit a fixed amount every month for a predetermined tenure. At maturity, you receive the total deposited amount plus interest — making it ideal for disciplined monthly savings towards a short-term goal. Unlike an FD where you invest a lump sum, RD allows you to build savings gradually. The interest rate is fixed at the time of opening and doesn&apos;t change during the tenure. Banks compound RD interest on a quarterly basis in India, giving a slightly higher effective return than simple interest. RD is insured by DICGC up to ₹5 lakh per depositor per bank, making it one of the safest savings instruments.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RD Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Monthly Deposit:</strong> Enter the amount you will deposit every month into your RD.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Interest Rate:</strong> Enter the annual rate offered by your bank (check current rates on the bank website).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Tenure:</strong> Select the duration in months (6 to 120 months).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Result:</strong> See maturity amount, total deposited, interest earned, and quarterly growth chart. Download as PDF for your records.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">RD vs FD — Which is Better?</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">RD and FD serve different purposes. Choose based on whether you have a lump sum or monthly savings available.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Choose RD if…", points: ["You save monthly from salary", "No lump sum available", "Short-term goal (1–3 years)", "Building a habit of saving"], color: "border-primary bg-primary-50" },
              { title: "Choose FD if…", points: ["You have a lump sum to invest", "Seeking maximum interest", "Medium-term (3–10 years)", "Bonus, gift, or inheritance received"], color: "border-border bg-gray-50" },
            ].map((c) => (
              <div key={c.title} className={`rounded-xl border p-4 ${c.color}`}>
                <p className="mb-2 text-sm font-bold text-gray-800">{c.title}</p>
                <ul className="space-y-1">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-gray-600"><span className="text-primary">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
