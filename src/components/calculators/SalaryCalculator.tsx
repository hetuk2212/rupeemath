"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateSalary } from "@/lib/calculators/salary";
import { formatLakhs, formatCurrency } from "@/lib/utils";

const PT_OPTIONS = [
  { label: "Maharashtra / Karnataka (₹200)", value: 200 },
  { label: "West Bengal (₹110)", value: 110 },
  { label: "Andhra / Telangana (₹150)", value: 150 },
  { label: "Others / No PT (₹0)", value: 0 },
];

export function SalaryCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [pfPercent, setPfPercent] = useState(12);
  const [pt, setPt] = useState(200);
  const [regime, setRegime] = useState<"old" | "new">("new");

  const result = useMemo(
    () => calculateSalary({ annualCTC: ctc, pfPercentOfBasic: pfPercent, professionalTax: pt, regime }),
    [ctc, pfPercent, pt, regime]
  );

  const pieData = [
    {
      inHand: result.netMonthly,
      pf: result.pfDeduction,
      tax: result.incomeTaxMonthly,
      pt: result.professionalTaxMonthly,
    },
  ];

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Salary Details</h2>

          <SliderInput
            label="Annual CTC"
            value={ctc}
            min={300000}
            max={10000000}
            step={50000}
            unit="₹"
            unitPosition="prefix"
            onChange={setCtc}
            formatDisplay={formatLakhs}
          />

          <SliderInput
            label="Employee PF % of Basic (12% default)"
            value={pfPercent}
            min={0}
            max={12}
            step={1}
            unit="%"
            unitPosition="suffix"
            onChange={setPfPercent}
            formatDisplay={(v) => `${v}%`}
          />

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Professional Tax (Monthly)</p>
            <div className="flex flex-col gap-2">
              {PT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPt(opt.value)}
                  className={`rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all ${
                    pt === opt.value
                      ? "border-primary bg-primary-50 text-primary"
                      : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Tax Regime</p>
            <div className="flex gap-2">
              {(["new", "old"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegime(r)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-bold transition-all capitalize ${
                    regime === r
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                  }`}
                >
                  {r} Regime
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <ResultDisplay
            label="Monthly In-Hand Salary"
            value={`₹${formatCurrency(result.netMonthly)}`}
            sublabel={`Annual in-hand: ${formatLakhs(result.annualInHand)}`}
            pills={[
              { label: "Gross Monthly", value: `₹${formatCurrency(result.grossMonthly)}`, color: "white" },
              { label: "PF Deduction", value: `₹${formatCurrency(result.pfDeduction)}`, color: "red" },
              { label: "Income Tax/mo", value: `₹${formatCurrency(result.incomeTaxMonthly)}`, color: "red" },
            ]}
            stickyLabel="Monthly In-Hand"
          />
          <SummaryCard
            items={[
              { label: "Gross Monthly Salary", value: `₹${formatCurrency(result.grossMonthly)}`, color: "blue" },
              { label: "Employee PF Deduction", value: `₹${formatCurrency(result.pfDeduction)}`, color: "red" },
              { label: "Professional Tax", value: `₹${formatCurrency(result.professionalTaxMonthly)}`, color: "red" },
              { label: "Income Tax (monthly)", value: `₹${formatCurrency(result.incomeTaxMonthly)}`, color: "red" },
              { label: "Net In-Hand Monthly", value: `₹${formatCurrency(result.netMonthly)}`, color: "green" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">Monthly Salary Breakdown</h3>
        <ChartWrapper
          type="pie"
          data={pieData}
          dataKeys={{ y: ["inHand", "tax", "pf", "pt"] }}
          colors={["#10b981", "#ef4444", "#FF6B35", "#8b5cf6"]}
          height={280}
          labels={["In-Hand", "Income Tax", "PF", "Prof Tax"]}
          formatter={(v) => `₹${formatCurrency(v)}`}
        />
      </div>
    </div>
  );
}
