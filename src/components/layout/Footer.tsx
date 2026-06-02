import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center">
              <span className="text-lg font-black text-primary">Rupee</span>
              <span className="text-lg font-black text-white">Math</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-navy-300">
              Free financial calculators for every Indian investor and borrower.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-navy-500">Calculators</p>
            <ul className="space-y-2">
              {[
                ["SIP Calculator", "/sip-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["FD Calculator", "/fd-calculator"],
                ["Income Tax Calculator", "/income-tax-calculator"],
                ["Home Loan Eligibility", "/home-loan-eligibility"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-navy-300 transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-navy-500">Company</p>
            <ul className="space-y-2">
              {[
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy-policy"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-navy-300 transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6">
          <p className="text-center text-xs text-navy-400">
            <strong className="text-navy-300">Disclaimer:</strong> All calculations on RupeeMath are for informational
            purposes only. Results are estimates and may not reflect actual returns or obligations.
            Please consult a qualified financial advisor before making any investment or borrowing decisions.
          </p>
          <p className="mt-3 text-center text-xs text-navy-600">
            © {new Date().getFullYear()} RupeeMath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
