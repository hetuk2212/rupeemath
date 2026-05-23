import Link from "next/link";
import { TrendingUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-primary">
              <TrendingUp className="h-5 w-5" />
              <span>RupeeMath</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-gray-500">
              Free financial calculators for every Indian investor and borrower.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-700">Calculators</p>
            <ul className="space-y-1">
              {[
                ["SIP Calculator", "/sip-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["FD Calculator", "/fd-calculator"],
                ["Income Tax Calculator", "/income-tax-calculator"],
                ["Home Loan Eligibility", "/home-loan-eligibility"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-gray-400">
            <strong>Disclaimer:</strong> All calculations on RupeeMath are for informational
            purposes only. Results are estimates and may not reflect actual returns or obligations.
            Please consult a qualified financial advisor before making any investment or borrowing
            decisions.
          </p>
          <p className="mt-2 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} RupeeMath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
