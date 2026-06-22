import type { Metadata } from "next";
import { PPFCalculator } from "@/components/calculators/PPFCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "PPF Calculator 2026 — Public Provident Fund Maturity Calculator",
  description: "Calculate your PPF maturity amount, interest earned, and year-by-year growth. Enter yearly investment, PPF interest rate, and tenure to see guaranteed tax-free returns.",
  keywords: ["ppf calculator india 2026", "ppf maturity calculator", "public provident fund calculator", "ppf interest rate 2025"],
  alternates: { canonical: "https://www.rupeemath.co.in/ppf-calculator" },
};

const faqs = [
  { question: "What is the current PPF interest rate in 2025-26?", answer: "The PPF interest rate is reviewed every quarter by the Government of India. As of Q1 FY 2025-26, the rate is 7.1% per annum, compounded annually. This rate has been stable at 7.1% since April 2020. The rate is announced quarterly and is uniform across all banks and post offices." },
  { question: "What is the minimum and maximum investment in PPF?", answer: "You must invest a minimum of ₹500 per year to keep your PPF account active. The maximum annual investment allowed is ₹1,50,000 (₹1.5 lakh). You can make deposits in a lump sum or in up to 12 instalments per year. Investments above ₹1.5 lakh do not earn interest and are refunded without interest." },
  { question: "Is PPF interest taxable in India?", answer: "No — PPF interest is completely tax-free under Section 10(11) of the Income Tax Act. Moreover, the investment qualifies for deduction under Section 80C (up to ₹1.5 lakh). The maturity amount is also fully tax-exempt. This makes PPF an EEE (Exempt-Exempt-Exempt) instrument — one of the best tax-free investments available in India." },
  { question: "Can I extend my PPF account after 15 years?", answer: "Yes. After the initial 15-year maturity, you can extend your PPF account in blocks of 5 years indefinitely. You can extend with or without contributions. If you extend with contributions, you continue earning interest on both the old balance and new deposits. If you extend without contributions, you earn interest only on the existing balance and can make one partial withdrawal per year." },
  { question: "What are the premature withdrawal rules for PPF?", answer: "PPF has a 15-year lock-in period, but partial withdrawals are allowed from the 7th year onwards. From year 7, you can withdraw up to 50% of the balance at the end of the 4th year or the immediately preceding year, whichever is lower. Full premature closure is allowed only in specific cases like life-threatening illness, higher education, or NRI status change, and is permitted after 5 years." },
];

export default function PPFPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "PPF Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        PPF Calculator — Public Provident Fund Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your PPF maturity amount with year-by-year growth. Government-backed, 100% tax-free returns.
      </p>
      <PPFCalculator />
      <PDFDownload title="PPF Calculator Report" />
      <AffiliateCTA
        heading="Open a PPF Account Online"
        subtext="Start a PPF account with SBI, HDFC, or Post Office with zero documentation."
        ctaLabel="Open PPF Account →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is PPF (Public Provident Fund)?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>PPF (Public Provident Fund)</strong> is a long-term, government-backed savings scheme in India that offers guaranteed, tax-free returns. Introduced in 1968, PPF is one of the safest investment instruments — backed by the sovereign guarantee of the Government of India. The scheme has a <strong>15-year lock-in period</strong>, extendable in 5-year blocks. Interest is compounded annually and credited at the end of each financial year. With an EEE (Exempt-Exempt-Exempt) tax status, PPF is unmatched for long-term wealth creation for conservative investors — both investment, interest, and maturity are completely tax-free. Accounts can be opened at any nationalized bank or post office.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the PPF Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Yearly Investment:</strong> Enter how much you plan to deposit each year (₹500 – ₹1,50,000).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Interest Rate:</strong> The default is 7.1% (current rate). Adjust if you want to model a rate change scenario.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Tenure:</strong> Select 15 years (minimum) or extend in 5-year blocks up to 50 years.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>View Results:</strong> See total maturity amount, interest earned, and year-by-year breakdown table.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">PPF vs Other Tax-Saving Instruments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead><tr className="border-b border-border"><th className="py-2 text-left font-semibold text-gray-700">Feature</th><th className="py-2 text-center font-semibold text-gray-700">PPF</th><th className="py-2 text-center font-semibold text-gray-700">ELSS</th><th className="py-2 text-center font-semibold text-gray-700">Tax FD</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Returns</td><td className="py-2 text-center">7.1% fixed</td><td className="py-2 text-center">12–15% (variable)</td><td className="py-2 text-center">7–8.5% fixed</td></tr>
                <tr><td className="py-2">Risk</td><td className="py-2 text-center">Zero</td><td className="py-2 text-center">Market risk</td><td className="py-2 text-center">Zero</td></tr>
                <tr><td className="py-2">Lock-in</td><td className="py-2 text-center">15 years</td><td className="py-2 text-center">3 years</td><td className="py-2 text-center">5 years</td></tr>
                <tr><td className="py-2">Tax on returns</td><td className="py-2 text-center">Tax-free</td><td className="py-2 text-center">10% LTCG</td><td className="py-2 text-center">Taxable</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="mt-6 space-y-6">
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">PPF Formula and Calculation Method</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            PPF interest is compounded annually and credited to your account at the end of each financial year (March 31). The key rules that affect the calculation:
          </p>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">PPF Maturity Formula</p>
              <p className="font-mono text-sm text-primary mb-2">M = P × [((1+r)^n − 1) ÷ r] × (1+r)</p>
              <p className="text-xs text-gray-600">Where: M = Maturity amount, P = Annual investment, r = Annual interest rate (e.g. 0.071 for 7.1%), n = Number of years</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">Monthly to Annual Deposits</p>
              <p className="text-xs text-gray-600">If you invest monthly, deposits made between April 1–5 earn interest for the full month. Deposits made after the 5th of any month earn interest only from the following month. <strong>Always invest before the 5th</strong> to maximise interest for that month.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">Example Calculation (₹1,50,000/year · 7.1% · 15 years)</p>
              <p className="text-xs text-gray-600">Total invested: ₹22,50,000 · Maturity amount: ₹40,68,209 · Interest earned: ₹18,18,209 (fully tax-free)</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            The maximum benefit: invest ₹1,50,000 on April 5 every year (not monthly) to earn interest on the full ₹1.5 lakh for all 12 months of the year.
          </p>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
