import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "New vs Old Tax Regime — Complete Guide 2026",
  description:
    "New vs old tax regime explained for FY 2026. Tax slabs, key deductions, who saves more, and how to decide which regime is right for you.",
  alternates: { canonical: "https://www.rupeemath.co.in/blog/new-vs-old-tax-regime-2026" },
  openGraph: {
    title: "New vs Old Tax Regime — Complete Guide 2026 | RupeeMath",
    description: "Detailed guide: new vs old tax regime slabs, deductions, and who saves more in FY 2026.",
    url: "https://www.rupeemath.co.in/blog/new-vs-old-tax-regime-2026",
  },
};

export default function TaxRegimePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "New vs Old Tax Regime" }]} />

      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-700">
            Tax
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="h-3.5 w-3.5" /> 6 min read
          </span>
          <span className="text-xs text-gray-400">May 2026</span>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          New vs Old Tax Regime — Complete Guide 2026
        </h1>
        <p className="text-base leading-relaxed text-gray-500">
          Since Budget 2024 made the new regime the default, millions of Indian taxpayers face the
          same question every April: which regime saves me more money? The answer depends on your
          salary, deductions, and financial habits — and it is different for everyone.
        </p>
      </div>

      <div className="space-y-7 text-sm leading-relaxed text-gray-700">

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">The Two Regimes at a Glance</h2>
          <p>
            The <strong>old tax regime</strong> has been in place for decades. It features higher
            base tax rates but allows a wide range of deductions and exemptions — Section 80C,
            HRA exemption, home loan interest, Section 80D health insurance premiums, LTA, NPS
            contributions, and many more. Disciplined investors who maximise these can significantly
            reduce their taxable income.
          </p>
          <p className="mt-3">
            The <strong>new tax regime</strong> (revised in Budget 2024) offers lower tax rates and
            a higher standard deduction of ₹75,000. However, most deductions are eliminated. From
            FY 2024-25 onwards, the new regime is the <em>default</em> — if you do not actively
            declare a preference to your employer, TDS will be deducted under the new regime.
          </p>
        </div>

        {/* Slab comparison table */}
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-800">Income Slab</th>
                <th className="px-4 py-3 text-left font-semibold text-blue-700">Old Regime</th>
                <th className="px-4 py-3 text-left font-semibold text-purple-700">New Regime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Up to ₹2.5 lakh", "Nil", "—"],
                ["Up to ₹3 lakh", "—", "Nil"],
                ["₹2.5L – ₹5L", "5%", "—"],
                ["₹3L – ₹7L", "—", "5%"],
                ["₹5L – ₹10L", "20%", "—"],
                ["₹7L – ₹10L", "—", "10%"],
                ["₹10L – ₹12L", "30%", "15%"],
                ["₹12L – ₹15L", "30%", "20%"],
                ["Above ₹15L", "30%", "30%"],
              ].map(([slab, old, newR], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                  <td className="px-4 py-2.5 font-medium">{slab}</td>
                  <td className="px-4 py-2.5 text-blue-700">{old}</td>
                  <td className="px-4 py-2.5 text-purple-700">{newR}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-4 py-2 text-xs text-gray-400">
            Standard deduction: ₹50,000 (old) / ₹75,000 (new). Section 87A rebate: old ≤₹5L → zero tax; new ≤₹7L → zero tax. 4% cess applies on final tax.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Key Deductions Available Only in the Old Regime</h2>
          <ul className="mt-2 space-y-2">
            {[
              "Section 80C (up to ₹1.5 lakh): ELSS, PPF, EPF, LIC, home loan principal, NSC, SSY, tuition fees.",
              "Section 80D (up to ₹25,000 + ₹50,000 for senior citizen parents): Health insurance premiums.",
              "HRA exemption: Significant for metro renters — can exempt 40–50% of basic salary from tax.",
              "Home loan interest — Section 24(b) (up to ₹2 lakh per year): Major benefit for home loan borrowers.",
              "LTA (Leave Travel Allowance): For domestic travel expenses twice in a 4-year block.",
              "Section 80CCD(1B): Additional ₹50,000 NPS contribution on top of the 80C limit.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">What Stays in the New Regime</h2>
          <ul className="mt-2 space-y-2">
            {[
              "Standard deduction of ₹75,000 (increased from ₹50,000 in Budget 2024).",
              "Employer's NPS contribution — Section 80CCD(2) — is NOT disallowed.",
              "Section 87A rebate: Total tax is zero if taxable income is ₹7 lakh or below.",
              "Basic exemption for notified allowances (transport allowance for specially-abled employees).",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inline CTA */}
        <div className="rounded-xl border border-primary/20 bg-orange-50 p-5">
          <p className="mb-3 font-semibold text-gray-800">
            Compare your exact tax under both regimes instantly
          </p>
          <Link
            href="/income-tax-calculator"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-600"
          >
            Open Income Tax Calculator <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">When the Old Regime Saves More</h2>
          <p>
            The old regime generally wins when your total deductions are substantial. If you are
            paying home loan EMIs and claiming Section 24(b) interest deduction (up to ₹2 lakh),
            maximising Section 80C through ELSS, PPF and EPF contributions (₹1.5 lakh), paying
            health insurance premiums (₹25,000+), and contributing to NPS (additional ₹50,000
            under 80CCD(1B)), your total deductions can easily cross ₹3.75–4.5 lakh. At a salary
            of ₹10–15 lakh, these deductions can reduce your taxable income by 30–40%, making the
            old regime significantly cheaper despite its higher slab rates.
          </p>
          <p className="mt-3">
            Metro city renters are another group who often benefit from the old regime — the HRA
            exemption on a ₹25,000–40,000 monthly rent in cities like Mumbai or Bengaluru can
            exempt ₹2–4 lakh from tax annually, which alone can tip the balance in favour of the
            old regime.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">When the New Regime Saves More</h2>
          <p>
            The new regime is clearly better when your deductions are minimal. If you do not have
            a home loan, do not pay rent, have limited 80C investments, and no health insurance
            premium, the old regime offers you almost no benefit over and above the ₹50,000
            standard deduction — while the new regime gives you ₹75,000 and lower slab rates.
          </p>
          <p className="mt-3">
            For anyone with a taxable income of ₹7 lakh or below, the new regime is almost always
            better: the 87A rebate makes your entire tax liability zero, regardless of investments.
            Fresh graduates and early-career professionals with few deductions also typically
            benefit from the new regime&apos;s simpler, lower-rate structure.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">How to Decide and How to Switch</h2>
          <p>
            Use the RupeeMath Income Tax Calculator to enter your exact gross salary and all
            applicable deductions. The calculator computes your tax liability under both regimes
            simultaneously and highlights which saves more. As a practical rule of thumb: if your
            total deductions beyond the standard deduction exceed ₹2.5–3 lakh, the old regime
            likely wins. If your deductions are below ₹1.5 lakh, the new regime is almost always
            better.
          </p>
          <p className="mt-3">
            <strong>Switching:</strong> Salaried employees can switch between regimes every year
            by declaring their choice to their employer at the start of the financial year (April).
            If you do not declare, the new regime is applied automatically. Self-employed
            individuals and business owners can exercise this choice only once — think carefully
            before switching.
          </p>
        </div>

        <p className="rounded-xl border border-border bg-gray-50 p-4 text-sm text-gray-600">
          <strong>Remember:</strong> The &quot;better&quot; regime is not universal — it is personal.
          Run the numbers with your actual salary and deductions every year before April, because
          your situation changes as your income, investments, and obligations evolve.
        </p>

      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/income-tax-calculator"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">Income Tax Calculator</p>
            <p className="text-xs text-gray-500">Compare old vs new regime instantly</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
        <Link
          href="/salary-calculator"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">Salary Calculator</p>
            <p className="text-xs text-gray-500">Calculate your in-hand take-home pay</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-base font-bold text-gray-900">Related Articles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/blog/sip-vs-fd-which-is-better", label: "SIP vs FD — Which is Better for Indians in 2026?" },
            { href: "/blog/how-to-improve-cibil-score", label: "How to Improve CIBIL Score Fast in India" },
          ].map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-lg border border-border bg-white p-4 text-sm font-semibold text-primary transition hover:bg-orange-50"
            >
              {a.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
