import Link from "next/link";
import { Zap } from "lucide-react";
import { NavDropdown } from "./NavDropdown";

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

        <NavDropdown />

        <Link
          href="/blog"
          className="hidden text-sm font-bold text-gray-700 transition-colors hover:text-primary sm:block"
        >
          Blog
        </Link>

        <Link
          href="/about"
          className="hidden text-sm font-bold text-gray-700 transition-colors hover:text-primary sm:block"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="hidden text-sm font-bold text-gray-700 transition-colors hover:text-primary sm:block"
        >
          Contact
        </Link>

        <Link
          href="/sip-calculator"
          className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-600 sm:block"
        >
          Start Calculating
        </Link>
      </div>
    </header>
  );
}
