"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateStepUpSIP } from "@/lib/calculators/step-up-sip";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function StepUpSIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(
    () => calculateStepUpSIP({ initialMonthly: monthly, stepUpPercent: stepUp, annualRate: rate, tenureYears: years }),
    [monthly, stepUp, rate, years]
  );

  const extraWealth = result.maturityAmount - result.regularSIPComparison.maturityAmount;

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Step-Up SIP Details</h2>
          <SliderInput
            label="Initial Monthly SIP"
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
            label="Annual Step-Up %"
            value={stepUp}
            min={0}
            max={50}
            step={1}
            unit="%"
            unitPosition="suffix"
            onChange={setStepUp}
            formatDisplay={(v) => `${v}%`}
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

        <div className="space-y-4">
          <ResultDisplay
            label="Step-Up SIP Maturity"
            value={formatLakhs(result.maturityAmount)}
            sublabel={`${formatLakhs(extraWealth)} more than a flat SIP`}
            pills={[
              { label: "Total Invested", value: formatLakhs(result.totalInvested), color: "white" },
              { label: "Wealth Gained", value: formatLakhs(result.wealthGained), color: "green" },
              { label: "vs Regular SIP", value: `+${formatLakhs(extraWealth)}`, color: "saffron" },
            ]}
            stickyLabel="Step-Up Maturity"
          />

          {/* Side-by-side comparison */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-navy-900 p-4 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-navy-500">Step-Up SIP</p>
              <p className="mt-1 text-xl font-black text-gold-500">{formatLakhs(result.maturityAmount)}</p>
              <p className="text-xs text-navy-400">Invested: {formatLakhs(result.totalInvested)}</p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Regular SIP</p>
              <p className="mt-1 text-xl font-black text-gray-700">{formatLakhs(result.regularSIPComparison.maturityAmount)}</p>
              <p className="text-xs text-gray-400">Invested: {formatLakhs(result.regularSIPComparison.totalInvested)}</p>
            </div>
          </div>

          <SummaryCard
            items={[
              { label: "Initial Monthly SIP", value: formatLakhs(monthly), color: "blue" },
              { label: "Step-Up SIP Maturity", value: formatLakhs(result.maturityAmount), color: "blue" },
              { label: "Regular SIP Maturity", value: formatLakhs(result.regularSIPComparison.maturityAmount), color: "gray" },
              { label: "Extra Wealth Created", value: formatLakhs(extraWealth), color: "green" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">Step-Up SIP vs Regular SIP Growth</h3>
        <ChartWrapper
          type="area"
          data={result.chartData}
          dataKeys={{ x: "year", y: ["Step-Up SIP", "Regular SIP"] }}
          colors={["#FF6B35", "#0D1B2A"]}
          height={280}
        />
      </div>
    </div>
  );
}
