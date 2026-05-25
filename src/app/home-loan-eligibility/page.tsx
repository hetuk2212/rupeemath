import type { Metadata } from "next";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Loan Eligibility Calculator 2025 — Check How Much Loan You Get",
  description:
    "Check your home loan eligibility instantly. Enter your monthly income and existing EMIs to find the maximum home loan amount you can get from Indian banks.",
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

      <FAQSection items={faqs} />
    </div>
  );
}
