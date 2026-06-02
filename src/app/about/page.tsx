import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, CreditCard, Landmark, Calculator, Home,
  CheckCircle, PiggyBank, Repeat, FileText, Building2, Receipt,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "About RupeeMath — Free Financial Calculators for Indians",
  description:
    "Learn about RupeeMath — free, instant financial calculators built for Indian investors and borrowers. SIP, EMI, FD, Income Tax, Home Loan and more.",
  alternates: { canonical: "https://www.rupeemath.co.in/about" },
};

const calculators = [
  {
    icon: TrendingUp,
    title: "SIP Calculator",
    href: "/sip-calculator",
    description: "Calculate how monthly SIP contributions grow into long-term wealth using compound interest and rupee cost averaging.",
  },
  {
    icon: TrendingUp,
    title: "Step-Up SIP Calculator",
    href: "/step-up-sip-calculator",
    description: "Model annual SIP increases (top-up SIPs) and see how growing your contribution each year accelerates wealth creation.",
  },
  {
    icon: Repeat,
    title: "SWP Calculator",
    href: "/swp-calculator",
    description: "Plan systematic withdrawals from your retirement corpus and estimate how long your savings will last.",
  },
  {
    icon: PiggyBank,
    title: "PPF Calculator",
    href: "/ppf-calculator",
    description: "Calculate PPF maturity at 7.1% compounded annually — the safest long-term, tax-free investment in India.",
  },
  {
    icon: Landmark,
    title: "FD Calculator",
    href: "/fd-calculator",
    description: "Fixed Deposit maturity for any bank with monthly, quarterly, half-yearly, or annual compounding.",
  },
  {
    icon: PiggyBank,
    title: "RD Calculator",
    href: "/rd-calculator",
    description: "Recurring Deposit maturity amount with quarterly compounding as per Indian bank norms.",
  },
  {
    icon: CreditCard,
    title: "EMI Calculator",
    href: "/emi-calculator",
    description: "Monthly EMI for home, car, or personal loans with full amortisation schedule and principal vs interest breakdown.",
  },
  {
    icon: Home,
    title: "Home Loan Eligibility",
    href: "/home-loan-eligibility",
    description: "Maximum home loan amount based on income and the 50% FOIR rule used by all Indian banks.",
  },
  {
    icon: Calculator,
    title: "Income Tax Calculator",
    href: "/income-tax-calculator",
    description: "Compare old vs new regime for FY 2024-25. Enter your salary and deductions to see which saves you more.",
  },
  {
    icon: Building2,
    title: "HRA Calculator",
    href: "/hra-calculator",
    description: "Calculate your House Rent Allowance (HRA) exemption under Section 10(13A) of the Income Tax Act.",
  },
  {
    icon: FileText,
    title: "Salary / CTC Calculator",
    href: "/salary-calculator",
    description: "Break down your CTC into monthly in-hand salary, PF deductions, professional tax, and gratuity.",
  },
  {
    icon: Receipt,
    title: "Gratuity Calculator",
    href: "/gratuity-calculator",
    description: "Calculate gratuity amount and the tax-exempt portion under the Gratuity Act for any service tenure.",
  },
  {
    icon: Receipt,
    title: "GST Calculator",
    href: "/gst-calculator",
    description: "Add or extract GST from any amount with automatic CGST and SGST split for all tax slabs.",
  },
];

const whyUs = [
  "100% free — no sign-up, no subscription, no premium tier",
  "All calculations run entirely in your browser — no data is sent to any server",
  "India-specific: correct FY 2024-25 tax slabs, FOIR norms, and RBI-standard compounding",
  "Instant results — numbers update in real time as you move sliders",
  "Mobile-friendly — optimised for every screen size, from phones to desktops",
  "Download PDF reports to save or share your calculations",
  "Blog articles to help you understand and act on the numbers",
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
        <p className="mt-3 text-base leading-relaxed text-gray-500">
          Whether you are planning your first SIP, calculating the EMI on a home loan, comparing
          old and new tax regimes, or checking your Fixed Deposit maturity — RupeeMath gives you
          the numbers instantly, for free, with no registration required.
        </p>
      </div>

      {/* What is RupeeMath */}
      <section className="mb-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">What is RupeeMath?</h2>
        <p className="leading-relaxed text-gray-600">
          RupeeMath is an online financial tool platform built for the Indian market. Unlike generic
          calculators that use US or European financial standards, every tool on RupeeMath is
          calibrated for Indian rules — the correct income tax slabs updated for Budget 2024, the
          FOIR (Fixed Obligation to Income Ratio) method used by Indian banks, quarterly compounding
          for Recurring Deposits, and the 15G/15H rules for FD interest. We currently offer 13
          calculators across three categories: Investment, Loans, and Tax &amp; Salary.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600">
          All calculators run entirely on your device. No data you enter is ever transmitted to our
          servers — your income, loan amount, and investment details remain completely private. This
          is a deliberate design choice, not just a feature.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Our Mission</h2>
        <p className="leading-relaxed text-gray-600">
          Financial literacy in India is growing rapidly, but most online calculators are either
          cluttered with ads, demand a login, or give inaccurate results because they use outdated
          tax slabs or wrong compounding methods. RupeeMath was built to fix exactly that. We focus
          on three things above all else: <strong>correct math</strong>, <strong>clean design</strong>,
          and <strong>India-specific accuracy</strong>. Every formula is cross-checked against SEBI,
          RBI, and Income Tax Act guidelines. If we find an error, we fix it within 24 hours.
        </p>
      </section>

      {/* Why we built this */}
      <section className="mb-10 rounded-2xl border border-border bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Why We Built RupeeMath</h2>
        <p className="leading-relaxed text-gray-600">
          The idea for RupeeMath came from a simple frustration: every time we wanted to quickly
          calculate an EMI, compare tax regimes, or estimate SIP returns, existing tools either
          required signing up, showed irrelevant ads mid-calculation, or gave wrong answers (one
          popular calculator was using last year&apos;s tax slabs). We wanted one place — fast, clean,
          accurate, and free — where any Indian could calculate anything financial in under 30
          seconds. That is exactly what we built.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600">
          We also believe that access to financial information should not be paywalled. The same
          calculations that wealth managers charge consultation fees for are available here for
          free, to everyone, on any device.
        </p>
      </section>

      {/* Calculator tools */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Meet the Calculators</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">
          RupeeMath currently offers 13 free financial calculators. Click any tool below to open it.
        </p>
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
          All calculators on RupeeMath are for <strong>informational and educational purposes
          only</strong> and do not constitute financial, tax, or legal advice. Results are
          estimates based on the inputs you provide and standard financial formulas. Actual
          returns, tax liability, loan eligibility, EMI amounts, or maturity values may differ
          based on market conditions, bank-specific policies, individual credit profiles, and
          regulatory changes. Tax slabs and interest rates are periodically updated but may not
          reflect the most recent Budget amendments. Always verify results with your bank,
          employer, or a qualified Chartered Accountant or SEBI-registered financial advisor
          before making any investment, borrowing, or tax decisions.
        </p>
      </section>

      {/* Contact */}
      <section className="rounded-xl border border-primary/20 bg-primary-50 p-5">
        <h2 className="mb-2 text-base font-semibold text-primary">Get in Touch</h2>
        <p className="text-sm text-gray-600">
          Have feedback, found a calculation error, or want to suggest a new calculator? We&apos;d
          love to hear from you.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="mailto:hetuk2212@gmail.com"
            className="text-sm font-medium text-primary hover:underline"
          >
            hetuk2212@gmail.com
          </a>
          <span className="text-gray-300">·</span>
          <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
            Contact form →
          </Link>
        </div>
      </section>
    </div>
  );
}
