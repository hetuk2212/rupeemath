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
        <div className="absolute left-1/2 top-full z-50 mt-2 w-[640px] max-w-[95vw] -translate-x-1/2 rounded-2xl border border-orange-100 bg-white p-5 shadow-2xl">
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
      )}
    </div>
  );
}
