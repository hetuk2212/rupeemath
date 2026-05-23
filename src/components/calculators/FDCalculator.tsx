"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultCard } from "@/components/shared/ResultCard";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateFD, type CompoundFrequency } from "@/lib/calculators/fd";
import { formatLakhs, formatPercent } from "@/lib/utils";

const frequencies: { value: CompoundFrequency; label: string }[] = [
  { value: "annually", label: "Annually" },
  { value: "semi-annually", label: "Half-Yearly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "monthly", label: "Monthly" },
];

export function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [frequency, setFrequency] = useState<CompoundFrequency>("quarterly");

  const result = useMemo(
    () => calculateFD({ principal, annualRate: rate, tenureYears: years, frequency }),
    [principal, rate, years, frequency]
  );

  const chartData = result.yearlyBreakdown.map((d) => ({
    year: `Y${d.year}`,
    balance: d.balance,
  }));

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800">FD Details</h2>
          <SliderInput
            label="Principal Amount"
            value={principal}
            min={1000}
            max={5000000}
            step={1000}
            unit="₹"
            unitPosition="prefix"
            onChange={setPrincipal}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Annual Interest Rate"
            value={rate}
            min={1}
            max={15}
            step={0.1}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Tenure"
            value={years}
            min={1}
            max={30}
            step={1}
            unit=" yrs"
            unitPosition="suffix"
            onChange={setYears}
            formatDisplay={(v) => `${v} yrs`}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Compounding Frequency</p>
            <div className="flex flex-wrap gap-2">
              {frequencies.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFrequency(f.value)}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    frequency === f.value
                      ? "bg-primary text-white"
                      : "border border-border bg-white text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label="Maturity Amount"
              value={formatLakhs(result.maturityAmount)}
              highlight
              size="lg"
            />
            <ResultCard label="Total Interest" value={formatLakhs(result.totalInterest)} size="md" />
            <ResultCard
              label="Effective Rate"
              value={formatPercent(result.effectiveAnnualRate)}
              size="md"
            />
          </div>
          <SummaryCard
            title="FD Summary"
            items={[
              { label: "Principal", value: formatLakhs(principal), color: "blue" },
              { label: "Interest Earned", value: formatLakhs(result.totalInterest), color: "green" },
              { label: "Effective Annual Rate", value: formatPercent(result.effectiveAnnualRate), color: "blue" },
              { label: "Maturity Amount", value: formatLakhs(result.maturityAmount), color: "blue" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">FD Growth Over Time</h3>
        <ChartWrapper
          type="area"
          data={chartData}
          dataKeys={{ x: "year", y: ["balance"] }}
          colors={["#1a56db"]}
          height={280}
          labels={["FD Value"]}
        />
      </div>
    </div>
  );
}
