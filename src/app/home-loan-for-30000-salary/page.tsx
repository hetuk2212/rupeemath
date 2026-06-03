import type { Metadata } from "next";
import Link from "next/link";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Loan for ₹30,000 Salary — Eligibility & Maximum Amount 2026",
  description:
    "Check home loan eligibility for ₹30,000 salary. See maximum loan amount, best banks and PMAY subsidy benefits. Free calculator.",
  keywords: [
    "home loan for 30000 salary",
    "home loan on 30000 salary india",
    "30000 salary home loan eligibility",
    "maximum home loan for 30000 salary",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/home-loan-for-30000-salary" },
  openGraph: {
    title: "Home Loan for ₹30,000 Salary — Eligibility & Maximum Amount 2026 | RupeeMath",
    description: "Free calculator: check how much home loan you can get on ₹30,000 salary in India.",
    url: "https://www.rupeemath.co.in/home-loan-for-30000-salary",
  },
};

const faqs = [
  {
    question: "Can I get a home loan on ₹30,000 salary?",
    answer:
      "Yes, you can get a home loan on a ₹30,000 monthly salary. Most Indian banks and NBFCs use the FOIR (Fixed Obligation to Income Ratio) rule — they allow total EMIs up to 40–50% of your net monthly income. At 40% FOIR with no existing EMIs, your maximum EMI capacity is ₹12,000. At 8.5% interest for 20 years, this translates to a loan eligibility of approximately ₹11.5 lakh. Choosing a longer tenure (25–30 years) can push eligibility up to ₹12.5–₹13.2 lakh. Adding a co-applicant significantly increases the eligible amount.",
  },
  {
    question: "Which bank gives a home loan for ₹30,000 salary?",
    answer:
      "Most major Indian banks offer home loans to applicants with a ₹30,000 monthly salary — including SBI, Bank of Baroda, HDFC, ICICI, and Kotak Mahindra Bank. For this income level, SBI's Pradhan Mantri Awas Yojana (PMAY) linked loans and government bank schemes are particularly competitive. NBFCs like LIC Housing Finance, PNB Housing, and Aadhar Housing Finance also cater to lower-income borrowers with more flexible eligibility criteria. Maintaining a CIBIL score above 700 is essential for approval at any of these lenders.",
  },
  {
    question: "How can I increase my home loan eligibility on ₹30,000 salary?",
    answer:
      "There are several effective strategies: (1) Add a co-applicant — a working spouse or parent increases combined income and can nearly double your eligibility. (2) Clear existing EMIs — every existing loan EMI reduces your capacity; paying off a personal loan first can increase eligibility by ₹1–2 lakh. (3) Choose a longer tenure — opting for 30 years instead of 20 years increases eligibility by approximately 15%. (4) Improve your CIBIL score above 750 — some lenders offer higher loan amounts to borrowers with excellent credit profiles. (5) Declare all income sources — rental income or freelance income documented through ITR can be factored in.",
  },
  {
    question: "Can I add a co-applicant to increase eligibility on ₹30,000 salary?",
    answer:
      "Yes — adding a co-applicant is the single most effective way to increase home loan eligibility. If your spouse earns ₹25,000/month, the combined income of ₹55,000 increases your maximum EMI capacity from ₹12,000 to ₹22,000. At 8.5% for 20 years, this raises eligibility from ₹11.5 lakh to approximately ₹21 lakh. Both co-applicants can also independently claim Section 24(b) interest deduction of up to ₹2 lakh each, creating a double tax benefit. The co-applicant does not need to be a co-owner of the property, though banks prefer it.",
  },
  {
    question: "What is the PMAY subsidy benefit for ₹30,000 salary?",
    answer:
      "Under the Pradhan Mantri Awas Yojana (PMAY) Credit Linked Subsidy Scheme (CLSS), households with an annual income of up to ₹6 lakh (monthly ₹50,000) fall in the EWS/LIG category and are eligible for an interest subsidy of 6.5% on home loans up to ₹6 lakh. For a ₹30,000 salary borrower taking a ₹10 lakh loan at 8.5% for 20 years, the PMAY subsidy reduces the effective interest rate significantly, saving approximately ₹2.67 lakh in interest over the loan tenure. The subsidy is credited upfront to the loan account, reducing your outstanding principal immediately. Applications are made through your bank; all major PSU banks are PLIs (Primary Lending Institutions) under PMAY.",
  },
];

export default function HomeLoanFor30000SalaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home Loan Eligibility", href: "/home-loan-eligibility" },
          { label: "₹30,000 Salary" },
        ]}
      />

      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Home Loan for ₹30,000 Salary — How Much Can You Get?
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate the exact home loan you qualify for on a ₹30,000 monthly salary. See
        amounts at different tenures and rates, PMAY benefits, and tips to increase your
        eligibility.
      </p>

      {/* Pre-filled calculator */}
      <HomeLoanCalculator defaultIncome={30000} />
      <PDFDownload title="Home Loan Eligibility Report — ₹30,000 Salary" />

      {/* Eligibility table */}
      <section className="mt-8 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-xl font-bold text-gray-900">
          Home Loan Amount for ₹30,000 Salary
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Maximum loan eligibility at 40% FOIR with no existing EMIs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b border-border bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-800">Tenure</th>
                <th className="py-3 px-4 text-left font-semibold text-primary">At 8.5%</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">At 9%</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">At 9.5%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { tenure: "15 years", r85: "₹10.5L", r9: "₹10.2L", r95: "₹9.9L" },
                { tenure: "20 years", r85: "₹11.5L", r9: "₹11.1L", r95: "₹10.8L" },
                { tenure: "25 years", r85: "₹12.5L", r9: "₹12L",   r95: "₹11.6L" },
                { tenure: "30 years", r85: "₹13.2L", r9: "₹12.7L", r95: "₹12.3L" },
              ].map((row) => (
                <tr key={row.tenure} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{row.tenure}</td>
                  <td className="py-3 px-4 font-bold text-primary">{row.r85}</td>
                  <td className="py-3 px-4">{row.r9}</td>
                  <td className="py-3 px-4">{row.r95}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          Calculated using 40% FOIR (₹12,000 max EMI), no existing obligations.
          Actual eligibility varies by bank and credit profile.
        </p>
      </section>

      {/* Content sections */}
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            How Banks Calculate Home Loan Eligibility for ₹30,000 Salary
          </h2>
          <p>
            Indian banks use the <strong>FOIR (Fixed Obligation to Income Ratio)</strong> method
            to determine how much home loan you qualify for. The bank first calculates your
            maximum allowable monthly EMI — typically 40–50% of your net monthly income. For a
            ₹30,000 take-home salary, this means a maximum EMI capacity of ₹12,000–₹15,000.
          </p>
          <p className="mt-3">
            The bank then works backwards from this EMI limit using the standard EMI formula to
            determine the principal loan amount. At 8.5% interest for 20 years, a ₹12,000 EMI
            supports a loan of approximately ₹11.5 lakh. Extending the tenure to 30 years lowers
            the required EMI per lakh, allowing a higher principal — approximately ₹13.2 lakh at
            the same ₹12,000/month.
          </p>
          <p className="mt-3">
            Your CIBIL score plays a secondary but critical role. Banks generally require a
            minimum score of 650–700 to process the application, and a score above 750 may
            unlock marginally better rates or higher loan amounts with some lenders. Employment
            stability — at least 2 continuous years with the same employer for salaried
            individuals — is also a key criterion.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Tips to Increase Home Loan Eligibility on ₹30,000 Salary
          </h2>
          <ul className="space-y-3">
            {[
              {
                tip: "Add a co-applicant",
                detail:
                  "A working spouse or parent as co-borrower combines both incomes. A co-applicant earning ₹25,000/month can increase your combined eligibility from ~₹11.5 lakh to ~₹21 lakh.",
              },
              {
                tip: "Clear existing EMIs before applying",
                detail:
                  "Every ₹1,000 in existing monthly EMI reduces your home loan eligibility by approximately ₹1–1.2 lakh. Paying off a personal loan or credit card dues before applying frees up EMI headroom.",
              },
              {
                tip: "Choose a 25–30 year tenure",
                detail:
                  "A 30-year tenure increases eligibility by ~15% compared to 20 years, as the lower EMI amount allows a higher principal on the same income.",
              },
              {
                tip: "Improve your CIBIL score",
                detail:
                  "A score above 750 can unlock better rates and higher loan amounts from select lenders. Pay all dues on time and reduce credit card utilisation to below 30% for 6+ months before applying.",
              },
              {
                tip: "Declare all income sources",
                detail:
                  "Rental income, freelance income, or a spouse's part-time income supported by bank statements or ITR can be included in the income assessment at many banks.",
              },
            ].map((item) => (
              <li key={item.tip} className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>{item.tip}:</strong> {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Government Schemes for Low-Income Home Buyers
          </h2>
          <p>
            Borrowers with a ₹30,000 monthly salary (annual income ₹3.6 lakh) qualify as
            <strong> EWS/LIG (Economically Weaker Section / Low-Income Group)</strong> under the
            Pradhan Mantri Awas Yojana (PMAY). Several government-backed benefits are available:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong>PMAY-CLSS subsidy:</strong> Interest subsidy of 6.5% on loans up to
                ₹6 lakh under the Credit Linked Subsidy Scheme. Net benefit of approximately
                ₹2.67 lakh credited upfront to your loan account.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong>SBI Realty and Privilege Home Loan:</strong> SBI offers preferential
                rates for EWS/LIG borrowers under PMAY with relaxed FOIR norms in some cases.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong>NHB refinancing schemes:</strong> The National Housing Bank provides
                refinancing to lenders who offer loans to EWS/LIG borrowers at subsidised rates
                — benefiting from pass-through of lower cost of funds.
              </span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-orange-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            PMAY Subsidy Benefit for ₹30,000 Salary
          </h2>
          <p>
            Under PMAY-CLSS (EWS/LIG category), a 6.5% interest subsidy is available on the
            first ₹6 lakh of your home loan. Here&apos;s how the benefit works for a typical
            ₹30,000 salary borrower:
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b border-border bg-gray-50">
                  <th className="py-2.5 px-4 text-left font-semibold text-gray-800">Parameter</th>
                  <th className="py-2.5 px-4 text-left font-semibold text-gray-800">Without PMAY</th>
                  <th className="py-2.5 px-4 text-left font-semibold text-primary">With PMAY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Loan amount", "₹10 lakh", "₹10 lakh"],
                  ["Interest rate", "8.5% p.a.", "8.5% (subsidy on ₹6L)"],
                  ["Effective rate on ₹6L", "8.5%", "2% (after 6.5% subsidy)"],
                  ["Upfront subsidy credited", "—", "~₹2.67 lakh"],
                  ["Net outstanding after subsidy", "₹10 lakh", "~₹7.33 lakh"],
                  ["Monthly EMI (20 yr)", "~₹8,678", "~₹6,350 (approx.)"],
                ].map(([param, without, with_]) => (
                  <tr key={param}>
                    <td className="py-2.5 px-4 font-medium text-gray-700">{param}</td>
                    <td className="py-2.5 px-4 text-gray-600">{without}</td>
                    <td className="py-2.5 px-4 font-semibold text-primary">{with_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Subsidy calculated as NPV of ₹2,67,280 at 9% discount rate. Actual subsidy amount
            depends on loan tenure and disbursement date. Apply through your bank as a PMAY
            beneficiary.
          </p>
        </section>

      </div>

      {/* Internal links */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/home-loan-eligibility"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">Home Loan Eligibility Calculator</p>
            <p className="text-xs text-gray-500">Check eligibility for any salary</p>
          </div>
          <span className="text-primary">→</span>
        </Link>
        <Link
          href="/emi-calculator"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">EMI Calculator</p>
            <p className="text-xs text-gray-500">Calculate your monthly payment</p>
          </div>
          <span className="text-primary">→</span>
        </Link>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
