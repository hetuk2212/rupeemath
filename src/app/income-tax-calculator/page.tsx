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

      <div className="mt-6 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Income Tax in India — An Overview</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Income tax in India is a direct tax levied by the central government on the income earned by individuals, Hindu Undivided Families (HUFs), companies, and other entities during a financial year. For individuals, it is progressive — the more you earn, the higher the percentage of your income that is taxed. India operates on a self-assessment basis, meaning taxpayers are responsible for correctly computing and paying their tax liability and filing an annual Income Tax Return (ITR). The financial year in India runs from April 1 to March 31, and the ITR for any financial year is filed in the subsequent Assessment Year — for example, income earned in FY 2025-26 (April 2025 to March 2026) is assessed and declared in AY 2026-27.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            India&apos;s income tax structure is administered by the Central Board of Direct Taxes (CBDT) under the Ministry of Finance. The tax is governed by the Income Tax Act, 1961, and the Finance Act passed each year introduces amendments — including changes to tax slabs, deductions, and exemptions. For salaried employees, income tax is deducted at source (TDS) by the employer every month and remitted to the government. This TDS is an advance tax against the employee&apos;s annual liability. At year-end, when the employee files their ITR, the actual liability is computed — if TDS exceeded the liability, a refund is processed; if it fell short, the difference must be paid as self-assessment tax. The entire process is now paperless and managed through the Income Tax Department&apos;s online portal at incometax.gov.in.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            One of the most significant aspects of Indian income tax for salaried employees is the availability of numerous deductions and exemptions that can substantially reduce taxable income. Section 80C alone — which covers investments in PPF, ELSS, EPF contribution, life insurance premiums, home loan principal repayment, NSC, and children&apos;s school fees — allows a deduction of up to ₹1.5 lakh per year. Combined with HRA exemption, home loan interest deduction under Section 24(b), health insurance under Section 80D, and NPS contribution under Section 80CCD, a disciplined investor can reduce their taxable income by ₹4–5 lakh or more. This is the core reason the old tax regime remains relevant and often beneficial for those who actively invest in these instruments.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Top Tax Saving Investments Under Section 80C</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Section 80C of the Income Tax Act is the most widely used tax-saving provision in India, allowing a deduction of up to ₹1.5 lakh per financial year from your gross income. The instruments that qualify under 80C are diverse, serving both investment and insurance purposes. Employee Provident Fund (EPF) contributions are automatically included — if you are a salaried employee, your monthly PF deduction already contributes toward this limit. Public Provident Fund (PPF) contributions up to ₹1.5 lakh per year are fully deductible and the interest is completely tax-free, making PPF an EEE (Exempt-Exempt-Exempt) instrument — one of the best risk-free, long-term savings options in India. Equity Linked Savings Scheme (ELSS) mutual funds are the most popular 80C option for wealth creation, offering market-linked returns with a 3-year lock-in period, which is the shortest lock-in among all 80C instruments.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            National Savings Certificate (NSC), 5-year tax-saving Fixed Deposits, Senior Citizen Savings Scheme (SCSS), and Sukanya Samriddhi Yojana (SSY) for a girl child are additional 80C instruments that cater to conservative investors. Life insurance premiums paid for self, spouse, and children also qualify under 80C — though it is important to separate the insurance need from the tax-saving purpose, as investment-linked insurance products are generally poor wealth-creation vehicles. School and college tuition fees paid for up to two children also count toward 80C. Finally, the principal repayment component of a home loan EMI qualifies under 80C, which is why home loan borrowers often reach the ₹1.5 lakh limit faster than those without a home loan.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Beyond Section 80C, Section 80CCD(1B) allows an additional ₹50,000 deduction for voluntary NPS (National Pension System) contributions — completely separate from the ₹1.5 lakh 80C limit. This brings the maximum combined deduction from these two sections to ₹2 lakh per year, saving ₹60,000 in tax per year for someone in the 30% bracket. Section 80D allows deductions for health insurance premiums — up to ₹25,000 for self, spouse, and children, plus up to ₹50,000 for premiums paid for senior citizen parents. Given that even a basic family floater health insurance policy costs ₹15,000–₹25,000 annually, this deduction is highly accessible. Used together, Sections 80C, 80CCD(1B), and 80D can reduce taxable income by ₹3.75 lakh or more, saving ₹1.12 lakh in annual tax for a person in the 30% bracket.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">HRA Exemption — How to Calculate</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            House Rent Allowance (HRA) is a component of many salaried employees&apos; compensation packages, provided by employers to help cover rental accommodation costs. The entire HRA received is not automatically tax-free — only a portion qualifies for exemption under Section 10(13A), calculated as the minimum of three conditions: the actual HRA received from the employer, the rent paid minus 10% of basic salary, and 50% of basic salary if you live in a metro city (Delhi, Mumbai, Kolkata, or Chennai) or 40% of basic salary for non-metro cities. The exemption is the lowest of these three amounts, and the remainder is added back to your taxable income. For an employee in Mumbai paying ₹30,000/month in rent on a basic salary of ₹50,000/month and receiving ₹25,000/month HRA, the three conditions are: HRA received ₹25,000, rent minus 10% basic = ₹25,000, and 50% of basic = ₹25,000. All three are equal at ₹25,000, so the full HRA is exempt.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Two common scenarios reduce the HRA exemption significantly. First, if you live in a non-metro city, the third condition drops from 50% to 40% of basic salary, which can cap the exemption even if you pay high rent. Second, if your rent is low relative to your salary, the second condition (rent minus 10% of basic) becomes the limiting factor. Employees who pay rent to parents can legitimately claim HRA exemption, provided the rent is genuinely paid via bank transfer, the parents declare it as rental income in their ITR, and a proper rent agreement exists. This is a legal and widely-used tax planning strategy. Note that HRA exemption is available only under the old tax regime — those who opt for the new regime cannot claim HRA exemption regardless of the rent paid.
          </p>
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

      <FAQSection items={[
        {
          question: "What is the income tax slab for FY 2025-26?",
          answer: "For FY 2025-26 under the new tax regime (default): income up to ₹3 lakh is taxed at 0%, ₹3–7 lakh at 5%, ₹7–10 lakh at 10%, ₹10–12 lakh at 15%, ₹12–15 lakh at 20%, and above ₹15 lakh at 30%. The Section 87A rebate makes tax zero for total income up to ₹7 lakh. Under the old regime: up to ₹2.5 lakh is 0%, ₹2.5–5 lakh is 5%, ₹5–10 lakh is 20%, and above ₹10 lakh is 30%. The old regime 87A rebate makes tax zero for income up to ₹5 lakh. Add 4% Health and Education Cess on the final computed tax under both regimes. Standard deduction is ₹75,000 under new regime and ₹50,000 under old regime.",
        },
        {
          question: "Who needs to file an income tax return in India?",
          answer: "ITR filing is mandatory for individuals whose gross total income exceeds the basic exemption limit — ₹2.5 lakh under the old regime and ₹3 lakh under the new regime. Beyond income, you must also file if your bank deposits exceed ₹1 crore in a current account or ₹50 lakh in savings accounts, if you have paid electricity bills above ₹1 lakh, if you have incurred foreign travel expenses above ₹2 lakh, or if you have foreign assets or income. Filing is also required if you want to claim a tax refund (when TDS exceeds actual liability) or carry forward capital or business losses to future years. Even if not strictly mandatory, filing is strongly advisable for building a financial record needed for home loan applications, visa processing, and credit approvals.",
        },
        {
          question: "What is the last date to file ITR for FY 2025-26?",
          answer: "For individuals and HUFs with salary or other income not requiring a tax audit, the deadline is July 31, 2026. For businesses and professionals requiring a tax audit (turnover above ₹1 crore for businesses or ₹50 lakh for professionals), the deadline is October 31, 2026. A belated return can be filed until December 31, 2026 with a late filing fee of ₹5,000 (₹1,000 if income is below ₹5 lakh). If you have unpaid tax and file after July 31, interest at 1% per month also applies from August 1. The ITR-U (updated return) facility allows you to correct errors or declare missed income for up to 2 years after the assessment year with an additional tax penalty.",
        },
        {
          question: "What is the standard deduction in income tax?",
          answer: "The standard deduction is a flat deduction from gross salary income available to all salaried employees and pensioners, without the need to submit any proof of expenses. For FY 2025-26, the standard deduction is ₹75,000 under the new tax regime (increased from ₹50,000 in Budget 2024) and ₹50,000 under the old tax regime. This deduction was reintroduced in Budget 2018, replacing the earlier transport allowance (₹19,200) and medical reimbursement (₹15,000) exemptions. Every salaried employee automatically gets this deduction — your employer applies it when computing your TDS, and it is shown in your Form 16. Pensioners receiving pension from a former employer are also eligible for the standard deduction.",
        },
        {
          question: "How to save maximum tax in India legally?",
          answer: "The most effective legal tax saving strategy combines multiple provisions: Section 80C (invest ₹1.5 lakh in ELSS, PPF, or EPF to save ₹45,000 in tax at 30% slab), Section 80CCD(1B) (additional ₹50,000 NPS investment saves ₹15,000), Section 80D (health insurance premium up to ₹25,000 self + ₹50,000 for senior citizen parents saves ₹22,500), Section 24(b) (home loan interest up to ₹2 lakh saves ₹60,000), and HRA exemption (significant for metro renters). Together, these provisions can reduce taxable income by ₹4.25 lakh or more. Whether these savings outweigh the new regime&apos;s lower rates depends entirely on the total deduction amount — use our calculator to compare both regimes with your actual numbers.",
        },
        {
          question: "What is Section 80C and what is the maximum deduction?",
          answer: "Section 80C is the most widely used tax-saving provision in the Income Tax Act, allowing a maximum deduction of ₹1,50,000 (₹1.5 lakh) per financial year from your gross income. Qualifying investments include EPF (employer PF deduction automatically counts), PPF (Public Provident Fund), ELSS mutual funds (3-year lock-in), NSC, 5-year tax-saving FD, SCSS, SSY, life insurance premiums for self/spouse/children, home loan principal repayment, and children&apos;s tuition fees for up to two children. The ₹1.5 lakh limit is the combined cap across all 80C instruments — you cannot claim more than ₹1.5 lakh total even if your investments exceed that amount. Section 80C is available only under the old tax regime; those in the new regime cannot claim 80C deductions.",
        },
      ]} />
    </div>
  );
}
