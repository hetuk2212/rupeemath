import Link from "next/link";
import { TrendingUp, CreditCard, Landmark, Calculator, Home, ArrowRight, PiggyBank, Repeat, FileText, Building2, Receipt } from "lucide-react";

const groups = [
  {
    category: "Investment Calculators",
    items: [
      { title: "SIP Calculator", desc: "Calculate mutual fund SIP returns over time.", href: "/sip-calculator", icon: TrendingUp, badge: "Popular" },
      { title: "Step-Up SIP Calculator", desc: "Model annual SIP increases and see the extra wealth.", href: "/step-up-sip-calculator", icon: TrendingUp, badge: null },
      { title: "SWP Calculator", desc: "Plan systematic withdrawals from your corpus.", href: "/swp-calculator", icon: Repeat, badge: null },
      { title: "PPF Calculator", desc: "Calculate PPF maturity at 7.1% tax-free returns.", href: "/ppf-calculator", icon: PiggyBank, badge: null },
      { title: "FD Calculator", desc: "FD maturity for any bank with any compounding.", href: "/fd-calculator", icon: Landmark, badge: null },
      { title: "RD Calculator", desc: "Recurring Deposit maturity with quarterly compounding.", href: "/rd-calculator", icon: PiggyBank, badge: null },
    ],
  },
  {
    category: "Loan Calculators",
    items: [
      { title: "EMI Calculator", desc: "Monthly EMI for home, car, or personal loans.", href: "/emi-calculator", icon: CreditCard, badge: "Popular" },
      { title: "Home Loan Eligibility", desc: "Maximum loan based on income and FOIR rules.", href: "/home-loan-eligibility", icon: Home, badge: null },
    ],
  },
  {
    category: "Tax & Salary Calculators",
    items: [
      { title: "Income Tax Calculator", desc: "Compare old vs new regime for FY 2024-25.", href: "/income-tax-calculator", icon: Calculator, badge: "FY 2024-25" },
      { title: "HRA Calculator", desc: "Calculate HRA exemption under income tax rules.", href: "/hra-calculator", icon: Building2, badge: null },
      { title: "Salary / CTC Calculator", desc: "CTC to monthly in-hand salary breakdown.", href: "/salary-calculator", icon: FileText, badge: null },
      { title: "Gratuity Calculator", desc: "Gratuity amount and tax exemption under the Act.", href: "/gratuity-calculator", icon: Receipt, badge: null },
      { title: "GST Calculator", desc: "Add or extract GST with CGST & SGST split.", href: "/gst-calculator", icon: Receipt, badge: null },
    ],
  },
];

const stats = [
  { value: "13", label: "Calculators" },
  { value: "100%", label: "Free Forever" },
  { value: "0", label: "Signup Needed" },
  { value: "PDF", label: "Download Reports" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 px-4 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
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
            13 free tools for EMI, SIP, Tax, PPF & more. No sign‑up. No ads. Download PDF reports.
          </p>
          <Link
            href="/sip-calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl"
          >
            Start Calculating
            <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-full border border-navy-700 bg-navy-800 px-4 py-1.5">
                <span className="text-sm font-black text-primary">{s.value}</span>
                <span className="text-sm text-navy-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Groups */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14">
        {groups.map((group) => (
          <div key={group.category} className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-orange-100" />
              <h2 className="shrink-0 text-sm font-black uppercase tracking-widest text-primary">
                {group.category}
              </h2>
              <span className="h-px flex-1 bg-orange-100" />
            </div>
            <div className="space-y-3">
              {group.items.map((calc) => {
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
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-primary">{calc.title}</h3>
                        {calc.badge && (
                          <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-bold text-primary">{calc.badge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">{calc.desc}</p>
                    </div>
                    <div className="hidden shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all group-hover:bg-primary-600 sm:flex">
                      Calculate Now
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary sm:hidden" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose RupeeMath */}
      <section className="border-t border-border bg-white px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-xl font-black text-gray-900">
            Why Choose <span className="text-primary">RupeeMath</span>?
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { emoji: "🆓", title: "100% Free", desc: "All calculators free forever — no hidden charges, no premium tier." },
              { emoji: "🚫", title: "No Signup", desc: "Use every tool without creating an account or sharing personal data." },
              { emoji: "⚡", title: "Instant Results", desc: "Results update in real time as you move sliders — no page reload." },
              { emoji: "📄", title: "PDF Reports", desc: "Download a PDF of your calculation to save or share with your advisor." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-gray-50 p-5 text-center"
              >
                <div className="mb-3 text-3xl">{item.emoji}</div>
                <p className="mb-1.5 font-bold text-gray-900">{item.title}</p>
                <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Indians */}
      <section className="bg-orange-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-xl font-black text-gray-900">
            Trusted by <span className="text-primary">Indians</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            RupeeMath provides free financial calculators for SIP, EMI, FD, Income Tax, and Home
            Loan calculations. Our tools help Indians make smarter financial decisions — whether
            you are planning your first SIP, comparing tax regimes, calculating EMI for a home
            loan, or checking your fixed deposit maturity. Every calculator uses the correct
            Indian formulas, up-to-date tax slabs, and RBI-standard FOIR norms, so you can trust
            the numbers before approaching a bank or financial advisor.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-500">
            {["SIP Calculator", "EMI Calculator", "FD Calculator", "Income Tax Calculator", "Home Loan Eligibility", "PPF Calculator", "HRA Calculator"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-white px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-navy-900 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-xl font-black text-white">
            Why <span className="text-primary">RupeeMath</span>?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: "🔒", title: "100% Private", desc: "All calculations happen in your browser. We never see your financial data." },
              { icon: "📄", title: "PDF Reports", desc: "Download a PDF of your results to save or share with your advisor." },
              { icon: "🇮🇳", title: "India-First", desc: "Correct FY 2024-25 tax slabs, FOIR norms, and Indian compounding standards." },
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
