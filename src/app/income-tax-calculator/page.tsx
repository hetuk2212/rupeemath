import type { Metadata } from "next";
import Link from "next/link";
import { IncomeTaxCalculator } from "@/components/calculators/IncomeTaxCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Income Tax Calculator FY 2024-25 — Old vs New Regime",
  description:
    "Calculate your income tax for FY 2024-25 under both old and new tax regimes. Enter salary and deductions to find which regime saves you more tax.",
  keywords: ["income tax calculator India 2024-25", "old vs new tax regime", "salary tax calculator India", "Section 80C deductions"],
  alternates: { canonical: "https://www.rupeemath.co.in/income-tax-calculator" },
  openGraph: {
    title: "Income Tax Calculator FY 2024-25 | RupeeMath",
    description: "Compare old and new tax regime. Find which saves you more tax in India.",
    url: "https://www.rupeemath.co.in/income-tax-calculator",
  },
};

const faqs = [
  {
    question: "Who should choose the new tax regime in FY 2024-25?",
    answer:
      "The new regime generally benefits taxpayers with limited deductions — typically younger employees, self-employed individuals, or those without a home loan or significant 80C investments. With the enhanced standard deduction of ₹75,000 and zero tax up to ₹7 lakh (87A rebate), the new regime is now the default for most salaried employees.",
  },
  {
    question: "What deductions are NOT allowed under the new tax regime?",
    answer:
      "The new regime disallows most common deductions: Section 80C (₹1.5L), Section 80D (health insurance), HRA exemption, LTA, home loan interest under Section 24(b), Section 80CCD(1B) for NPS, and most other Chapter VI-A deductions. Only the standard deduction of ₹75,000 and employer's NPS contribution (80CCD(2)) are allowed.",
  },
  {
    question: "What is the surcharge on income tax in India?",
    answer:
      "Surcharge applies on income above ₹50 lakh: 10% surcharge for ₹50L–₹1Cr; 15% for ₹1Cr–₹2Cr; 25% for ₹2Cr–₹5Cr; 37% for above ₹5Cr (capped at 25% under the new regime per Budget 2023). In addition, a 4% Health and Education Cess applies on (tax + surcharge) for all taxpayers.",
  },
  {
    question: "Can NRIs use this income tax calculator?",
    answer:
      "This calculator is designed for resident Indian salaried individuals. NRIs have different tax rules: global income is not taxed in India, only India-sourced income is taxed, and NRIs cannot claim certain deductions like 80C under some conditions. NRIs should consult a CA or use an NRI-specific tax tool for accurate calculations.",
  },
  {
    question: "How do I save the most tax on a salary of ₹10 lakh?",
    answer:
      "Under the old regime with maximum deductions: Standard deduction ₹50K + 80C ₹1.5L + 80D ₹25K + NPS 80CCD(1B) ₹50K = ₹2.75L in deductions. Taxable income = ₹7.25L. Estimated tax ≈ ₹52,500 + cess. Under the new regime: Standard deduction ₹75K. Taxable income = ₹9.25L. Estimated tax ≈ ₹57,500 + cess. At ₹10L salary, the old regime often saves more if you have these investments — use our calculator to compare your exact situation.",
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
      <PDFDownload title="Income Tax Calculator Report" />
      <AffiliateCTA
        heading="Save More Tax with NPS"
        subtext="Invest in NPS and claim additional ₹50,000 deduction under Section 80CCD(1B)."
        ctaLabel="Explore NPS Plans →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Old vs New Tax Regime — Which is Better?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            India&apos;s dual income tax regime gives every taxpayer a choice. The <strong>old regime</strong>
            has higher tax rates but allows a wide range of deductions (80C, HRA, home loan interest,
            80D, etc.), which can significantly reduce your taxable income. The <strong>new regime
            (Budget 2024)</strong> offers lower tax rates and a higher standard deduction of ₹75,000,
            but most deductions are not available. The new regime is now the <strong>default regime</strong>
            from FY 2024-25 — if you don&apos;t declare a preference, your employer will apply it. The
            right choice depends entirely on your deductions: heavy investors in 80C, HRA claimants,
            and home loan borrowers often save more under the old regime, while those with few
            deductions usually benefit from the new regime&apos;s lower rates.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath Income Tax Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Gross Salary:</strong> Enter your annual CTC or gross salary (before any deductions).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>HRA & LTA:</strong> Enter your actual HRA and LTA exemptions if applicable (only relevant for the old regime).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Deductions:</strong> Fill in Section 80C (max ₹1.5L), 80D (health insurance), home loan interest (max ₹2L), NPS contribution (max ₹50K extra), and other deductions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Compare:</strong> The calculator shows tax under both regimes side-by-side — tax payable, in-hand monthly salary, and which regime saves more money.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Inform your employer:</strong> Once you decide, submit your investment declaration to HR at the start of the financial year so they deduct TDS under the correct regime.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">FY 2024-25 Income Tax Slabs at a Glance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold text-gray-800">Old Regime</p>
              <table className="w-full text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-1 text-left font-medium text-gray-700">Income Slab</th>
                    <th className="py-1 text-left font-medium text-gray-700">Tax Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-1">Up to ₹2.5 lakh</td><td className="py-1">Nil</td></tr>
                  <tr><td className="py-1">₹2.5L – ₹5L</td><td className="py-1">5%</td></tr>
                  <tr><td className="py-1">₹5L – ₹10L</td><td className="py-1">20%</td></tr>
                  <tr><td className="py-1">Above ₹10L</td><td className="py-1">30%</td></tr>
                </tbody>
              </table>
              <p className="mt-1 text-xs text-gray-400">87A rebate: zero tax if income ≤ ₹5L</p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-gray-800">New Regime (Budget 2024)</p>
              <table className="w-full text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-1 text-left font-medium text-gray-700">Income Slab</th>
                    <th className="py-1 text-left font-medium text-gray-700">Tax Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-1">Up to ₹3 lakh</td><td className="py-1">Nil</td></tr>
                  <tr><td className="py-1">₹3L – ₹7L</td><td className="py-1">5%</td></tr>
                  <tr><td className="py-1">₹7L – ₹10L</td><td className="py-1">10%</td></tr>
                  <tr><td className="py-1">₹10L – ₹12L</td><td className="py-1">15%</td></tr>
                  <tr><td className="py-1">₹12L – ₹15L</td><td className="py-1">20%</td></tr>
                  <tr><td className="py-1">Above ₹15L</td><td className="py-1">30%</td></tr>
                </tbody>
              </table>
              <p className="mt-1 text-xs text-gray-400">87A rebate: zero tax if income ≤ ₹7L</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">All figures are for individuals below 60 years. Add 4% cess on final tax amount. Standard deduction: ₹50,000 (old) / ₹75,000 (new).</p>
        </section>
      </div>

      {/* Related Calculators */}
      <section className="mt-10 rounded-xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Related Calculators</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/salary-calculator"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Calculate your in-hand salary
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/sip-calculator"
            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-orange-50"
          >
            Save tax with SIP investments
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} />
    </div>
  );
}
