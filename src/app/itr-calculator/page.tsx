import type { Metadata } from "next";
import Link from "next/link";
import { IncomeTaxCalculator } from "@/components/calculators/IncomeTaxCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "ITR Calculator 2026 — Calculate Income Tax Return India Free",
  description:
    "Free ITR calculator India 2026. Calculate your income tax return amount instantly. Compare new vs old tax regime. No signup.",
  keywords: [
    "itr calculator",
    "itr calculator india",
    "income tax return calculator 2026",
    "itr filing calculator india",
    "income tax return india",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/itr-calculator" },
  openGraph: {
    title: "ITR Calculator 2026 — Calculate Income Tax Return India Free | RupeeMath",
    description:
      "Free ITR calculator India 2026. Calculate income tax return, compare new vs old regime, see your refund or payable amount instantly.",
    url: "https://www.rupeemath.co.in/itr-calculator",
  },
};

const faqs = [
  {
    question: "Who is required to file an ITR in India?",
    answer:
      "ITR filing is mandatory if: (1) Your gross total income exceeds the basic exemption limit — ₹2.5 lakh (old regime) or ₹3 lakh (new regime). (2) You have deposited more than ₹1 crore in a current account or ₹50 lakh in a savings account in a financial year. (3) You have paid electricity bills exceeding ₹1 lakh in aggregate during the year. (4) You have incurred foreign travel expenditure above ₹2 lakh. (5) You are a company or firm regardless of profit or loss. (6) You want to claim a tax refund. (7) You have foreign assets or income. Even if not mandatory, filing is strongly recommended for loan applications, visa processing, and building a financial record.",
  },
  {
    question: "What is the ITR filing deadline for FY 2025-26?",
    answer:
      "For FY 2025-26 (Assessment Year 2026-27), the due dates are: Individuals and HUFs (non-audit cases): July 31, 2026. Businesses requiring tax audit (turnover above ₹1 crore for business / ₹50 lakh for professionals): October 31, 2026. Businesses with international transactions (transfer pricing): November 30, 2026. Belated returns can be filed up to December 31, 2026 with a late fee. If you miss the July 31 deadline, you can still file a belated return but lose the ability to carry forward most losses.",
  },
  {
    question: "What is the penalty for not filing ITR?",
    answer:
      "If you miss the original deadline (July 31), you can file a belated return by December 31 but must pay a late filing fee: ₹5,000 if total income exceeds ₹5 lakh, or ₹1,000 if total income is between ₹2.5 lakh and ₹5 lakh. Beyond December 31, you cannot file at all unless there is a government extension. Additionally, if you owe any tax and miss the July 31 deadline, you will also pay interest at 1% per month under Section 234A on the unpaid tax from August 1 until the filing date. If advance tax was not paid correctly, Sections 234B and 234C also attract interest.",
  },
  {
    question: "Which ITR form should I use?",
    answer:
      "The correct ITR form depends on your income sources: ITR-1 (Sahaj): Salaried individuals with income up to ₹50 lakh, one house property, and no business income — the most common form for salaried employees. ITR-2: Individuals with capital gains, two or more house properties, or foreign income/assets. ITR-3: Individuals with business or professional income (proprietary business). ITR-4 (Sugam): Presumptive income scheme filers under Sections 44AD, 44ADA, or 44AE with income up to ₹50 lakh. Companies, LLPs, and trusts use ITR-6, ITR-5, and ITR-7 respectively. Most salaried employees use ITR-1 or ITR-2.",
  },
  {
    question: "Can I switch between new and old tax regime while filing ITR?",
    answer:
      "Yes, salaried employees can switch between regimes every year when filing their ITR — even if they had chosen one regime with their employer for TDS purposes. If you chose the new regime for TDS deduction but the old regime saves more at the time of ITR filing, you can switch and claim the difference as a refund. Self-employed individuals and business owners can exercise this choice only once in their lifetime — after switching to the new regime, they cannot switch back to the old regime (except in the year they have no business income). Use our ITR calculator above to compare both regimes with your exact numbers before deciding.",
  },
];

export default function ITRCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "ITR Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        ITR Calculator 2026 — Income Tax Return Calculator India
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your Income Tax Return (ITR) amount for FY 2025-26. Compare your tax liability
        under new and old regimes, see your refund or balance payable, and decide which regime
        saves you more before filing.
      </p>

      <IncomeTaxCalculator />
      <PDFDownload title="ITR Calculator Report" />

      <AffiliateCTA
        heading="File Your ITR Online — Fast and Accurate"
        subtext="File your Income Tax Return in minutes with pre-filled data from Form 16."
        ctaLabel="File ITR Online →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">

        {/* What is ITR */}
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is ITR (Income Tax Return)?</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            An <strong>Income Tax Return (ITR)</strong> is a form that every taxpayer in India files
            with the Income Tax Department to report their total income, deductions claimed, and tax
            paid during a financial year. The ITR reconciles the tax already paid (via TDS, advance tax,
            or self-assessment tax) against the actual tax liability calculated on your total income.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            If the tax already deducted (TDS) exceeds your actual tax liability, the difference is
            returned to you as a <strong>tax refund</strong> — credited directly to your bank account
            within 4–8 weeks of processing. If your actual tax liability exceeds what was deducted, you
            must pay the difference as <strong>self-assessment tax</strong> before filing.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The ITR is filed for a <strong>Financial Year (FY)</strong> — from April 1 to March 31.
            The ITR for FY 2025-26 is filed in the <strong>Assessment Year (AY) 2026-27</strong>.
            India has multiple ITR forms (ITR-1 through ITR-7) depending on income type and source.
            For most salaried employees, ITR-1 (Sahaj) or ITR-2 applies.
          </p>
        </section>

        {/* How to use the calculator */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the ITR Calculator</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Enter your gross salary:</strong> Use the CTC or gross annual income from your Form 16 or salary certificate. Do not enter in-hand — use the pre-tax gross figure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Enter HRA and deductions:</strong> Add HRA received, Section 80C investments (PPF, ELSS, LIC — max ₹1.5L), home loan interest (Section 24, max ₹2L), and health insurance premiums (Section 80D).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>See both regimes side-by-side:</strong> The calculator computes your tax under both old and new regimes simultaneously and highlights which saves you more money.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Compare with TDS deducted:</strong> Check your Form 16 for the total TDS deducted. If your computed tax is less than TDS, you are entitled to a refund — the difference is your refund amount.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Download the PDF:</strong> Save your ITR calculation report as a PDF to use as a reference when filling your actual ITR form on the Income Tax portal (incometax.gov.in).</span>
            </li>
          </ul>
        </section>

        {/* Who needs to file */}
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Who Needs to File ITR in India?</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Filing is mandatory for the following individuals and entities regardless of whether tax is payable:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: "💰", heading: "Income above exemption limit", detail: "Gross income above ₹2.5L (old regime) or ₹3L (new regime) after aggregating all income sources — salary, rent, interest, capital gains." },
              { icon: "🏦", heading: "High-value banking transactions", detail: "Cash deposits above ₹1 crore in current accounts, or ₹50 lakh in savings accounts in the financial year." },
              { icon: "✈️", heading: "Foreign travel", detail: "Total expenditure on foreign travel (for self or others) exceeding ₹2 lakh in the financial year." },
              { icon: "💡", heading: "High electricity bills", detail: "Electricity bill payments aggregating more than ₹1 lakh during the financial year." },
              { icon: "💸", heading: "TDS deducted or refund due", detail: "Any individual from whose income TDS was deducted should file to confirm liability and claim a refund if excess tax was deducted." },
              { icon: "🌍", heading: "Foreign assets or income", detail: "Residents with foreign bank accounts, foreign investments, or any foreign-sourced income must file ITR regardless of income amount." },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-border bg-gray-50 p-4">
                <p className="mb-1 text-base">{item.icon} <strong className="text-gray-800">{item.heading}</strong></p>
                <p className="text-xs leading-relaxed text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Even if not strictly mandatory, <strong>filing ITR is strongly advisable</strong> for anyone with a bank account, as it serves as official income proof for home loan applications, visa processing, insurance, and credit card approvals. Most banks require the last 2–3 years of ITR as income documentation for loans above ₹10 lakh.
          </p>
        </section>

        {/* ITR filing process */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">ITR Filing Process — Step by Step</h2>
          <ol className="space-y-4 text-sm text-gray-600">
            {[
              {
                n: "1",
                step: "Collect documents",
                detail: "Gather Form 16 (from employer), Form 26AS (TDS summary from income tax portal), AIS/TIS (Annual Information Statement), bank interest certificates, and proof of deductions (80C receipts, rent agreement for HRA, home loan statement).",
              },
              {
                n: "2",
                step: "Calculate tax and decide regime",
                detail: "Use this ITR calculator to compare your tax liability under both regimes. Enter your exact salary and deductions to see which regime results in lower tax. Inform your employer of your choice via Form 12BB at the start of the financial year.",
              },
              {
                n: "3",
                step: "Register / login to income tax portal",
                detail: "Visit incometax.gov.in and log in with your PAN. First-time filers need to register using PAN as user ID. Enable Aadhaar OTP for smooth authentication.",
              },
              {
                n: "4",
                step: "Select the correct ITR form",
                detail: "Most salaried employees with one house property and no business income use ITR-1. Those with capital gains, multiple properties, or foreign income use ITR-2. The portal has a built-in wizard to help select the right form.",
              },
              {
                n: "5",
                step: "Pre-fill and verify data",
                detail: "The portal pre-fills data from Form 26AS and AIS. Verify each entry matches your Form 16. Add any income not pre-filled (interest income, rental income, capital gains). Claim all applicable deductions.",
              },
              {
                n: "6",
                step: "Pay any balance tax (if applicable)",
                detail: "If your tax liability exceeds TDS deducted, pay the balance as self-assessment tax (Challan 280 on the portal) before submitting. Add the challan number in the ITR before filing.",
              },
              {
                n: "7",
                step: "Submit and e-verify",
                detail: "File the ITR and complete e-verification within 30 days using Aadhaar OTP, net banking, or DSC. Unverified returns are treated as invalid. After e-verification, the ITR is considered filed — you will receive an ITR-V acknowledgement via email.",
              },
            ].map((item) => (
              <li key={item.n} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">
                  {item.n}
                </span>
                <span>
                  <strong className="text-gray-800">{item.step}:</strong> {item.detail}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Deadlines */}
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">ITR Filing Deadlines 2026</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-navy-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Taxpayer Category</th>
                  <th className="px-4 py-3 text-right font-semibold">Due Date (AY 2026-27)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {[
                  ["Individuals & HUFs (salaried, no audit)", "July 31, 2026"],
                  ["Businesses requiring tax audit", "October 31, 2026"],
                  ["Transfer pricing cases (international transactions)", "November 30, 2026"],
                  ["Belated / revised return deadline", "December 31, 2026"],
                  ["Updated return (ITR-U) — up to 2 years after AY", "March 31, 2029"],
                ].map(([category, date], i) => (
                  <tr key={category} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 text-gray-700">{category}</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Dates are subject to extension by the Central Board of Direct Taxes (CBDT). Always check
            incometax.gov.in for the latest official due dates before filing.
          </p>
        </section>

        {/* Penalty section */}
        <section className="rounded-xl border border-border bg-red-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Penalty for Not Filing ITR</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="rounded-xl border border-red-200 bg-white p-4">
              <p className="font-bold text-red-700">Late Filing Fee — Section 234F</p>
              <p className="mt-1 text-xs text-gray-600">₹5,000 if total income exceeds ₹5 lakh and return is filed after July 31 but before December 31. ₹1,000 if total income is between ₹2.5 lakh and ₹5 lakh. No fee applies if income is below the basic exemption limit.</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-white p-4">
              <p className="font-bold text-orange-700">Interest on Tax Due — Section 234A</p>
              <p className="mt-1 text-xs text-gray-600">If there is an outstanding tax liability and you file after July 31, you pay simple interest at 1% per month (or part month) on the unpaid tax amount from August 1 until the actual date of filing. This interest compounds quickly — a ₹50,000 tax liability delayed by 6 months costs ₹3,000 in 234A interest.</p>
            </div>
            <div className="rounded-xl border border-yellow-200 bg-white p-4">
              <p className="font-bold text-yellow-700">Loss of Carry Forward</p>
              <p className="mt-1 text-xs text-gray-600">Business losses, capital losses (except house property loss), and speculation losses can only be carried forward to future years if you file your ITR on time. A delayed or belated return forfeits the ability to carry forward these losses — a significant financial cost for investors with capital losses from equity markets.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-700">Prosecution — Section 276CC</p>
              <p className="mt-1 text-xs text-gray-600">In extreme cases of persistent non-filing where tax payable exceeds ₹25,000, the Income Tax Department can initiate prosecution proceedings, which can result in imprisonment of 6 months to 7 years. In practice, this applies to habitual non-filers with significant tax dues — not first-time delays.</p>
            </div>
          </div>
        </section>

        {/* Related calculators */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-base font-bold text-gray-900">Related Tax Calculators</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Income Tax Calculator", href: "/income-tax-calculator", desc: "Full old vs new regime comparison" },
              { label: "HRA Exemption Calculator", href: "/hra-calculator", desc: "Calculate HRA tax exemption" },
              { label: "Salary / CTC Calculator", href: "/salary-calculator", desc: "CTC to in-hand salary breakdown" },
              { label: "Gratuity Calculator", href: "/gratuity-calculator", desc: "Gratuity amount and tax exemption" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition hover:border-primary hover:bg-orange-50"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">{link.label}</p>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
                <span className="text-primary">→</span>
              </a>
            ))}
          </div>
        </section>

      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
