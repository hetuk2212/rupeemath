import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/calculators/SalaryCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "CTC to In-Hand Salary Calculator 2025 — Monthly Take-Home",
  description: "Convert your annual CTC to monthly in-hand salary. Enter CTC, PF, professional tax, and tax regime to see your exact take-home salary with deductions breakdown.",
  keywords: ["ctc to in hand salary calculator", "salary calculator india", "take home salary calculator", "CTC calculator 2025"],
  alternates: { canonical: "https://www.rupeemath.co.in/salary-calculator" },
};

const faqs = [
  { question: "What is the difference between CTC and in-hand salary?", answer: "CTC (Cost to Company) is the total amount an employer spends on an employee annually, including basic salary, allowances, employer PF contribution, gratuity provision, and other benefits. In-hand salary (take-home) is what you actually receive in your bank account after deductions like employee PF, professional tax, and income tax. In-hand is typically 65–80% of CTC depending on tax and PF deductions." },
  { question: "How is employee PF calculated from CTC?", answer: "Employee PF is 12% of your basic salary. Basic salary is typically 50% of your gross monthly salary (CTC/12). So if your CTC is ₹12 lakh, gross monthly is ₹1 lakh, basic is ₹50,000, and employee PF is ₹6,000/month. The employer's matching 12% PF is already included in the CTC — it does not come out of your gross salary again." },
  { question: "What is professional tax and who pays it?", answer: "Professional tax is a state-level tax on employment income. Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, and a few other states levy it. The amount is small (₹150–₹200/month) and is deducted from your salary by your employer. It is not levied by the central government; states like Delhi, Rajasthan, and UP do not have professional tax." },
  { question: "Which tax regime gives higher in-hand salary?", answer: "It depends on your deductions. If you have significant Section 80C investments (₹1.5L), home loan interest, and HRA, the old regime's lower taxable income can result in higher take-home. If you have few deductions, the new regime's lower tax rates and ₹75,000 standard deduction usually give a higher in-hand. Our calculator shows both so you can compare instantly." },
  { question: "Is the 50% basic salary assumption accurate?", answer: "50% of gross as basic salary is a common industry standard used by many companies, but it can vary by employer. Some companies set basic at 40% or 60% of gross. The PF deduction (12% of basic) changes accordingly. If you know your actual basic salary from your payslip, you can set the PF percentage in this calculator to match your exact situation." },
];

export default function SalaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Salary Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        CTC to In-Hand Salary Calculator
      </h1>
      <p className="mb-8 text-gray-500">
        Convert your annual CTC into monthly take-home salary. See the full breakdown of PF, professional tax, and income tax deductions.
      </p>
      <SalaryCalculator />
      <PDFDownload title="Salary Calculator Report" />
      <AffiliateCTA
        heading="Maximize Your Take-Home Salary"
        subtext="Invest in tax-saving instruments and reduce your income tax outgo."
        ctaLabel="Explore Tax-Saving Options →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is CTC vs In-Hand Salary?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Your <strong>CTC (Cost to Company)</strong> is the total annual expenditure your employer incurs for employing you. It includes your gross salary, employer&apos;s PF contribution (12% of basic), gratuity provision (4.81% of basic), medical insurance, and other perks. Your <strong>in-hand or take-home salary</strong> is the amount credited to your bank account every month — after deducting employee PF (12% of basic), professional tax (if applicable in your state), and income tax (TDS). The gap between CTC and in-hand can be 20–35% depending on your tax slab and deductions. This calculator uses a standard 50% basic assumption and the tax regime you choose to compute the closest estimate of your monthly take-home.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the Salary Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Annual CTC:</strong> Enter your total CTC as mentioned in your offer letter.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>PF %:</strong> 12% is the statutory rate. Keep it if standard; adjust to 0% if your employer uses NPS instead.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Professional Tax:</strong> Select your state. If your state is not listed or doesn&apos;t have PT, choose ₹0.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Tax Regime:</strong> Toggle between old and new regime to see which gives higher in-hand.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">5.</span><span><strong>Result:</strong> See your monthly in-hand and full deduction breakdown. Download as PDF to share with your employer or CA.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Typical Salary Structure in India</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead><tr className="border-b border-border"><th className="py-2 text-left font-semibold text-gray-700">Component</th><th className="py-2 text-left font-semibold text-gray-700">Typical %</th><th className="py-2 text-left font-semibold text-gray-700">Notes</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Basic Salary</td><td className="py-2">40–50%</td><td className="py-2">PF calculated on this</td></tr>
                <tr><td className="py-2">HRA</td><td className="py-2">20–25%</td><td className="py-2">Partially tax-exempt if renting</td></tr>
                <tr><td className="py-2">Special Allowance</td><td className="py-2">Remaining</td><td className="py-2">Fully taxable</td></tr>
                <tr><td className="py-2">Employee PF</td><td className="py-2">12% of basic</td><td className="py-2">Deducted from gross</td></tr>
                <tr><td className="py-2">Professional Tax</td><td className="py-2">₹0–₹200/mo</td><td className="py-2">State-dependent</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="mt-6 space-y-6">
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Salary Formula and Calculation Method</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The CTC-to-in-hand calculation follows a standard deduction waterfall used by most Indian employers. Here is how each component is computed:
          </p>
          <div className="space-y-3 text-sm">
            {[
              { label: "Gross Monthly Salary", formula: "CTC ÷ 12", note: "Annual CTC divided by 12 months. Includes basic, HRA, and all allowances." },
              { label: "Basic Salary", formula: "50% × Gross Monthly", note: "Industry standard. Your payslip may use 40–60% depending on employer policy." },
              { label: "Employee PF (EPF)", formula: "12% × Basic Salary", note: "Mandatory if basic salary ≤ ₹15,000. Optional above threshold but most companies deduct it." },
              { label: "Professional Tax", formula: "₹150–₹200 / month (state-dependent)", note: "Maharashtra, Karnataka, WB deduct this. Delhi, UP, Rajasthan do not levy PT." },
              { label: "Income Tax (TDS)", formula: "Based on applicable slab after standard deduction (₹50K old / ₹75K new)", note: "Divided by 12 and deducted monthly. Varies with investments declared via Form 12BB." },
              { label: "Net In-Hand Salary", formula: "Gross − EPF − PT − TDS", note: "Amount credited to your bank account every month." },
            ].map((row) => (
              <div key={row.label} className="rounded-lg border border-border bg-white p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-800">{row.label}</span>
                  <span className="font-mono text-xs font-bold text-primary">= {row.formula}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Example: CTC ₹12L → Gross ₹1,00,000/mo → Basic ₹50,000 → EPF ₹6,000 → PT ₹200 → TDS ~₹4,000 → <strong>In-hand ~₹89,800/mo</strong> (new regime, no investments).
          </p>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
