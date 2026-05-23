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
    question: "How is EMI calculated?",
    answer:
      "EMI = P × r × (1+r)^n / [(1+r)^n – 1], where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of monthly installments.",
  },
  {
    question: "Does prepayment reduce EMI?",
    answer:
      "Prepayment reduces the outstanding principal, which reduces either the tenure or the EMI amount depending on the bank's policy. Most banks offer the option to choose.",
  },
  {
    question: "What is a good EMI-to-income ratio?",
    answer:
      "Ideally, your total EMI obligations should not exceed 40–50% of your net monthly income. This is known as the Fixed Obligation to Income Ratio (FOIR) that lenders use to evaluate loan eligibility.",
  },
  {
    question: "What is the difference between flat rate and reducing balance EMI?",
    answer:
      "In flat rate, interest is calculated on the full principal throughout the tenure. In reducing balance (used by most banks), interest is calculated on the remaining outstanding principal each month — which is cheaper.",
  },
  {
    question: "Can I reduce my home loan EMI?",
    answer:
      "Yes. You can reduce EMI by: (1) making a larger down payment, (2) choosing a longer tenure, (3) negotiating a lower interest rate with your bank, or (4) making partial prepayments to reduce the principal.",
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
      <FAQSection items={faqs} />
    </div>
  );
}
