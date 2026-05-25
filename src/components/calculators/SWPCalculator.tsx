"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateSWP } from "@/lib/calculators/swp";
import { formatLakhs, formatPercent } from "@/lib/utils";

const PAGE_SIZE = 12;

export function SWPCalculator() {
  const [investment, setInvestment] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(8000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(15);
  const [page, setPage] = useState(1);

  const result = useMemo(
    () => calculateSWP({ totalInvestment: investment, monthlyWithdrawal: withdrawal, annualReturnRate: rate, tenureYears: years }),
    [investment, withdrawal, rate, years]
  );

  const totalPages = Math.ceil(result.monthlyData.length / PAGE_SIZE);
  const visibleRows = result.monthlyData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const corpusIsExhausted = result.finalCorpus === 0;

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">SWP Details</h2>
          <SliderInput
            label="Total Investment"
            value={investment}
            min={100000}
            max={50000000}
            step={100000}
            unit="₹"
            unitPosition="prefix"
            onChange={setInvestment}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Monthly Withdrawal"
            value={withdrawal}
            min={1000}
            max={200000}
            step={1000}
            unit="₹"
            unitPosition="prefix"
            onChange={setWithdrawal}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Expected Annual Return"
            value={rate}
            min={1}
            max={20}
            step={0.5}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Withdrawal Period"
            value={years}
            min={1}
            max={40}
            step={1}
            unit=" yrs"
            unitPosition="suffix"
            onChange={setYears}
            formatDisplay={(v) => `${v} yrs`}
          />
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label={corpusIsExhausted ? "Corpus Exhausted After" : "Remaining Corpus"}
            value={corpusIsExhausted
              ? `${Math.floor(result.monthsActive / 12)}y ${result.monthsActive % 12}m`
              : formatLakhs(result.finalCorpus)}
            sublabel={corpusIsExhausted
              ? "Reduce withdrawal or increase investment"
              : `After withdrawing for ${years} years`}
            pills={[
              { label: "Total Withdrawn", value: formatLakhs(result.totalWithdrawn), color: "saffron" },
              { label: "Returns Earned", value: formatLakhs(result.totalReturns), color: "green" },
              { label: "Active Months", value: `${result.monthsActive}`, color: "white" },
            ]}
            stickyLabel={corpusIsExhausted ? "Corpus Left" : "Remaining Corpus"}
          />
          {corpusIsExhausted && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <strong>Warning:</strong> Your corpus will be exhausted. Reduce monthly withdrawal or increase the investment amount.
            </div>
          )}
          <SummaryCard
            items={[
              { label: "Initial Investment", value: formatLakhs(investment), color: "blue" },
              { label: "Monthly Withdrawal", value: formatLakhs(withdrawal), color: "gray" },
              { label: "Total Withdrawn", value: formatLakhs(result.totalWithdrawn), color: "blue" },
              { label: "Total Returns Earned", value: formatLakhs(result.totalReturns), color: "green" },
              { label: "Final Corpus", value: formatLakhs(result.finalCorpus), color: result.finalCorpus > 0 ? "green" : "red" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">Corpus Depletion Over Time</h3>
        <ChartWrapper
          type="area"
          data={result.yearlyChart}
          dataKeys={{ x: "year", y: ["corpus"] }}
          colors={["#FF6B35"]}
          height={260}
          labels={["Corpus Value"]}
        />
      </div>

      {/* Paginated monthly table */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Monthly Breakdown</h3>
          <span className="text-xs text-gray-400">{result.monthlyData.length} months total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="py-2 text-left font-bold text-gray-500">Month</th>
                <th className="py-2 text-right font-bold text-gray-500">Withdrawal</th>
                <th className="py-2 text-right font-bold text-gray-500">Returns</th>
                <th className="py-2 text-right font-bold text-gray-500">Balance</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr key={row.month} className="border-b border-orange-50 hover:bg-orange-50/40">
                  <td className="py-2 font-semibold text-gray-700">Month {row.month}</td>
                  <td className="py-2 text-right text-primary font-semibold">{formatLakhs(row.withdrawal)}</td>
                  <td className="py-2 text-right text-emerald-600">{formatLakhs(row.returns)}</td>
                  <td className="py-2 text-right font-bold text-gray-800">{formatLakhs(row.closingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg border border-orange-200 px-3 py-1 text-sm font-semibold text-gray-600 hover:border-primary hover:text-primary disabled:opacity-40"
            >
              ← Prev
            </button>
            <span className="text-sm text-gray-500">Page {page} of {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-lg border border-orange-200 px-3 py-1 text-sm font-semibold text-gray-600 hover:border-primary hover:text-primary disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
