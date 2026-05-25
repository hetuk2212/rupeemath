"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateHomeLoanEligibility } from "@/lib/calculators/home-loan";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function HomeLoanCalculator() {
  const [income, setIncome] = useState(100000);
  const [existingEMIs, setExistingEMIs] = useState(0);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () =>
      calculateHomeLoanEligibility({
        monthlyIncome: income,
        existingEMIs,
        annualRate: rate,
        tenureYears: years,
      }),
    [income, existingEMIs, rate, years]
  );

  const pieData = [{ available: result.maxEMICapacity, used: existingEMIs }];

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
            Your Financial Profile
          </h2>
          <SliderInput
            label="Net Monthly Income"
            value={income}
            min={20000}
            max={1000000}
            step={5000}
            unit="₹"
            unitPosition="prefix"
            onChange={setIncome}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Existing Monthly EMIs"
            value={existingEMIs}
            min={0}
            max={income * 0.45}
            step={1000}
            unit="₹"
            unitPosition="prefix"
            onChange={setExistingEMIs}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Expected Interest Rate"
            value={rate}
            min={6}
            max={18}
            step={0.1}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Loan Tenure"
            value={years}
            min={5}
            max={30}
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
            label="Max Loan Eligibility"
            value={formatLakhs(result.maxLoanAmount)}
            sublabel={`${result.maxLoanLakhs} Lakhs eligible at current income`}
            pills={[
              { label: "Max EMI Capacity", value: formatLakhs(result.maxEMICapacity), color: "saffron" },
              {
                label: "Existing EMIs",
                value: formatLakhs(existingEMIs),
                color: existingEMIs > 0 ? "red" : "white",
              },
              {
                label: "EMI Commitment",
                value: formatPercent(result.eligibilityPercent),
                color: result.eligibilityPercent > 30 ? "red" : "green",
              },
            ]}
            stickyLabel="Max Loan Eligibility"
          />
          <SummaryCard
            items={[
              { label: "Net Monthly Income", value: formatLakhs(income), color: "green" },
              { label: "Existing EMIs", value: formatLakhs(existingEMIs), color: "red" },
              { label: "Max EMI Capacity (50% FOIR)", value: formatLakhs(result.maxEMICapacity), color: "blue" },
              { label: "Max Loan Amount", value: `${result.maxLoanLakhs} Lakhs`, color: "blue" },
              {
                label: "EMI Commitment",
                value: formatPercent(result.eligibilityPercent),
                color: existingEMIs > income * 0.3 ? "red" : "green",
              },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">
          EMI Capacity Split
        </h3>
        <ChartWrapper
          type="pie"
          data={pieData}
          dataKeys={{ y: ["available", "used"] }}
          colors={["#FF6B35", "#0D1B2A"]}
          height={280}
          labels={["Available EMI Capacity", "Existing EMIs"]}
          formatter={(v) => formatLakhs(v)}
        />
      </div>
    </div>
  );
}
