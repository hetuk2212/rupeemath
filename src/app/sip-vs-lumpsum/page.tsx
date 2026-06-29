import type { Metadata } from "next";
import Link from "next/link";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "SIP vs Lump Sum — Which Investment is Better for Indians 2026",
  description:
    "Compare SIP vs lump sum investment in mutual funds. See returns, risk, tax efficiency and when each strategy wins. Free SIP calculator India.",
  keywords: [
    "sip vs lumpsum",
    "sip vs lump sum investment india",
    "sip or lump sum which is better",
    "sip vs one time investment",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/sip-vs-lumpsum" },
  openGraph: {
    title: "SIP vs Lump Sum Investment — Which is Better for Indians 2026 | RupeeMath",
    description: "Compare SIP and lump sum mutual fund investments on returns, risk and tax. Free calculator.",
    url: "https://www.rupeemath.co.in/sip-vs-lumpsum",
  },
};

const comparisonRows = [
  { factor: "Investment method", sip: "Fixed amount every month", lump: "One large amount at once" },
  { factor: "Market timing risk", sip: "Eliminated (rupee cost averaging)", lump: "High — if you invest at a peak" },
  { factor: "Minimum amount", sip: "₹500/month", lump: "₹1,000 (typical)" },
  { factor: "Discipline required", sip: "Low — auto-debit handles it", lump: "High — resist spending windfall" },
  { factor: "Best for", sip: "Regular savers from salary", lump: "Bonus, inheritance, matured FD" },
  { factor: "Returns (bull market)", sip: "Lower than lump sum", lump: "Higher — full corpus compounds" },
  { factor: "Returns (volatile market)", sip: "Higher — buys dips automatically", lump: "Lower — no averaging benefit" },
  { factor: "Tax treatment", sip: "Each instalment has its own holding period", lump: "Single holding period from investment date" },
];

const faqs = [
  {
    question: "Is SIP better than lump sum investment?",
    answer:
      "Neither is universally better — it depends on your circumstances. SIP is better when you earn a regular monthly income and want to invest consistently without worrying about market timing. It averages out your purchase cost across market cycles through a mechanism called rupee cost averaging, which means you buy more units when prices fall and fewer when prices rise. Lump sum is better when you receive a large one-time amount — like a bonus, inheritance, or a matured FD — and the market is at a reasonable or low valuation level. In a steadily rising bull market, lump sum consistently outperforms SIP because the full corpus compounds from day one. In volatile or declining markets, SIP wins because the averaging effect lowers your effective cost per unit. For most salaried Indians investing from monthly income, SIP is the practical and psychologically sustainable choice.",
  },
  {
    question: "What is rupee cost averaging in SIP?",
    answer:
      "Rupee cost averaging is the mechanism that gives SIP its risk-reduction advantage. When you invest a fixed amount every month, you automatically buy more mutual fund units when the NAV (net asset value) is low and fewer units when the NAV is high. Over time, this brings your average cost per unit below the average NAV over the investment period — which means you need smaller gains to break even and start profiting. Consider a simple example: you invest ₹10,000 per month for two months. In month 1, NAV is ₹100 so you buy 100 units. In month 2, NAV falls to ₹50 so you buy 200 units. Your total investment is ₹20,000 for 300 units — average cost ₹66.67 per unit. If NAV recovers to just ₹75, you are already in profit despite the market being 25% below its starting point. This is the power of rupee cost averaging.",
  },
  {
    question: "Should I do SIP or lump sum in a falling market?",
    answer:
      "In a falling market, SIP is almost always the better choice because you benefit from rupee cost averaging — each monthly instalment buys more units at lower prices, setting up larger gains when the market eventually recovers. If you have a lump sum available during a market fall, you face two choices: invest it all at once (lump sum) hoping the bottom is near, or invest it systematically over 6–12 months via a Systematic Transfer Plan (STP) from a liquid fund into the equity fund. STP gives you most of the averaging benefit while keeping your money deployed rather than sitting idle in a savings account. Pure STP into equity over 6 months during a market downturn has historically been one of the best entry strategies for large sums in Indian markets.",
  },
  {
    question: "Can I mix SIP and lump sum investments?",
    answer:
      "Yes — and combining both is often the optimal strategy for Indian investors. Use monthly SIP for your regular salary savings, treating it as automated forced investing. When you receive a bonus, tax refund, or any windfall, deploy it as a lump sum into the same or a complementary fund. This hybrid approach gives you the discipline and averaging benefits of SIP for regular income while maximising deployment of large one-time inflows. Many investors also use a 'lump sum into a liquid fund + STP into equity' approach for large windfalls — investing the full amount in a liquid fund immediately (so the money earns returns rather than sitting idle) and then systematically transferring it to equity over 3–6 months.",
  },
  {
    question: "How does tax work differently for SIP vs lump sum?",
    answer:
      "Tax treatment is an important difference between SIP and lump sum, particularly for ELSS (tax-saving) funds and when computing long-term capital gains. For lump sum investment in a non-ELSS equity fund, the entire investment has a single purchase date. If held for over one year, all gains qualify as LTCG taxed at 12.5% (with ₹1.25 lakh annual exemption). For SIP, each monthly instalment has its own purchase date and its own one-year holding period. This means if you start a SIP in June 2025, the June 2025 instalment becomes LTCG-eligible in June 2026, the July 2025 instalment in July 2026, and so on. This matters for ELSS funds especially — each SIP instalment in an ELSS fund has its own 3-year lock-in from its investment date, so you cannot redeem the full corpus at once after exactly 3 years.",
  },
  {
    question: "What return difference can I expect between SIP and lump sum?",
    answer:
      "In a long-term bull market, lump sum consistently delivers higher absolute returns because the full corpus compounds for the entire duration. If you invest ₹12 lakh as a lump sum at 12% for 10 years, you get approximately ₹37.2 lakh. The same ₹12 lakh invested as ₹10,000/month SIP for 10 years at 12% gives approximately ₹23.2 lakh — because early SIP instalments compound for the full 10 years but later ones compound for only a few months. However, this comparison assumes you had ₹12 lakh available to invest as a lump sum on day one — which most salary earners don't. For regular monthly savers, SIP is the only practical option. The return difference also narrows considerably in volatile markets where SIP's averaging benefit closes the gap.",
  },
];

export default function SIPvsLumpsumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "SIP vs Lump Sum" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SIP vs Lump Sum — Which Investment Strategy is Better?
      </h1>
      <p className="mb-8 text-gray-500">
        Compare SIP and lump sum mutual fund investments side by side. Use the calculator below
        to see projected returns, then read the full comparison to choose the right strategy for
        your financial situation.
      </p>

      <SIPCalculator />
      <PDFDownload title="SIP vs Lump Sum Comparison Report" />

      <AffiliateCTA
        heading="Start Your SIP or Deploy a Lump Sum Today"
        subtext="Zero commission SIP and lump sum investments in top-rated mutual funds."
        ctaLabel="Explore Mutual Funds →"
        ctaHref="#"
      />

      {/* Comparison table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">SIP vs Lump Sum — Side-by-Side Comparison</h2>
        <p className="mb-4 text-sm text-gray-500">Key differences at a glance</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Factor</th>
                <th className="px-4 py-3 text-left font-semibold text-primary">SIP</th>
                <th className="px-4 py-3 text-left font-semibold text-blue-300">Lump Sum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {comparisonRows.map((row, i) => (
                <tr key={row.factor} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-700">{row.factor}</td>
                  <td className="px-4 py-3 text-gray-700">{row.sip}</td>
                  <td className="px-4 py-3 text-gray-700">{row.lump}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">What is SIP and How Does It Work?</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            A Systematic Investment Plan (SIP) is a method of investing a fixed amount in a mutual fund
            at regular intervals — typically monthly. Instead of deploying a large amount all at once, you
            build your investment corpus gradually over time. Each month, a fixed amount is automatically
            debited from your bank account and invested in the chosen mutual fund at the prevailing NAV
            (Net Asset Value). The number of units you receive varies each month depending on the current
            NAV — when the market falls, the same amount buys more units; when the market rises, it buys
            fewer. This automatic variation in unit purchase is the core of rupee cost averaging, which
            eliminates the need to time the market and reduces the risk of entering at a peak.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            SIP is the most popular investment method among salaried Indian investors because it aligns
            perfectly with the monthly income cycle. Setting up a SIP is entirely automatic — you
            register a one-time mandate and the money is invested every month without any action from
            your side. The discipline this enforces is one of its greatest benefits: investors who set up
            SIPs are far less likely to miss investment months or divert money to spending compared to
            those who plan to invest lump sums from leftover salary. Over 10 to 30 year horizons, this
            consistency compounds into significant wealth even from modest monthly amounts.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">What is Lump Sum Investment?</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            A lump sum investment is a one-time deployment of a large sum into a mutual fund. Unlike SIP
            where you invest gradually, a lump sum puts the entire amount to work immediately — meaning
            the full corpus starts compounding from day one. This is its primary advantage: in a rising
            market, a lump sum investor benefits from every market gain on the full invested amount, while
            a SIP investor only benefits on the gradually accumulated corpus. Over long bull market
            periods, lump sum investing has historically delivered higher absolute returns than an
            equivalent SIP amount spread over the same period.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The significant drawback of lump sum investing is timing risk. If you invest a large sum at a
            market peak — when valuations are stretched and a correction is imminent — your entire
            investment suffers the full drawdown immediately. This has a psychological and financial
            impact that many investors find difficult to weather: seeing a ₹10 lakh investment drop to
            ₹7 lakh within months of investing can trigger panic selling at exactly the wrong moment.
            Lump sum works best when markets are at or below historical average valuations, or when the
            investor has a very long time horizon (15+ years) and the emotional resilience to hold through
            intermediate corrections without selling.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Returns Comparison — SIP vs Lump Sum</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Comparing SIP and lump sum returns requires a fair starting point. The comparison below
            assumes the same total capital is deployed: ₹12 lakh total, either as ₹10,000/month SIP for
            10 years or as a ₹12 lakh lump sum invested at the start. At 12% annual return:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-gray-50">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-800">Strategy</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-800">Total Invested</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-primary">Maturity Value</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-800">Gains</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {[
                  { strategy: "SIP — ₹10,000/month × 10 years", invested: "₹12L", maturity: "₹23.2L", gains: "₹11.2L" },
                  { strategy: "Lump Sum — ₹12L at start", invested: "₹12L", maturity: "₹37.2L", gains: "₹25.2L" },
                  { strategy: "SIP — ₹10,000/month × 20 years", invested: "₹24L", maturity: "₹99.9L", gains: "₹75.9L" },
                  { strategy: "Lump Sum — ₹24L at start × 20 yrs", invested: "₹24L", maturity: "₹2.31 Cr", gains: "₹2.07 Cr" },
                ].map((row, i) => (
                  <tr key={row.strategy} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2.5 font-medium text-gray-700">{row.strategy}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600">{row.invested}</td>
                    <td className="px-4 py-2.5 text-right font-bold text-primary">{row.maturity}</td>
                    <td className="px-4 py-2.5 text-right text-green-700">{row.gains}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            At 12% p.a. Lump sum comparison assumes the full amount is available on day one — most salary
            earners build corpus gradually, making SIP the practical choice. Mutual fund returns are not guaranteed.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">When to Choose SIP and When to Choose Lump Sum</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Choose SIP when you earn a regular monthly income and want to invest consistently without the
            stress of market timing. SIP is the right choice for salaried employees, professionals, and
            anyone building long-term wealth through disciplined monthly savings for goals like
            retirement, children's education, or a home purchase 10 to 20 years away. It is also the
            right choice when markets are at elevated valuations and a correction seems possible — the
            averaging mechanism protects you from entering entirely at a peak.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Choose lump sum when you receive a large one-time inflow — an annual bonus, a matured FD,
            money from property sale, or an inheritance — and you want to put it to work immediately.
            If markets are at a reasonable valuation (P/E below historical average) and you have a long
            time horizon, deploying the full amount as a lump sum gives the best expected return. If you
            are uncertain about timing, use a Systematic Transfer Plan (STP): park the lump sum in a
            liquid mutual fund and transfer it to equity in equal tranches over 3 to 6 months. This
            gives you averaging benefits while keeping the money deployed rather than idle.
          </p>
        </section>

        {/* Related links */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-base font-bold text-gray-900">Related SIP Calculators</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "SIP Calculator", href: "/sip-calculator", desc: "Calculate returns for any SIP amount" },
              { label: "Step-Up SIP Calculator", href: "/step-up-sip-calculator", desc: "Annual increment SIP returns" },
              { label: "₹5000 SIP Returns", href: "/sip-5000-per-month", desc: "10, 15, 20, 25, 30 year projections" },
              { label: "SWP Calculator", href: "/swp-calculator", desc: "Plan systematic withdrawals" },
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
