import type { Metadata } from "next";
import { IncomeTaxCalculator } from "@/components/calculators/IncomeTaxCalculator";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Income Tax Calculator FY 2024-25 — Old vs New Regime",
  description:
    "Calculate your income tax for FY 2024-25 under both old and new tax regimes. Enter salary and deductions to find which regime saves you more tax.",
  keywords: ["income tax calculator India 2024-25", "old vs new tax regime", "salary tax calculator India", "Section 80C deductions"],
  alternates: { canonical: "https://rupeemath.com/income-tax-calculator" },
  openGraph: {
    title: "Income Tax Calculator FY 2024-25 | RupeeMath",
    description: "Compare old and new tax regime. Find which saves you more tax in India.",
    url: "https://rupeemath.com/income-tax-calculator",
  },
};

const faqs = [
  {
    question: "Which is better — old or new tax regime in India?",
    answer:
      "It depends on your deductions. If you have significant Section 80C investments, HRA, and home loan interest, the old regime often works out cheaper. If you have few deductions, the new regime (with lower slab rates) is usually better. Our calculator shows you which saves more.",
  },
  {
    question: "What is the standard deduction for FY 2024-25?",
    answer:
      "For FY 2024-25 (Budget 2024): Old regime — ₹50,000; New regime — ₹75,000 (increased from ₹50,000 in Budget 2024). This is a flat deduction available to all salaried employees and pensioners.",
  },
  {
    question: "What are the new income tax slabs for FY 2024-25?",
    answer:
      "New regime slabs: ₹0–3L = nil; ₹3–7L = 5%; ₹7–10L = 10%; ₹10–12L = 15%; ₹12–15L = 20%; above ₹15L = 30%. Plus 4% health and education cess on tax. Rebate u/s 87A applies if income ≤₹7L.",
  },
  {
    question: "What is Section 87A rebate?",
    answer:
      "Section 87A provides a full tax rebate: in the old regime, no tax if taxable income ≤₹5 lakh; in the new regime, no tax if taxable income ≤₹7 lakh. This means zero tax outgo even if your salary is just at or below these thresholds.",
  },
  {
    question: "Can I switch between old and new tax regime every year?",
    answer:
      "Salaried employees can switch between regimes every year at the time of filing their ITR. However, those with business income can only switch once. Inform your employer about your preferred regime at the start of the financial year for correct TDS deduction.",
  },
];

export default function IncomeTaxPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Income Tax Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Income Tax Calculator FY 2024-25
      </h1>
      <p className="mb-8 text-gray-500">
        Compare your tax liability under the old and new regime. Enter your salary and deductions
        to instantly see which regime puts more money in your pocket.
      </p>
      <IncomeTaxCalculator />
      <AffiliateCTA
        heading="Save More Tax with NPS"
        subtext="Invest in NPS and claim additional ₹50,000 deduction under Section 80CCD(1B)."
        ctaLabel="Explore NPS Plans →"
        ctaHref="#"
      />
      <FAQSection items={faqs} />
    </div>
  );
}
