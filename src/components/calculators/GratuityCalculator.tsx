"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { calculateGratuity } from "@/lib/calculators/gratuity";
import { formatLakhs, formatCurrency } from "@/lib/utils";

export function GratuityCalculator() {
  const [basicDA, setBasicDA] = useState(50000);
  const [years, setYears] = useState(10);
  const [isCovered, setIsCovered] = useState(true);

  const result = useMemo(
    () => calculateGratuity({ basicPlusDA: basicDA, yearsOfService: years, isCoveredUnderAct: isCovered }),
    [basicDA, years, isCovered]
  );

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Employment Details</h2>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Employment Type</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsCovered(true)}
                className={`rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all ${
                  isCovered
                    ? "border-primary bg-primary-50 text-primary"
                    : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                }`}
              >
                <p className="font-bold">Covered under Payment of Gratuity Act</p>
                <p className="text-xs opacity-70">Companies with 10+ employees. Formula: 15/26</p>
              </button>
              <button
                onClick={() => setIsCovered(false)}
                className={`rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all ${
                  !isCovered
                    ? "border-primary bg-primary-50 text-primary"
                    : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                }`}
              >
                <p className="font-bold">Not covered under Gratuity Act</p>
                <p className="text-xs opacity-70">Smaller employers or different terms. Formula: 15/30</p>
              </button>
            </div>
          </div>

          <SliderInput
            label="Last Drawn Basic + DA (Monthly)"
            value={basicDA}
            min={5000}
            max={500000}
            step={1000}
            unit="₹"
            unitPosition="prefix"
            onChange={setBasicDA}
            formatDisplay={(v) => `₹${formatCurrency(v)}`}
          />
          <SliderInput
            label="Total Years of Service"
            value={years}
            min={5}
            max={40}
            step={1}
            unit=" yrs"
            unitPosition="suffix"
            onChange={setYears}
            formatDisplay={(v) => `${v} yrs`}
          />
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-3 text-xs text-gray-500">
            Minimum 5 years of continuous service is required to be eligible for gratuity.
          </div>
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label="Gratuity Amount"
            value={formatLakhs(result.gratuityAmount)}
            sublabel={result.formulaLabel}
            pills={[
              { label: "Tax Exempt", value: formatLakhs(result.taxExemptAmount), color: "green" },
              { label: "Taxable Amount", value: formatLakhs(result.taxableAmount), color: result.taxableAmount > 0 ? "red" : "green" },
              { label: "Exempt Limit", value: "₹20 L", color: "saffron" },
            ]}
            stickyLabel="Gratuity Amount"
          />

          <div className="rounded-2xl bg-navy-900 p-5">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-navy-500">Formula Used</p>
            <div className="rounded-xl bg-navy-800 p-4 font-mono text-sm text-gold-500">
              {isCovered
                ? `(₹${basicDA.toLocaleString("en-IN")} × 15 / 26) × ${years} yrs`
                : `(₹${basicDA.toLocaleString("en-IN")} × 15 / 30) × ${years} yrs`}
            </div>
            <p className="mt-2 text-xs text-navy-400">
              {isCovered ? "15/26 → 15 days pay, 26 working days/month" : "15/30 → 15 days out of 30 calendar days"}
            </p>
          </div>

          <SummaryCard
            items={[
              { label: "Gratuity Amount", value: formatLakhs(result.gratuityAmount), color: "blue" },
              { label: "Tax Exempt (up to ₹20L)", value: formatLakhs(result.taxExemptAmount), color: "green" },
              { label: "Taxable Amount", value: formatLakhs(result.taxableAmount), color: result.taxableAmount > 0 ? "red" : "gray" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
