import type { Metadata } from "next";
import { SWPCalculator } from "@/components/calculators/SWPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "SWP Calculator India — Systematic Withdrawal Plan",
  description: "Calculate your Systematic Withdrawal Plan returns. Enter investment, monthly withdrawal, return rate, and tenure to see how long your corpus lasts and what remains.",
  keywords: ["swp calculator india", "systematic withdrawal plan calculator", "swp mutual fund calculator", "retirement withdrawal calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/swp-calculator" },
};

const faqs = [
  { question: "What is a Systematic Withdrawal Plan (SWP)?", answer: "An SWP (Systematic Withdrawal Plan) is a facility in mutual funds that lets you redeem a fixed amount from your investment at regular intervals (monthly, quarterly, etc.). The remaining corpus stays invested and continues to earn returns. It is the reverse of SIP — instead of investing regularly, you withdraw regularly. SWP is popular for generating a regular post-retirement income from a corpus while keeping the remaining amount invested." },
  { question: "How much can I safely withdraw from my corpus?", answer: "The '4% rule' is a popular thumb rule — if you withdraw 4% of your corpus annually (about 0.33% monthly), your corpus should theoretically last 30 years, assuming 6–8% annual returns. For Indian markets with higher inflation, a more conservative rate might be 3–3.5% annually. Use this calculator to test your specific scenario — if the corpus goes to zero before your tenure, you need to reduce withdrawals or increase the initial investment." },
  { question: "Is SWP tax-efficient compared to bank FD income?", answer: "Yes. For equity mutual fund SWP (if the fund is held for more than 1 year), only the gains portion of each withdrawal is taxed as Long Term Capital Gains (LTCG) at 10% above ₹1 lakh/year. The principal portion is tax-free. FD interest is taxed at your full income tax slab rate. This makes SWP from equity funds significantly more tax-efficient for retired investors in the 20–30% slab." },
  { question: "What return rate should I use for SWP planning?", answer: "Use a conservative rate for retirement planning — 8–10% for a balanced debt-equity fund, 6–7% for a pure debt fund. For aggressive equity-heavy portfolios, 10–12% is reasonable for long periods. Never plan withdrawals based on recent high returns. Always test with a lower rate (2–3% less than expected) to build a safety margin in your plan." },
  { question: "Can I pause or stop SWP anytime?", answer: "Yes — SWP in mutual funds can be stopped, paused, or modified at any time. You can change the withdrawal amount or frequency. There is no penalty for stopping early. If you need to redeem the full corpus at any point, you can place a full redemption request. Note: for ELSS funds, the 3-year lock-in must be completed before SWP can be initiated." },
];

export default function SWPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "SWP Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SWP Calculator — Systematic Withdrawal Plan
      </h1>
      <p className="mb-8 text-gray-500">
        Plan your regular income from a mutual fund corpus. See how long your investment lasts and what remains after all withdrawals.
      </p>
      <SWPCalculator />
      <PDFDownload title="SWP Calculator Report" />
      <AffiliateCTA
        heading="Set Up Your SWP for Retirement Income"
        subtext="Start an SWP from top debt or hybrid funds to generate monthly income."
        ctaLabel="Explore SWP Funds →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is SWP and How Does It Work?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A <strong>Systematic Withdrawal Plan (SWP)</strong> allows you to withdraw a fixed amount from your mutual fund investment at regular intervals — typically monthly. Unlike selling your entire investment at once, SWP ensures you withdraw only what you need while the remaining corpus stays invested, potentially earning returns that offset the withdrawals. For example, a ₹50 lakh corpus in a fund returning 10% annually can sustain withdrawals of ₹45,000/month for over 20 years. SWP is widely used by <strong>retirees and near-retirees</strong> to generate steady monthly income. It is the most tax-efficient way to create a regular income stream from your accumulated wealth.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the SWP Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Total Investment:</strong> Enter your current corpus or planned investment amount.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Monthly Withdrawal:</strong> Enter how much you want to withdraw every month.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Expected Return:</strong> Enter the anticipated annual return of your fund (use conservative estimates for planning).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Tenure:</strong> Enter how many years you plan to withdraw.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">5.</span><span><strong>Result:</strong> See the remaining corpus, total withdrawn, and month-by-month table. If corpus goes to zero, reduce withdrawal or increase investment.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">SWP vs FD Interest — Post-Retirement Income</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "SWP from Equity Fund", points: ["Corpus stays invested, earns market returns", "Only gains are taxed (LTCG at 10%)", "Can beat inflation over time", "Flexible — change amount anytime"], color: "border-primary bg-primary-50" },
              { title: "FD Interest Income", points: ["Fixed guaranteed return", "Full interest taxed at income slab", "Does not beat inflation at high slabs", "No flexibility once booked"], color: "border-border bg-gray-50" },
            ].map((c) => (
              <div key={c.title} className={`rounded-xl border p-4 ${c.color}`}>
                <p className="mb-2 text-sm font-bold text-gray-800">{c.title}</p>
                <ul className="space-y-1">
                  {c.points.map((p) => (<li key={p} className="flex items-start gap-2 text-xs text-gray-600"><span className="text-primary">✓</span>{p}</li>))}
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
