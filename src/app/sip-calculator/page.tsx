import type { Metadata } from "next";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "SIP Calculator 2025 — Calculate Mutual Fund SIP Returns",
  description:
    "Use our free SIP calculator to estimate your mutual fund returns. Enter monthly investment, rate of return, and tenure to see your maturity amount with a growth chart.",
  keywords: ["SIP calculator", "SIP calculator India", "mutual fund SIP returns", "systematic investment plan calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/sip-calculator" },
  openGraph: {
    title: "SIP Calculator — Calculate Mutual Fund Returns | RupeeMath",
    description: "Free SIP calculator for Indian investors. Get instant maturity estimates with charts.",
    url: "https://www.rupeemath.co.in/sip-calculator",
  },
};

const faqs = [
  {
    question: "What is the ideal SIP amount for a beginner?",
    answer:
      "There is no fixed ideal amount — even ₹500/month is a valid start. A common guideline is to invest at least 10–20% of your monthly income via SIP. The key is consistency: starting early with a small amount beats starting late with a large one, thanks to the power of compounding.",
  },
  {
    question: "What happens if I miss a SIP instalment?",
    answer:
      "Missing one or two SIP instalments does not cancel your SIP. The AMC will retry the debit; if it fails, that month's unit purchase is simply skipped. However, frequent failures (typically 3 consecutive months) may lead to the SIP being deactivated by the fund house.",
  },
  {
    question: "Is SIP better than lump sum investment?",
    answer:
      "For most retail investors, SIP is better because it averages out the cost of purchase (rupee cost averaging) and removes the need to time the market. Lump sum can outperform SIP if invested at a market low, but predicting the bottom is nearly impossible. SIP is lower risk and more disciplined.",
  },
  {
    question: "Can I increase my SIP amount over time?",
    answer:
      "Yes — this is called a Step-Up SIP or Top-Up SIP. You can increase your SIP amount annually (say by 10% each year) to match salary increments. Step-up SIPs are significantly more powerful than flat SIPs over 10–20 year horizons and are offered by most AMCs.",
  },
  {
    question: "How is SIP return different from fixed deposit return?",
    answer:
      "FD returns are fixed and guaranteed (6–7.5% per year currently), making them low-risk but low-reward. SIP returns are market-linked and variable — equity mutual funds have historically delivered 12–15% CAGR over 10+ years, but this is not guaranteed. SIP is suited for long-term wealth creation; FD is suited for capital preservation.",
  },
];

export default function SIPCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "SIP Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        SIP Calculator — Estimate Mutual Fund Returns
      </h1>
      <p className="mb-8 text-gray-500">
        Plan your wealth with monthly SIP investments. See how small, regular contributions grow
        into a large corpus over time.
      </p>
      <SIPCalculator />
      <PDFDownload title="SIP Calculator Report" />
      <div className="mt-6 rounded-xl border border-border bg-orange-50 p-4">
        <p className="text-sm text-gray-700">
          <strong>Popular:</strong>{" "}
          <a href="/sip-5000-per-month" className="font-semibold text-primary underline underline-offset-2">
            ₹5000 SIP Returns for 10, 15, 20, 25, 30 Years →
          </a>{" "}
          — detailed projections with rate comparison tables.
        </p>
      </div>
      <AffiliateCTA
        heading="Ready to Start Your SIP?"
        subtext="Compare top mutual funds and start investing in minutes."
        ctaLabel="Explore Mutual Funds →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a SIP?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A Systematic Investment Plan (SIP) is a method of investing a fixed amount in a mutual
            fund at regular intervals — typically monthly. Instead of investing a lump sum, you invest
            small amounts consistently over time. SIP leverages the power of <strong>rupee cost
            averaging</strong>: you buy more units when the market is low and fewer when it is high,
            lowering your average cost per unit over time. Combined with <strong>compound interest</strong>,
            even modest monthly investments can grow into substantial wealth over 10–20 years. SIPs
            are available for equity, debt, hybrid, and index mutual funds — making them suitable for
            every type of investor and financial goal.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath SIP Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Monthly Investment:</strong> Enter the amount you plan to invest each month (e.g., ₹5,000). Use the slider or type directly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Expected Return Rate:</strong> Enter the annual return you expect from the mutual fund (e.g., 12% for equity funds). This is an estimate — actual returns vary.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Tenure:</strong> Select the number of years you plan to invest (e.g., 10 years). Longer tenure = more compounding = higher returns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>Read the results:</strong> The calculator instantly shows your Maturity Amount, Total Invested, and Wealth Gained — along with a year-by-year growth chart.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Experiment:</strong> Try different amounts and tenures to set your savings goals. Even increasing your SIP by ₹500/month can add lakhs to your final corpus.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">SIP Formula Explained</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The SIP maturity amount is calculated using the future value of an annuity formula:
          </p>
          <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800">
            M = P × [(1 + r)ⁿ – 1] / r × (1 + r)
          </div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><strong>M</strong> — Maturity amount (total corpus at the end)</li>
            <li><strong>P</strong> — Monthly SIP amount (e.g., ₹5,000)</li>
            <li><strong>r</strong> — Monthly interest rate = Annual rate ÷ 12 ÷ 100 (e.g., 12% → 0.01)</li>
            <li><strong>n</strong> — Total number of months (e.g., 10 years → 120 months)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Example: ₹5,000/month at 12% for 10 years → Maturity ≈ ₹11.6 lakh on an investment of ₹6 lakh. The remaining ₹5.6 lakh is pure compound growth.
          </p>
        </section>
      </div>

      <div className="mt-6 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">The Power of Compounding in SIP</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Compounding is the financial principle that makes SIP such a powerful wealth creation tool over long time horizons. When your investment earns returns, those returns are reinvested and begin earning their own returns. Over time, this creates an exponential growth curve that accelerates the longer you stay invested. The difference between a 15-year SIP and a 20-year SIP is not just 5 more years of contributions — it is 5 more years of the accumulated corpus earning compounding returns. A ₹10,000 monthly SIP at 12% for 15 years creates a corpus of approximately ₹50 lakh. Extend that by just 5 more years and the same SIP produces ₹1 crore — double the corpus for only 33% more contributions.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Starting early is the single most powerful lever in SIP investing, far more important than the amount you invest. Consider two investors: Priya starts a ₹5,000 SIP at age 25 and runs it for 30 years until retirement at 55. Raj starts a ₹10,000 SIP at age 35 and runs it for 20 years until the same age. At 12% returns, Priya accumulates approximately ₹1.76 crore while Raj accumulates ₹99.9 lakh — almost half as much, despite investing double the monthly amount. Priya invested ₹18 lakh in total (₹5,000 × 360 months) versus Raj&apos;s ₹24 lakh (₹10,000 × 240 months). The 10-year head start on compounding creates a wealth differential that cannot be compensated for by investing more money later.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            A common mistake among first-time SIP investors is stopping the SIP when markets fall. This is actually the opposite of what works. During a market downturn, your fixed monthly SIP buys more mutual fund units at lower prices — this is the rupee cost averaging effect. When the market recovers, those cheaper units deliver a higher percentage gain. Investors who continue their SIPs through the 2020 Covid crash, the 2015 China slowdown correction, and the 2008 global financial crisis consistently earned better long-term returns than those who paused or exited. The SIP structure rewards patience and consistency — the time in the market, not timing the market, is what builds wealth over 10–20 year horizons.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">SIP vs Fixed Deposit — Which is Better?</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The SIP vs FD debate is one of the most common questions Indian investors face, and the honest answer is that they serve fundamentally different purposes. A Fixed Deposit is a guaranteed-return instrument where your principal is completely safe and the interest rate is locked in at the time of opening. If you open an FD at 7.5% for 5 years, you will receive exactly 7.5% per year, no more and no less. This predictability makes FDs ideal for capital preservation, emergency funds, and short-term financial goals where you cannot afford to lose money. The limitation is that FD returns, after accounting for income tax deducted at the applicable slab rate, often struggle to keep pace with India&apos;s inflation rate — meaning the real purchasing power of your FD corpus may actually decrease over time.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            SIP in equity mutual funds operates at the opposite end of the spectrum. Returns are not guaranteed — the NAV of your fund will fluctuate daily with market conditions, and in any given year you might see a gain of 30% or a loss of 20%. However, over long investment horizons of 7 years or more, diversified equity mutual funds in India have historically delivered returns in the range of 12–15% per year. A ₹5,000 monthly SIP at 12% for 20 years creates a corpus of approximately ₹50 lakh, while the same ₹5,000 monthly FD at 7% over 20 years grows to approximately ₹30 lakh. The SIP investor ends up with 65% more wealth, but accepts the volatility of equity markets to achieve it.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The tax treatment is another major differentiator that advantages SIP for high-income earners. FD interest is added to your annual income and taxed at your full income tax slab rate — for someone in the 30% bracket, a 7.5% FD delivers an effective post-tax return of just 5.25%. Equity mutual fund gains, when held for more than one year, are taxed as Long Term Capital Gains (LTCG) at a flat 12.5% with the first ₹1.25 lakh per year completely exempt. This structural tax advantage means the post-tax return from equity SIPs is significantly higher than from FDs for investors in the 20–30% tax brackets. For short-term goals under 3 years, FDs remain the right choice — capital safety is paramount. For goals beyond 5 years, SIP in a diversified equity fund or balanced hybrid fund is almost always the better wealth-building choice.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">How to Start a SIP in India</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Starting a SIP in India has become remarkably simple and takes less than 15 minutes with a smartphone. The first step is completing your KYC (Know Your Customer) verification, which is now fully digital via Aadhaar-based e-KYC. You can complete this on any AMC (Asset Management Company) website or through direct investment platforms like Zerodha Coin, Groww, Kuvera, or Paytm Money. Once KYC is done, you choose the mutual fund scheme that matches your risk profile and investment goal — index funds are recommended for beginners, while more experienced investors might choose flexi-cap or mid-cap funds for higher long-term return potential.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            After selecting the fund, you set the SIP amount (minimum ₹100–₹500 depending on the fund), choose the date of monthly deduction, and link your bank account for the auto-debit mandate. The money is automatically debited every month on the chosen date and units are allocated at the current NAV. You can manage, pause, or stop your SIP entirely through the same app at any time without any penalty for open-ended funds. For tax-saving ELSS funds, a 3-year lock-in applies to each instalment. Once set up, a SIP essentially runs on autopilot — the discipline of automated investing is itself one of its greatest advantages over manual monthly transfers or lump-sum investing.
          </p>
        </section>

      </div>

      <div className="mt-6">
        <FAQSection items={[
          {
            question: "What is the minimum amount for SIP in India?",
            answer: "The minimum SIP amount varies by fund house but is typically ₹100 to ₹500 per month. Most large AMCs like HDFC, ICICI Prudential, Mirae, and Axis offer minimum SIP amounts of ₹500/month. Index funds and direct plans often have the lowest minimums. Some funds offer daily and weekly SIP options with similar minimum amounts. There is no upper limit on SIP investment — you can invest any amount above the minimum. The important principle is to start with whatever amount you can afford consistently, because regularity matters far more than the starting amount for long-term wealth creation through compounding.",
          },
          {
            question: "Can I stop my SIP anytime?",
            answer: "Yes — SIPs in open-ended mutual funds can be stopped, paused, or modified at any time without any penalty. You simply log into your AMC account or broker app and submit a stop-SIP request, which typically takes effect within 2–3 business days. The units you have already accumulated remain invested in the fund and continue to earn returns — stopping the SIP does not redeem your investment. You can resume the SIP later with the same or a different amount. The only exception is ELSS (tax-saving) funds, where each instalment has a 3-year lock-in from its investment date — you cannot redeem those units before the lock-in expires, even if you stop the SIP.",
          },
          {
            question: "What return rate should I use in the SIP calculator?",
            answer: "For planning purposes, use 10–12% for a diversified large-cap or index fund, 12–14% for a flexi-cap or multi-cap fund, and 8–9% for a conservative hybrid or balanced advantage fund. These are long-term historical averages — actual year-to-year returns vary widely. It is wise to always run your calculations at a slightly conservative rate (say 10% instead of 12%) so you are not over-relying on optimistic projections. Never use recent 1-year or 3-year returns as your assumption for long-term projections — equity markets are cyclical and recent outperformance is rarely sustained at the same rate over 15–20 years.",
          },
          {
            question: "Is SIP safe for investment?",
            answer: "SIP in mutual funds is regulated by SEBI (Securities and Exchange Board of India), making it a well-regulated investment vehicle. However, safety depends on the type of fund. SIP in debt mutual funds is relatively low-risk, with returns linked to bond yields. SIP in equity mutual funds carries market risk — your portfolio value fluctuates with stock market movements, and short-term losses are possible. However, the disciplined monthly investment nature of SIP (rupee cost averaging) makes it far safer than a lump-sum equity investment, because you are not exposed to the risk of investing at a market peak. Over a 7+ year horizon, the probability of a negative real return from a diversified equity SIP has historically been very low in Indian markets.",
          },
          {
            question: "What is a step-up SIP and should I use it?",
            answer: "A Step-Up SIP (also called Top-Up SIP) automatically increases your monthly investment amount by a fixed percentage every year — typically aligned with your annual salary increment. If you start with ₹10,000/month and set a 10% step-up, you invest ₹11,000 in year 2, ₹12,100 in year 3, and so on. The wealth creation impact is dramatic: a ₹10,000 flat SIP at 12% for 20 years creates ₹99.9 lakh, while the same SIP with a 10% annual step-up creates ₹2.06 crore — over double. Most AMCs offer this feature and it is one of the most underused but powerful tools in personal finance. If you expect salary increments of 8–15% annually, a matching step-up SIP ensures your investments grow in proportion to your earnings.",
          },
          {
            question: "Which mutual funds are best for SIP in India?",
            answer: "For first-time investors, Nifty 50 or Nifty 500 index funds are the best starting point — they offer market-linked returns at the lowest cost (expense ratio under 0.2%) with no fund manager risk. Among actively managed funds, look for consistent 10-year track records rather than recent 1-year performance. Large-cap funds are lower volatility, flexi-cap funds offer market-cycle adaptability, and mid-cap funds offer higher long-term return potential with higher volatility. Choose direct plans (not regular plans) to save 0.5–1% in commission annually — this seemingly small difference compounded over 20 years adds lakhs to your final corpus. Always verify a fund&apos;s actual expense ratio, rolling return consistency, and downside capture ratio before committing.",
          },
        ]} />
      </div>
    </div>
  );
}
