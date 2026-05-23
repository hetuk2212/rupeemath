"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultCard } from "@/components/shared/ResultCard";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateSIP } from "@/lib/calculators/sip";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function SIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => calculateSIP({ monthlyInvestment: monthly, annualRate: rate, tenureYears: years }), [monthly, rate, years]);

  const chartData = result.yearlyBreakdown.map((d) => ({
    year: `Y${d.year}`,
    "Amount Invested": d.invested,
    "Total Value": d.value,
  }));

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800">Investment Details</h2>
          <SliderInput
            label="Monthly Investment"
            value={monthly}
            min={500}
            max={200000}
            step={500}
            unit="₹"
            unitPosition="prefix"
            onChange={setMonthly}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Expected Annual Returns"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Investment Period"
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

        {/* Results */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label="Maturity Amount"
              value={formatLakhs(result.maturityAmount)}
              highlight
              size="lg"
            />
            <ResultCard
              label="Total Invested"
              value={formatLakhs(result.totalInvested)}
              size="md"
            />
            <ResultCard
              label="Wealth Gained"
              value={formatLakhs(result.wealthGained)}
              subLabel={`${formatPercent((result.wealthGained / result.totalInvested) * 100)} returns`}
              size="md"
            />
          </div>
          <SummaryCard
            title="Investment Summary"
            items={[
              { label: "Monthly SIP", value: formatLakhs(monthly), color: "blue" },
              { label: "Total Invested", value: formatLakhs(result.totalInvested), color: "gray" },
              { label: "Estimated Returns", value: formatLakhs(result.wealthGained), color: "green" },
              { label: "Maturity Value", value: formatLakhs(result.maturityAmount), color: "blue" },
            ]}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">Growth Over Time</h3>
        <ChartWrapper
          type="area"
          data={chartData}
          dataKeys={{ x: "year", y: ["Amount Invested", "Total Value"] }}
          colors={["#10b981", "#1a56db"]}
          height={280}
        />
      </div>
    </div>
  );
}
