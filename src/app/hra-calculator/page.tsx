import type { Metadata } from "next";
import { HRACalculator } from "@/components/calculators/HRACalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "HRA Exemption Calculator India — Tax Saving on Rent",
  description: "Calculate your HRA exemption amount under Income Tax rules. Enter basic salary, HRA received, and rent paid to find tax-free HRA and tax savings instantly.",
  keywords: ["hra exemption calculator india", "hra calculator", "hra tax exemption", "house rent allowance calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/hra-calculator" },
};

const faqs = [
  { question: "What are the three conditions for HRA exemption?", answer: "The HRA exemption is the minimum of these three: (1) Actual HRA received from your employer, (2) Rent paid minus 10% of your basic salary, (3) 50% of basic salary if you live in a metro city (Delhi, Mumbai, Chennai, Kolkata) or 40% if non-metro. The lowest of these three amounts is your tax-exempt HRA. The remaining HRA is taxable." },
  { question: "Can I claim HRA if I'm paying rent to my parents?", answer: "Yes, you can claim HRA exemption by paying rent to your parents, provided the arrangement is genuine. Your parents must declare the rental income in their ITR. You need a proper rent agreement, and the payments should be via bank transfer, not cash. This is a legitimate tax planning strategy, especially if your parents are in a lower tax bracket." },
  { question: "What documents do I need to claim HRA exemption?", answer: "You need rent receipts for each month (or a rent agreement if rent is above ₹1 lakh/year, which also requires the landlord's PAN). Submit rent receipts to your HR/employer for TDS purposes. When filing ITR, HRA exemption is claimed via Form 16. For annual rent above ₹1 lakh, landlord's PAN is mandatory for the exemption." },
  { question: "Can I claim both home loan interest (Section 24) and HRA?", answer: "Yes — you can claim both simultaneously. If you own a house in one city and rent a house in another city for work, you can claim the home loan interest deduction under Section 24(b) for the owned house (up to ₹2 lakh) and HRA exemption for the rented accommodation. Both benefits are allowed under current income tax rules." },
  { question: "What if my employer doesn't provide HRA in my salary structure?", answer: "If HRA is not part of your salary structure, you cannot claim it as an exemption via Form 16. However, you can still claim rent paid as a deduction under Section 80GG, provided neither you nor your spouse owns a house in the city you're working in. Section 80GG deduction is limited to the least of: ₹5,000/month, 25% of total income, or rent paid minus 10% of income." },
];

export default function HRAPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "HRA Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        HRA Exemption Calculator — Tax Saving on Rent
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your HRA exemption under Income Tax rules. See exactly which of the three conditions is limiting your exemption and how much tax you save.
      </p>
      <HRACalculator />
      <PDFDownload title="HRA Exemption Calculator Report" />
      <AffiliateCTA
        heading="File Your ITR with Correct HRA Exemption"
        subtext="Ensure you claim maximum HRA benefit while filing your income tax return."
        ctaLabel="File ITR Online →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is HRA Exemption?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>HRA (House Rent Allowance)</strong> is a component of your salary paid by your employer to meet accommodation expenses. If you live in a rented house, you can claim an exemption on part or all of your HRA under Section 10(13A) of the Income Tax Act. The exemption is calculated based on three conditions as per Rule 2A — and the <strong>minimum of the three</strong> is your tax-exempt amount. The remaining HRA is added back to your taxable income. This exemption can save significant tax — a salaried person paying ₹25,000/month rent in a metro city can save ₹65,000–₹90,000/year in tax, depending on their slab. This calculator shows which condition is limiting your exemption and your exact tax savings.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the HRA Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>City Type:</strong> Select Metro (Delhi, Mumbai, Kolkata, Chennai) for 50% basic, or Non-Metro for 40% basic as the third condition.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Basic Salary:</strong> Enter your monthly basic salary (from your payslip, not gross or CTC).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>HRA Received:</strong> Enter the monthly HRA component as per your salary slip.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Rent Paid:</strong> Enter your actual monthly rent. Must be genuinely paid to a landlord.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">5.</span><span><strong>Result:</strong> The calculator shows which condition is the limiting (minimum) factor and your monthly and annual exemption.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">HRA Exemption — The Three Conditions</h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "Actual HRA received from employer", formula: "As per your salary slip (monthly)", note: "Fixed by your employer — cannot be changed." },
              { num: "2", title: "Rent paid minus 10% of basic salary", formula: "Rent − (10% × Basic)", note: "Increases as rent increases. Claim 0 if rent ≤ 10% of basic." },
              { num: "3", title: "% of basic salary (city-dependent)", formula: "50% × Basic (Metro) or 40% × Basic (Non-Metro)", note: "Fixed by your salary and city type." },
            ].map((c) => (
              <div key={c.num} className="flex items-start gap-3 rounded-xl border border-border bg-gray-50 p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">{c.num}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{c.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-primary">{c.formula}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
