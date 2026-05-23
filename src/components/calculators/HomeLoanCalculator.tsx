"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultCard } from "@/components/shared/ResultCard";
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
    () => calculateHomeLoanEligibility({ monthlyIncome: income, existingEMIs, annualRate: rate, tenureYears: years }),
    [income, existingEMIs, rate, years]
  );

  const pieData = [
    {
      available: result.maxEMICapacity,
      used: existingEMIs,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800">Your Financial Profile</h2>
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

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard
              label="Max Loan Eligibility"
              value={formatLakhs(result.maxLoanAmount)}
              highlight
              size="lg"
            />
            <ResultCard
              label="Max EMI You Can Pay"
              value={formatLakhs(result.maxEMICapacity)}
              size="md"
            />
          </div>
          <SummaryCard
            title="Eligibility Summary"
            items={[
              { label: "Net Monthly Income", value: formatLakhs(income), color: "green" },
              { label: "Existing EMIs", value: formatLakhs(existingEMIs), color: "red" },
              { label: "Max EMI Capacity (50% FOIR)", value: formatLakhs(result.maxEMICapacity), color: "blue" },
              { label: "Max Loan Amount", value: `${result.maxLoanLakhs} Lakhs`, color: "blue" },
              { label: "EMI Commitment", value: formatPercent(result.eligibilityPercent), color: existingEMIs > income * 0.3 ? "red" : "green" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">EMI Capacity Split</h3>
        <ChartWrapper
          type="pie"
          data={pieData}
          dataKeys={{ y: ["available", "used"] }}
          colors={["#1a56db", "#ef4444"]}
          height={280}
          labels={["Available EMI Capacity", "Existing EMIs"]}
          formatter={(v) => formatLakhs(v)}
        />
      </div>
    </div>
  );
}
