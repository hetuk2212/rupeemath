import type { Metadata } from "next";
import Link from "next/link";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Monthly SIP to Get 1 Crore — How Much to Invest to Become Crorepati",
  description:
    "Find out exactly how much monthly SIP you need to accumulate 1 crore. See required investment at different tenures and return rates. Free SIP calculator India.",
  keywords: [
    "monthly sip to get 1 crore",
    "sip to become crorepati",
    "how much sip to get 1 crore",
    "sip to reach 1 crore",
    "sip 1 crore calculator",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/monthly-sip-to-get-1-crore" },
  openGraph: {
    title: "Monthly SIP to Get 1 Crore — Crorepati SIP Calculator 2026 | RupeeMath",
    description: "How much SIP per month to accumulate ₹1 crore? See the exact amount at every tenure and return rate.",
    url: "https://www.rupeemath.co.in/monthly-sip-to-get-1-crore",
  },
};

const sipTable = [
  { tenure: "10 years", r10: "₹48,820", r12: "₹43,471", r14: "₹38,614", r15: "₹36,318" },
  { tenure: "12 years", r10: "₹35,745", r12: "₹30,861", r14: "₹26,569", r15: "₹24,680" },
  { tenure: "15 years", r10: "₹21,247", r12: "₹17,330", r14: "₹14,080", r15: "₹12,697" },
  { tenure: "18 years", r10: "₹12,948", r12: "₹9,933", r14: "₹7,573", r15: "₹6,692" },
  { tenure: "20 years", r10: "₹9,650",  r12: "₹7,189", r14: "₹5,318", r15: "₹4,622" },
  { tenure: "25 years", r10: "₹4,762",  r12: "₹3,168", r14: "₹2,085", r15: "₹1,726" },
  { tenure: "30 years", r10: "₹2,418",  r12: "₹1,435", r14: "₹841",   r15: "₹663"   },
];

const faqs = [
  {
    question: "How much SIP per month is needed to accumulate ₹1 crore in 20 years?",
    answer:
      "To accumulate ₹1 crore in 20 years, you need a monthly SIP of approximately ₹7,189 at a 12% annual return, ₹9,650 at 10%, or ₹5,318 at 14%. The most commonly cited figure — ₹7,000 to ₹7,500 per month — is based on the historical 12% CAGR of Indian equity markets over long periods. At 12% for exactly 20 years, ₹7,189/month invested as a SIP grows to ₹1 crore. This makes a ₹1 crore target achievable on a middle-class income — ₹7,189 is less than 15% of a ₹50,000 monthly salary. The key is starting early and maintaining the SIP without interruption through market corrections, which is where most investors fail to stay the course.",
  },
  {
    question: "Can I reach ₹1 crore with a ₹5,000 SIP?",
    answer:
      "Yes, but it requires more time. A ₹5,000 monthly SIP at 12% annual return reaches ₹1 crore in approximately 25 to 26 years. At 14%, it takes around 23 years. At 15%, approximately 22 years. If you cannot invest ₹7,000 to ₹8,000 per month now, starting with ₹5,000 is far better than not starting at all — and using a Step-Up SIP that increases your investment by 10% annually each year significantly accelerates the timeline. A ₹5,000 SIP with a 10% annual step-up at 12% crosses ₹1 crore in approximately 20 years rather than 26, because the growing investment amount in later years dramatically increases the compounding base.",
  },
  {
    question: "Is 12% return rate realistic for a 20-year SIP?",
    answer:
      "For a diversified equity mutual fund SIP held over 20 years, a 12% CAGR is a reasonable planning assumption based on Indian market history. The Nifty 50 index has delivered approximately 12 to 14% CAGR over most 15 to 20 year rolling periods since its inception. However, this is not guaranteed — actual returns depend on market conditions during your investment period and the specific fund you choose. For conservative planning, using 10% to 11% as your return assumption ensures your goal remains achievable even in below-average market conditions. Index funds, which have delivered close to benchmark returns at the lowest possible cost (expense ratio below 0.2%), are a reliable way to capture the market CAGR without active fund selection risk.",
  },
  {
    question: "How does starting age affect my SIP to reach ₹1 crore?",
    answer:
      "Starting age has a dramatic impact because of compounding. If you start investing at 25 to reach your target by 55 (30-year horizon), you need only ₹1,435 per month at 12% to accumulate ₹1 crore. Starting at 35 for the same retirement age (20-year horizon) requires ₹7,189 per month — five times more. Starting at 45 for retirement at 60 (15-year horizon) requires ₹17,330 per month. The monthly SIP required roughly doubles every 5 years you delay starting. This is the single most powerful argument for beginning a SIP in your 20s, even with a small amount. A 25-year-old investing ₹1,435 per month for 30 years builds the same ₹1 crore corpus as a 45-year-old investing ₹17,330 per month for 15 years — investing 12 times more per month.",
  },
  {
    question: "What happens if I pause or stop my SIP midway?",
    answer:
      "Pausing a SIP for a few months has a relatively minor impact on the final corpus if you resume quickly. The invested units continue to grow during the pause — only new purchases stop. However, stopping a SIP permanently midway is far more damaging than most investors realise. The impact is not just the missing monthly contributions — it is the loss of compounding on all future contributions that the paused amount would have generated. If you stop a 20-year SIP after 10 years, you lose not just 10 years of contributions but also the compounding on those contributions over the remaining decade. The corpus that was on an exponential growth trajectory in years 11 to 20 — when compounding accelerates most dramatically — is frozen at its year-10 value.",
  },
  {
    question: "Should I start a SIP with a goal of ₹1 crore or set a different target?",
    answer:
      "₹1 crore is a round-number goal that is meaningful today but may not account for inflation over a long SIP horizon. In 20 years at 6% inflation, ₹1 crore will have the purchasing power of approximately ₹31 lakh today. For retirement planning, a more realistic target is ₹3 to ₹5 crore if you are starting today and retiring in 20 to 25 years. Instead of targeting a specific rupee amount, consider targeting a monthly corpus withdrawal — for example, aiming for a corpus that sustains ₹50,000 per month in real terms at retirement. Use the SWP (Systematic Withdrawal Plan) calculator alongside this SIP calculator to reverse-engineer the corpus you actually need and then set your monthly SIP amount accordingly.",
  },
];

export default function MonthlySIPto1CrorePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Monthly SIP to Get 1 Crore" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Monthly SIP to Get 1 Crore — Crorepati SIP Calculator 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Find out exactly how much you need to invest every month to reach ₹1 crore. See the
        required SIP amount at different tenures and return rates, then use the calculator to
        build your personalised wealth plan.
      </p>

      <SIPCalculator />
      <PDFDownload title="₹1 Crore SIP Plan Report" />

      {/* SIP required table */}
      <div className="mt-10">
        <h2 className="mb-1 text-xl font-bold text-gray-900">
          Monthly SIP Needed to Accumulate ₹1 Crore
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Required monthly SIP at different tenures and annual return rates
        </p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Tenure</th>
                <th className="px-4 py-3 text-right font-semibold">At 10%</th>
                <th className="px-4 py-3 text-right font-semibold">At 12%</th>
                <th className="px-4 py-3 text-right font-semibold">At 14%</th>
                <th className="px-4 py-3 text-right font-semibold">At 15%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {sipTable.map((row, i) => (
                <tr key={row.tenure} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.tenure}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r10}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">{row.r12}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r14}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.r15}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Target corpus: ₹1,00,00,000. Monthly SIP amounts are approximate. Mutual fund returns
          are not guaranteed. Past performance is not indicative of future results.
        </p>
      </div>

      <AffiliateCTA
        heading="Start Your ₹1 Crore SIP Journey Today"
        subtext="Zero commission SIP in top-rated equity and index mutual funds."
        ctaLabel="Start SIP Online →"
        ctaHref="#"
      />

      <div className="mt-10 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">How to Reach ₹1 Crore Through SIP</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Accumulating ₹1 crore through a monthly SIP is one of the most achievable long-term
            financial goals for working Indians. The mathematics are straightforward: at a 12% annual
            return — the historical average of Indian equity markets over 15 to 20 year periods —
            a monthly SIP of ₹7,189 grows to ₹1 crore in exactly 20 years. A ₹10,000 monthly SIP
            at the same return reaches ₹1 crore in approximately 17 years. The path to ₹1 crore is
            determined by three variables: the monthly amount you invest, the return the market
            delivers, and the time you stay invested. Of these three, time is both the most powerful
            and the one you have least control over — which is why starting early matters more than
            the amount you start with.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The most important insight from the table above is the dramatic difference tenure makes.
            Going from a 20-year to a 30-year investment horizon at 12% reduces the required monthly
            SIP from ₹7,189 to just ₹1,435 — an 80% reduction in monthly commitment for the same ₹1
            crore target. This is purely the power of compounding over longer periods. In the first 15
            years of a SIP, most of your corpus is built from your own contributions. In years 16 to
            30, the compounding on the accumulated corpus does the heavy lifting — your returns on
            returns dwarf your actual monthly contributions. A SIP investor who understands and
            embraces this will never stop their SIP during market corrections, because they know the
            most explosive growth happens in the later years.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Step-Up SIP is the most powerful strategy for accelerating the path to ₹1 crore. If you
            start a ₹5,000 SIP today but increase it by 10% every year — matching your expected salary
            increments — you will reach ₹1 crore significantly faster than with a flat ₹7,189 SIP,
            while keeping your initial monthly commitment lower. The step-up approach is psychologically
            easier because each increase feels proportional to your improved income, and the long-term
            wealth creation impact is dramatically higher. Use the Step-Up SIP calculator to see your
            personalised projection.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Why ₹1 Crore Remains a Meaningful Financial Goal
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            While ₹1 crore is a round number and its real purchasing power will be lower in 20 years
            due to inflation, it remains a meaningful milestone because it represents genuine financial
            optionality. A corpus of ₹1 crore invested in a balanced fund at 8 to 10% can generate a
            monthly income of ₹67,000 to ₹83,000 through an SWP — enough to supplement or replace
            a salary in most Indian cities today. In 20 years, that monthly income will need to be
            higher to maintain the same lifestyle, which is why the realistic target for most investors
            is ₹2 to ₹3 crore rather than exactly ₹1 crore. However, starting with a ₹1 crore goal
            and then adjusting upward as your income grows is a perfectly valid approach.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The psychological value of a ₹1 crore target should also not be underestimated. Having a
            specific, tangible goal — rather than a vague intention to "save more" — dramatically
            improves investment consistency. Investors with a clear ₹1 crore target and a defined
            monthly SIP to achieve it are far less likely to pause their SIP during market downturns,
            because they understand that each monthly instalment is a step toward a specific,
            time-bound destination. Use the calculator above to set your exact monthly SIP, bookmark
            this page, and check your progress annually against the projections.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-base font-bold text-gray-900">Related SIP Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "SIP Calculator", href: "/sip-calculator", desc: "Full SIP returns calculator" },
              { label: "Step-Up SIP Calculator", href: "/step-up-sip-calculator", desc: "Annual increment SIP" },
              { label: "₹5000 SIP Returns", href: "/sip-5000-per-month", desc: "10–30 year projections for ₹5K SIP" },
              { label: "SIP vs Lump Sum", href: "/sip-vs-lumpsum", desc: "Which strategy is better?" },
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
