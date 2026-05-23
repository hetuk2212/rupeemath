import Link from "next/link";
import { TrendingUp } from "lucide-react";

const navLinks = [
  { label: "SIP", href: "/sip-calculator" },
  { label: "EMI", href: "/emi-calculator" },
  { label: "FD", href: "/fd-calculator" },
  { label: "Income Tax", href: "/income-tax-calculator" },
  { label: "Home Loan", href: "/home-loan-eligibility" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <TrendingUp className="h-6 w-6" />
          <span className="text-lg">RupeeMath</span>
        </Link>
        <nav className="hidden flex-wrap items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile: show abbreviated links */}
        <nav className="flex flex-wrap items-center gap-1 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-xs font-medium text-gray-600 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
