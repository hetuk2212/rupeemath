import type { Metadata } from "next";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "₹5000 SIP Calculator — Returns for 10, 15, 20, 25, 30 Years",
  description: "Calculate returns on ₹5000 monthly SIP. See exactly how much ₹5000 SIP grows in 10, 15, 20 years. Free SIP calculator India — no signup needed.",
  keywords: ["5000 sip calculator", "sip 5000 per month returns", "5000 monthly sip 20 years", "sip 5000 rupees returns india"],
  alternates: { canonical: "https://www.rupeemath.co.in/sip-5000-per-month" },
};

const returnsAt12 = [
  { years: "5 years",  invested: "₹3L",  returns: "₹1.12L", total: "₹4.12L"  },
  { years: "10 years", invested: "₹6L",  returns: "₹5.61L", total: "₹11.61L" },
  { years: "15 years", invested: "₹9L",  returns: "₹16.23L", total: "₹25.23L" },
  { years: "20 years", invested: "₹12L", returns: "₹37.96L", total: "₹49.96L" },
  { years: "25 years", invested: "₹15L", returns: "₹79.88L", total: "₹94.88L" },
  { years: "30 years", invested: "₹18L", returns: "₹1.58 Cr", total: "₹1.76 Cr" },
];

const rateComparison = [
  { rate: "8%",  total: "₹29.45L", returns: "₹17.45L" },
  { rate: "10%", total: "₹38.28L", returns: "₹26.28L" },
  { rate: "12%", total: "₹49.96L", returns: "₹37.96L" },
  { rate: "14%", total: "₹65.24L", returns: "₹53.24L" },
  { rate: "15%", total: "₹75.79L", returns: "₹63.79L" },
];

const faqs = [
  {
    question: "How much will ₹5000 SIP grow in 20 years?",
    answer: "A ₹5,000 monthly SIP at 12% annual returns will grow to approximately ₹49.96 lakh in 20 years. You would have invested ₹12 lakh (₹5,000 × 240 months), and the remaining ₹37.96 lakh is pure wealth created by compounding. At a more conservative 10% return, the corpus would be around ₹38.28 lakh. The actual result depends on the fund's performance, which is not guaranteed.",
  },
  {
    question: "Which mutual fund is best for a ₹5000 monthly SIP in India?",
    answer: "For a ₹5000 SIP, consider index funds (Nifty 50 or Nifty 500) for low-cost, market-linked returns — historically 12–14% CAGR over long periods. If you want actively managed funds, look at large-cap or flexi-cap funds with consistent 5-year and 10-year track records. Some popular options include funds from Mirae, Parag Parikh, HDFC, and Axis. Always check the fund's expense ratio (lower is better) and ensure it aligns with your risk appetite. Do not chase recent top performers — consistency matters more over 15–20 years.",
  },
  {
    question: "Is ₹5000 SIP enough to become a crorepati?",
    answer: "Yes — with time and patience. At 12% annual returns, a ₹5,000 monthly SIP crosses ₹1 crore in approximately 28–29 years. If you start at age 25, you could have ₹1 crore by age 53–54. If you can step up by 10% annually (₹5,500 in year 2, ₹6,050 in year 3, and so on), you can reach ₹1 crore in as little as 20–22 years. Starting early is the single biggest lever — every 5-year delay reduces your final corpus by approximately 40–50%.",
  },
  {
    question: "Can I stop a ₹5000 SIP anytime?",
    answer: "Yes — SIPs in mutual funds (except ELSS) can be paused or stopped at any time without penalty. You can submit a stop-SIP request via your AMC's app, broker platform (Zerodha, Groww, etc.), or by submitting a physical form. The units already purchased remain in your account and continue to grow. You can restart the SIP later. For ELSS funds, only the 3-year lock-in per instalment applies — each SIP instalment is locked for 3 years from its date of investment.",
  },
  {
    question: "What is better — ₹5000 SIP or ₹5000 RD?",
    answer: "For long-term goals (7+ years), SIP in equity mutual funds is significantly better. A ₹5,000 SIP at 12% for 15 years gives ₹25.23 lakh vs an RD at 7% giving approximately ₹15.7 lakh — almost 60% more wealth. For short-term goals (under 3 years), RD is safer since equity markets can be volatile over short periods. The right choice depends on your goal timeline: RD for capital preservation under 3 years, SIP for wealth creation over 7–10+ years.",
  },
];

export default function SIP5000Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "₹5000 SIP Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SIP Calculator ₹5000 Per Month
      </h1>
      <p className="mb-8 text-gray-500">
        See exactly how much a ₹5,000 monthly SIP grows over 10, 15, 20, 25, and 30 years. Adjust the return rate to model different market scenarios.
      </p>

      <SIPCalculator defaultMonthly={5000} />
      <PDFDownload title="₹5000 SIP Returns Report" />

      {/* Returns at 12% table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">₹5,000 Monthly SIP Returns at 12%</h2>
        <p className="mb-4 text-sm text-gray-500">Projected corpus at 12% annual return (historical equity average)</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Duration</th>
                <th className="px-4 py-3 text-right font-semibold">Amount Invested</th>
                <th className="px-4 py-3 text-right font-semibold">Returns Created</th>
                <th className="px-4 py-3 text-right font-semibold">Total Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {returnsAt12.map((row, i) => (
                <tr key={row.years} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.years}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{row.invested}</td>
                  <td className="px-4 py-3 text-right text-green-700 font-medium">{row.returns}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">Illustrative projections at 12% p.a. Mutual fund returns are not guaranteed. Past performance is not indicative of future results.</p>
      </div>

      {/* Rate comparison table */}
      <div className="mt-8">
        <h2 className="mb-1 text-xl font-bold text-gray-900">₹5,000 SIP at Different Return Rates (20 Years)</h2>
        <p className="mb-4 text-sm text-gray-500">How the final corpus changes with return rate — total invested: ₹12 lakh</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Annual Return</th>
                <th className="px-4 py-3 text-right font-semibold">Total Value</th>
                <th className="px-4 py-3 text-right font-semibold">Returns Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {rateComparison.map((row, i) => (
                <tr key={row.rate} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-primary">{row.rate}</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">{row.total}</td>
                  <td className="px-4 py-3 text-right text-green-700">{row.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">20-year projection. Monthly SIP: ₹5,000. Amounts are approximate.</p>
      </div>

      <AffiliateCTA
        heading="Start Your ₹5000 SIP Today"
        subtext="Zero commission SIP in top-rated mutual funds. Takes under 10 minutes to set up."
        ctaLabel="Start SIP Online →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">The Power of Compounding with ₹5000/month</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The most remarkable thing about a ₹5,000 SIP is how dramatically the corpus grows in the later years — not the early ones. This is the power of compounding, and it requires time to show its full effect.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            In the first 10 years, you invest ₹6 lakh and create ₹5.61 lakh in returns — a respectable 93% gain on your invested amount. But in the <em>next</em> 10 years (years 11–20), you invest another ₹6 lakh, yet the corpus grows from ₹11.6 lakh to ₹49.96 lakh — adding ₹38.4 lakh. Nearly 7× more wealth created from the same ₹5,000/month investment. That acceleration is compounding at work: your returns from year 1–10 themselves start earning returns in years 11–20.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            This is why starting early is more important than starting with a large amount. A 25-year-old investing ₹5,000/month for 30 years will retire with dramatically more wealth than a 35-year-old investing ₹15,000/month for 20 years — despite investing less total money.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Best Mutual Funds for ₹5000 SIP in India</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            For a ₹5,000 monthly SIP, the fund category matters more than the specific fund name. Here is how to choose:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Index funds (Nifty 50 / Nifty 500):</strong> Lowest cost (expense ratio under 0.2%), market-linked returns of 12–14% historically. Best for beginners and long-term (15+ years) investors.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Flexi-cap funds:</strong> Fund manager invests across large, mid, and small-cap stocks based on opportunity. Good for 10–15 year horizons with moderate risk tolerance.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>Large-cap funds:</strong> Lower volatility, invest in top 100 companies by market cap. Suitable if you want equity exposure with slightly lower downside risk.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span><strong>ELSS (Tax Saving) funds:</strong> Same as equity funds but with 3-year lock-in. Qualifies for ₹1.5 lakh deduction under Section 80C — useful if you need tax saving along with wealth creation.</span></li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">SIP vs RD vs FD — Best Option for ₹5000/month</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: "SIP (Equity)", value: "₹49.96L", sub: "20 yrs · 12% est.", points: ["Market-linked returns", "Tax-efficient LTCG", "Flexible, pause anytime"], highlight: true },
              { title: "RD (Bank)", value: "₹30.2L", sub: "20 yrs · 7% est.", points: ["Guaranteed returns", "Fully taxable interest", "Fixed tenure"] },
              { title: "FD (Lump sum)", value: "~₹25L", sub: "20 yrs · 7% est.", points: ["Guaranteed returns", "Fully taxable interest", "Requires lump sum"] },
            ].map((c) => (
              <div key={c.title} className={`rounded-xl border p-4 ${c.highlight ? "border-primary bg-orange-50" : "border-border bg-gray-50"}`}>
                <p className="text-xs font-black uppercase tracking-widest text-primary">{c.title}</p>
                <p className="mt-1 text-xl font-black text-gray-900">{c.value}</p>
                <p className="mb-2 text-xs text-gray-500">{c.sub}</p>
                <ul className="space-y-1">
                  {c.points.map((p) => <li key={p} className="text-xs text-gray-600">· {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-400">Illustrative projections. SIP returns are not guaranteed. RD/FD returns are approximate.</p>
        </section>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
