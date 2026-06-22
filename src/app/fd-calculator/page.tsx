import type { Metadata } from "next";
import { FDCalculator } from "@/components/calculators/FDCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "FD Calculator 2026 — Fixed Deposit Maturity Calculator India",
  description:
    "Calculate fixed deposit maturity amount instantly. Free FD calculator for all Indian banks — SBI, HDFC, ICICI. Enter amount, rate, tenure — get results in seconds.",
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
    question: "What is the difference between cumulative and non-cumulative FD?",
    answer:
      "In a cumulative FD, the interest is compounded and paid along with the principal at maturity — ideal for wealth accumulation. In a non-cumulative FD, the interest is paid out periodically (monthly, quarterly, half-yearly, or annually) to your bank account — ideal for retirees or those needing regular income. Cumulative FDs earn more due to compounding.",
  },
  {
    question: "Is FD a good investment in 2025?",
    answer:
      "FDs are a safe, guaranteed-return investment suitable for capital preservation and short-to-medium term goals. With rates around 7–8.5% in 2025, they offer better returns than savings accounts. However, after accounting for income tax on interest, the real post-tax return can be lower than inflation for high-income investors. FDs are best used as part of a balanced portfolio alongside equity investments.",
  },
  {
    question: "Do senior citizens get higher FD rates?",
    answer:
      "Yes. Almost all Indian banks offer senior citizens (aged 60 and above) an additional 0.25% to 0.75% interest rate over the regular rate on Fixed Deposits. This benefit applies to all tenures. Senior citizens also get a higher TDS exemption threshold of ₹50,000/year (vs ₹40,000 for others).",
  },
  {
    question: "What is a tax-saving FD?",
    answer:
      "A tax-saving FD is a 5-year Fixed Deposit that qualifies for deduction under Section 80C of the Income Tax Act, up to ₹1.5 lakh per year. It has a mandatory lock-in of 5 years — premature withdrawal is not allowed. The interest earned is still taxable. It is offered by most public and private sector banks at regular FD interest rates.",
  },
  {
    question: "How does compounding frequency affect FD returns?",
    answer:
      "Higher compounding frequency means more interest on interest, resulting in a higher maturity amount. For the same principal, rate, and tenure: monthly compounding > quarterly > half-yearly > annual. The difference is small for short tenures but noticeable over 5–10 years. Most Indian banks compound FD interest quarterly.",
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
      <PDFDownload title="FD Calculator Report" />
      <AffiliateCTA
        heading="Get the Best FD Rates"
        subtext="Compare Fixed Deposit rates from top Indian banks and small finance banks."
        ctaLabel="Compare FD Rates →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a Fixed Deposit (FD)?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A <strong>Fixed Deposit (FD)</strong> is one of India&apos;s most popular savings instruments,
            offered by banks and NBFCs. You deposit a lump sum amount for a fixed tenure at a
            predetermined interest rate. Unlike savings accounts, the interest rate on an FD is locked
            in at the time of opening — your returns are guaranteed regardless of market fluctuations.
            FD tenures in India range from 7 days to 10 years, with interest rates varying by bank,
            tenure, and investor type (regular vs senior citizen). Bank FDs are insured by DICGC up to
            <strong> ₹5 lakh per depositor per bank</strong>, making them one of the safest investment
            options available to Indian investors.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath FD Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Principal Amount:</strong> Enter the amount you want to deposit (e.g., ₹1,00,000).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Interest Rate:</strong> Enter the annual interest rate offered by your bank (e.g., 7.5%). Check the bank&apos;s website for the latest rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Tenure:</strong> Enter the FD duration in years (e.g., 5 years).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Compounding Frequency:</strong> Select how often interest is compounded — monthly, quarterly (most common), half-yearly, or annually.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>View results:</strong> Instantly see Maturity Amount, Total Interest Earned, and Effective Annual Rate. The chart shows year-by-year growth of your deposit.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">FD Compounding Frequencies Compared</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The FD maturity formula is: <span className="font-mono font-semibold">A = P × (1 + r/n)^(n×t)</span>, where r is the annual rate, n is the compounding frequency, and t is tenure in years.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 text-left font-semibold text-gray-700">Frequency</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Compounds/year</th>
                  <th className="py-2 text-left font-semibold text-gray-700">₹1L at 7.5% for 5 yrs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Annually</td><td className="py-2">1</td><td className="py-2">₹1,43,563</td></tr>
                <tr><td className="py-2">Half-yearly</td><td className="py-2">2</td><td className="py-2">₹1,44,141</td></tr>
                <tr><td className="py-2">Quarterly</td><td className="py-2">4</td><td className="py-2">₹1,44,438</td></tr>
                <tr><td className="py-2">Monthly</td><td className="py-2">12</td><td className="py-2">₹1,44,636</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">Example figures for illustration. Actual returns depend on the bank&apos;s offered rate.</p>
        </section>
      </div>

      <div className="mt-6 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">What is a Fixed Deposit — Complete Guide</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            A Fixed Deposit is a financial instrument offered by banks and non-banking financial companies (NBFCs) in India where you deposit a sum of money for a predetermined period at an agreed interest rate. Unlike a savings account where your balance fluctuates and the interest rate can change at any time, an FD locks in both your principal and the interest rate for the full tenure. When you open an FD, you receive a Fixed Deposit Receipt (FDR) that specifies the principal amount, interest rate, maturity date, and the maturity amount — every number is guaranteed from day one. This certainty is the primary reason fixed deposits remain one of the most popular investment instruments in India despite the availability of higher-return alternatives.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Indian banks offer FDs across a wide range of tenures — from as short as 7 days to as long as 10 years. Interest rates generally increase with tenure up to a point (typically 1–3 years) and then plateau or slightly decline for very long tenures. Small Finance Banks (SFBs) like AU Small Finance Bank, Equitas, Ujjivan, and ESAF offer significantly higher rates than large PSU and private sector banks — sometimes 1.5–2.5% higher — because they are trying to attract deposits. These higher-rate SFB deposits are also covered by DICGC insurance up to ₹5 lakh per depositor, making them a genuinely good option for investors comfortable with slightly less brand recognition in exchange for higher guaranteed returns.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The compounding frequency of an FD significantly affects the actual return you receive. Most Indian banks compound FD interest quarterly, meaning interest is added to your principal four times a year. Some banks offer monthly compounding for certain deposit types. The more frequently interest compounds, the higher your effective annual return — even at the same stated annual rate. For a ₹5 lakh FD at 7.5% for 5 years, the difference between annual and quarterly compounding is approximately ₹4,000 in total maturity value. While this may seem small, it illustrates why comparing FDs on their stated annual rate alone is insufficient — always calculate the effective annual yield (EAR) which accounts for compounding frequency before comparing deposits across different banks.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Best FD Interest Rates in India 2026</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            FD interest rates in India are closely linked to the RBI repo rate, which is the rate at which the Reserve Bank of India lends money to commercial banks. When the RBI raises the repo rate to control inflation, banks raise their FD rates to attract deposits; when the RBI cuts rates to stimulate the economy, FD rates typically decline within a few months. As of 2026, major PSU banks like SBI, Bank of Baroda, and PNB offer FD rates in the range of 6.5–7.25% for general customers and 7–7.75% for senior citizens across tenures of 1–5 years. Private sector banks like HDFC, ICICI, Axis, and Kotak offer broadly similar rates, typically 0.1–0.25% higher than SBI for comparable tenures.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Small Finance Banks (SFBs) offer the most competitive FD rates in the country, often 1–2% above the major bank rates. AU Small Finance Bank, Equitas Small Finance Bank, Ujjivan Small Finance Bank, and Jana Small Finance Bank regularly offer rates of 8–9% for specific tenures, with special rates for senior citizens going even higher. These deposits are just as safe as major bank FDs up to the DICGC insured limit of ₹5 lakh per depositor per bank. For investors with FD amounts below ₹5 lakh who prioritise maximum guaranteed return, allocating a portion of their FD corpus to one or two SFBs is a prudent and financially sound strategy.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            When comparing FD rates across banks, it is important to look beyond the headline annual rate. Consider the TDS threshold (₹40,000/year for general customers, ₹50,000 for senior citizens), early withdrawal penalty (typically 1% on applicable rate for the completed tenure), auto-renewal policy (some banks silently auto-renew at prevailing rates which may be lower), and whether the bank offers an overdraft facility against the FD if you need liquidity without breaking the deposit. The best FD is not simply the one with the highest rate — it is the one that gives you the best combination of rate, safety, flexibility, and service quality relative to your specific financial needs.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Tax on FD Interest — What You Must Know</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            FD interest is fully taxable in India under the head &quot;Income from Other Sources&quot; in your Income Tax Return. It is added to your total income for the financial year and taxed at your applicable income tax slab rate. This means a person in the 30% tax bracket who earns ₹1 lakh in FD interest will pay ₹30,000 in tax on it, leaving an effective post-tax return of just 4.9% on a 7% FD. Contrast this with equity mutual fund Long Term Capital Gains, which are taxed at only 12.5% — and the structural tax disadvantage of FDs for high-income earners becomes clear. For investors in the 5% or 10% tax slab, the tax impact on FD returns is minimal and FDs remain a genuinely good investment. For those in the 20–30% slab, the post-tax FD return is significantly lower than the stated rate.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Banks deduct TDS (Tax Deducted at Source) at 10% on FD interest when the total interest credited by a single bank in a financial year exceeds ₹40,000 (₹50,000 for senior citizens). This TDS is not the final tax — it is an advance payment. If your actual tax rate is higher than 10%, you must pay the difference when filing your ITR. If your total income is below the taxable threshold, you can submit Form 15G (for individuals below 60) or Form 15H (for senior citizens) to your bank at the start of each financial year to instruct them not to deduct TDS. Many FD investors forget to submit these forms annually and unnecessarily lose cash to TDS that they later have to claim as a refund. Note that even if no TDS is deducted (because you submitted Form 15G/15H), you are still legally required to declare the interest income in your ITR.
          </p>
        </section>

      </div>

      <div className="mt-6">
        <FAQSection items={[
          {
            question: "Is FD interest taxable in India?",
            answer: "Yes, FD interest is fully taxable in India every financial year, regardless of whether it is paid out or compounded. It is added to your total income and taxed at your applicable income tax slab rate — 5%, 10%, 20%, or 30% depending on your total income. Banks deduct TDS at 10% when annual interest from a single bank exceeds ₹40,000. If your actual slab rate is higher than 10%, you must pay the difference when filing ITR. If your total income is below the taxable threshold, submit Form 15G (under 60) or Form 15H (senior citizens) to your bank to avoid TDS deduction. Tax-saving FDs under Section 80C exempt the principal from tax but not the interest earned.",
          },
          {
            question: "What is the maximum DICGC insurance on FD?",
            answer: "The Deposit Insurance and Credit Guarantee Corporation (DICGC) insures bank deposits up to ₹5 lakh per depositor per bank. This ₹5 lakh limit covers the total of all your deposits at a single bank — current account, savings account, FDs, and RDs combined. If you have ₹3 lakh in FDs and ₹2 lakh in a savings account at the same bank, your total covered amount is ₹5 lakh. Amounts above ₹5 lakh are not insured. To protect larger amounts, spread your FDs across multiple banks so that no single bank holds more than ₹5 lakh of your deposits. This insurance applies to all scheduled commercial banks including Small Finance Banks and cooperative banks registered with DICGC.",
          },
          {
            question: "Can I break an FD before maturity?",
            answer: "Yes, most bank FDs can be broken before maturity, but a premature withdrawal penalty applies — typically 0.5% to 1% subtracted from the interest rate applicable for the period the deposit was held. For example, if you open a 3-year FD at 7.5% and break it after 1 year, the bank applies the 1-year rate (say 6.8%) minus the penalty (say 1%) = 5.8% effective rate for your actual holding period. Tax-saving FDs (5-year FDs under Section 80C) cannot be broken before 5 years — premature withdrawal is not permitted. As an alternative to breaking your FD, most banks offer an overdraft or loan facility against the FD at a slightly higher rate than the FD rate, allowing you to access funds without losing the interest benefit.",
          },
          {
            question: "What is the difference between cumulative and non-cumulative FD?",
            answer: "A cumulative FD reinvests the interest back into the principal — you do not receive periodic interest payments, but at maturity you receive the full compounded amount. This is ideal for wealth accumulation goals where you don&apos;t need regular income from the FD. A non-cumulative FD pays out interest periodically — monthly, quarterly, half-yearly, or annually — directly to your bank account. This is suited for retirees or anyone who needs regular income from their savings. Cumulative FDs always earn more than non-cumulative because of compounding — even at the same stated annual rate, the maturity value is higher when interest is reinvested rather than paid out.",
          },
          {
            question: "Which bank gives the highest FD interest rate in India?",
            answer: "Small Finance Banks consistently offer the highest FD rates in India. As of 2026, banks like AU Small Finance Bank, Equitas Small Finance Bank, Ujjivan Small Finance Bank, Jana Small Finance Bank, and ESAF Small Finance Bank offer rates ranging from 8% to 9.5% for specific tenures, with additional 0.25–0.75% for senior citizens. These rates are 1.5–2.5% higher than major PSU and private banks. Small Finance Bank deposits are insured by DICGC up to ₹5 lakh — the same as major banks — making them safe for deposits within that limit. Always verify rates directly on the bank&apos;s official website, as FD rates change frequently.",
          },
          {
            question: "Should I invest in FD or mutual fund?",
            answer: "The right choice depends on your investment horizon and risk tolerance. For goals within 1–3 years or for your emergency fund, FD is better — it guarantees your capital and the returns are predictable. For goals 5 or more years away (retirement, children&apos;s education, property purchase), equity mutual funds through SIP have historically delivered significantly higher returns (12–14% vs 7–7.5%) and are more tax-efficient at higher income levels. The optimal strategy for most Indian investors is to hold 3–6 months of expenses in FDs as emergency reserves, and invest all longer-term savings in equity or hybrid mutual funds. Do not use FDs for long-term wealth creation if you are in the 20–30% tax bracket — the post-tax real return after inflation is near zero.",
          },
        ]} />
      </div>
    </div>
  );
}
