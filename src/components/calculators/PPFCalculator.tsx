"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculatePPF } from "@/lib/calculators/ppf";
import { formatLakhs, formatPercent } from "@/lib/utils";

const TENURE_OPTIONS = [15, 20, 25, 30, 35, 40, 45, 50];

export function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);

  const result = useMemo(
    () => calculatePPF({ yearlyInvestment: yearly, rate, years }),
    [yearly, rate, years]
  );

  const chartData = result.yearlyBreakdown.map((d) => ({
    year: `Y${d.year}`,
    "Amount Invested": d.investment * d.year,
    "PPF Balance": d.balance,
  }));

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">PPF Details</h2>
          <SliderInput
            label="Yearly Investment"
            value={yearly}
            min={500}
            max={150000}
            step={500}
            unit="₹"
            unitPosition="prefix"
            onChange={setYearly}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="PPF Interest Rate"
            value={rate}
            min={5}
            max={12}
            step={0.1}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">
              Investment Period
              <span className="ml-2 text-xs text-gray-400">(15 yrs minimum, extend in 5 yr blocks)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {TENURE_OPTIONS.map((y) => (
                <button
                  key={y}
                  onClick={() => setYears(y)}
                  className={`rounded-full px-3 py-1.5 text-sm font-bold transition-all ${
                    years === y
                      ? "bg-primary text-white shadow-sm"
                      : "border border-orange-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  {y} yrs
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label="PPF Maturity Amount"
            value={formatLakhs(result.maturityAmount)}
            sublabel={`After ${years} years at ${rate}% p.a.`}
            pills={[
              { label: "Total Invested", value: formatLakhs(result.totalInvested), color: "white" },
              { label: "Interest Earned", value: formatLakhs(result.totalInterest), color: "green" },
              { label: "Returns %", value: `${((result.totalInterest / result.totalInvested) * 100).toFixed(0)}%`, color: "saffron" },
            ]}
            stickyLabel="PPF Maturity"
          />
          <SummaryCard
            items={[
              { label: "Yearly Investment", value: formatLakhs(yearly), color: "blue" },
              { label: "Total Invested", value: formatLakhs(result.totalInvested), color: "gray" },
              { label: "Total Interest", value: formatLakhs(result.totalInterest), color: "green" },
              { label: "Maturity Amount", value: formatLakhs(result.maturityAmount), color: "blue" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">PPF Growth Over Years</h3>
        <ChartWrapper
          type="area"
          data={chartData}
          dataKeys={{ x: "year", y: ["Amount Invested", "PPF Balance"] }}
          colors={["#10b981", "#FF6B35"]}
          height={280}
        />
      </div>

      {/* Year-by-year table */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">Year-by-Year Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="py-2 text-left font-bold text-gray-500">Year</th>
                <th className="py-2 text-right font-bold text-gray-500">Invested (₹)</th>
                <th className="py-2 text-right font-bold text-gray-500">Interest (₹)</th>
                <th className="py-2 text-right font-bold text-gray-500">Balance (₹)</th>
              </tr>
            </thead>
            <tbody>
              {result.yearlyBreakdown.map((row) => (
                <tr key={row.year} className="border-b border-orange-50 hover:bg-orange-50/40">
                  <td className="py-2 font-semibold text-gray-700">Year {row.year}</td>
                  <td className="py-2 text-right text-gray-600">{row.investment.toLocaleString("en-IN")}</td>
                  <td className="py-2 text-right text-emerald-600 font-semibold">{row.interest.toLocaleString("en-IN")}</td>
                  <td className="py-2 text-right font-bold text-primary">{row.balance.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
