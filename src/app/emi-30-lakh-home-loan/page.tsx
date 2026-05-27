import type { Metadata } from "next";
import { EMICalculator } from "@/components/calculators/EMICalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "EMI for 30 Lakh Home Loan — Monthly Payment Calculator 2026",
  description: "Calculate EMI for ₹30 lakh home loan instantly. See monthly payment at all interest rates and tenures. Free calculator — no signup needed.",
  keywords: ["emi for 30 lakh home loan", "30 lakh home loan emi", "30 lakh home loan monthly payment", "home loan emi 30 lakhs"],
  alternates: { canonical: "https://www.rupeemath.co.in/emi-30-lakh-home-loan" },
};

const emiTable = [
  { rate: "8.00%", y10: "₹36,400", y15: "₹28,669", y20: "₹25,093", y25: "₹23,143", y30: "₹22,013" },
  { rate: "8.50%", y10: "₹37,109", y15: "₹29,416", y20: "₹26,035", y25: "₹24,041", y30: "₹23,071" },
  { rate: "9.00%", y10: "₹37,861", y15: "₹30,420", y20: "₹26,992", y25: "₹25,154", y30: "₹24,138" },
  { rate: "9.50%", y10: "₹38,601", y15: "₹31,357", y20: "₹27,964", y25: "₹26,134", y30: "₹25,219" },
  { rate: "10.0%", y10: "₹39,645", y15: "₹32,238", y20: "₹28,950", y25: "₹27,269", y30: "₹26,309" },
];

const faqs = [
  {
    question: "What is EMI for 30 lakh home loan for 20 years?",
    answer: "At 8.5% interest rate, the EMI for a ₹30 lakh home loan for 20 years is approximately ₹26,035 per month. You will pay a total of ₹62.5 lakh over 20 years — ₹30 lakh principal plus ₹32.5 lakh as interest. At 8% rate for 20 years, the EMI drops to ₹25,093. Use the calculator above to get the exact EMI at your bank's current rate.",
  },
  {
    question: "Which bank gives the lowest interest rate for a ₹30 lakh loan in 2026?",
    answer: "Interest rates change frequently. As of 2026, major PSU banks like SBI, Bank of Baroda, and Union Bank typically offer competitive rates for home loans, often starting around 8.25–8.5% for salaried borrowers with CIBIL scores above 750. Private banks like HDFC, ICICI, and Kotak offer similar rates. Small finance banks and housing finance companies may offer slightly higher rates. Always compare current rates before applying — even 0.25% difference saves ₹90,000+ on a ₹30 lakh, 20-year loan.",
  },
  {
    question: "How much salary is needed for a ₹30 lakh home loan?",
    answer: "To comfortably qualify for a ₹30 lakh home loan at 8.5% for 20 years (EMI: ₹26,035), most banks require your net take-home salary to be at least ₹52,000–₹65,000/month (assuming 40–50% FOIR and no existing EMIs). If you have existing loan EMIs, the required salary is higher. Adding a co-applicant allows both incomes to be considered, making it easier to qualify on a lower individual salary.",
  },
  {
    question: "Can I prepay a ₹30 lakh home loan early to save interest?",
    answer: "Yes — prepayment is one of the best financial moves for home loan borrowers. If you prepay ₹2 lakh in year 3 of a ₹30 lakh, 8.5%, 20-year loan, you can save over ₹4–5 lakh in total interest and reduce the tenure by 2–3 years. RBI rules prohibit prepayment penalties on floating rate home loans. Fixed rate loans may have a penalty of 1–2% on the prepaid amount. Prepayments made in the early years have the maximum impact since interest outstanding is highest.",
  },
  {
    question: "What documents are needed for a ₹30 lakh home loan?",
    answer: "For salaried applicants: last 3 months' salary slips, 6 months' bank statements, Form 16 / ITR for 2 years, PAN and Aadhaar, employment letter, and property documents (sale deed, NOC from builder, approved plan). For self-employed: 2–3 years' ITR with computation, audited P&L and balance sheet, business registration proof, and 12 months' bank statements. The property must have a clear title and approved building plan for the loan to be sanctioned.",
  },
];

export default function EMI30LakhPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "EMI for 30 Lakh Home Loan" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        EMI for ₹30 Lakh Home Loan
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your exact monthly payment on a ₹30 lakh home loan. Adjust the interest rate and tenure to compare total interest across different scenarios.
      </p>

      <EMICalculator defaultLoan={3000000} />
      <PDFDownload title="30 Lakh Home Loan EMI Report" />

      {/* EMI comparison table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">EMI for ₹30 Lakh Home Loan by Rate &amp; Tenure</h2>
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
        <p className="mt-2 text-xs text-gray-400">Loan amount: ₹30,00,000. EMI figures are approximate. Actual EMI may vary slightly by bank.</p>
      </div>

      <AffiliateCTA
        heading="Compare Home Loan Rates from 20+ Banks"
        subtext="Find the lowest rate for your ₹30 lakh home loan without affecting your CIBIL score."
        ctaLabel="Compare Home Loan Rates →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Total Interest Paid at Different Rates</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The total interest you pay on a ₹30 lakh home loan varies dramatically based on the rate and tenure. At <strong>8.5% for 20 years</strong>, you pay approximately ₹32.5 lakh in interest — more than the original loan amount. At <strong>8.5% for 30 years</strong>, total interest balloons to ₹53 lakh. A 0.5% rate difference on a ₹30 lakh, 20-year loan saves approximately ₹3.5–4 lakh over the life of the loan — which is why comparing rates across lenders before signing is critical.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "8% · 20 yrs", emi: "₹25,093/mo", total: "₹60.2L", interest: "₹30.2L" },
              { label: "8.5% · 20 yrs", emi: "₹26,035/mo", total: "₹62.5L", interest: "₹32.5L" },
              { label: "9% · 20 yrs", emi: "₹26,992/mo", total: "₹64.8L", interest: "₹34.8L" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-gray-50 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-primary">{s.label}</p>
                <p className="mt-1 text-lg font-bold text-gray-900">{s.emi}</p>
                <p className="text-xs text-gray-500">Total paid: {s.total}</p>
                <p className="text-xs text-gray-400">Interest: {s.interest}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Reduce Total Interest on a ₹30 Lakh Home Loan</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Make annual prepayments:</strong> Even ₹50,000/year extra towards principal in the first 5 years can save ₹4–6 lakh in total interest and cut 3–4 years off tenure.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Negotiate the rate:</strong> A CIBIL score above 800 gives you leverage to negotiate 0.1–0.25% lower, saving ₹1–2 lakh over the full tenure.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Do a balance transfer:</strong> If rates fall 0.5% or more, switching your loan to a lower-rate bank can save lakhs. Most balance transfers have a processing fee of 0.5–1% of outstanding principal.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Choose a shorter tenure if income allows:</strong> A 15-year loan at 8.5% costs ₹16.5L in interest vs ₹32.5L for 20 years — almost half the interest for the same loan.</span></li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Best Banks for ₹30 Lakh Home Loan 2026</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            When choosing a lender for a ₹30 lakh home loan, compare not just the interest rate but also processing fees (typically 0.25–0.5% of loan amount), prepayment terms, and the time to sanction. PSU banks like <strong>SBI, Bank of Baroda, and Canara Bank</strong> often have the most competitive rates and lower processing fees for salaried borrowers. Private lenders like <strong>HDFC, ICICI, Axis, and Kotak</strong> are known for faster disbursals and better digital processes. Housing finance companies like <strong>LIC HFL and PNB Housing</strong> are good options for self-employed applicants or those with slightly lower CIBIL scores. Always check the current rates directly on the bank&apos;s website before applying, as rates are linked to the RBI repo rate and change periodically.
          </p>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
