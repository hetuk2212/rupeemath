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
            href="/joint-home-loan-eligibility"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Joint home loan eligibility
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} />
    </div>
  );
}
