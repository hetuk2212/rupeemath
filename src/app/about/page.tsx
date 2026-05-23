import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, CreditCard, Landmark, Calculator, Home, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "About RupeeMath — Free Financial Calculators for Indians",
  description:
    "Learn about RupeeMath — free, instant financial calculators built for Indian investors and borrowers. SIP, EMI, FD, Income Tax, and Home Loan calculators.",
  alternates: { canonical: "https://www.rupeemath.co.in/about" },
};

const calculators = [
  {
    icon: TrendingUp,
    title: "SIP Calculator",
    href: "/sip-calculator",
    description:
      "Calculate how your monthly Systematic Investment Plan contributions grow into long-term wealth using compound interest.",
  },
  {
    icon: CreditCard,
    title: "EMI Calculator",
    href: "/emi-calculator",
    description:
      "Find the exact monthly EMI for any home loan, car loan, or personal loan. See principal vs interest breakdown.",
  },
  {
    icon: Landmark,
    title: "FD Calculator",
    href: "/fd-calculator",
    description:
      "Calculate Fixed Deposit maturity amount for any bank with monthly, quarterly, half-yearly, or annual compounding.",
  },
  {
    icon: Calculator,
    title: "Income Tax Calculator",
    href: "/income-tax-calculator",
    description:
      "Compare old vs new tax regime for FY 2024-25 and instantly see which saves you more money.",
  },
  {
    icon: Home,
    title: "Home Loan Eligibility",
    href: "/home-loan-eligibility",
    description:
      "Check the maximum home loan you can get from Indian banks based on your salary and existing EMIs (FOIR method).",
  },
];

const whyUs = [
  "100% free — no sign-up, no subscription",
  "All calculations run in your browser — no data sent to servers",
  "India-specific: correct tax slabs, FOIR rules, and compounding norms",
  "Instant results — updates as you move the slider",
  "Mobile-friendly — works perfectly on any device",
  "SEO-optimised with FAQ sections on every calculator",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "About" }]} />

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About <span className="text-primary">RupeeMath</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          RupeeMath is a free collection of financial calculators built specifically for Indian
          investors, borrowers, and taxpayers. Our goal is simple: give every Indian access to
          accurate, instant financial calculations — without needing a spreadsheet, a financial
          advisor, or a paid app.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Financial literacy in India is growing rapidly, but most online calculators are either
          cluttered with ads, require login, or simply give wrong results. RupeeMath was built to
          fix that. We focus on clean design, accurate math, and India-specific rules — from the
          correct FY 2024-25 income tax slabs to bank FOIR norms for home loans.
        </p>
      </section>

      {/* Calculators */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Our Calculators</h2>
        <div className="space-y-3">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 hover:text-primary">{calc.title}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{calc.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why RupeeMath */}
      <section className="mb-10 rounded-2xl border border-border bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Why RupeeMath?</h2>
        <ul className="space-y-2">
          {whyUs.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="mb-2 text-base font-semibold text-amber-800">Important Disclaimer</h2>
        <p className="text-sm leading-relaxed text-amber-700">
          All calculators on RupeeMath are for <strong>informational purposes only</strong> and do
          not constitute financial advice. Results are estimates based on the inputs you provide and
          standard financial formulas. Actual returns, tax liability, loan eligibility, or maturity
          amounts may vary based on market conditions, bank policies, and individual circumstances.
          Always consult a qualified financial advisor before making investment, borrowing, or tax
          decisions.
        </p>
      </section>

      {/* Contact */}
      <section className="rounded-xl border border-primary-200 bg-primary-50 p-5">
        <h2 className="mb-2 text-base font-semibold text-primary">Contact Us</h2>
        <p className="text-sm text-gray-600">
          Have feedback, found a bug, or want to suggest a new calculator? We&apos;d love to hear
          from you.
        </p>
        <a
          href="mailto:admin@rupeemath.co.in"
          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
        >
          admin@rupeemath.co.in
        </a>
      </section>
    </div>
  );
}
