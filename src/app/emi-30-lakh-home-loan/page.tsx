import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Section: Salary affordability */}
      <section className="mt-6 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">30 Lakh Home Loan EMI on Different Salaries</h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          Whether a ₹30 lakh home loan is affordable depends on your monthly take-home salary. The table
          below shows how comfortable the EMI feels at different income levels, assuming 8.5% interest
          rate, no existing EMIs, and a tenure chosen to keep EMI within 40–50% of income.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-border">
                <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Monthly Salary</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Affordability</th>
                <th className="px-4 py-2.5 text-left font-semibold text-primary">Recommended Tenure</th>
                <th className="px-4 py-2.5 text-right font-semibold text-gray-800">EMI at 8.5%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {[
                { salary: "₹40,000", comfort: "Tight", tenure: "30 years", emi: "₹23,071" },
                { salary: "₹50,000", comfort: "Comfortable", tenure: "25 years", emi: "₹24,041" },
                { salary: "₹60,000", comfort: "Easy", tenure: "20 years", emi: "₹26,035" },
                { salary: "₹75,000", comfort: "Very easy", tenure: "15 years", emi: "₹29,416" },
                { salary: "₹1,00,000", comfort: "Excellent", tenure: "10 years", emi: "₹37,109" },
              ].map((row, i) => (
                <tr key={row.salary} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.salary}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      row.comfort === "Tight" ? "bg-red-100 text-red-700" :
                      row.comfort === "Comfortable" ? "bg-yellow-100 text-yellow-700" :
                      row.comfort === "Easy" ? "bg-blue-100 text-blue-700" :
                      "bg-green-100 text-green-700"
                    }`}>{row.comfort}</span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-primary">{row.tenure}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.emi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">EMI values at 8.5% interest rate. Affordability assumes no existing EMIs and 40–50% FOIR.</p>
      </section>

      {/* Section: 50,000 salary deep-dive */}
      <section className="mt-6 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">30 Lakh Home Loan EMI on 50000 Salary</h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          A ₹50,000 net monthly salary makes a ₹30 lakh home loan <strong>comfortably achievable</strong>.
          Here&apos;s the full picture for a ₹50,000 salary earner at 8.5% interest with no existing EMIs:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { tenure: "20 years", emi: "₹26,035", pct: "52.1%", verdict: "Slightly over FOIR" },
            { tenure: "25 years", emi: "₹24,041", pct: "48.1%", verdict: "Within 50% FOIR ✓" },
            { tenure: "30 years", emi: "₹23,071", pct: "46.1%", verdict: "Comfortable ✓" },
          ].map((s) => (
            <div key={s.tenure} className="rounded-xl border border-border bg-white p-4">
              <p className="text-xs font-black uppercase tracking-widest text-primary">{s.tenure}</p>
              <p className="mt-1 text-lg font-bold text-gray-900">{s.emi}/mo</p>
              <p className="text-xs text-gray-500">{s.pct} of salary</p>
              <p className="mt-1 text-xs font-semibold text-gray-700">{s.verdict}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          At ₹50,000 salary, the <strong>25-year tenure</strong> is the sweet spot — EMI of ₹24,041
          stays just within the 50% FOIR threshold that most banks require, while total interest is
          significantly lower than the 30-year option. If you have any existing EMIs (car loan, personal
          loan), opt for 25–30 years or use a co-applicant to improve eligibility. Prepaying ₹50,000
          annually from year 3 onwards can effectively reduce the real tenure to under 18 years while
          keeping monthly cash flow comfortable.
        </p>
      </section>

      {/* Section: SBI 2026 */}
      <section className="mt-6 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">30 Lakh Home Loan EMI for SBI 2026</h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          SBI (State Bank of India) is India&apos;s largest home loan lender and the first choice for
          millions of borrowers. SBI&apos;s home loan interest rate starts at <strong>8.5% p.a.</strong> for
          salaried borrowers with a CIBIL score above 750 (as of 2026, linked to RBI repo rate).
          Here is the exact EMI for a ₹30 lakh SBI home loan across popular tenures:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-border">
                <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Tenure</th>
                <th className="px-4 py-2.5 text-right font-semibold text-primary">Monthly EMI</th>
                <th className="px-4 py-2.5 text-right font-semibold text-gray-800">Total Interest</th>
                <th className="px-4 py-2.5 text-right font-semibold text-gray-800">Total Payable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {[
                ["10 years", "₹37,109", "₹14.5L", "₹44.5L"],
                ["15 years", "₹29,416", "₹22.9L", "₹52.9L"],
                ["20 years", "₹26,035", "₹32.5L", "₹62.5L"],
                ["25 years", "₹24,041", "₹42.1L", "₹72.1L"],
                ["30 years", "₹23,071", "₹53.1L", "₹83.1L"],
              ].map(([tenure, emi, interest, total], i) => (
                <tr key={tenure} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{tenure}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-primary">{emi}</td>
                  <td className="px-4 py-2.5 text-right text-gray-700">{interest}</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-gray-800">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          <strong>Women borrower benefit:</strong> SBI offers an additional <strong>0.05% interest rate discount</strong> for
          women applicants under its &ldquo;Her Ghar&rdquo; initiative. On a ₹30 lakh, 20-year loan, this saves
          approximately ₹10,000–₹12,000 in total interest. The property must be in the woman applicant&apos;s
          name (sole or joint ownership) to avail this benefit.
        </div>
        <p className="mt-3 text-xs text-gray-400">
          Rate used: 8.50% p.a. SBI&apos;s actual rate is floating and subject to change with RBI repo rate revisions.
          Verify current rate at sbi.co.in before applying.
        </p>
      </section>

      {/* Section: How to reduce EMI */}
      <section className="mt-6 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">How to Reduce Your 30 Lakh Home Loan EMI</h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          Five actionable strategies to lower your EMI or reduce the total cost of your ₹30 lakh home loan:
        </p>
        <ol className="space-y-4 text-sm text-gray-600">
          {[
            {
              n: "1",
              tip: "Increase your down payment",
              detail: "The standard LTV (loan-to-value) for a ₹30 lakh home loan is 80% (bank pays ₹30L, you pay ₹7.5L on a ₹37.5L property). If you can stretch your down payment by ₹3–5 lakh, your loan principal drops proportionally — directly reducing EMI. Every extra ₹1 lakh down payment reduces EMI by approximately ₹868/month at 8.5% for 20 years.",
            },
            {
              n: "2",
              tip: "Choose a longer tenure initially",
              detail: "Starting with a 25–30 year tenure gives you the lowest EMI (₹23,071–₹24,041/month vs ₹26,035 for 20 years). Once your income increases in 2–3 years, you can request a tenure reduction or start making annual prepayments. This strategy keeps monthly cash flow manageable early on without sacrificing long-term interest savings.",
            },
            {
              n: "3",
              tip: "Improve your CIBIL score before applying",
              detail: "A CIBIL score of 750+ qualifies you for SBI and most banks' lowest available rates (8.5%). A score of 700–749 may attract a 0.1–0.25% higher rate — costing ₹1–2 lakh extra over 20 years. Spend 3–6 months before applying to clear credit card dues, avoid new credit inquiries, and dispute any errors in your CIBIL report.",
            },
            {
              n: "4",
              tip: "Apply with a co-applicant",
              detail: "A working co-applicant (spouse, parent) increases your combined income, potentially qualifying you for a lower rate tier or enabling you to choose a shorter tenure — both reducing total interest. Additionally, both applicants can independently claim Section 24 (up to ₹2L/year) and Section 80C (up to ₹1.5L/year) tax deductions on the same loan.",
            },
            {
              n: "5",
              tip: "Compare rates from at least 5 banks",
              detail: "Never accept the first offer. For a ₹30 lakh loan, get quotes from at least: SBI/Bank of Baroda (lowest PSU rates), HDFC/ICICI (fastest processing), and one NBFC like LIC HFL or Bajaj Housing. A difference of just 0.5% in rate saves ₹3.5–4 lakh over 20 years. Use each bank's pre-approval offer as a negotiation tool with other lenders.",
            },
          ].map((item) => (
            <li key={item.n} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">
                {item.n}
              </span>
              <span>
                <strong>{item.tip}:</strong> {item.detail}
              </span>
            </li>
          ))}
        </ol>
      </section>

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
