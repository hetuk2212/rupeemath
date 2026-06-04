import type { Metadata } from "next";
import Link from "next/link";
import { EMICalculator } from "@/components/calculators/EMICalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "EMI for 20 Lakh Home Loan — Calculate Monthly Payment 2026",
  description:
    "Calculate EMI for ₹20 lakh home loan. See monthly payment at all interest rates. Free EMI calculator — no signup needed.",
  keywords: [
    "emi for 20 lakh home loan",
    "20 lakh home loan emi",
    "20 lakh home loan monthly payment",
    "home loan emi 20 lakhs",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/emi-20-lakh-home-loan" },
  openGraph: {
    title: "EMI for 20 Lakh Home Loan — Monthly Payment Calculator 2026 | RupeeMath",
    description: "Free calculator: see exact monthly EMI for a ₹20 lakh home loan at any rate and tenure.",
    url: "https://www.rupeemath.co.in/emi-20-lakh-home-loan",
  },
};

const emiTable = [
  { rate: "8.00%", y10: "₹24,267", y15: "₹19,113", y20: "₹16,729", y25: "₹15,429", y30: "₹14,675" },
  { rate: "8.50%", y10: "₹24,739", y15: "₹19,611", y20: "₹17,357", y25: "₹16,027", y30: "₹15,381" },
  { rate: "9.00%", y10: "₹25,241", y15: "₹20,280", y20: "₹17,995", y25: "₹16,769", y30: "₹16,092" },
  { rate: "9.50%", y10: "₹25,734", y15: "₹20,905", y20: "₹18,643", y25: "₹17,423", y30: "₹16,813" },
  { rate: "10.0%", y10: "₹26,430", y15: "₹21,492", y20: "₹19,300", y25: "₹18,179", y30: "₹17,539" },
];

const faqs = [
  {
    question: "What is the EMI for a ₹20 lakh home loan?",
    answer:
      "The EMI depends on your interest rate and loan tenure. At 8.5% for 20 years, the EMI for a ₹20 lakh home loan is approximately ₹17,357 per month. For a shorter 10-year tenure at 8.5%, the EMI rises to ₹24,739 but you pay significantly less total interest. Use the calculator above to get the exact EMI at your bank's current rate.",
  },
  {
    question: "What salary is needed to qualify for a ₹20 lakh home loan?",
    answer:
      "Most banks apply a 40–50% FOIR rule. For a ₹20 lakh loan at 8.5% for 20 years (EMI: ₹17,357), you need a net monthly salary of approximately ₹35,000–₹43,000 with no existing EMIs. At 50% FOIR, ₹35,000 salary gives you ₹17,500 available for EMI — just enough. If you have existing loan EMIs, your required income is proportionally higher. Adding a co-applicant is a good way to meet the income requirement.",
  },
  {
    question: "Which bank offers the lowest rate for a ₹20 lakh home loan?",
    answer:
      "Home loan rates change frequently. As of 2026, SBI, Bank of Baroda, and Canara Bank typically offer the most competitive starting rates (8.25–8.5%) for salaried borrowers with a CIBIL score above 750. Private banks like HDFC, ICICI, and Kotak offer similar rates with faster approval processes. For a ₹20 lakh home loan, even a 0.25% rate difference saves approximately ₹60,000–₹80,000 over a 20-year tenure — so comparing at least 3 lenders is worth the effort.",
  },
  {
    question: "Can I prepay a ₹20 lakh home loan to save interest?",
    answer:
      "Yes — prepayment is highly effective on smaller loans too. If you prepay ₹1 lakh in year 3 of a ₹20 lakh, 8.5%, 20-year loan, you save approximately ₹2.5–3 lakh in total interest and reduce tenure by 1.5–2 years. RBI mandates that floating rate home loans carry no prepayment penalty. Even small annual lump-sum payments of ₹25,000–₹50,000 have a significant cumulative effect over time.",
  },
  {
    question: "How can I reduce my ₹20 lakh home loan EMI?",
    answer:
      "Several strategies reduce your EMI: (1) Choose a longer tenure — extending from 15 to 20 years reduces the EMI from ₹19,611 to ₹17,357 at 8.5%. (2) Negotiate a lower rate — a 0.5% reduction saves approximately ₹600/month. (3) Make a larger down payment to reduce the principal. (4) Do a balance transfer to a lower-rate lender if you are already mid-loan. (5) Make periodic prepayments to reduce the outstanding principal, which lowers the interest component of each subsequent EMI.",
  },
];

export default function EMI20LakhPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "EMI for 20 Lakh Home Loan" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        EMI for ₹20 Lakh Home Loan — Monthly Payment Calculator 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your exact monthly payment on a ₹20 lakh home loan. Adjust the interest rate
        and tenure to compare total interest across different scenarios.
      </p>

      <EMICalculator defaultLoan={2000000} />
      <PDFDownload title="20 Lakh Home Loan EMI Report" />

      {/* EMI comparison table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">EMI for ₹20 Lakh Home Loan by Rate &amp; Tenure</h2>
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
          Loan amount: ₹20,00,000. EMI figures are approximate. Actual EMI may vary slightly by bank.
        </p>
      </div>

      <AffiliateCTA
        heading="Compare Home Loan Rates from 20+ Banks"
        subtext="Find the lowest rate for your ₹20 lakh home loan without affecting your CIBIL score."
        ctaLabel="Compare Home Loan Rates →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Salary Needed for a ₹20 Lakh Home Loan</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Indian banks use the FOIR (Fixed Obligation to Income Ratio) method — typically allowing
            total monthly EMIs up to 40–50% of your net take-home salary. Here is the minimum salary
            required to qualify for a ₹20 lakh loan at 8.5%, with no existing EMIs:
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
                  ["10 years", "₹24,739", "₹61,850", "₹49,480"],
                  ["15 years", "₹19,611", "₹49,030", "₹39,222"],
                  ["20 years", "₹17,357", "₹43,393", "₹34,714"],
                  ["25 years", "₹16,027", "₹40,068", "₹32,054"],
                  ["30 years", "₹15,381", "₹38,453", "₹30,762"],
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
          <p className="mt-2 text-xs text-gray-400">Minimum salary needed with zero existing EMIs. With existing EMIs, add EMI amount to the figures above.</p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Total Interest Paid at Different Rates</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The rate and tenure you choose dramatically affect total interest outgo on a ₹20 lakh
            loan. At 8.5% for 20 years, total interest is approximately ₹21.6 lakh — more than the
            original loan. Choosing a 15-year tenure instead of 20 years at the same 8.5% saves
            approximately ₹10.7 lakh in interest — a significant difference for a ₹20 lakh loan.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "8% · 20 yrs", emi: "₹16,729/mo", total: "₹40.1L", interest: "₹20.1L" },
              { label: "8.5% · 20 yrs", emi: "₹17,357/mo", total: "₹41.7L", interest: "₹21.7L" },
              { label: "9% · 20 yrs", emi: "₹17,995/mo", total: "₹43.2L", interest: "₹23.2L" },
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
          <h2 className="mb-3 text-xl font-bold text-gray-900">Tips to Reduce Your ₹20 Lakh Loan EMI</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { tip: "Negotiate a lower interest rate", detail: "Even 0.25% reduction saves ₹700–₹800/month over 20 years on a ₹20 lakh loan. A CIBIL score above 750 is your best negotiating tool." },
              { tip: "Make annual prepayments", detail: "An extra ₹25,000 annually towards principal in the first 5 years can reduce your total interest by ₹2–3 lakh and cut 2 years off your tenure." },
              { tip: "Switch via balance transfer", detail: "If rates have dropped or a competitor offers 0.5%+ lower, a balance transfer on a ₹20 lakh outstanding saves approximately ₹1.2–1.5 lakh over the remaining tenure." },
              { tip: "Choose the right tenure", detail: "A 20-year tenure at 8.5% gives EMI of ₹17,357 vs ₹24,739 for 10 years — but costs ₹10+ lakh more in total interest. Pick the shortest tenure your budget can support." },
            ].map((item) => (
              <li key={item.tip} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong>{item.tip}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Best Banks for ₹20 Lakh Home Loan in 2026</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            For a ₹20 lakh home loan, PSU banks generally offer the most competitive rates.
            <strong> SBI&apos;s Regular Home Loan</strong> is a popular choice for salaried borrowers,
            with processing fees as low as 0.35% and no prepayment penalty on floating rate loans.
            <strong> Bank of Baroda</strong> and <strong>Canara Bank</strong> also offer competitive
            rates with quick digital processing. Among private banks, <strong>HDFC Bank</strong> and
            <strong> ICICI Bank</strong> stand out for their faster sanction times and strong digital
            application platforms. <strong>LIC Housing Finance</strong> is an excellent choice for
            self-employed borrowers or those in smaller cities, with more flexible income assessment.
            Always compare the total cost of borrowing — including processing fees, legal charges,
            and valuation fees — not just the headline interest rate.
          </p>
        </section>
      </div>

      {/* Other loan amount links */}
      <section className="mt-10 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-base font-bold text-gray-900">Other Home Loan EMI Calculators</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/emi-30-lakh-home-loan"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            EMI for ₹30 lakh home loan <span>→</span>
          </Link>
          <Link
            href="/emi-50-lakh-home-loan"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            EMI for ₹50 lakh home loan <span>→</span>
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} />
    </div>
  );
}
