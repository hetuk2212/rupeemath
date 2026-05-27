import type { Metadata } from "next";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SalaryLoanTable } from "@/components/shared/SalaryLoanTable";

export const metadata: Metadata = {
  title: "Home Loan Eligibility by Salary 2026 — How Much Loan Can You Get?",
  description: "Check home loan eligibility by salary. Free calculator shows maximum home loan amount for any salary in India. No signup. Instant results.",
  keywords: ["home loan eligibility by salary", "maximum home loan on salary", "how much home loan can I get", "home loan amount by salary india"],
  alternates: { canonical: "https://www.rupeemath.co.in/home-loan-on-salary" },
};

const faqs = [
  {
    question: "How much home loan can I get on ₹30,000 salary?",
    answer: "On a ₹30,000 monthly salary with no existing EMIs, most Indian banks will approve a home loan of approximately ₹11.5 lakh for a 20-year tenure, ₹13 lakh for 25 years, and ₹14.5 lakh for 30 years — at 8.5% interest rate using the standard 40–50% FOIR rule. If you add a co-applicant with additional income, the combined eligibility increases proportionally. Improving your CIBIL score above 750 may also help you secure a slightly higher amount.",
  },
  {
    question: "What is the maximum home loan I can get?",
    answer: "There is no fixed maximum — it depends entirely on your income, existing obligations, credit profile, and the lender's policy. Practically, most banks cap the loan at 75–80% of the property's market value (LTV ratio) regardless of income. For high-income individuals, some lenders extend home loans up to ₹10–15 crore. The limiting factor is usually the FOIR: total EMIs must not exceed 50% of net monthly income.",
  },
  {
    question: "How do banks calculate home loan eligibility?",
    answer: "Banks use the FOIR (Fixed Obligation to Income Ratio) method. Step 1: Calculate your maximum allowable EMI — typically 40–50% of your net take-home salary. Step 2: Subtract all existing EMIs (car loan, personal loan, credit card minimum payments). Step 3: Use the remaining EMI capacity to reverse-calculate the loan amount using the standard EMI formula at the current interest rate and your chosen tenure. Higher tenure = lower required monthly EMI = higher eligible loan amount.",
  },
  {
    question: "Can I get a home loan with an existing car loan EMI?",
    answer: "Yes, but your car loan EMI directly reduces your available EMI headroom. For example, if your salary is ₹60,000, your max EMI is ₹30,000 (at 50% FOIR). If your car EMI is ₹8,000, only ₹22,000 is available for a home loan EMI — which reduces your eligible loan amount significantly. The best strategy before applying for a home loan is to close smaller loans like personal loans or car loans to free up the maximum FOIR capacity.",
  },
  {
    question: "How can I increase my home loan eligibility?",
    answer: "The most effective ways to increase eligibility are: (1) Add a working co-applicant to combine incomes — a working spouse can nearly double your eligibility. (2) Close existing loans before applying to reduce FOIR obligations. (3) Choose a longer tenure (25–30 years) to lower the required monthly EMI. (4) Maintain a CIBIL score above 750 — lenders may extend higher amounts at better rates. (5) Show all legitimate income sources (rental income, freelance, part-time) with proper documentation in your ITR.",
  },
];

export default function HomeLoanOnSalaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Home Loan Eligibility by Salary" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Home Loan Eligibility by Salary 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Enter your salary and obligations below to instantly calculate the maximum home loan you qualify for. See exact figures for 20, 25, and 30-year tenures.
      </p>

      <HomeLoanCalculator />
      <PDFDownload title="Home Loan Eligibility Report" />
      <SalaryLoanTable />

      <AffiliateCTA
        heading="Get Pre-Approved Home Loan Offers"
        subtext="Check offers from 20+ banks based on your exact eligibility — no CIBIL impact."
        ctaLabel="Check Home Loan Offers →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How Do Banks Calculate Home Loan Eligibility Based on Salary?</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            Indian banks and NBFCs use a standardised method called <strong>FOIR — Fixed Obligation to Income Ratio</strong> — to determine how much home loan you can get on your salary. Here is exactly how the calculation works:
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            <strong>Step 1 — Determine your net take-home salary.</strong> Banks use your net monthly income after tax and PF deductions, not your gross CTC. If your CTC is ₹12 lakh per year but your take-home is ₹80,000/month, the bank uses ₹80,000.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            <strong>Step 2 — Apply the FOIR limit.</strong> Most banks cap total EMI outgo at 40–50% of your net income. For a ₹80,000 salary at 50% FOIR, the maximum total EMI you can have is ₹40,000/month.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            <strong>Step 3 — Subtract existing EMIs.</strong> If you already pay ₹8,000/month on a car loan, only ₹32,000 is available as a home loan EMI. This is why clearing existing loans before applying significantly boosts eligibility.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            <strong>Step 4 — Reverse-calculate the loan amount.</strong> Using the standard EMI formula, the bank calculates the maximum principal for which the monthly EMI equals your remaining capacity. At 8.5% for 20 years, a ₹32,000 EMI capacity translates to a loan of roughly ₹33–34 lakh.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            <strong>Step 5 — Apply LTV (Loan-to-Value) cap.</strong> Banks lend a maximum of 75–80% of the property's registered value, regardless of income. If the property costs ₹40 lakh, the maximum loan is ₹32 lakh even if your income supports a higher amount.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Beyond income, your <strong>CIBIL score</strong> (minimum 700, ideally above 750), employment stability, age, and the property's legal status all factor into the final sanction. Use the calculator and table above to get a quick estimate, then approach banks with a clear picture of your expected eligibility.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Key Factors That Affect Your Home Loan Eligibility</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Net monthly income:</strong> Higher take-home salary directly increases the maximum EMI banks will allow, which increases eligible loan amount.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Loan tenure:</strong> A 30-year loan has a lower monthly EMI than a 20-year loan for the same amount — so longer tenure always increases eligibility.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Existing obligations:</strong> Car loans, personal loans, and even credit card minimum dues reduce your available EMI capacity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>Co-applicant income:</strong> Adding a working spouse or parent as co-borrower combines both incomes, often increasing eligibility by 50–100%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span><strong>CIBIL score:</strong> A score above 750 improves your chances of approval and may result in a lower interest rate, which in turn increases the principal you can borrow for the same EMI.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use This Home Loan on Salary Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Monthly Income:</strong> Enter your net take-home pay (after all deductions). For a joint application, enter the combined household income.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Existing EMIs:</strong> Add up all current monthly EMI payments — car loan, personal loan, credit card dues.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Interest Rate:</strong> Use the current rate from your preferred bank (8.5% is a safe baseline for 2026).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Tenure:</strong> Try 20, 25, and 30 years to see how tenure affects your eligible loan amount.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">5.</span><span><strong>Cross-check with the table:</strong> Use the salary-wise table below the calculator to quickly verify figures across common salary ranges.</span></li>
          </ul>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
