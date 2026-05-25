import type { Metadata } from "next";
import { GratuityCalculator } from "@/components/calculators/GratuityCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Gratuity Calculator India 2026 — Check Your Gratuity Amount",
  description: "Calculate your gratuity amount under the Payment of Gratuity Act. Enter your last basic salary, DA, and years of service to see your gratuity and tax exemption.",
  keywords: ["gratuity calculator india 2026", "gratuity calculator", "gratuity calculation formula", "payment of gratuity act calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/gratuity-calculator" },
};

const faqs = [
  { question: "What is the formula for gratuity calculation?", answer: "For employees covered under the Payment of Gratuity Act 1972: Gratuity = (Basic + DA) × 15 / 26 × Years of Service. The '15' represents 15 days and '26' represents 26 working days per month. For employees not covered by the Act (smaller companies or different terms): Gratuity = (Basic + DA) × 15 / 30 × Years of Service, where 30 represents calendar days." },
  { question: "What is the minimum years of service for gratuity?", answer: "An employee must complete at least 5 years of continuous service to be eligible for gratuity under the Payment of Gratuity Act. However, if an employee completes more than 6 months in their last year (i.e., works for 4 years and 7 months), many courts have ruled this should be treated as 5 years. In the unfortunate event of death or disablement, gratuity is paid regardless of the years of service." },
  { question: "Is gratuity taxable in India?", answer: "Gratuity is exempt from income tax up to ₹20 lakh (₹20,00,000) for employees covered under the Payment of Gratuity Act. Government employees get full exemption. For employees not covered by the Act, the exempt amount is the least of: actual gratuity, last 10 months' average salary × half month per year of service, or ₹20 lakh. Any gratuity above the exempt limit is added to income and taxed at your applicable slab." },
  { question: "When is gratuity paid to an employee?", answer: "Gratuity is payable when an employee: (1) superannuates (retires), (2) resigns after 5+ years of service, (3) is terminated (except for misconduct), or (4) dies or is disabled due to accident or illness (in which case it's paid to nominees regardless of years of service). The employer must pay gratuity within 30 days of it becoming payable. Delayed payment attracts simple interest at 10% per annum." },
  { question: "Is employer's gratuity provision part of CTC?", answer: "Yes. In most large organizations, gratuity provision (approximately 4.81% of basic salary per year) is included in the CTC calculation. This is the cost the company sets aside for future gratuity payments. However, you only receive this amount after completing 5 years of service. Until then, it accumulates within the company or in a gratuity fund. This is why your actual take-home is less than your CTC." },
];

export default function GratuityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Gratuity Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Gratuity Calculator India
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your gratuity amount and tax exemption. Uses the official formula under the Payment of Gratuity Act 1972.
      </p>
      <GratuityCalculator />
      <PDFDownload title="Gratuity Calculator Report" />
      <AffiliateCTA
        heading="Plan Your Retirement with Gratuity + NPS"
        subtext="Combine your gratuity with NPS for a complete retirement corpus."
        ctaLabel="Explore NPS Plans →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is Gratuity?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>Gratuity</strong> is a lump-sum benefit paid by an employer to an employee as a token of appreciation for the services rendered over years of continuous employment. It is governed by the <strong>Payment of Gratuity Act, 1972</strong> in India. Employers with 10 or more employees are mandatorily covered. The amount is calculated based on your last drawn basic salary plus DA and the number of completed years of service. Gratuity is a vested right — once you complete 5 years of continuous service, you are legally entitled to it regardless of whether you resign or are terminated. It is one of the important terminal benefits in India&apos;s employment framework, along with PF and leave encashment.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the Gratuity Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Employment Type:</strong> Select whether your employer is covered under the Gratuity Act (most companies with 10+ employees).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Basic + DA:</strong> Enter your last drawn monthly Basic Salary + Dearness Allowance. Do not include HRA or other allowances.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Years of Service:</strong> Enter your total completed years (e.g., if you&apos;ve worked 7 years 8 months, enter 7 or 8 based on the Act&apos;s 6-month rounding rule).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Result:</strong> See gratuity amount, tax-exempt portion (up to ₹20 lakh), and any taxable amount.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Gratuity Formulas at a Glance</h2>
          <div className="space-y-4">
            {[
              { label: "Covered under Gratuity Act", formula: "Gratuity = (Basic + DA) × 15 ÷ 26 × Years", note: "15 days pay, 26 working days/month. Applicable to most private companies with 10+ employees." },
              { label: "Not covered / Seasonal workers", formula: "Gratuity = (Basic + DA) × 15 ÷ 30 × Years", note: "Calendar days (30) instead of working days (26). Results in a lower amount." },
            ].map((f) => (
              <div key={f.label} className="rounded-xl border border-border bg-gray-50 p-4">
                <p className="text-sm font-bold text-gray-800">{f.label}</p>
                <p className="mt-1 font-mono text-sm text-primary">{f.formula}</p>
                <p className="mt-1 text-xs text-gray-500">{f.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
