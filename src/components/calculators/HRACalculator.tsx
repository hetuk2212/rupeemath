"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { calculateHRA } from "@/lib/calculators/hra";
import { formatLakhs, formatCurrency } from "@/lib/utils";

const CONDITION_LABELS = {
  1: "Actual HRA received from employer",
  2: "Rent paid minus 10% of basic salary",
  3: "50% of basic salary (Metro) / 40% (Non-Metro)",
};

export function HRACalculator() {
  const [basic, setBasic] = useState(50000);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(25000);
  const [isMetro, setIsMetro] = useState(true);

  const result = useMemo(
    () => calculateHRA({ basicMonthly: basic, hraReceived, rentPaid, isMetro }),
    [basic, hraReceived, rentPaid, isMetro]
  );

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Salary & Rent Details</h2>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">City Type</p>
            <div className="flex gap-2">
              {[
                { label: "Metro City", value: true },
                { label: "Non-Metro", value: false },
              ].map((opt) => (
                <button
                  key={String(opt.value)}
                  onClick={() => setIsMetro(opt.value)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-bold transition-all ${
                    isMetro === opt.value
                      ? "border-primary bg-primary text-white"
                      : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400">Metro: Delhi, Mumbai, Chennai, Kolkata (50% basic). Non-Metro: 40% basic.</p>
          </div>

          <SliderInput
            label="Monthly Basic Salary"
            value={basic}
            min={10000}
            max={500000}
            step={1000}
            unit="₹"
            unitPosition="prefix"
            onChange={setBasic}
            formatDisplay={(v) => `₹${formatCurrency(v)}`}
          />
          <SliderInput
            label="HRA Received from Employer (Monthly)"
            value={hraReceived}
            min={0}
            max={300000}
            step={500}
            unit="₹"
            unitPosition="prefix"
            onChange={setHraReceived}
            formatDisplay={(v) => `₹${formatCurrency(v)}`}
          />
          <SliderInput
            label="Actual Rent Paid (Monthly)"
            value={rentPaid}
            min={0}
            max={300000}
            step={500}
            unit="₹"
            unitPosition="prefix"
            onChange={setRentPaid}
            formatDisplay={(v) => `₹${formatCurrency(v)}`}
          />
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label="Monthly HRA Exemption"
            value={`₹${formatCurrency(result.exemption)}`}
            sublabel={`Annual exemption: ${formatLakhs(result.annualExemption)} | Tax saved: ₹${formatCurrency(result.taxSavedAt30)} (at 30%)`}
            pills={[
              { label: "HRA Received", value: `₹${formatCurrency(result.exemption + result.taxableHRA)}`, color: "white" },
              { label: "Taxable HRA", value: `₹${formatCurrency(result.taxableHRA)}`, color: result.taxableHRA > 0 ? "red" : "green" },
              { label: "Annual Tax Saved", value: `₹${formatCurrency(result.taxSavedAt30)}`, color: "green" },
            ]}
            stickyLabel="HRA Exemption"
          />

          <div className="rounded-2xl bg-navy-900 p-5 shadow-sm">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-navy-500">Three Conditions (IT Rules)</p>
            <div className="space-y-3">
              {([1, 2, 3] as const).map((c) => {
                const value = c === 1 ? result.condition1 : c === 2 ? result.condition2 : result.condition3;
                const isLimiting = result.limitingCondition === c;
                return (
                  <div
                    key={c}
                    className={`rounded-xl p-3 ${isLimiting ? "bg-primary/20 ring-1 ring-primary" : "bg-navy-800"}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-navy-300">{CONDITION_LABELS[c]}</p>
                      {isLimiting && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-black text-white">MIN</span>
                      )}
                    </div>
                    <p className="mt-1 text-base font-bold text-gold-500">₹{formatCurrency(value)}/mo</p>
                  </div>
                );
              })}
            </div>
          </div>

          <SummaryCard
            items={[
              { label: "Monthly HRA Exemption", value: `₹${formatCurrency(result.exemption)}`, color: "green" },
              { label: "Annual HRA Exemption", value: formatLakhs(result.annualExemption), color: "green" },
              { label: "Taxable HRA (monthly)", value: `₹${formatCurrency(result.taxableHRA)}`, color: result.taxableHRA > 0 ? "red" : "gray" },
              { label: "Tax Saved at 30% slab", value: formatLakhs(result.taxSavedAt30), color: "green" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
