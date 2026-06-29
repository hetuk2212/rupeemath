import type { Metadata } from "next";
import Link from "next/link";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "SIP Calculator for 10 Years — Returns at Different Monthly Investments",
  description:
    "Calculate 10-year SIP returns for any monthly investment amount. See maturity value at 8%, 10%, 12%, 14% return rates. Free SIP calculator India 2026.",
  keywords: [
    "sip calculator 10 years",
    "sip returns 10 years india",
    "10 year sip returns calculator",
    "sip maturity calculator 10 years",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/sip-calculator-10-years" },
  openGraph: {
    title: "SIP Calculator for 10 Years — Returns at All Investment Amounts | RupeeMath",
    description: "Calculate 10-year SIP returns for any monthly investment. See maturity at different return rates.",
    url: "https://www.rupeemath.co.in/sip-calculator-10-years",
  },
};

const returnsTable = [
  { sip: "₹2,000",  invested: "₹2.4L",  r8: "₹3.67L",  r10: "₹4.13L",  r12: "₹4.64L",  r14: "₹5.22L"  },
  { sip: "₹5,000",  invested: "₹6L",    r8: "₹9.17L",  r10: "₹10.33L", r12: "₹11.61L", r14: "₹13.04L" },
  { sip: "₹7,500",  invested: "₹9L",    r8: "₹13.76L", r10: "₹15.49L", r12: "₹17.41L", r14: "₹19.57L" },
  { sip: "₹10,000", invested: "₹12L",   r8: "₹18.34L", r10: "₹20.66L", r12: "₹23.23L", r14: "₹26.09L" },
  { sip: "₹15,000", invested: "₹18L",   r8: "₹27.52L", r10: "₹30.98L", r12: "₹34.84L", r14: "₹39.14L" },
  { sip: "₹20,000", invested: "₹24L",   r8: "₹36.69L", r10: "₹41.31L", r12: "₹46.45L", r14: "₹52.18L" },
  { sip: "₹25,000", invested: "₹30L",   r8: "₹45.86L", r10: "₹51.64L", r12: "₹58.07L", r14: "₹65.23L" },
  { sip: "₹50,000", invested: "₹60L",   r8: "₹91.73L", r10: "₹1.03 Cr",r12: "₹1.16 Cr",r14: "₹1.30 Cr"},
];

const faqs = [
  {
    question: "How much does a ₹10,000 SIP grow in 10 years?",
    answer:
      "A ₹10,000 monthly SIP over 10 years grows to approximately ₹23.23 lakh at 12% annual return, ₹20.66 lakh at 10%, ₹18.34 lakh at 8%, or ₹26.09 lakh at 14%. Your total investment is ₹12 lakh (₹10,000 × 120 months) and the remaining ₹11.23 lakh (at 12%) represents the wealth created by compounding. At 12% — the historical average of Indian equity markets over long periods — you effectively more than double your money in 10 years through a SIP. The key caveat is that 10 years is still a relatively short horizon for equity SIPs, and actual year-to-year returns will vary significantly. Market corrections during the tenure can temporarily reduce the corpus, but patient investors who hold through downturns have historically been rewarded.",
  },
  {
    question: "Is 10 years enough time for a SIP to give good returns?",
    answer:
      "Ten years is the generally accepted minimum horizon for an equity SIP to deliver consistently positive real returns in Indian markets. Historical data shows that any rolling 10-year period in the Nifty 50 (since inception) has delivered positive returns for a monthly SIP, with most delivering 10 to 15% CAGR. The risk of a negative 10-year return from an equity SIP in India has been extremely low historically. That said, shorter horizons of 5 to 7 years carry higher risk of below-inflation returns, especially if you started the SIP just before a major market downturn. For goals exactly 10 years away — like a child's college fund or a home down payment — consider starting to shift the corpus toward debt funds or balanced advantage funds in years 8 and 9 to protect gains as the goal approaches.",
  },
  {
    question: "What return rate should I use for a 10-year SIP calculation?",
    answer:
      "For planning a 10-year SIP in an equity mutual fund, 10 to 12% is a reasonable central assumption. The Nifty 50 index has delivered approximately 11 to 13% CAGR over most 10-year rolling periods since 2000. However, there is meaningful dispersion — some 10-year periods have delivered 6 to 8% (entry in 2007-08 followed by post-GFC weak recovery) while others have delivered 15%+ (entry after major corrections). For conservative planning — especially if the money is needed at a specific time — use 9 to 10% as your assumption. For aggressive planning with a long-term equity fund, 12% is reasonable. Never use a short-period (1 to 3 year) recent high return as your planning assumption for a 10-year projection.",
  },
  {
    question: "Should I choose a 10-year SIP or a 20-year SIP?",
    answer:
      "If your goal is 10 years away and you need the money at that specific time, a 10-year SIP is appropriate. However, if the goal is wealth creation without a fixed end date, a 20 or 30-year SIP dramatically outperforms — not because of higher returns but because of the exponential nature of compounding. A ₹10,000 SIP at 12% for 10 years creates ₹23.2 lakh. The same SIP for 20 years creates ₹99.9 lakh — more than four times as much from only twice the investment period. The extra wealth created in years 11 to 20 is far larger than in years 1 to 10, because the accumulated corpus from year 10 (₹23.2 lakh) now starts compounding at the full rate alongside new contributions. For any goal more than 10 years away, a longer tenure SIP should always be chosen over stopping at 10 years.",
  },
  {
    question: "Which mutual fund is best for a 10-year SIP?",
    answer:
      "For a 10-year SIP horizon, diversified equity funds are appropriate — specifically large-cap index funds (Nifty 50 or Nifty 100) for conservative investors, flexi-cap or multi-cap funds for moderate investors, or mid-cap funds for aggressive investors willing to accept higher short-term volatility in exchange for higher expected long-term returns. Index funds are highly recommended for first-time investors because they eliminate fund manager risk, have the lowest expense ratios (below 0.2%), and have consistently delivered returns close to the benchmark index. Among actively managed funds, focus on 10-year rolling return consistency, downside capture ratio, and expense ratio rather than recent 1-year performance when selecting for a 10-year SIP.",
  },
  {
    question: "Can I withdraw my SIP corpus partially after 10 years?",
    answer:
      "Yes — open-ended mutual funds (other than ELSS) have no lock-in and you can redeem part or all of your corpus at any time. After 10 years, all SIP units (except ELSS units invested in the last 3 years) qualify as Long Term Capital Gains taxed at 12.5% above ₹1.25 lakh per financial year. You can redeem in a tax-efficient manner by spreading redemptions across financial years to stay within the ₹1.25 lakh annual LTCG exemption. Alternatively, instead of a lump sum withdrawal, consider setting up an SWP (Systematic Withdrawal Plan) that redeems a fixed monthly amount — continuing to let the unredeemed corpus compound while providing regular income.",
  },
];

export default function SIPCalculator10YearsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "SIP Calculator — 10 Years" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SIP Calculator for 10 Years — Maturity Returns 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate your exact SIP maturity amount for a 10-year investment horizon. See how much
        your monthly SIP grows at different return rates, and compare across investment amounts.
      </p>

      <SIPCalculator />
      <PDFDownload title="10-Year SIP Returns Report" />

      {/* Returns table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">
          10-Year SIP Returns at Different Monthly Amounts
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Maturity value at the end of 10 years (120 monthly SIP instalments)
        </p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Monthly SIP</th>
                <th className="px-4 py-3 text-right font-semibold">Invested</th>
                <th className="px-4 py-3 text-right font-semibold">At 8%</th>
                <th className="px-4 py-3 text-right font-semibold">At 10%</th>
                <th className="px-4 py-3 text-right font-semibold text-primary">At 12%</th>
                <th className="px-4 py-3 text-right font-semibold">At 14%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {returnsTable.map((row, i) => (
                <tr key={row.sip} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.sip}</td>
                  <td className="px-4 py-3 text-right text-gray-500">{row.invested}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r8}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r10}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">{row.r12}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r14}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Tenure: 120 months (10 years). Returns are illustrative projections. Mutual fund
          returns are market-linked and not guaranteed. Past performance does not guarantee future results.
        </p>
      </div>

      <AffiliateCTA
        heading="Start Your 10-Year SIP Today"
        subtext="Zero commission SIP in top-rated equity and index mutual funds."
        ctaLabel="Start SIP Online →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            What is a 10-Year SIP and Why Does Tenure Matter?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            A 10-year SIP is a systematic investment plan that runs for 120 consecutive monthly
            instalments. It represents one of the most common investment horizons for defined financial
            goals — a child&apos;s college education fund, a home down payment, or a car purchase planned
            a decade ahead. The 10-year tenure is significant because it is the minimum horizon over
            which equity mutual funds have historically delivered consistently positive inflation-beating
            returns in India. Investors who stayed with equity SIPs through full market cycles of at
            least 10 years — including the 2008 global financial crisis, the 2020 Covid crash, and other
            market corrections — have almost universally ended with strong positive real returns.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The compounding effect over 10 years works in a specific pattern that surprises many new
            investors. In the first 3 to 4 years, your corpus grows slowly — the invested amount
            dominates and returns are modest in absolute terms. In years 5 to 7, returns start to become
            significant as the corpus size grows. In years 8 to 10, compounding accelerates noticeably —
            the gains on your accumulated corpus become larger than your monthly contributions. A ₹10,000
            SIP at 12% adds approximately ₹1.2 lakh in annual returns in year 10 (on a ₹10 lakh base)
            versus only ₹14,400 in annual returns in year 1 (on a ₹1.2 lakh base). This exponential
            acceleration is why investors should never stop a SIP early — the most productive growth
            years are always the later ones.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Ten years also represents a meaningful tax-efficiency threshold for equity mutual funds.
            Units held for more than one year from their purchase date qualify as Long Term Capital Gains
            (LTCG) taxed at just 12.5%, with the first ₹1.25 lakh per financial year completely exempt.
            For a SIP started 10 years ago, all 120 monthly instalments now qualify for LTCG treatment —
            and if you redeem the corpus over two or three financial years rather than all at once, you
            can utilise the ₹1.25 lakh annual exemption multiple times, dramatically reducing your
            effective tax liability on the gains.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            How to Maximise Your 10-Year SIP Returns
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The single highest-impact decision for a 10-year SIP is fund selection. Choosing a low-cost
            index fund over an equivalent actively managed fund can add 0.5 to 1.5% to your annual
            return simply by eliminating the expense ratio drag. On ₹10,000/month for 10 years, the
            difference between a 0.5% and 1.5% expense ratio fund translates to approximately ₹1.5 to
            ₹2.5 lakh in additional maturity value — purely from lower costs. Nifty 50 index funds from
            UTI, HDFC, or SBI have delivered returns within 0.1 to 0.2% of the benchmark at the lowest
            available cost, making them the most reliable choice for investors who want market returns
            without the complexity of active fund selection.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The second most impactful decision is to never stop the SIP during a market correction.
            When the market falls 20 to 30%, the automatic instinct is to pause the SIP to &quot;wait for
            the market to stabilise.&quot; This is the exact opposite of the correct strategy — a market
            correction means each monthly SIP instalment buys more units at lower prices, setting up
            larger gains when the market recovers. Investors who paused their SIPs during the March 2020
            Covid crash and resumed 3 to 6 months later permanently lost some of the best buying
            opportunities in a decade. Those who continued without pause captured the full recovery and
            saw their 10-year corpus significantly outperform peers who paused. Consistency is more
            valuable than market timing for any SIP horizon.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-base font-bold text-gray-900">Related SIP Calculators</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "SIP Calculator", href: "/sip-calculator", desc: "Calculate returns for any tenure" },
              { label: "Monthly SIP for ₹1 Crore", href: "/monthly-sip-to-get-1-crore", desc: "How much to invest to become crorepati" },
              { label: "₹5000 SIP Returns", href: "/sip-5000-per-month", desc: "10, 15, 20, 25, 30 year projections" },
              { label: "SIP vs Lump Sum", href: "/sip-vs-lumpsum", desc: "Which investment is better?" },
              { label: "Step-Up SIP Calculator", href: "/step-up-sip-calculator", desc: "Annual increment SIP" },
              { label: "SWP Calculator", href: "/swp-calculator", desc: "Plan systematic withdrawals post-SIP" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition hover:border-primary hover:bg-orange-50"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">{l.label}</p>
                  <p className="text-xs text-gray-500">{l.desc}</p>
                </div>
                <span className="text-primary">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
