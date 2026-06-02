import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Loan Documents Required in India 2026",
  description:
    "Complete checklist of home loan documents required in India — identity proof, income documents, property papers for salaried and self-employed applicants.",
  alternates: { canonical: "https://www.rupeemath.co.in/blog/home-loan-documents-required" },
  openGraph: {
    title: "Home Loan Documents Required in India 2026 | RupeeMath",
    description: "Full checklist of documents required for home loan approval in India for salaried and self-employed.",
    url: "https://www.rupeemath.co.in/blog/home-loan-documents-required",
  },
};

export default function HomeLoanDocumentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Home Loan Documents" }]} />

      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">
            Home Loan
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="h-3.5 w-3.5" /> 5 min read
          </span>
          <span className="text-xs text-gray-400">May 2026</span>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          Home Loan Documents Required in India 2026
        </h1>
        <p className="text-base leading-relaxed text-gray-500">
          Banks verify your identity, income, and the property before sanctioning a home loan.
          Having every document ready before approaching a lender speeds up approval significantly
          and signals you are a prepared, low-risk borrower. Here is a complete checklist.
        </p>
      </div>

      <div className="space-y-7 text-sm leading-relaxed text-gray-700">

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="font-semibold text-blue-800">Quick tip:</p>
          <p className="mt-1 text-sm text-blue-700">
            Create a digital folder with scanned copies of all documents below. Most banks now
            accept online uploads, and having everything ready can reduce sanction time from
            3 weeks to under 1 week.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Category 1: Identity and Address Proof
          </h2>
          <p className="mb-3">
            All applicants — including co-applicants — must submit valid government-issued identity
            and address documents. Most banks now accept Aadhaar-based e-KYC for instant digital
            verification, which can eliminate the need to submit physical copies.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="mb-2 font-semibold text-gray-800">Identity Proof (any one)</p>
              <ul className="space-y-1 text-xs text-gray-600">
                {["Aadhaar card", "PAN card", "Passport", "Voter ID card", "Driving licence"].map((d) => (
                  <li key={d} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="mb-2 font-semibold text-gray-800">Address Proof (any one)</p>
              <ul className="space-y-1 text-xs text-gray-600">
                {["Aadhaar card", "Utility bill (≤3 months old)", "Bank statement with address", "Passport", "Registered rent agreement"].map((d) => (
                  <li key={d} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Category 2: Income Documents — Salaried Employees
          </h2>
          <p className="mb-3">
            Income documents prove your repayment capacity. For salaried applicants, these are
            straightforward and usually available from your employer or payroll system.
          </p>
          <ul className="space-y-3">
            {[
              { doc: "Last 3 months' salary slips", detail: "Must show gross salary, PF deduction, and TDS deducted. Slips must be stamped/signed by HR." },
              { doc: "Last 2 years' Form 16", detail: "Issued by your employer at year-end. Shows annual salary and TDS summary. Most banks require this for loans above ₹20 lakh." },
              { doc: "Last 6 months' bank statements", detail: "Primary savings account showing monthly salary credits. Banks verify regularity and any bounced EMIs." },
              { doc: "Employment proof", detail: "Appointment letter, employee ID, or an HR letter confirming your designation, date of joining, and type of employment (permanent/contractual)." },
              { doc: "Income Tax Returns (last 2 years)", detail: "Some banks require this for loan amounts above ₹30–40 lakh, especially from private or foreign banks." },
            ].map((item) => (
              <li key={item.doc} className="rounded-lg border border-border bg-white p-4">
                <p className="font-semibold text-gray-800">{item.doc}</p>
                <p className="mt-1 text-xs text-gray-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Inline CTA */}
        <div className="rounded-xl border border-primary/20 bg-orange-50 p-5">
          <p className="mb-3 font-semibold text-gray-800">
            Know how much loan you qualify for before gathering documents
          </p>
          <Link
            href="/home-loan-eligibility"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-600"
          >
            Home Loan Eligibility Calculator <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Category 3: Income Documents — Self-Employed and Business Owners
          </h2>
          <p className="mb-3">
            Self-employed applicants face higher documentation scrutiny because their income is
            variable and not salaried. Banks need to verify business stability and sustainable
            income before sanctioning.
          </p>
          <ul className="space-y-3">
            {[
              { doc: "Last 3 years' Income Tax Returns (ITR)", detail: "With computation of income statement. Shows net taxable income declared to the government — lenders use this as the primary income proof." },
              { doc: "Last 3 years' audited financials", detail: "Profit & Loss statement and Balance Sheet, certified by a practising CA. Required for all business borrowers." },
              { doc: "Last 12 months' bank statements", detail: "Both personal and business accounts. Banks look for consistent cash flow, low cheque bounces, and healthy account balance." },
              { doc: "Business registration proof", detail: "GST registration certificate, partnership deed, Memorandum of Association (for companies), or a shop establishment certificate." },
              { doc: "Professional degree certificate", detail: "Required for professionals (doctors, CAs, architects, engineers) applying under the self-employed professional category." },
            ].map((item) => (
              <li key={item.doc} className="rounded-lg border border-border bg-white p-4">
                <p className="font-semibold text-gray-800">{item.doc}</p>
                <p className="mt-1 text-xs text-gray-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Category 4: Property Documents
          </h2>
          <p className="mb-3">
            These establish legal ownership of the property and allow the bank to create a mortgage
            (charge on the property). Incomplete property documentation is the most common reason
            for home loan delays — get these ready early.
          </p>
          <ul className="space-y-3">
            {[
              { doc: "Agreement to Sale / Sale Deed", detail: "Original registered sale deed with both buyer and seller signatures. For under-construction properties, the Builder-Buyer Agreement serves this purpose." },
              { doc: "Title chain documents", detail: "A chain of sale deeds establishing clear ownership for the past 15–30 years with no gaps. Your property lawyer prepares a Title Report summarising this." },
              { doc: "Encumbrance Certificate (EC)", detail: "Obtained from the sub-registrar office. Confirms the property has no existing mortgage, legal dispute, or pending dues." },
              { doc: "Approved building plan + Occupancy Certificate", detail: "Municipality-approved building plan and the Occupancy Certificate (OC) or Completion Certificate issued after construction. Mandatory for ready properties." },
              { doc: "NOC from society / builder", detail: "No Objection Certificate from the housing society (for resale flats) or the builder (for under-construction projects). Banks must confirm no dispute with the property." },
              { doc: "Latest property tax receipts", detail: "Confirms the current owner has paid all municipal taxes and there are no outstanding dues on the property." },
            ].map((item) => (
              <li key={item.doc} className="rounded-lg border border-border bg-white p-4">
                <p className="font-semibold text-gray-800">{item.doc}</p>
                <p className="mt-1 text-xs text-gray-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Category 5: Loan Application Documents
          </h2>
          <ul className="space-y-2">
            {[
              "Duly filled home loan application form (available online or at the branch).",
              "2–3 recent passport-size photographs of all applicants.",
              "Cheque for processing fee — typically 0.5–1% of the loan amount.",
              "Existing loan statements if you have ongoing EMIs (for FOIR calculation).",
              "For balance transfer: current lender's sanction letter, latest statement showing outstanding principal, and foreclosure letter.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Tips to Speed Up Approval</h2>
          <p>
            For salaried applicants, the entire process from document submission to sanction
            typically takes 7–14 working days for a straightforward application. For self-employed
            applicants, allow 14–21 days. Three things speed this up significantly: having an
            impeccable CIBIL score (750+), clean property title with no encumbrances, and all
            income documents in order without any discrepancy between your ITR, bank statements,
            and Form 16.
          </p>
          <p className="mt-3">
            Consider engaging a property lawyer before approaching the bank to prepare a title
            opinion report and verify the property chain documents — banks frequently ask for this
            anyway, and having it ready eliminates one of the most common bottlenecks in the
            approval process.
          </p>
        </div>

      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/home-loan-eligibility"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">Eligibility Calculator</p>
            <p className="text-xs text-gray-500">Check your maximum loan amount</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
        <Link
          href="/emi-calculator"
          className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-gray-800">EMI Calculator</p>
            <p className="text-xs text-gray-500">Calculate your monthly payments</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-base font-bold text-gray-900">Related Articles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/blog/home-loan-tips-india", label: "10 Tips to Get Best Home Loan Rate in India 2026" },
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
