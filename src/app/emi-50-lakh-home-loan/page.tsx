import type { Metadata } from "next";
import Link from "next/link";
import { EMICalculator } from "@/components/calculators/EMICalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "EMI for 50 Lakh Home Loan — Monthly Payment Calculator 2026",
  description:
    "Calculate EMI for ₹50 lakh home loan. See monthly payment at all interest rates and tenures. Free EMI calculator — no signup needed.",
  keywords: [
    "emi for 50 lakh home loan",
    "50 lakh home loan emi",
    "50 lakh home loan monthly payment",
    "home loan emi 50 lakhs",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/emi-50-lakh-home-loan" },
  openGraph: {
    title: "EMI for 50 Lakh Home Loan — Monthly Payment Calculator 2026 | RupeeMath",
    description: "Free calculator: see exact monthly EMI for a ₹50 lakh home loan at any rate and tenure.",
    url: "https://www.rupeemath.co.in/emi-50-lakh-home-loan",
  },
};

const emiTable = [
  { rate: "8.00%", y10: "₹60,667", y15: "₹47,783", y20: "₹41,822", y25: "₹38,572", y30: "₹36,688" },
  { rate: "8.50%", y10: "₹61,848", y15: "₹49,236", y20: "₹43,391", y25: "₹40,184", y30: "₹38,446" },
  { rate: "9.00%", y10: "₹63,103", y15: "₹50,713", y20: "₹44,986", y25: "₹41,799", y30: "₹40,230" },
  { rate: "9.50%", y10: "₹64,335", y15: "₹52,262", y20: "₹46,607", y25: "₹43,556", y30: "₹42,031" },
  { rate: "10.0%", y10: "₹66,075", y15: "₹53,730", y20: "₹48,251", y25: "₹45,435", y30: "₹43,923" },
];

const faqs = [
  {
    question: "What is the EMI for a ₹50 lakh home loan?",
    answer:
      "The EMI for a ₹50 lakh home loan depends on your interest rate and tenure. At 8.5% for 20 years, the EMI is approximately ₹43,391 per month. At the same rate for 15 years, the EMI rises to ₹49,236 but you save approximately ₹26–27 lakh in total interest. For a 30-year tenure at 8.5%, the EMI drops to ₹38,446 but total interest outgo exceeds ₹88 lakh — more than 1.76× the original loan. Use the calculator above to see the exact EMI at your bank's current rate.",
  },
  {
    question: "What salary is needed for a ₹50 lakh home loan?",
    answer:
      "Most banks use the 50% FOIR rule. For a ₹50 lakh loan at 8.5% for 20 years (EMI: ₹43,391), you need a net monthly salary of approximately ₹86,782 with no existing EMIs at 50% FOIR, or ₹1,08,478 at 40% FOIR. In practical terms, most banks require a household income of ₹80,000–₹1 lakh/month for a ₹50 lakh home loan. Adding a co-applicant (earning spouse or parent) is the most effective way to meet the income requirement if your individual salary falls short.",
  },
  {
    question: "Can I get a ₹50 lakh home loan on a ₹60,000 salary?",
    answer:
      "At ₹60,000 salary with no existing EMIs, your maximum EMI capacity is ₹30,000 (50% FOIR). At 8.5% for 20 years, this EMI capacity supports a loan of approximately ₹34–35 lakh — not ₹50 lakh. To qualify for a ₹50 lakh loan individually, you would need a salary of approximately ₹87,000+ or choose a 30-year tenure (EMI ₹38,446 → requires ~₹77,000 salary). Adding a co-applicant with ₹25,000–₹30,000 income can bridge the gap and make the ₹50 lakh loan achievable.",
  },
  {
    question: "Which bank offers the best rate for a ₹50 lakh home loan?",
    answer:
      "For a ₹50 lakh home loan, all major banks — SBI, HDFC, ICICI, Axis, Bank of Baroda — compete aggressively on rates. As of 2026, rates start from 8.25–8.5% for salaried borrowers with CIBIL scores above 750. PSU banks like SBI and Bank of Baroda typically have the lowest processing fees (0.25–0.35%), while private banks like HDFC and ICICI offer faster sanction timelines. Even a 0.25% rate difference on a ₹50 lakh, 20-year loan saves approximately ₹1.5–2 lakh in total interest — making it worth comparing at least 3 lenders before applying.",
  },
  {
    question: "How can I reduce the EMI on my ₹50 lakh home loan?",
    answer:
      "Key strategies to reduce your EMI: (1) Negotiate a lower rate — a 0.5% reduction on ₹50 lakh saves ₹1,600+/month. (2) Make a lump-sum prepayment in the early years — prepaying ₹3–5 lakh in the first 3 years saves ₹10–15 lakh in total interest. (3) Do a balance transfer if rates drop 0.5%+ — potential savings of ₹3–5 lakh over the remaining tenure. (4) Switch to a Step-Up EMI plan if you expect income growth — start with lower EMIs and increase annually as your salary rises. (5) Maintain a CIBIL score above 750 to negotiate the best possible rate from the outset.",
  },
];

export default function EMI50LakhPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "EMI for 50 Lakh Home Loan" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        EMI for ₹50 Lakh Home Loan — Monthly Payment Calculator 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your exact monthly payment on a ₹50 lakh home loan. Adjust the interest rate
        and tenure to compare total interest across different scenarios.
      </p>

      <EMICalculator defaultLoan={5000000} />
      <PDFDownload title="50 Lakh Home Loan EMI Report" />

      {/* EMI comparison table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">EMI for ₹50 Lakh Home Loan by Rate &amp; Tenure</h2>
        <p className="mb-4 text-sm text-gray-500">Monthly EMI at different interest rates and loan tenures</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Rate</th>
                <th className="px-4 py-3 text-right font-semibold">10 Years</th>
                <th className="px-4 py-3 text-right font-semibold">15 Years</th>
                <th className="px-4 py-3 text-right font-semibold">20 Years</th>
                <th className="px-4 py-3 text-right font-semibold">25 Years</th>
                <th className="px-4 py-3 text-right font-semibold">30 Years</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {emiTable.map((row, i) => (
                <tr key={row.rate} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-primary">{row.rate}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y10}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y15}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-800">{row.y20}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y25}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y30}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Loan amount: ₹50,00,000. EMI figures are approximate. Actual EMI may vary slightly by bank.
        </p>
      </div>

      <AffiliateCTA
        heading="Compare Home Loan Rates from 20+ Banks"
        subtext="Find the lowest rate for your ₹50 lakh home loan without affecting your CIBIL score."
        ctaLabel="Compare Home Loan Rates →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Salary Needed for a ₹50 Lakh Home Loan</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Indian banks allow total monthly EMIs up to 40–50% of your net take-home salary (FOIR rule).
            Here is the minimum salary required to qualify for a ₹50 lakh loan at 8.5%, with no existing EMIs:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gray-50">
                <tr className="border-b border-border">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Tenure</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-primary">EMI at 8.5%</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Min Salary (40% FOIR)</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Min Salary (50% FOIR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["10 years", "₹61,848", "₹1,54,620", "₹1,23,696"],
                  ["15 years", "₹49,236", "₹1,23,090", "₹98,472"],
                  ["20 years", "₹43,391", "₹1,08,478", "₹86,782"],
                  ["25 years", "₹40,184", "₹1,00,460", "₹80,368"],
                  ["30 years", "₹38,446", "₹96,115", "₹76,892"],
                ].map(([tenure, emi, s40, s50]) => (
                  <tr key={tenure} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium">{tenure}</td>
                    <td className="px-4 py-2.5 font-bold text-primary">{emi}</td>
                    <td className="px-4 py-2.5">{s40}</td>
                    <td className="px-4 py-2.5">{s50}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">Minimum salary needed with zero existing EMIs. With existing EMIs, add the EMI amount to the figures above.</p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Total Interest Paid on ₹50 Lakh Home Loan</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The rate and tenure choice has a major impact on total interest outgo. At 8.5% for 20 years,
            total interest paid is approximately ₹54.1 lakh — more than the loan itself. Choosing a
            15-year tenure over 20 years at the same 8.5% saves approximately ₹26.8 lakh in interest.
            Choosing 10 years instead of 20 years saves over ₹40 lakh in interest.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "8% · 20 yrs", emi: "₹41,822/mo", total: "₹1,00.4L", interest: "₹50.4L" },
              { label: "8.5% · 20 yrs", emi: "₹43,391/mo", total: "₹1,04.1L", interest: "₹54.1L" },
              { label: "9% · 20 yrs", emi: "₹44,986/mo", total: "₹1,08.0L", interest: "₹58.0L" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-white p-4">
                <p className="text-xs font-black uppercase tracking-widest text-primary">{s.label}</p>
                <p className="mt-1 text-lg font-bold text-gray-900">{s.emi}</p>
                <p className="text-xs text-gray-500">Total paid: {s.total}</p>
                <p className="text-xs text-gray-400">Interest: {s.interest}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Tips to Reduce Your ₹50 Lakh Home Loan EMI</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { tip: "Negotiate the interest rate aggressively", detail: "A 0.5% reduction on a ₹50 lakh loan saves approximately ₹1,600/month and over ₹3.8 lakh in total interest over 20 years. A CIBIL score above 800 is your strongest negotiating lever." },
              { tip: "Make annual prepayments", detail: "Prepaying ₹1 lakh annually in the first 5 years of a ₹50 lakh, 8.5%, 20-year loan can save ₹12–15 lakh in total interest and reduce tenure by 4–5 years." },
              { tip: "Consider a step-up EMI plan", detail: "If you expect salary increases, a step-up plan lets you start with a lower EMI (say ₹35,000) and increase it by 5–10% annually — making the loan more affordable early in your career." },
              { tip: "Do a balance transfer at the right time", detail: "If rates drop 0.75% or more after 2–3 years, switching to a lower-rate lender on a ₹50 lakh outstanding saves ₹3–5 lakh. Factor in the processing fee and legal costs (~₹25,000–₹40,000) before deciding." },
            ].map((item) => (
              <li key={item.tip} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong>{item.tip}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Best Banks for ₹50 Lakh Home Loan in 2026</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A ₹50 lakh home loan is a mid-range loan where you get the most competitive rates from all
            major lenders. <strong>SBI&apos;s Regular and Maxgain Home Loan</strong> are popular choices —
            the Maxgain variant is an overdraft facility that lets you park surplus funds to reduce interest.
            <strong> HDFC Bank and ICICI Bank</strong> offer quick digital processing and pre-approved
            offers for existing customers. <strong>Axis Bank&apos;s Shubh Aarambh</strong> offers the first
            few EMIs waived off. For ₹50 lakh loans, always compare the spread above RBI repo rate rather
            than just the headline rate — a bank offering 8.5% today may reset to 9.5% in 6 months
            if the spread is high. Always read the loan agreement&apos;s rate reset clause carefully.
          </p>
        </section>
      </div>

      {/* Other loan amount links */}
      <section className="mt-10 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-base font-bold text-gray-900">Other Home Loan EMI Calculators</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/emi-20-lakh-home-loan"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            EMI for ₹20 lakh home loan <span>→</span>
          </Link>
          <Link
            href="/emi-30-lakh-home-loan"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            EMI for ₹30 lakh home loan <span>→</span>
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} />
    </div>
  );
}
