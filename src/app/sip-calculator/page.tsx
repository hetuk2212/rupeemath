import type { Metadata } from "next";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
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
    question: "What is a SIP calculator?",
    answer:
      "A SIP (Systematic Investment Plan) calculator estimates how much your monthly mutual fund investments will grow over time based on an expected rate of return. It uses the compound interest formula to show you the maturity amount.",
  },
  {
    question: "How is SIP return calculated?",
    answer:
      "SIP returns are calculated using the formula: M = P × [(1+r)^n – 1]/r × (1+r), where P is the monthly investment, r is the monthly rate (annual rate ÷ 12 ÷ 100), and n is the total number of months.",
  },
  {
    question: "Is 12% return on SIP realistic in India?",
    answer:
      "Historically, diversified equity mutual funds in India have delivered 12–15% CAGR over long periods (10+ years). However, returns are market-linked and not guaranteed. Past performance does not guarantee future results.",
  },
  {
    question: "What is a good monthly SIP amount?",
    answer:
      "A good rule of thumb is to invest at least 20% of your take-home salary in SIPs. Even ₹1,000/month started early can grow significantly due to compounding. The best amount depends on your financial goals.",
  },
  {
    question: "Can I withdraw SIP anytime?",
    answer:
      "Most open-ended mutual funds allow you to withdraw (redeem) your SIP investments anytime. However, ELSS funds have a 3-year lock-in. Early withdrawal before completing long holding periods may result in lower returns.",
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
      <AffiliateCTA
        heading="Ready to Start Your SIP?"
        subtext="Compare top mutual funds and start investing in minutes."
        ctaLabel="Explore Mutual Funds →"
        ctaHref="#"
      />
      <FAQSection items={faqs} />
    </div>
  );
}
