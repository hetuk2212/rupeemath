"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateEMI } from "@/lib/calculators/emi";
import { formatLakhs, formatPercent } from "@/lib/utils";

export function EMICalculator() {
  const [loan, setLoan] = useState(2000000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(240);

  const result = useMemo(
    () => calculateEMI({ loanAmount: loan, annualRate: rate, tenureMonths: months }),
    [loan, rate, months]
  );

  const pieData = [{ principal: result.principalPercent, interest: result.interestPercent }];

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
            Loan Details
          </h2>
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

        {/* Results */}
        <div className="space-y-4">
          <ResultDisplay
            label="Monthly EMI"
            value={formatLakhs(result.emi)}
            sublabel={`Total payable: ${formatLakhs(result.totalPayable)}`}
            pills={[
              { label: "Total Interest", value: formatLakhs(result.totalInterest), color: "red" },
              { label: "Total Payment", value: formatLakhs(result.totalPayable), color: "white" },
              { label: "Interest %", value: formatPercent(result.interestPercent), color: "red" },
            ]}
            stickyLabel="Monthly EMI"
          />
          <SummaryCard
            items={[
              { label: "Principal Amount", value: formatLakhs(loan), color: "blue" },
              { label: "Total Interest", value: formatLakhs(result.totalInterest), color: "red" },
              { label: "Principal %", value: formatPercent(result.principalPercent), color: "green" },
              { label: "Interest %", value: formatPercent(result.interestPercent), color: "red" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">
          Principal vs Interest Split
        </h3>
        <ChartWrapper
          type="pie"
          data={pieData}
          dataKeys={{ y: ["principal", "interest"] }}
          colors={["#FF6B35", "#0D1B2A"]}
          height={280}
          labels={["Principal", "Interest"]}
          formatter={(v) => `${v.toFixed(1)}%`}
        />
      </div>
    </div>
  );
}
