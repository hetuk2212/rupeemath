import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Improve CIBIL Score Fast in India",
  description:
    "6 proven steps to improve your CIBIL score in India. Pay on time, reduce utilization, fix errors, and reach 750+ to get the best loan rates.",
  alternates: { canonical: "https://www.rupeemath.co.in/blog/how-to-improve-cibil-score" },
  openGraph: {
    title: "How to Improve CIBIL Score Fast in India | RupeeMath",
    description: "6 proven steps to improve your CIBIL score and reach 750+ within 6–12 months.",
    url: "https://www.rupeemath.co.in/blog/how-to-improve-cibil-score",
  },
};

export default function CibilScorePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Improve CIBIL Score" }]} />

      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-orange-700">
            Credit Score
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="h-3.5 w-3.5" /> 5 min read
          </span>
          <span className="text-xs text-gray-400">May 2026</span>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          How to Improve CIBIL Score Fast in India
        </h1>
        <p className="text-base leading-relaxed text-gray-500">
          Your CIBIL score — the 3-digit number between 300 and 900 — determines whether you get
          a loan, how quickly it is approved, and at what interest rate. A score above 750 opens
          the door to the best terms; below 650, even basic approval becomes difficult.
        </p>
      </div>

      <div className="space-y-7 text-sm leading-relaxed text-gray-700">

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">What Goes Into Your CIBIL Score</h2>
          <p>
            TransUnion CIBIL calculates your score using five main factors. Understanding the
            weight of each tells you exactly where to focus your energy.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">Weight</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">What It Measures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Payment History", "35%", "Whether you pay EMIs and credit card bills on time"],
                  ["Credit Utilisation", "30%", "What % of your credit limit you are using"],
                  ["Credit Age", "15%", "How long you have held credit accounts"],
                  ["Credit Mix", "10%", "Variety: secured loans + unsecured credit"],
                  ["New Enquiries", "10%", "How many hard checks lenders have run recently"],
                ].map(([factor, weight, what], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                    <td className="px-4 py-2.5 font-medium">{factor}</td>
                    <td className="px-4 py-2.5 font-bold text-primary">{weight}</td>
                    <td className="px-4 py-2.5 text-gray-600">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 1: Pay Every Due on Time — Without Exception
          </h2>
          <p>
            Payment history carries the single largest weight at 35%. A single missed EMI can drop
            your score by 50–100 points overnight. A payment that is 30 days late remains on your
            CIBIL report for seven years. The fix is simple but requires discipline: set up
            auto-debit mandates for every EMI and at minimum the credit card minimum payment amount.
            This eliminates human error entirely. If you have a history of missed payments, the
            damage does fade — recent payments carry more weight than old ones, so 6–12 months of
            clean payment history will start visibly lifting your score.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 2: Reduce Your Credit Card Utilisation
          </h2>
          <p>
            Using more than 30% of your combined credit card limit regularly signals financial
            stress to lenders and drags your score down. If your total limit is ₹1 lakh and you
            regularly carry a balance of ₹60,000–70,000, your utilisation is 60–70% — far too
            high. The solutions: pay your credit card balance mid-cycle before the statement date
            so the reported utilisation is lower; request a credit limit increase from your bank
            (without spending more); or spread your spending across two or more cards. Aim to keep
            total utilisation below 30%, and below 10% if you want to actively push your score
            above 800.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 3: Do Not Apply for Multiple Loans Simultaneously
          </h2>
          <p>
            Every time you formally apply for a loan or credit card, the lender runs a &quot;hard
            enquiry&quot; on your CIBIL report. Multiple hard enquiries within a short period — say,
            applying to five banks for a personal loan in the same week — can drop your score by
            10–30 points and signals desperation to lenders. Before applying, use eligibility
            check tools that run soft enquiries (which do not affect your score). When you are
            ready to apply, approach lenders one at a time after researching rates carefully.
          </p>
        </div>

        {/* Inline CTA */}
        <div className="rounded-xl border border-primary/20 bg-orange-50 p-5">
          <p className="mb-3 font-semibold text-gray-800">
            Know your loan eligibility before approaching any bank
          </p>
          <Link
            href="/home-loan-eligibility"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-600"
          >
            Home Loan Eligibility Calculator <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 4: Check Your CIBIL Report for Errors
          </h2>
          <p>
            CIBIL reports contain errors more frequently than most people realise — incorrectly
            reported late payments, accounts that were closed but still show outstanding balances,
            loans belonging to someone with a similar name, or fraudulent accounts opened in your
            name. You are entitled to one free CIBIL report per year from cibil.com. Download it
            and systematically check every account listed. If you find a discrepancy, raise a
            dispute directly on the CIBIL website — the process is fully online. Errors can
            typically be resolved within 30–45 days and sometimes result in an immediate score
            improvement of 20–50 points.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 5: Keep Old Credit Accounts Open
          </h2>
          <p>
            Credit age accounts for 15% of your score, and your oldest accounts anchor a longer
            average credit history. Closing an old credit card — even one you no longer use
            actively — reduces your average credit age and simultaneously reduces your total
            available credit limit, which raises your utilisation ratio. Both effects hurt your
            score. Instead, keep old credit cards open and use them for occasional small purchases
            (a grocery run or a petrol fill-up), then pay the balance in full each month. This
            keeps the account active and maintains your credit history length at zero additional
            cost.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            Step 6: Build a Healthy Credit Mix Over Time
          </h2>
          <p>
            Lenders want to see that you can manage different types of credit responsibly. If your
            credit profile consists only of a single credit card, adding a small secured loan (like
            a gold loan or a secured credit card against a fixed deposit) diversifies your mix. If
            you only have term loans and no revolving credit, a credit card used responsibly adds
            diversity. A healthy mix of secured loans (home loan, car loan) and unsecured credit
            (credit card, personal loan) — all with a spotless payment record — builds a well-rounded
            profile that scores consistently higher.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Realistic Timeline to Improvement</h2>
          <div className="mt-3 space-y-3">
            {[
              { range: "600 → 700", time: "6–12 months", action: "Consistent on-time payments + reducing credit utilisation to below 30%." },
              { range: "700 → 750", time: "6–12 months", action: "Resolving older delinquencies + maintaining clean payment record." },
              { range: "750 → 800+", time: "12–24 months", action: "Pristine payment history, low utilisation, no new hard enquiries." },
            ].map((row) => (
              <div key={row.range} className="rounded-lg border border-border bg-white p-4">
                <div className="mb-1 flex items-center gap-3">
                  <span className="font-bold text-primary">{row.range}</span>
                  <span className="text-xs text-gray-400">{row.time}</span>
                </div>
                <p className="text-xs text-gray-600">{row.action}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="rounded-xl border border-border bg-gray-50 p-4 text-sm text-gray-600">
          <strong>Important:</strong> There is no legitimate shortcut to &quot;repairing&quot; your CIBIL
          score overnight. Anyone offering to fix your credit score in a week for a fee is running
          a scam. Your score improves through consistent, responsible credit behaviour over time —
          and the results, while gradual, are permanent.
        </p>

      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/home-loan-eligibility"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">Home Loan Eligibility</p>
            <p className="text-xs text-gray-500">Calculate max loan based on income</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
        <Link
          href="/emi-calculator"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">EMI Calculator</p>
            <p className="text-xs text-gray-500">See EMI at different interest rates</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-base font-bold text-gray-900">Related Articles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/blog/home-loan-tips-india", label: "10 Tips to Get Best Home Loan Rate in India 2026" },
            { href: "/blog/home-loan-documents-required", label: "Home Loan Documents Required in India 2026" },
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
