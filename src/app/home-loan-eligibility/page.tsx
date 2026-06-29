import type { Metadata } from "next";
import Link from "next/link";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SalaryLoanTable } from "@/components/shared/SalaryLoanTable";

export const metadata: Metadata = {
  title: "Home Loan Eligibility Calculator — Check How Much Home Loan You Can Get",
  description:
    "Check home loan eligibility instantly. Calculate maximum home loan amount based on salary. Free housing loan eligibility calculator India — no signup needed.",
  keywords: ["home loan eligibility calculator", "home loan eligibility India", "how much home loan can I get", "FOIR calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/home-loan-eligibility" },
  openGraph: {
    title: "Home Loan Eligibility Calculator | RupeeMath",
    description: "Check your maximum home loan eligibility based on income and existing EMIs.",
    url: "https://www.rupeemath.co.in/home-loan-eligibility",
  },
};

const faqs = [
  {
    question: "How can I increase my home loan eligibility?",
    answer:
      "Several steps can boost your eligibility: (1) Pay off existing loans to reduce your FOIR, (2) Add a co-applicant (spouse or parent) to combine incomes, (3) Improve your CIBIL score above 750 by clearing dues and avoiding defaults, (4) Opt for a longer tenure (up to 30 years) to lower the required monthly EMI, (5) Declare all income sources — rental income, freelance income — if they can be documented.",
  },
  {
    question: "Does my age affect home loan eligibility?",
    answer:
      "Yes. Banks typically offer home loans up to the age of 60–65 (retirement age). A younger applicant can get a longer tenure (25–30 years), which means a lower EMI and higher loan eligibility. An older applicant may only get a 10–15 year tenure, resulting in a higher monthly EMI and thus lower loan eligibility for the same income.",
  },
  {
    question: "What is the minimum CIBIL score required for a home loan?",
    answer:
      "Most banks and NBFCs require a minimum CIBIL score of 650–700 to approve a home loan. A score of 750 or above is considered excellent and often results in faster approval, a lower interest rate, and better loan terms. You can check your CIBIL score for free once a year from the CIBIL website.",
  },
  {
    question: "Are self-employed individuals eligible for home loans?",
    answer:
      "Yes, self-employed individuals (business owners and professionals) are eligible for home loans. However, the documentation is more extensive: typically 2–3 years of ITR filings, audited P&L statements, bank statements, and business continuity proof are required. Income proof variability means banks may offer slightly lower loan amounts compared to salaried applicants with the same income.",
  },
  {
    question: "What is the maximum tenure for a home loan in India?",
    answer:
      "Most banks in India offer home loan tenures up to 30 years. The maximum tenure is usually limited by your age at loan maturity — typically, banks require the loan to be repaid by age 60 (salaried) or 65 (self-employed). A longer tenure reduces your EMI burden but increases the total interest paid significantly.",
  },
];

export default function HomeLoanPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Home Loan Eligibility" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Home Loan Eligibility Calculator
      </h1>
      <p className="mb-8 text-gray-500">
        Find out the maximum home loan you can get based on your salary and existing financial
        obligations. Uses the standard 50% FOIR rule used by Indian banks.
      </p>
      <HomeLoanCalculator />
      <PDFDownload title="Home Loan Eligibility Report" />

      <SalaryLoanTable />

      <div className="mt-6 rounded-xl border border-border bg-orange-50 p-4">
        <p className="text-sm text-gray-700">
          <strong>See also:</strong>{" "}
          <Link href="/home-loan-on-salary" className="font-semibold text-primary underline underline-offset-2">
            Home Loan Eligibility by Salary 2026 →
          </Link>{" "}
          — detailed guide with calculator and salary-wise breakdown.
        </p>
      </div>

      <AffiliateCTA
        heading="Check Your Real Eligibility with Banks"
        subtext="Get pre-approved offers from 20+ banks without affecting your CIBIL score."
        ctaLabel="Check Home Loan Offers →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is Home Loan Eligibility?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Home loan eligibility is the maximum loan amount a bank or NBFC is willing to lend you
            based on your income, existing financial obligations, credit history, and age. Indian banks
            use the <strong>FOIR (Fixed Obligation to Income Ratio)</strong> method as the primary
            criterion: they limit total EMI outgo (including the proposed home loan EMI) to
            <strong> 40–50% of your net monthly income</strong>. A bank first determines your maximum
            allowable EMI, subtracts your existing EMIs, and then calculates the loan amount for which
            the remaining EMI capacity is sufficient. This tool uses the standard 50% FOIR and 8.5%
            interest rate (adjustable) to give you an indicative figure. Actual eligibility will also
            depend on your <strong>CIBIL score</strong>, employment type, age, and the specific bank&apos;s
            internal credit policies.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath Home Loan Eligibility Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Monthly Income:</strong> Enter your net take-home salary (after tax and PF deductions). For joint applications, enter the combined income of all applicants.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Existing EMIs:</strong> Enter the total of all ongoing EMIs — car loan, personal loan, credit card dues, etc. This directly reduces your available EMI capacity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Interest Rate:</strong> The default is 8.5% (current average). Adjust based on the rate quoted by your bank or lender.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Tenure:</strong> Select your preferred loan tenure (10–30 years). Longer tenures increase eligibility by reducing the required monthly EMI.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>View result:</strong> See your Maximum Loan Eligibility in lakhs and the EMI you would pay on that amount. Use this as a benchmark before approaching banks.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How Much Home Loan Can I Get?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            The home loan amount you can get depends primarily on your monthly income and existing obligations. Indian banks follow the <strong>50% FOIR rule</strong> — your total monthly EMIs (including the new home loan) cannot exceed 50% of your net take-home salary. For example, if your monthly income is ₹80,000 and you have no existing EMIs, your maximum EMI capacity is ₹40,000. At 8.5% interest over 20 years, this translates to a home loan eligibility of approximately <strong>₹42–43 lakh</strong>. Adding a co-applicant (such as a working spouse) doubles the combined income and can significantly increase the eligible loan amount. The calculator above gives you an instant estimate based on your specific numbers.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Check Home Loan Eligibility by Salary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 text-left font-semibold text-gray-700">Monthly Salary</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Max EMI (50% FOIR)</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Approx. Loan Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { salary: "₹30,000", emi: "₹15,000", loan: "~₹16 lakh" },
                  { salary: "₹50,000", emi: "₹25,000", loan: "~₹26 lakh" },
                  { salary: "₹75,000", emi: "₹37,500", loan: "~₹40 lakh" },
                  { salary: "₹1,00,000", emi: "₹50,000", loan: "~₹53 lakh" },
                  { salary: "₹1,50,000", emi: "₹75,000", loan: "~₹80 lakh" },
                  { salary: "₹2,00,000", emi: "₹1,00,000", loan: "~₹1.06 crore" },
                ].map((row) => (
                  <tr key={row.salary}>
                    <td className="py-2 font-medium text-gray-800">{row.salary}</td>
                    <td className="py-2">{row.emi}</td>
                    <td className="py-2 font-semibold text-primary">{row.loan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">Estimates based on 8.5% interest rate, 20-year tenure, no existing EMIs. Actual eligibility varies by bank and credit profile.</p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Housing Loan Eligibility Calculator</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            A <strong>housing loan eligibility calculator</strong> helps you estimate the loan amount you qualify for before approaching a bank — saving time and protecting your CIBIL score from unnecessary hard enquiries. Key factors that determine your housing loan eligibility include:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Net monthly income:</strong> Higher income directly increases eligible loan amount under the FOIR method.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Existing EMI obligations:</strong> Car loans, personal loans, and credit card dues reduce available EMI headroom.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Loan tenure:</strong> Longer tenure (up to 30 years) lowers the monthly EMI, enabling a higher loan amount on the same income.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Interest rate:</strong> Lower rates mean smaller EMIs, increasing the principal you can borrow for the same monthly outgo.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>CIBIL score:</strong> A score above 750 improves sanction chances and may unlock preferential rates from lenders.</span></li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Tips to Improve Your Home Loan Eligibility</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Clear small loans first:</strong> Paying off a personal loan or car loan before applying reduces your existing EMIs, directly boosting the new loan amount you qualify for.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Add a co-applicant:</strong> Including your spouse or parent as a co-borrower combines both incomes, often increasing eligibility by 40–80%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Maintain a CIBIL score above 750:</strong> A higher credit score unlocks lower interest rates and improves the bank&apos;s willingness to sanction a larger loan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Choose a longer tenure:</strong> Extending from 15 to 20 years can increase your eligible loan amount by 10–15%, though total interest paid increases significantly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Show all income:</strong> Bonus, rental income, and freelance income — if supported by ITR or bank statements — can be included to increase the assessed income.</span>
            </li>
          </ul>
        </section>
      </div>

      {/* New SEO sections */}
      <div className="mt-10 space-y-6">

        {/* Bank comparison table */}
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-xl font-bold text-gray-900">Home Loan Eligibility Calculator by Bank 2026</h2>
          <p className="mb-4 text-sm text-gray-500">Minimum salary, maximum tenure, and indicative interest rates across major Indian lenders</p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-navy-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Bank</th>
                  <th className="px-4 py-3 text-right font-semibold">Min Salary</th>
                  <th className="px-4 py-3 text-right font-semibold">Max Tenure</th>
                  <th className="px-4 py-3 text-right font-semibold">Rate (from)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {[
                  { bank: "SBI",   salary: "₹15,000", tenure: "30 years", rate: "8.50%" },
                  { bank: "HDFC Bank", salary: "₹25,000", tenure: "30 years", rate: "8.75%" },
                  { bank: "ICICI Bank", salary: "₹25,000", tenure: "30 years", rate: "8.75%" },
                  { bank: "Axis Bank", salary: "₹25,000", tenure: "30 years", rate: "8.75%" },
                  { bank: "Kotak Mahindra", salary: "₹20,000", tenure: "20 years", rate: "8.65%" },
                  { bank: "PNB", salary: "₹15,000", tenure: "30 years", rate: "8.50%" },
                ].map((row, i) => (
                  <tr key={row.bank} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.bank}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.salary}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.tenure}</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Rates as of 2026 for salaried borrowers with CIBIL score 750+. Actual rates depend on loan amount, LTV, credit profile, and RBI repo rate at the time of application. Verify current rates at each bank&apos;s website before applying.
          </p>
        </section>

        {/* How to increase eligibility — detailed tips */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">How to Increase Home Loan Eligibility</h2>
          <div className="space-y-5 text-sm text-gray-600">
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">1. Add a Co-Applicant</h3>
              <p>
                Including a working spouse, parent, or adult child as a co-applicant is the single most effective way to increase eligibility. Banks combine both incomes for the FOIR calculation — a spouse earning ₹40,000/month added to your ₹60,000 income raises combined eligibility from ~₹32 lakh to ~₹53 lakh (at 8.5%, 20 years). Both co-applicants also independently qualify for Section 24(b) interest deduction (up to ₹2 lakh each) and Section 80C principal deduction — creating double tax benefits on the same loan.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">2. Improve Your CIBIL Score</h3>
              <p>
                A CIBIL score above 750 is the threshold most banks use for their lowest rate tier. Moving from 700 to 750 can reduce your rate by 0.1–0.25% — which both lowers your EMI and slightly increases the principal you qualify for at the same monthly payment. To improve your score: pay all EMIs and credit card dues on time, keep credit card utilisation below 30%, avoid new loan applications for 6 months before applying, and dispute any errors in your CIBIL report (they occur more frequently than most borrowers realise).
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">3. Close Existing Loans</h3>
              <p>
                Every existing EMI directly reduces your FOIR headroom. If you currently pay ₹8,000/month on a car loan on a ₹70,000 salary, your available home loan EMI capacity drops from ₹35,000 to ₹27,000 — reducing eligibility by approximately ₹8–9 lakh. Paying off a personal loan or car loan before applying for a home loan is often the quickest way to materially increase the eligible amount. Even clearing credit card outstanding balances helps, as banks count a minimum payment amount against your FOIR even if you pay in full monthly.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">4. Choose a Longer Tenure</h3>
              <p>
                A 30-year tenure has a significantly lower monthly EMI than a 20-year loan for the same amount. This lower required EMI allows banks to sanction a higher principal on the same income. For example, on a ₹70,000 salary, the difference between 20-year and 30-year eligibility is approximately ₹5–8 lakh at 8.5%. The trade-off: a 30-year loan costs substantially more total interest. A practical approach is to choose a 25–30 year tenure for maximum eligibility, then make annual prepayments once you have surplus funds to reduce the effective tenure and total interest without being locked into a higher mandatory EMI.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">5. Show All Income Sources</h3>
              <p>
                Banks consider all documentable income — not just salary. Rental income from a second property, freelance consulting income reflected in your ITR, interest income, and even a spouse&apos;s part-time income can be included if properly documented. Maintaining a clean paper trail — income credited to your bank account and declared in ITR — is the key criterion. Cash income not reflected in bank statements or ITR is typically not considered. Some banks also accept projected salary increases for employees with confirmed promotions or revised CTCs with a letter from HR.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold text-gray-800">6. Apply Under PMAY Scheme</h3>
              <p>
                The <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> Credit Linked Subsidy Scheme (CLSS) offers interest subsidies for first-time home buyers: 6.5% subsidy for EWS/LIG (annual income up to ₹6 lakh), 4% for MIG-I (₹6–12 lakh), and 3% for MIG-II (₹12–18 lakh). The subsidy is credited as an upfront lump sum to your loan account — reducing your outstanding principal immediately and lowering your effective EMI. For a borrower earning ₹30,000/month taking a ₹10 lakh home loan, the PMAY subsidy of approximately ₹2.67 lakh effectively reduces the principal to ₹7.33 lakh, making the loan far more affordable. Apply through any scheduled bank or HFC listed as a PMAY Primary Lending Institution.
              </p>
            </div>
          </div>
        </section>

        {/* Formula section */}
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Home Loan Eligibility Formula</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Banks use a two-step FOIR method to calculate how much home loan you qualify for. Here is the exact formula with a worked example:
          </p>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-border bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-1">Step 1 — Maximum Allowable EMI</p>
              <p className="font-mono text-sm text-primary mb-2">Max EMI = Net Monthly Income × FOIR − Existing EMIs</p>
              <p className="text-xs text-gray-600">Where FOIR = 0.50 (50%) for most banks. Example: ₹80,000 salary × 0.50 − ₹8,000 existing EMI = <strong>₹32,000 available for home loan EMI</strong></p>
            </div>
            <div className="rounded-lg border border-border bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-1">Step 2 — Maximum Loan Amount (Reverse EMI Formula)</p>
              <p className="font-mono text-sm text-primary mb-2">{"Loan = Max EMI × [(1+r)^n − 1] ÷ [r × (1+r)^n]"}</p>
              <p className="text-xs text-gray-600">Where r = monthly rate = annual rate ÷ 12 ÷ 100, n = tenure in months. Example: ₹32,000 EMI at 8.5% for 20 years → <strong>Max Loan ≈ ₹33.7 lakh</strong></p>
            </div>
            <div className="rounded-lg border border-border bg-orange-50 p-4">
              <p className="font-semibold text-primary mb-1">Full Example — ₹80,000 salary, ₹8,000 existing EMI, 8.5%, 20 years</p>
              <div className="text-xs text-gray-700 space-y-0.5">
                <p>Net salary: ₹80,000 · FOIR limit: ₹40,000 (50%) · Less existing EMI: ₹8,000</p>
                <p>Available EMI for home loan: <strong>₹32,000</strong></p>
                <p>Monthly rate r = 8.5 ÷ 12 ÷ 100 = 0.007083 · n = 240 months</p>
                <p>Maximum home loan: <strong>≈ ₹33.7 lakh</strong></p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            The calculator above runs this formula in real time as you adjust the sliders. LTV cap applies separately — bank will lend maximum 75–80% of property value regardless of income-based eligibility.
          </p>
        </section>

        {/* SEO keyword sections */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Check Home Loan Eligibility Online Free</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            The RupeeMath home loan eligibility calculator lets you check your eligibility in under 60 seconds — no signup, no form submission, no impact on your CIBIL score. Simply enter your net monthly income, existing EMIs, expected interest rate, and preferred tenure. The calculator instantly shows your maximum eligible loan amount in lakhs, along with the EMI you would pay and a breakdown of your EMI capacity. You can adjust any input in real time to model different scenarios — for example, checking how your eligibility changes if you add a co-applicant or close an existing car loan. The result can be downloaded as a PDF for reference when approaching banks.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Housing Loan Eligibility Calculator India</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Our housing loan eligibility calculator is built specifically for Indian borrowers using the same FOIR methodology applied by Indian banks and NBFCs. It accounts for the 50% FOIR norm standard across SBI, HDFC, ICICI, and other major lenders, the relationship between tenure and eligible loan amount, and the direct impact of existing loan obligations on your headroom. Unlike generic loan calculators, this tool is calibrated to Indian banking norms and updated annually to reflect current interest rate environments. Whether you are a first-time buyer exploring affordability or an experienced borrower planning an upgrade, the calculator gives you a reliable baseline before you approach any lender.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Home Loan Amount Eligibility by Salary</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            As a quick reference, here is the approximate home loan amount you qualify for at different salary levels — assuming 8.5% interest, 20-year tenure, and no existing EMIs (50% FOIR):
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-border">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Monthly Salary</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-800">Max EMI (50%)</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-primary">Eligible Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {[
                  ["₹25,000", "₹12,500", "~₹13.2L"],
                  ["₹40,000", "₹20,000", "~₹21.1L"],
                  ["₹60,000", "₹30,000", "~₹31.7L"],
                  ["₹80,000", "₹40,000", "~₹42.3L"],
                  ["₹1,00,000", "₹50,000", "~₹52.8L"],
                  ["₹1,50,000", "₹75,000", "~₹79.3L"],
                  ["₹2,00,000", "₹1,00,000", "~₹1.06 Cr"],
                ].map(([salary, emi, loan], i) => (
                  <tr key={salary} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2.5 font-medium text-gray-800">{salary}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600">{emi}</td>
                    <td className="px-4 py-2.5 text-right font-bold text-primary">{loan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            At 8.5% p.a., 20-year tenure, zero existing EMIs. Use the calculator above for your exact figure.
          </p>
        </section>

      </div>

      {/* Related Calculators */}
      <section className="mt-10 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Related Calculators</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            href="/emi-calculator"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Calculate your home loan EMI
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/emi-30-lakh-home-loan"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            EMI for ₹30 lakh home loan
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/home-loan-on-salary"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Check eligibility by salary
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/home-loan-amount-eligibility"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Maximum loan amount guide
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/joint-home-loan-eligibility"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Joint home loan eligibility
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <div className="mt-6 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Factors Affecting Home Loan Eligibility</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            <strong>Monthly income and salary</strong> is the primary determinant of home loan eligibility because it directly sets the maximum EMI a bank will allow. Banks use the FOIR rule — total monthly EMI obligations (including the proposed home loan EMI) must not exceed 40–50% of your net take-home salary. A higher income gives you a higher maximum EMI capacity, which translates directly to a higher eligible loan amount. For joint applications, the combined net income of all co-applicants is used, which is why adding a working spouse as co-applicant can dramatically increase eligibility. Irregular income sources like commissions, bonuses, or freelance earnings can be included if they are documented in your ITR and reflected in bank statements consistently over 2+ years.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            <strong>Credit score and CIBIL</strong> acts as a gatekeeper for home loan approval. Most banks require a minimum CIBIL score of 650–700 to process an application, and a score above 750 is considered excellent — unlocking the lowest available interest rates and faster sanction timelines. Your credit score is built from your history of repaying credit card bills and loan EMIs on time, the percentage of your credit card limit you use (lower is better), the age of your oldest credit account, the mix of secured and unsecured credit, and the number of recent loan applications (hard enquiries). A single missed EMI payment can drop your score by 50–100 points overnight and take 12–24 months of clean behaviour to recover. If your score is below 750, spending 6–12 months improving it before applying for a home loan can save lakhs in total interest.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            <strong>Age and loan tenure</strong> are interconnected in home loan eligibility. Banks calculate the maximum tenure as the difference between the retirement age (typically 60 for salaried, 65 for self-employed) and your current age. A 35-year-old salaried applicant can get a maximum tenure of 25 years; a 50-year-old can only get 10 years. Since a longer tenure means a lower required monthly EMI, younger borrowers can qualify for significantly higher loan amounts on the same income. A ₹80,000 salary supports a loan of approximately ₹42 lakh at 20 years and ₹52 lakh at 30 years — the 10-year additional tenure unlocks ₹10 lakh in extra eligibility just by virtue of age. This is one of the strongest financial arguments for buying a home earlier in your career rather than waiting.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            <strong>Existing EMIs and financial obligations</strong> directly reduce your available FOIR headroom. Every rupee you are already paying as an EMI on a car loan, personal loan, or credit card reduces the amount available for a home loan EMI. For example, a ₹70,000 salary with no existing loans can support a home loan EMI of ₹35,000 (at 50% FOIR), qualifying for approximately ₹37 lakh. The same salary with a ₹12,000 car loan EMI can only support ₹23,000 for a home loan, qualifying for only ₹24 lakh — ₹13 lakh less, just because of one existing loan. Strategically paying off smaller loans (personal loan, two-wheeler loan) before applying for a home loan is one of the most effective ways to maximize eligible loan amount.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            <strong>Employment type and stability</strong> influences how confidently a bank can assess your future repayment capacity. Permanent salaried employees at established companies are viewed as the lowest risk, followed by employees at government or PSU organizations. Self-employed professionals (doctors, CAs, architects) and business owners can access home loans but typically require more documentation — 2–3 years of ITR, audited financials, and 12 months of bank statements. A minimum of 2 years of continuous employment with the current employer (for salaried) or 3 years of business continuity (for self-employed) is a standard requirement. Frequent job changes, employment gaps, or volatile business income can lead to lower eligible amounts or outright rejection even if the current income is high.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>Property value and location</strong> also cap your eligibility through the Loan-to-Value (LTV) ratio. Banks lend a maximum of 75–80% of the property&apos;s registered value or market value (whichever is lower as assessed by their empanelled valuer), regardless of how high your income-based eligibility may be. If you want to buy a ₹40 lakh apartment, the maximum loan is ₹32 lakh (80% LTV) — even if your income supports a higher amount. Properties in approved residential zones with clear title and completed construction receive the highest LTV ratios. Under-construction properties, properties in rural or unapproved areas, or plots without construction attract stricter LTV limits. The bank&apos;s legal and technical assessment of the property is as important as your income assessment.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Government Schemes for Home Buyers</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The Pradhan Mantri Awas Yojana (PMAY) is India&apos;s flagship affordable housing scheme, offering interest subsidies to first-time home buyers across four income categories. Under the Credit Linked Subsidy Scheme (CLSS), the Economically Weaker Section (EWS, annual income up to ₹3 lakh) and Low Income Group (LIG, up to ₹6 lakh) receive a 6.5% interest subsidy on loans up to ₹6 lakh. The Middle Income Group I (MIG-I, ₹6–12 lakh annual income) receives a 4% subsidy on loans up to ₹9 lakh, and MIG-II (₹12–18 lakh annual income) receives a 3% subsidy on loans up to ₹12 lakh. The subsidy is calculated as the Net Present Value (NPV) at a 9% discount rate and is credited upfront to the borrower&apos;s loan account — immediately reducing the outstanding principal and thereby reducing the effective EMI. A borrower in the EWS/LIG category taking a ₹6 lakh loan benefits from approximately ₹2.67 lakh credited to their account on day one.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Beyond PMAY, there are state-level affordable housing schemes that complement central government benefits. Several state governments offer additional subsidies, stamp duty reductions, or waiver on registration charges for first-time buyers of affordable housing units. Tamil Nadu, Maharashtra, Gujarat, and Rajasthan have notable state schemes running in parallel with PMAY. Additionally, the tax benefits available to home loan borrowers under the Income Tax Act are substantial: Section 80C allows deduction of principal repayment up to ₹1.5 lakh per year, and Section 24(b) allows deduction of interest paid up to ₹2 lakh per year for a self-occupied property. For a couple with a joint home loan, both applicants can independently claim these deductions, creating a combined annual tax benefit of up to ₹7 lakh in deductions — saving ₹2.1 lakh in tax per year at the 30% slab. This double benefit makes a joint home loan particularly attractive for working couples.
          </p>
        </section>

      </div>

      <div className="mt-6">
        <FAQSection items={[
          {
            question: "What is the minimum salary required for a home loan in India?",
            answer: "There is no universal minimum salary mandated across all banks — each lender sets its own threshold. SBI and PNB accept applications from individuals with a monthly salary as low as ₹15,000–₹20,000, though the eligible loan amount at that income will be modest (₹8–12 lakh depending on tenure). HDFC, ICICI, and Axis Bank typically have a minimum monthly income requirement of ₹25,000–₹30,000. On a ₹15,000 salary with no existing EMIs, the maximum eligible loan at 8.5% for 30 years is approximately ₹7–8 lakh — sufficient for affordable housing in smaller cities or with PMAY subsidy benefits. If your individual income is low, adding a co-applicant is the most effective way to increase eligibility.",
          },
          {
            question: "Can I get a home loan without a salary slip?",
            answer: "Salaried employees must provide salary slips as income proof — this is non-negotiable for standard home loan applications. However, self-employed individuals and business owners do not need salary slips; they provide ITR, audited financials, and bank statements instead. For salaried employees who receive salary in cash or whose employer does not issue formal salary slips, some NBFCs and Housing Finance Companies accept bank statements showing consistent monthly credits, Form 26AS, and a salary certificate from the employer on company letterhead as alternative income proof. Informal income without any documentary trail is generally not accepted by regulated lenders. Some HFCs like Aadhar Housing Finance and Gruh Finance specialize in loans for the informal income segment with more flexible income verification.",
          },
          {
            question: "How does CIBIL score affect home loan eligibility?",
            answer: "Your CIBIL score affects home loan eligibility in three important ways. First, it determines whether your application is even processed — most banks have a minimum score of 650–700 below which they decline applications without detailed review. Second, your score determines the interest rate offered — borrowers with 750+ typically receive the bank's best available rate (say 8.5%), while those at 700–750 might be charged 0.1–0.5% more, and those at 650–700 could face rates 0.5–1% higher. Over a 20-year loan of ₹30 lakh, a 0.5% rate difference costs ₹3.5 lakh extra in total interest. Third, the score affects the loan amount — some lenders offer slightly higher loan amounts (higher LTV) to borrowers with excellent credit scores as they represent lower default risk.",
          },
          {
            question: "Can I add a co-applicant to increase home loan eligibility?",
            answer: "Yes — adding a co-applicant is one of the most effective strategies to increase home loan eligibility. Banks combine the net incomes of all co-applicants when computing the maximum EMI capacity, which directly increases the eligible loan amount. Both applicants must be earning individuals whose income is documentable. The most common co-applicant is a working spouse — a couple earning ₹50,000 and ₹40,000 respectively can access a loan of approximately ₹48 lakh that neither could get individually. A co-applicant must also be a co-owner of the property (or agree to become one) for the bank to count their income. Tax benefits are also doubled — both applicants can independently claim Section 24(b) interest deduction (up to ₹2 lakh each) and Section 80C principal deduction.",
          },
          {
            question: "What is FOIR in home loan?",
            answer: "FOIR stands for Fixed Obligation to Income Ratio — the key metric Indian banks use to determine how much home loan you qualify for. It represents the proportion of your monthly income that goes toward fixed debt repayments (EMIs). Most banks set a FOIR limit of 40–50%, meaning your total monthly EMIs (including the proposed home loan) should not exceed 50% of your net take-home salary. If your salary is ₹60,000, the maximum total EMI allowed is ₹30,000. If you already pay ₹8,000 on a car loan, only ₹22,000 is available for a home loan EMI, which at 8.5% for 20 years translates to a loan of approximately ₹23 lakh. Banks with stricter policies use 40% FOIR (maximum EMI = ₹24,000 in this example), resulting in a lower eligible amount.",
          },
          {
            question: "How to check home loan eligibility online?",
            answer: "The easiest way to check home loan eligibility online is to use the RupeeMath Home Loan Eligibility Calculator above — enter your net monthly income, existing EMI obligations, expected interest rate, and preferred tenure, and the calculator instantly shows your maximum eligible loan amount and the EMI you would pay on it. Most major bank websites also have eligibility calculators, but they require registration and may use your data for marketing follow-up. For a clean, no-registration check, RupeeMath gives you the same result using the standard 50% FOIR methodology. After using the online calculator, the next step is to approach 2–3 lenders for a pre-approved or pre-qualified offer, which uses your actual income documents and credit score to give you a more precise, bankable eligibility figure.",
          },
        ]} />
      </div>
    </div>
  );
}
