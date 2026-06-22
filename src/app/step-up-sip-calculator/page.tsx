import type { Metadata } from "next";
import { StepUpSIPCalculator } from "@/components/calculators/StepUpSIPCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Step-Up SIP Calculator India 2025 — Annual Increase SIP",
  description: "Calculate Step-Up SIP returns where you increase your SIP amount annually. See how much more wealth a 10% yearly step-up creates vs a flat SIP over 15-30 years.",
  keywords: ["step up sip calculator india", "step up sip calculator", "top up sip calculator", "sip increment calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/step-up-sip-calculator" },
};

const faqs = [
  { question: "What is a Step-Up SIP?", answer: "A Step-Up SIP (also called Top-Up SIP) is a variant of a regular SIP where your monthly investment amount increases by a fixed percentage every year — typically aligned with your salary increment. For example, if you start with ₹10,000/month and step up by 10% annually, you invest ₹11,000 in year 2, ₹12,100 in year 3, and so on. This approach dramatically increases your final corpus compared to a flat SIP because both the invested amount and compounding increase together." },
  { question: "How much extra wealth does a Step-Up SIP create?", answer: "The difference is substantial over long periods. For a ₹10,000 flat SIP at 12% for 20 years: maturity ≈ ₹99.9 lakh. For the same SIP with 10% annual step-up: maturity ≈ ₹2.06 crore — more than 2× the flat SIP result. The step-up SIP's higher invested amounts in later years benefit from compounding for the remaining tenure, creating exponential additional wealth." },
  { question: "What step-up percentage should I choose?", answer: "The most common step-up percentage is 10% per year, which roughly matches the average annual salary increment in India. More conservative options are 5–7% (matching inflation). If you expect higher salary growth (15–20%), you can set a higher step-up. A good rule of thumb: set your step-up equal to your expected annual salary hike percentage." },
  { question: "Do all mutual funds support Step-Up SIP?", answer: "Most major AMCs (Axis, HDFC, ICICI Prudential, SBI, Mirae, etc.) offer Step-Up or Top-Up SIP facility. You can set the step-up amount in absolute terms (₹1,000 more each year) or percentage terms (10% more each year) when registering the SIP. The auto-debit mandate amount is automatically updated each year. Check your AMC's website or app for the specific setup process." },
  { question: "Can I stop or reduce the step-up later?", answer: "Yes. Most AMCs allow you to modify or stop the step-up feature without cancelling the entire SIP. If you face financial difficulty, you can pause the step-up or even reduce the SIP amount temporarily. The SIP mandate allows changes within the registered maximum limit. Contact your AMC or broker's app to modify the step-up settings at any time." },
];

export default function StepUpSIPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Step-Up SIP Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Step-Up SIP Calculator — Annual Increment SIP
      </h1>
      <p className="mb-8 text-gray-500">
        Calculate how much more wealth a Step-Up SIP creates vs a flat SIP. See the power of increasing your monthly investment in line with your salary.
      </p>
      <StepUpSIPCalculator />
      <PDFDownload title="Step-Up SIP Calculator Report" />
      <AffiliateCTA
        heading="Start a Step-Up SIP Today"
        subtext="Set up your Step-Up SIP with top-rated mutual funds. Aligned with annual salary increments."
        ctaLabel="Start Step-Up SIP →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is a Step-Up SIP?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A <strong>Step-Up SIP (Top-Up SIP)</strong> automatically increases your monthly SIP investment by a fixed percentage every year. The idea is simple: as your salary grows, so should your investment. Most people start a SIP with a comfortable monthly amount and forget to increase it as their income rises. Step-Up SIP automates this process — your SIP grows 10–15% per year without any manual intervention. The result is dramatically higher wealth creation. Over 20 years, a ₹10,000/month SIP with a 10% annual step-up can build more than 2× the corpus of a flat ₹10,000 SIP at the same return rate. The extra wealth comes from higher invested amounts in the later years, which have the longest time to compound.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the Step-Up SIP Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Initial Monthly SIP:</strong> Enter your starting monthly investment amount.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Annual Step-Up %:</strong> Enter the percentage increase each year (10% = salary increment parity).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Expected Returns:</strong> Enter the expected annual return (12% is historical average for diversified equity funds).</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Tenure:</strong> Select your investment period in years.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">5.</span><span><strong>Compare:</strong> The calculator shows Step-Up SIP vs Regular SIP side-by-side so you can see exactly how much extra wealth the step-up creates.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Step-Up SIP Impact — Example</h2>
          <p className="mb-3 text-sm text-gray-600">At 12% annual return, 20-year investment, starting ₹10,000/month:</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { stepup: "0% (Flat)", maturity: "₹99.9 L", invested: "₹24 L" },
              { stepup: "10% Step-Up", maturity: "₹2.06 Cr", invested: "₹57.3 L" },
              { stepup: "15% Step-Up", maturity: "₹3.43 Cr", invested: "₹79.8 L" },
            ].map((ex) => (
              <div key={ex.stepup} className="rounded-xl border border-border bg-gray-50 p-4 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-primary">{ex.stepup}</p>
                <p className="mt-1 text-xl font-black text-gray-900">{ex.maturity}</p>
                <p className="text-xs text-gray-500">Invested: {ex.invested}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-6 space-y-6">
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Step-Up SIP Formula and Calculation Method</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            A Step-Up SIP compounds in two dimensions: the monthly investment amount grows annually, and all investments compound continuously. The calculation requires year-by-year SIP periods to be summed:
          </p>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">Step-Up SIP Annual Investment</p>
              <p className="font-mono text-sm text-primary mb-2">P(y) = P(1) × (1 + g)^(y−1)</p>
              <p className="text-xs text-gray-600">Where: P(y) = Monthly SIP in year y, P(1) = Initial monthly SIP, g = Annual step-up rate (e.g. 0.10 for 10%). Year 1: P(1), Year 2: P(1)×1.1, Year 3: P(1)×1.21, and so on.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">Total Corpus = Sum of Year-wise SIP Maturity Values</p>
              <p className="text-xs text-gray-600">For each year y with monthly SIP P(y), calculate the FV of 12 monthly investments compounding at the expected return for the remaining (n−y) years. Sum all these FV values across all years. The calculator does this automatically — there is no single closed-form formula for step-up SIP.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-gray-800 mb-1">Example (₹10,000 start · 10% step-up · 12% return · 20 years)</p>
              <p className="text-xs text-gray-600">Year 1 SIP: ₹10,000/mo · Year 5 SIP: ₹14,641/mo · Year 10 SIP: ₹23,579/mo · Year 20 SIP: ₹61,159/mo · Total invested: ₹57.3L · Maturity: ₹2.06 crore</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            The step-up effect is multiplicative, not additive — a 10% step-up for 20 years doesn&apos;t double your corpus, it increases it 2× to 3× compared to a flat SIP, depending on the return rate and tenure.
          </p>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
