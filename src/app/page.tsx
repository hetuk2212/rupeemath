import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, CreditCard, Landmark, Calculator, Home, ArrowRight, PiggyBank, Repeat, FileText, Building2, Receipt } from "lucide-react";

export const metadata: Metadata = {
  title: "RupeeMath — Free Financial Calculators for India",
  description:
    "13 free financial calculators for Indian investors and borrowers. SIP, EMI, FD, Income Tax, Home Loan, PPF, HRA, Gratuity and more. No signup. Instant results.",
  alternates: { canonical: "https://www.rupeemath.co.in" },
  openGraph: {
    title: "RupeeMath — Free Financial Calculators for India",
    description: "13 free calculators: SIP, EMI, FD, Income Tax, Home Loan and more. No signup needed.",
    url: "https://www.rupeemath.co.in",
  },
};

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
      { title: "ITR Calculator", desc: "Calculate income tax return amount for FY 2025-26.", href: "/itr-calculator", icon: Calculator, badge: null },
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
            13 free tools for EMI, SIP, Tax, PPF &amp; more. No sign‑up required. Instant results. Download PDF reports.
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

      {/* AI Advisor Featured Card */}
      <section className="border-b border-navy-800 bg-navy-900 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-navy-800 p-6 shadow-xl sm:p-8">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary opacity-10 blur-3xl"
            />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
                  ✨ NEW — AI Financial Advisor
                </div>
                <h2 className="text-xl font-black text-white sm:text-2xl">
                  Can you afford that loan?
                </h2>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-navy-300">
                  Tell us your salary and expenses. Our AI tells you if you can afford that
                  loan and how to manage it — in plain, honest English.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Personalized verdict", "Budget breakdown", "Savings tips"].map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-navy-900/60 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/ai-advisor"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl"
              >
                Try AI Advisor Free →
              </Link>
            </div>
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

      {/* About RupeeMath */}
      <section className="border-t border-border bg-white px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-black text-gray-900">
            About <span className="text-primary">RupeeMath</span> Financial Calculators
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-gray-600">
            <p>
              RupeeMath is a free financial calculator platform built specifically for Indian investors,
              salaried employees, and home loan borrowers. Our mission is simple: give every Indian access
              to the same accurate, formula-driven financial calculations that banks and financial advisors
              use — without requiring a signup, a subscription, or any personal information. Every
              calculator on RupeeMath is updated to reflect current Indian tax slabs, RBI guidelines, and
              banking norms so you can trust the numbers you see before making important financial
              decisions.
            </p>
            <p>
              The EMI calculator on RupeeMath uses the standard reducing balance formula used by every
              scheduled bank and NBFC in India — the same formula that determines your home loan, car
              loan, and personal loan monthly instalment. Unlike simple interest calculators that show
              misleading numbers, our EMI tool correctly computes the declining principal, the interest
              component of each instalment, and the total interest outgo over the full loan tenure. You
              can see a complete amortisation schedule and compare how your total cost changes across
              different interest rates and tenures — helping you negotiate better with your bank before
              signing any loan agreement.
            </p>
            <p>
              The SIP calculator helps Indians understand the most powerful force in personal finance:
              compounding. By investing a fixed amount in a mutual fund every month, your money works
              harder over time — early investments compound for decades while later investments benefit
              from the growing corpus they join. Our calculator shows the year-by-year growth of your SIP
              corpus and highlights the wealth gap between starting at 25 versus 35. Whether you are
              planning for retirement, your child&apos;s education, or a home purchase ten years from now,
              the SIP calculator makes the case for starting — and staying invested — with real numbers.
            </p>
            <p>
              The income tax calculator is one of the most used tools on RupeeMath, especially during the
              ITR filing season. It computes your exact tax liability under both the old tax regime and
              the new tax regime for FY 2024-25, factoring in your gross salary, HRA exemption, Section
              80C investments, home loan interest deduction, health insurance premiums, and NPS
              contributions. The result is an instant side-by-side comparison showing which regime puts
              more money in your pocket — along with the monthly in-hand salary under each option. This
              calculation, which used to require a CA visit, now takes under two minutes on RupeeMath.
            </p>
            <p>
              The home loan eligibility calculator applies the FOIR (Fixed Obligation to Income Ratio)
              methodology used by all major Indian banks — SBI, HDFC, ICICI, Axis, and PNB — to show
              you the exact maximum home loan amount you qualify for based on your net monthly salary and
              existing EMI obligations. By adjusting the interest rate and tenure sliders, you can
              instantly see how a longer repayment period or a co-applicant&apos;s income changes your
              eligibility. Understanding your eligibility before approaching a bank saves you from
              rejection-related CIBIL score damage and helps you walk in with realistic expectations and
              stronger negotiating confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose RupeeMath */}
      <section className="border-t border-border bg-gray-50 px-4 py-14">
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

      {/* Popular Guides — links to landing pages not in main calculator list */}
      <section className="bg-navy-900 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-base font-black uppercase tracking-widest text-primary">
            Popular Guides &amp; Calculators
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "ITR Calculator 2026", href: "/itr-calculator", desc: "Calculate income tax return amount" },
              { label: "Home Loan Amount Eligibility", href: "/home-loan-amount-eligibility", desc: "Maximum loan amount by salary" },
              { label: "EMI for ₹30 Lakh Home Loan", href: "/emi-30-lakh-home-loan", desc: "Monthly payment at all rates" },
              { label: "EMI for ₹20 Lakh Home Loan", href: "/emi-20-lakh-home-loan", desc: "Monthly payment at all rates" },
              { label: "EMI for ₹50 Lakh Home Loan", href: "/emi-50-lakh-home-loan", desc: "Monthly payment at all rates" },
              { label: "Joint Home Loan Eligibility", href: "/joint-home-loan-eligibility", desc: "Combined income eligibility" },
              { label: "Home Loan on ₹30,000 Salary", href: "/home-loan-for-30000-salary", desc: "Eligibility for lower income" },
              { label: "₹5000 SIP Returns", href: "/sip-5000-per-month", desc: "10, 15, 20, 25, 30 year projections" },
              { label: "SIP vs Lump Sum", href: "/sip-vs-lumpsum", desc: "Which investment strategy is better?" },
              { label: "Monthly SIP for ₹1 Crore", href: "/monthly-sip-to-get-1-crore", desc: "How much to invest to become crorepati" },
              { label: "SIP Calculator — 10 Years", href: "/sip-calculator-10-years", desc: "Returns at all investment amounts" },
              { label: "AI Financial Advisor", href: "/ai-advisor", desc: "Can you afford that loan?" },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-center justify-between rounded-xl border border-navy-700 bg-navy-800 px-4 py-3 transition hover:border-primary/50 hover:bg-navy-700"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{guide.label}</p>
                  <p className="text-xs text-navy-300">{guide.desc}</p>
                </div>
                <span className="ml-3 shrink-0 text-primary">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
