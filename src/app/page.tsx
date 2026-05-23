import Link from "next/link";
import { TrendingUp, CreditCard, Landmark, Calculator, Home } from "lucide-react";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Calculate how your monthly mutual fund SIP grows into wealth over time.",
    href: "/sip-calculator",
    icon: TrendingUp,
    color: "bg-blue-50 text-blue-600",
    cta: "Calculate SIP Returns",
  },
  {
    title: "EMI Calculator",
    description: "Find your exact monthly EMI for home, car, or personal loans.",
    href: "/emi-calculator",
    icon: CreditCard,
    color: "bg-green-50 text-green-600",
    cta: "Calculate EMI",
  },
  {
    title: "FD Calculator",
    description: "See how much your Fixed Deposit will grow with compound interest.",
    href: "/fd-calculator",
    icon: Landmark,
    color: "bg-amber-50 text-amber-600",
    cta: "Calculate FD Returns",
  },
  {
    title: "Income Tax Calculator",
    description: "Compare old vs new tax regime and find which saves you more tax.",
    href: "/income-tax-calculator",
    icon: Calculator,
    color: "bg-purple-50 text-purple-600",
    cta: "Calculate Tax",
  },
  {
    title: "Home Loan Eligibility",
    description: "Check the maximum home loan amount you're eligible for based on salary.",
    href: "/home-loan-eligibility",
    icon: Home,
    color: "bg-rose-50 text-rose-600",
    cta: "Check Eligibility",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4" />
            Free Financial Calculators for India
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Smart financial decisions <br />
            <span className="text-primary">start here</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Instant, accurate calculators for SIP, EMI, FD, Income Tax, and Home Loan.
            No sign-up. No ad popups. Just results.
          </p>
          <Link
            href="/sip-calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
          >
            Start Calculating
            <TrendingUp className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">All Calculators</h2>
        <p className="mb-10 text-center text-gray-500">
          All calculations are instant and done in your browser — no server, no data sent.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${calc.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                  {calc.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-500">{calc.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  {calc.cta} →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-border bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-gray-800">Why RupeeMath?</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "100% Free", desc: "No sign-up, no subscription, no hidden charges." },
              { title: "Instant Results", desc: "All calculations happen in real-time as you type." },
              { title: "India-Specific", desc: "Built for Indian tax laws, banks, and investors." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
