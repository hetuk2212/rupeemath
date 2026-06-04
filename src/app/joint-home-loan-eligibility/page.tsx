import type { Metadata } from "next";
import Link from "next/link";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Joint Home Loan Eligibility Calculator — Combined Income Eligibility 2026",
  description:
    "Calculate joint home loan eligibility using combined income of both applicants. See how much more you can borrow with a co-applicant. Free calculator — no signup.",
  keywords: [
    "joint home loan eligibility",
    "home loan eligibility combined income",
    "joint home loan calculator",
    "co-applicant home loan eligibility",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/joint-home-loan-eligibility" },
  openGraph: {
    title: "Joint Home Loan Eligibility Calculator — Combined Income 2026 | RupeeMath",
    description: "Calculate how much home loan you can get with a co-applicant by combining incomes.",
    url: "https://www.rupeemath.co.in/joint-home-loan-eligibility",
  },
};

const faqs = [
  {
    question: "How does joint home loan eligibility work?",
    answer:
      "In a joint home loan, two or more applicants apply together and their incomes are combined for eligibility calculation. The bank calculates the maximum EMI as 40–50% of the total combined income. For example, if applicant 1 earns ₹50,000/month and applicant 2 earns ₹40,000/month, the combined income is ₹90,000. At 50% FOIR, the maximum EMI capacity is ₹45,000 — which can support a home loan of approximately ₹48–50 lakh at 8.5% for 20 years. Both applicants are equally liable to repay the loan and the property title includes both names.",
  },
  {
    question: "Who can be a co-applicant for a joint home loan?",
    answer:
      "Most Indian banks accept the following as co-applicants: (1) Spouse — the most common co-applicant; both incomes are fully counted and both get Section 24 and 80C tax benefits. (2) Parent — especially useful for younger borrowers to boost eligibility; however, the bank may limit the tenure based on the older applicant's age. (3) Sibling — accepted by some banks, but rules vary. (4) Adult children — a working son or daughter can be a co-applicant with parents. The key rule: the co-applicant should ideally be a co-owner of the property as well for maximum tax benefits.",
  },
  {
    question: "Does a joint home loan increase eligibility significantly?",
    answer:
      "Yes — significantly. Adding a co-applicant with a working income can increase your eligible loan amount by 40–80%. For example: on a ₹50,000 individual salary (no existing EMIs), eligibility is approximately ₹26 lakh at 8.5%, 20 years. Add a spouse earning ₹40,000 → combined income ₹90,000 → eligibility jumps to approximately ₹47 lakh — an 81% increase. The exact increase depends on the co-applicant's income and their existing EMI obligations.",
  },
  {
    question: "What are the tax benefits of a joint home loan?",
    answer:
      "A joint home loan offers double tax benefits — each co-borrower can independently claim: (1) Section 24(b): Up to ₹2 lakh/year deduction on interest paid (per person), saving up to ₹60,000/year per person at 30% tax rate. (2) Section 80C: Up to ₹1.5 lakh/year deduction on principal repayment (per person). Combined, a couple can save up to ₹2.1 lakh/year in taxes on a joint home loan — a major financial benefit, especially for a ₹50+ lakh loan. Both must be co-owners of the property to claim these deductions.",
  },
  {
    question: "Does a joint home loan affect both applicants' CIBIL scores?",
    answer:
      "Yes. A joint home loan appears in the credit report of all co-applicants. This means: (1) Timely payments improve both applicants' CIBIL scores. (2) Any delay or default negatively impacts both scores equally. (3) The loan liability is counted against both applicants' FOIR for any future credit applications. It's important that both applicants understand this commitment and that income, employment, and financial stability are reasonably stable for the loan tenure.",
  },
];

const comparisonRows = [
  { scenario: "₹30,000 salary (single)", single: "₹11–14 lakh", joint: "—" },
  { scenario: "₹50,000 salary (single)", single: "₹19–24 lakh", joint: "—" },
  { scenario: "₹30K + ₹25K (joint)", single: "—", joint: "₹20–26 lakh" },
  { scenario: "₹50K + ₹40K (joint)", single: "—", joint: "₹33–42 lakh" },
  { scenario: "₹75K + ₹50K (joint)", single: "—", joint: "₹46–58 lakh" },
];

export default function JointHomeLoanPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Joint Home Loan Eligibility" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Joint Home Loan Eligibility Calculator — Combined Income 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your joint home loan eligibility by entering the combined income of both
        applicants. See how much more loan you can get with a co-applicant versus applying alone.
      </p>

      <div className="mb-4 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm text-gray-700">
        <strong>How to use for joint eligibility:</strong> Enter the <strong>combined net income</strong> of both applicants in the &ldquo;Net Monthly Income&rdquo; field. Add both applicants&apos; existing EMIs in the &ldquo;Existing Monthly EMIs&rdquo; field. The calculator will show your combined loan eligibility.
      </div>

      <HomeLoanCalculator defaultIncome={90000} />
      <PDFDownload title="Joint Home Loan Eligibility Report" />

      {/* Joint vs single comparison table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">Joint vs Single Home Loan Eligibility</h2>
        <p className="mb-4 text-sm text-gray-500">
          Estimated loan eligibility at 8.5% interest, 20-year tenure, no existing EMIs
        </p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Applicant Income</th>
                <th className="px-4 py-3 text-right font-semibold">Single Applicant</th>
                <th className="px-4 py-3 text-right font-semibold">Joint Applicant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {comparisonRows.map((row, i) => (
                <tr key={row.scenario} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.scenario}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-700">{row.single}</td>
                  <td className="px-4 py-3 text-right font-semibold text-primary">{row.joint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Estimates based on 8.5% interest rate, 20-year tenure, 50% FOIR. Actual eligibility varies by bank and credit profile.
        </p>
      </div>

      <AffiliateCTA
        heading="Get Pre-Approved Offers for Joint Home Loan"
        subtext="Check combined eligibility offers from 20+ banks without affecting your CIBIL score."
        ctaLabel="Check Joint Home Loan Offers →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Benefits of a Joint Home Loan</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { tip: "Higher loan eligibility", detail: "The most obvious benefit — combining incomes can increase your eligible loan amount by 40–80%. A couple earning ₹50K + ₹40K can access a ₹48 lakh loan that neither could get individually." },
              { tip: "Double tax benefits", detail: "Both co-borrowers can independently claim Section 24(b) interest deduction (up to ₹2L/year each) and Section 80C principal deduction (up to ₹1.5L/year each) — saving up to ₹2.1L/year combined in taxes." },
              { tip: "Shared repayment burden", detail: "Two incomes servicing one loan makes the repayment more manageable, with less strain on individual budgets. This also provides a safety net if one applicant faces temporary income disruption." },
              { tip: "Better negotiating position", detail: "Dual-income households with two good CIBIL scores have stronger negotiating power for a lower interest rate, since the bank perceives lower default risk." },
            ].map((item) => (
              <li key={item.tip} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong>{item.tip}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Things to Consider Before a Joint Home Loan</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { point: "Both applicants are equally liable", detail: "If one applicant defaults, the other becomes fully responsible for repayments. The loan also appears in both credit reports — a single missed payment hurts both CIBIL scores." },
              { point: "Loan tenure is limited by the older applicant's age", detail: "Banks calculate maximum tenure as (retirement age − current age) for the older applicant. If one co-applicant is 50 years old, the maximum tenure may be capped at 10 years instead of 20." },
              { point: "Both should ideally be co-owners of the property", detail: "To claim tax benefits, each co-borrower must also be a co-owner of the property. A co-borrower who is not a co-owner cannot claim Section 24 or 80C deductions." },
              { point: "Future credit applications are affected", detail: "The joint home loan EMI is counted against each applicant's FOIR for any future loan application — car loan, personal loan, etc. Consider this before co-applying if either applicant plans to take other loans soon." },
            ].map((item) => (
              <li key={item.point} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong>{item.point}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How Banks Calculate Joint Home Loan Eligibility</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            The calculation follows the standard FOIR method applied to combined income. Banks add the net
            monthly take-home salaries of all co-applicants, subtract existing total EMI obligations of all
            applicants, and multiply the remaining income by the FOIR limit (usually 40–50%) to arrive at
            the maximum allowable EMI. This maximum EMI is then reverse-calculated using the standard EMI
            formula to determine the maximum loan amount at the given interest rate and tenure. For example:
            combined income ₹90,000 → 50% FOIR → max EMI ₹45,000 → at 8.5% for 20 years →
            maximum loan ≈ ₹48 lakh. Both applicants must individually meet the bank&apos;s minimum income
            and employment stability criteria, even though eligibility is calculated on the combined figure.
          </p>
        </section>
      </div>

      {/* Related calculators */}
      <section className="mt-10 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-base font-bold text-gray-900">Related Home Loan Calculators</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/home-loan-eligibility"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Home Loan Eligibility (Single) <span>→</span>
          </Link>
          <Link
            href="/emi-calculator"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Home Loan EMI Calculator <span>→</span>
          </Link>
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
