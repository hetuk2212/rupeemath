import type { Metadata } from "next";
import { EMICalculator } from "@/components/calculators/EMICalculator";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "EMI Calculator 2025 — Calculate Loan EMI Online",
  description:
    "Calculate your monthly loan EMI instantly. Enter loan amount, interest rate, and tenure to see your EMI, total interest, and complete amortization breakdown.",
  keywords: ["EMI calculator", "loan EMI calculator India", "home loan EMI", "car loan EMI calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/emi-calculator" },
  openGraph: {
    title: "EMI Calculator — Calculate Loan EMI | RupeeMath",
    description: "Free EMI calculator for home loan, car loan, and personal loan. Get instant results.",
    url: "https://www.rupeemath.co.in/emi-calculator",
  },
};

const faqs = [
  {
    question: "Does making a prepayment reduce my EMI or tenure?",
    answer:
      "Both are possible — it depends on your bank's policy. Most banks give you the choice: either reduce the outstanding tenure (you finish the loan faster while keeping the same EMI) or reduce the EMI amount (the tenure stays the same). Reducing tenure saves more interest overall and is usually the better financial choice.",
  },
  {
    question: "What are floating rate home loans?",
    answer:
      "Floating rate home loans have an interest rate that changes with the RBI repo rate. When the RBI cuts rates, your EMI (or tenure) decreases; when rates rise, it increases. Floating rates are linked to an external benchmark (EBLR) since 2019. Fixed rate loans have a constant EMI throughout but are typically 1–2% higher than floating rates.",
  },
  {
    question: "Which bank offers the lowest home loan interest rate in India?",
    answer:
      "Interest rates change frequently. As of 2025, major PSU banks (SBI, Bank of Baroda, PNB) and private banks (HDFC, ICICI, Kotak) offer home loan rates in the range of 8.25–9.5% p.a. for salaried borrowers with good CIBIL scores. Always compare current rates at the time of applying — even a 0.25% difference saves lakhs over a 20-year tenure.",
  },
  {
    question: "How can I reduce my loan EMI?",
    answer:
      "You can reduce your EMI by: (1) making a larger down payment to reduce the principal, (2) choosing a longer repayment tenure (though this increases total interest paid), (3) negotiating a lower rate with your bank or switching to a lower-rate lender via balance transfer, or (4) making partial prepayments to reduce the outstanding principal.",
  },
  {
    question: "What is better — a shorter or longer loan tenure?",
    answer:
      "A shorter tenure means a higher EMI but significantly less total interest paid. A longer tenure lowers your monthly burden but you pay much more interest overall. For example, a ₹30 lakh loan at 8.5% for 10 years costs ₹14.9L in interest; the same loan for 20 years costs ₹33.5L in interest. Choose the shortest tenure your monthly budget can comfortably support.",
  },
];

export default function EMICalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "EMI Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        EMI Calculator — Calculate Your Loan EMI
      </h1>
      <p className="mb-8 text-gray-500">
        Find out exactly how much you&apos;ll pay each month for your home loan, car loan, or
        personal loan. See the principal vs interest breakdown.
      </p>
      <EMICalculator />
      <AffiliateCTA
        heading="Get the Best Loan Rates"
        subtext="Compare interest rates from 20+ banks and NBFCs in India."
        ctaLabel="Compare Loan Rates →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is an EMI?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            An <strong>Equated Monthly Instalment (EMI)</strong> is the fixed amount you pay to your
            lender every month until the loan is fully repaid. Each EMI has two components: a
            <strong> principal</strong> portion (which reduces your outstanding loan balance) and an
            <strong> interest</strong> portion (the cost of borrowing). In the early months of a loan,
            the majority of your EMI goes toward interest. As you pay more instalments, the principal
            component rises and the interest portion decreases — this is called an <strong>amortizing
            loan</strong>. EMI-based loans are used for home loans, car loans, personal loans, and
            consumer durable loans across all major Indian banks and NBFCs.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath EMI Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Loan Amount:</strong> Enter the total loan amount you need (e.g., ₹30,00,000 for a home loan).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Interest Rate:</strong> Enter the annual interest rate offered by your bank (e.g., 8.5%). Check your sanction letter or bank website for the current rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Loan Tenure:</strong> Enter the repayment period in months (e.g., 240 months = 20 years for a home loan).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>View results:</strong> See your Monthly EMI, Total Amount Payable, and Total Interest instantly. The pie chart shows the split between principal and interest.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Compare scenarios:</strong> Adjust the tenure slider to see how a shorter or longer loan period affects your EMI and total interest cost.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">EMI Formula Explained</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The standard reducing balance EMI formula used by all Indian banks is:
          </p>
          <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800">
            EMI = P × r × (1 + r)ⁿ / [(1 + r)ⁿ – 1]
          </div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><strong>P</strong> — Principal loan amount (e.g., ₹30,00,000)</li>
            <li><strong>r</strong> — Monthly interest rate = Annual rate ÷ 12 ÷ 100 (e.g., 8.5% → 0.007083)</li>
            <li><strong>n</strong> — Number of monthly instalments (e.g., 20 years → 240 months)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Example: ₹30 lakh at 8.5% for 20 years → EMI ≈ ₹26,035/month. Total payable ≈ ₹62.5 lakh. Interest cost ≈ ₹32.5 lakh — more than the original loan.
          </p>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
