"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const groups = [
  {
    label: "Investment",
    items: [
      { label: "SIP Calculator", href: "/sip-calculator" },
      { label: "Step-Up SIP", href: "/step-up-sip-calculator" },
      { label: "SWP Calculator", href: "/swp-calculator" },
      { label: "PPF Calculator", href: "/ppf-calculator" },
      { label: "FD Calculator", href: "/fd-calculator" },
      { label: "RD Calculator", href: "/rd-calculator" },
    ],
  },
  {
    label: "Loan",
    items: [
      { label: "EMI Calculator", href: "/emi-calculator" },
      { label: "Home Loan Eligibility", href: "/home-loan-eligibility" },
    ],
  },
  {
    label: "Tax & Salary",
    items: [
      { label: "Income Tax Calculator", href: "/income-tax-calculator" },
      { label: "HRA Calculator", href: "/hra-calculator" },
      { label: "Salary / CTC Calculator", href: "/salary-calculator" },
      { label: "Gratuity Calculator", href: "/gratuity-calculator" },
      { label: "GST Calculator", href: "/gst-calculator" },
    ],
  },
];

const pages = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold text-gray-700 transition-colors hover:text-primary"
        aria-expanded={open}
      >
        All Calculators
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      {open && (
        <div
          className={[
            "absolute top-full z-50 mt-2 rounded-2xl border border-orange-100 bg-white shadow-2xl",
            // Mobile: anchored to left edge of viewport with side margins
            "left-0 w-[calc(100vw-2rem)] -mx-4",
            // Desktop: centered wide panel (unchanged from original)
            "sm:left-1/2 sm:w-[640px] sm:max-w-[95vw] sm:-translate-x-1/2 sm:mx-0 sm:p-5",
          ].join(" ")}
        >
          {/* ── DESKTOP layout (3-column grid) — unchanged ── */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 gap-5">
              {groups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-black uppercase tracking-widest text-primary">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-orange-100 pt-3 text-center">
              <p className="text-xs text-gray-400">13 free calculators • No signup • Download PDF reports</p>
            </div>
          </div>

          {/* ── MOBILE layout (scrollable single-column list) ── */}
          <div className="sm:hidden max-h-[72vh] overflow-y-auto overscroll-contain rounded-2xl">
            {groups.map((group, gi) => (
              <div key={group.label}>
                {/* Section header */}
                <div className={`px-4 py-2.5 ${gi > 0 ? "border-t border-orange-100" : ""}`}>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">
                    {group.label}
                  </p>
                </div>
                {/* Calculator links — full-width, 48px min tap height */}
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[48px] w-full items-center border-t border-gray-50 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Pages section */}
            <div className="border-t border-orange-100">
              <div className="px-4 py-2.5">
                <p className="text-xs font-black uppercase tracking-widest text-primary">Pages</p>
              </div>
              <ul>
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[48px] w-full items-center border-t border-gray-50 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
