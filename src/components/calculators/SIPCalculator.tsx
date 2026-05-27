"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateSIP } from "@/lib/calculators/sip";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function SIPCalculator({ defaultMonthly = 10000 }: { defaultMonthly?: number } = {}) {
  const [monthly, setMonthly] = useState(defaultMonthly);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateSIP({ monthlyInvestment: monthly, annualRate: rate, tenureYears: years }),
    [monthly, rate, years]
  );

  const chartData = result.yearlyBreakdown.map((d) => ({
    year: `Y${d.year}`,
    "Amount Invested": d.invested,
    "Total Value": d.value,
  }));

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
            Investment Details
          </h2>
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
          <ResultDisplay
            label="Maturity Amount"
            value={formatLakhs(result.maturityAmount)}
            sublabel={`${formatPercent((result.wealthGained / result.totalInvested) * 100)} total returns`}
            pills={[
              { label: "Total Invested", value: formatLakhs(result.totalInvested), color: "white" },
              { label: "Wealth Gained", value: formatLakhs(result.wealthGained), color: "green" },
              { label: "Monthly SIP", value: formatLakhs(monthly), color: "saffron" },
            ]}
            stickyLabel="Maturity Amount"
          />
          <SummaryCard
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
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">
          Growth Over Time
        </h3>
        <ChartWrapper
          type="area"
          data={chartData}
          dataKeys={{ x: "year", y: ["Amount Invested", "Total Value"] }}
          colors={["#10b981", "#FF6B35"]}
          height={280}
        />
      </div>
    </div>
  );
}
