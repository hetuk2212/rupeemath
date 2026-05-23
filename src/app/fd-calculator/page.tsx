import type { Metadata } from "next";
import { FDCalculator } from "@/components/calculators/FDCalculator";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "FD Calculator 2025 — Fixed Deposit Maturity Calculator",
  description:
    "Calculate your Fixed Deposit maturity amount online. Enter principal, interest rate, tenure, and compounding frequency to see your FD returns instantly.",
  keywords: ["FD calculator", "fixed deposit calculator", "FD interest calculator India", "FD maturity amount"],
  alternates: { canonical: "https://www.rupeemath.co.in/fd-calculator" },
  openGraph: {
    title: "FD Calculator — Fixed Deposit Returns | RupeeMath",
    description: "Free FD calculator for Indian banks. Calculate maturity amount for any compounding frequency.",
    url: "https://www.rupeemath.co.in/fd-calculator",
  },
};

const faqs = [
  {
    question: "How is FD interest calculated?",
    answer:
      "FD interest is calculated using: A = P × (1 + r/n)^(n×t), where P is principal, r is annual rate/100, n is compounding frequency per year, and t is tenure in years. Most Indian banks compound quarterly.",
  },
  {
    question: "Is FD interest taxable in India?",
    answer:
      "Yes. FD interest is taxable as 'Income from Other Sources' at your income tax slab rate. Banks deduct TDS at 10% when interest exceeds ₹40,000 per year (₹50,000 for senior citizens). Submit Form 15G/15H to avoid TDS if your income is below taxable limit.",
  },
  {
    question: "Which bank gives the highest FD interest rate?",
    answer:
      "Small finance banks and some private banks typically offer higher rates (7–9%) than major PSU banks (6–7%). Senior citizens get 0.25–0.5% extra. Always check the latest rates on the bank's website before investing.",
  },
  {
    question: "What is the maximum FD amount insured in India?",
    answer:
      "DICGC (Deposit Insurance and Credit Guarantee Corporation) insures bank deposits up to ₹5 lakh per depositor per bank across all savings, FDs, and other deposits combined.",
  },
  {
    question: "Can I break my FD before maturity?",
    answer:
      "Yes, most FDs can be broken prematurely with a penalty of 0.5–1% on the applicable rate. Tax-saving FDs (5-year lock-in under 80C) cannot be broken before maturity.",
  },
];

export default function FDCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "FD Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        FD Calculator — Calculate Fixed Deposit Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Find out exactly how much your Fixed Deposit will grow. Supports all compounding
        frequencies — monthly, quarterly, half-yearly, and annually.
      </p>
      <FDCalculator />
      <AffiliateCTA
        heading="Get the Best FD Rates"
        subtext="Compare Fixed Deposit rates from top Indian banks and small finance banks."
        ctaLabel="Compare FD Rates →"
        ctaHref="#"
      />
      <FAQSection items={faqs} />
    </div>
  );
}
