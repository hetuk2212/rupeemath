import Link from "next/link";
import { Zap } from "lucide-react";

const navLinks = [
  { label: "SIP", href: "/sip-calculator" },
  { label: "EMI", href: "/emi-calculator" },
  { label: "FD", href: "/fd-calculator" },
  { label: "Income Tax", href: "/income-tax-calculator" },
  { label: "Home Loan", href: "/home-loan-eligibility" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-black tracking-tight text-primary">Rupee</span>
            <span className="text-xl font-black tracking-tight text-navy-900">Math</span>
          </Link>
          <span className="hidden items-center gap-1 rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-bold text-primary sm:inline-flex">
            <Zap className="h-3 w-3" />
            Free Tools
          </span>
        </div>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-600 transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-0.5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-xs font-semibold text-gray-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
