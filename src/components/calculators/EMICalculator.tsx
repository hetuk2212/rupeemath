"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultCard } from "@/components/shared/ResultCard";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateEMI } from "@/lib/calculators/emi";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function EMICalculator() {
  const [loan, setLoan] = useState(2000000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(240);

  const result = useMemo(() => calculateEMI({ loanAmount: loan, annualRate: rate, tenureMonths: months }), [loan, rate, months]);

  const pieData = [
    { principal: result.principalPercent, interest: result.interestPercent },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800">Loan Details</h2>
          <SliderInput
            label="Loan Amount"
            value={loan}
            min={100000}
            max={10000000}
            step={100000}
            unit="₹"
            unitPosition="prefix"
            onChange={setLoan}
            formatDisplay={formatLakhs}
          />
          <SliderInput
            label="Annual Interest Rate"
            value={rate}
            min={4}
            max={24}
            step={0.1}
            unit="%"
            unitPosition="suffix"
            onChange={setRate}
            formatDisplay={(v) => formatPercent(v)}
          />
          <SliderInput
            label="Loan Tenure"
            value={months}
            min={12}
            max={360}
            step={12}
            unit=" mo"
            unitPosition="suffix"
            onChange={setMonths}
            formatDisplay={(v) => `${Math.round(v / 12)} yrs (${v} mo)`}
          />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label="Monthly EMI"
              value={formatLakhs(result.emi)}
              highlight
              size="lg"
            />
            <ResultCard label="Total Interest" value={formatLakhs(result.totalInterest)} size="md" />
            <ResultCard label="Total Payment" value={formatLakhs(result.totalPayable)} size="md" />
          </div>
          <SummaryCard
            title="Loan Breakdown"
            items={[
              { label: "Principal Amount", value: formatLakhs(loan), color: "blue" },
              { label: "Total Interest", value: formatLakhs(result.totalInterest), color: "red" },
              { label: "Principal %", value: formatPercent(result.principalPercent), color: "green" },
              { label: "Interest %", value: formatPercent(result.interestPercent), color: "red" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">Principal vs Interest Split</h3>
        <ChartWrapper
          type="pie"
          data={pieData}
          dataKeys={{ y: ["principal", "interest"] }}
          colors={["#1a56db", "#ef4444"]}
          height={280}
          labels={["Principal", "Interest"]}
          formatter={(v) => `${v.toFixed(1)}%`}
        />
      </div>
    </div>
  );
}
