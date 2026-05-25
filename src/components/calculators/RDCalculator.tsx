"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateRD } from "@/lib/calculators/rd";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [tenureMonths, setTenureMonths] = useState(24);

  const result = useMemo(
    () => calculateRD({ monthlyDeposit: monthly, annualRate: rate, tenureMonths }),
    [monthly, rate, tenureMonths]
  );

  const chartData = result.quarterlyBreakdown.map((d) => ({
    quarter: `Q${d.quarter}`,
    "Deposited": d.deposited,
    "Balance": d.balance,
  }));

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">RD Details</h2>
          <SliderInput
            label="Monthly Deposit"
            value={monthly}
            min={100}
            max={200000}
            step={100}
            unit="₹"
            unitPosition="prefix"
            onChange={setMonthly}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Annual Interest Rate"
            value={rate}
            min={3}
            max={12}
            step={0.1}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Tenure"
            value={tenureMonths}
            min={6}
            max={120}
            step={6}
            unit=" mo"
            unitPosition="suffix"
            onChange={setTenureMonths}
            formatDisplay={(v) => {
              const yrs = Math.floor(v / 12);
              const mo = v % 12;
              return yrs > 0 ? `${yrs}y ${mo > 0 ? `${mo}m` : ""}` : `${v}m`;
            }}
          />
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label="RD Maturity Amount"
            value={formatLakhs(result.maturityAmount)}
            sublabel={`Tenure: ${Math.floor(tenureMonths / 12)} yrs ${tenureMonths % 12} mo • Quarterly compounding`}
            pills={[
              { label: "Total Deposited", value: formatLakhs(result.totalDeposited), color: "white" },
              { label: "Interest Earned", value: formatLakhs(result.interestEarned), color: "green" },
              { label: "Return %", value: `${((result.interestEarned / result.totalDeposited) * 100).toFixed(1)}%`, color: "saffron" },
            ]}
            stickyLabel="RD Maturity"
          />
          <SummaryCard
            items={[
              { label: "Monthly Deposit", value: formatLakhs(monthly), color: "blue" },
              { label: "Total Deposited", value: formatLakhs(result.totalDeposited), color: "gray" },
              { label: "Interest Earned", value: formatLakhs(result.interestEarned), color: "green" },
              { label: "Maturity Amount", value: formatLakhs(result.maturityAmount), color: "blue" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">Quarterly Growth</h3>
        <ChartWrapper
          type="grouped-bar"
          data={chartData.slice(-Math.min(chartData.length, 20))}
          dataKeys={{ x: "quarter", y: ["Deposited", "Balance"] }}
          colors={["#10b981", "#FF6B35"]}
          height={280}
        />
      </div>
    </div>
  );
}
