import type { Metadata } from "next";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Loan Eligibility Calculator 2025 — Check How Much Loan You Get",
  description:
    "Check your home loan eligibility instantly. Enter your monthly income and existing EMIs to find the maximum home loan amount you can get from Indian banks.",
  keywords: ["home loan eligibility calculator", "home loan eligibility India", "how much home loan can I get", "FOIR calculator"],
  alternates: { canonical: "https://rupeemath.com/home-loan-eligibility" },
  openGraph: {
    title: "Home Loan Eligibility Calculator | RupeeMath",
    description: "Check your maximum home loan eligibility based on income and existing EMIs.",
    url: "https://rupeemath.com/home-loan-eligibility",
  },
};

const faqs = [
  {
    question: "How is home loan eligibility calculated?",
    answer:
      "Banks use the FOIR (Fixed Obligation to Income Ratio) method. They typically allow up to 50% of your net monthly income toward all EMIs combined. Subtract your existing EMIs to find the maximum new EMI, then reverse-calculate the loan amount.",
  },
  {
    question: "What is FOIR in home loans?",
    answer:
      "FOIR stands for Fixed Obligation to Income Ratio. It's the percentage of your income committed to loan EMIs. Most banks cap FOIR at 40–50%. A lower FOIR means you're eligible for a larger loan.",
  },
  {
    question: "What salary is required for a ₹50 lakh home loan?",
    answer:
      "At 8.5% interest for 20 years, a ₹50 lakh loan requires an EMI of approximately ₹43,391/month. With 50% FOIR and no existing EMIs, you'd need a monthly income of at least ₹86,782. More income is needed if you have other loans.",
  },
  {
    question: "Does CIBIL score affect home loan eligibility?",
    answer:
      "Yes. A CIBIL score above 750 is considered good and often results in faster approval and lower interest rates. Scores below 650 may lead to rejection or higher rates. Income alone doesn't guarantee eligibility.",
  },
  {
    question: "Can both spouses apply for a home loan together?",
    answer:
      "Yes, joint home loans are common and beneficial. The combined income of both applicants increases eligibility. Both can claim separate tax deductions on the loan — up to ₹1.5 lakh under 80C and ₹2 lakh under Section 24(b) each.",
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
      <AffiliateCTA
        heading="Check Your Real Eligibility with Banks"
        subtext="Get pre-approved offers from 20+ banks without affecting your CIBIL score."
        ctaLabel="Check Home Loan Offers →"
        ctaHref="#"
      />
      <FAQSection items={faqs} />
    </div>
  );
}
