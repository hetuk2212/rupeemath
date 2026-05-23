import Link from "next/link";
import { TrendingUp, CreditCard, Landmark, Calculator, Home, ArrowRight } from "lucide-react";

const calculators = [
  {
    title: "SIP Calculator",
    description: "See how monthly investments compound into crores over 10–30 years. Plan your mutual fund SIP strategy.",
    href: "/sip-calculator",
    icon: TrendingUp,
    badge: "Most Popular",
    cta: "Calculate SIP",
  },
  {
    title: "EMI Calculator",
    description: "Find the exact EMI for any home, car or personal loan. See full principal vs interest breakdown.",
    href: "/emi-calculator",
    icon: CreditCard,
    badge: null,
    cta: "Calculate EMI",
  },
  {
    title: "FD Calculator",
    description: "Calculate Fixed Deposit maturity for any bank across monthly, quarterly and annual compounding.",
    href: "/fd-calculator",
    icon: Landmark,
    badge: null,
    cta: "Calculate FD",
  },
  {
    title: "Income Tax Calculator",
    description: "Compare old vs new tax regime for FY 2024-25 and find which saves you more money instantly.",
    href: "/income-tax-calculator",
    icon: Calculator,
    badge: "FY 2024-25",
    cta: "Calculate Tax",
  },
  {
    title: "Home Loan Eligibility",
    description: "Check the maximum home loan Indian banks will approve based on your salary and existing EMIs.",
    href: "/home-loan-eligibility",
    icon: Home,
    badge: null,
    cta: "Check Eligibility",
  },
];

const stats = [
  { value: "5", label: "Calculators" },
  { value: "100%", label: "Free Forever" },
  { value: "0", label: "Signup Needed" },
  { value: "⚡", label: "Instant Results" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero — Dark Navy */}
      <section className="relative overflow-hidden bg-navy-900 px-4 py-20">
        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Saffron ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary opacity-[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-5 text-7xl font-black leading-none text-primary opacity-90">₹</div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            India&apos;s Smartest{" "}
            <span className="text-primary">Financial</span>
            <br />
            Calculator
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-300">
            Free tools trusted by 10,000+ Indians for EMI, SIP, Tax &amp; more.
            No sign‑up. No ads. Just instant results.
          </p>

          <Link
            href="/sip-calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl"
          >
            Start Calculating
            <ArrowRight className="h-5 w-5" />
          </Link>

          {/* Stats pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-full border border-navy-700 bg-navy-800 px-4 py-1.5"
              >
                <span className="text-sm font-black text-primary">{s.value}</span>
                <span className="text-sm text-navy-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator List — Horizontal Cards */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
            All <span className="text-primary">Calculators</span>
          </h2>
          <p className="mt-2 text-gray-500">
            All calculations run entirely in your browser — zero data sent to any server.
          </p>
        </div>

        <div className="space-y-4">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex items-center gap-5 rounded-2xl border border-l-4 border-orange-100 border-l-primary bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary">
                      {calc.title}
                    </h3>
                    {calc.badge && (
                      <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-bold text-primary">
                        {calc.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">{calc.description}</p>
                </div>
                <div className="hidden shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all group-hover:bg-primary-600 sm:flex">
                  {calc.cta}
                  <ArrowRight className="h-4 w-4" />
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary sm:hidden" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust Section — Dark Navy */}
      <section className="bg-navy-900 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-xl font-black text-white">
            Why <span className="text-primary">RupeeMath</span>?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🔒",
                title: "100% Private",
                desc: "All calculations happen in your browser. We never see your financial data.",
              },
              {
                icon: "⚡",
                title: "Instant Results",
                desc: "Live updates as you move the slider — no button to press, no waiting.",
              },
              {
                icon: "🇮🇳",
                title: "India-First",
                desc: "Correct FY 2024-25 tax slabs, FOIR norms, and Indian compounding standards.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-navy-800 p-5">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <p className="font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-navy-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
