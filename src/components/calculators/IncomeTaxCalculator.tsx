"use client";

import { useState, useMemo } from "react";
import { SliderInput } from "@/components/shared/SliderInput";
import { ResultCard } from "@/components/shared/ResultCard";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { ChartWrapper } from "@/components/shared/ChartWrapper";
import { calculateIncomeTax } from "@/lib/calculators/income-tax";
import { formatLakhs, formatCurrency } from "@/lib/utils";

export function IncomeTaxCalculator() {
  const [gross, setGross] = useState(1200000);
  const [hra, setHra] = useState(200000);
  const [lta, setLta] = useState(25000);
  const [s80c, setS80c] = useState(150000);
  const [s80d, setS80d] = useState(25000);
  const [homeLoan, setHomeLoan] = useState(0);
  const [nps, setNps] = useState(0);

  const result = useMemo(
    () =>
      calculateIncomeTax({
        grossSalary: gross,
        hra,
        lta,
        section80C: s80c,
        section80D: s80d,
        homeLoanInterest: homeLoan,
        nps80CCD: nps,
        otherDeductions: 0,
      }),
    [gross, hra, lta, s80c, s80d, homeLoan, nps]
  );

  const chartData = [
    {
      regime: "Old Regime",
      "Total Tax": result.oldRegime.totalTax,
      "In-Hand (Annual)": result.oldRegime.inHandAnnual,
    },
    {
      regime: "New Regime",
      "Total Tax": result.newRegime.totalTax,
      "In-Hand (Annual)": result.newRegime.inHandAnnual,
    },
  ];

  const better = result.betterRegime;

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800">Income Details (FY 2024-25)</h2>
          <SliderInput label="Gross Annual Salary" value={gross} min={300000} max={10000000} step={50000} unit="₹" unitPosition="prefix" onChange={setGross} formatDisplay={formatLakhs} />
          <SliderInput label="HRA Received" value={hra} min={0} max={1500000} step={10000} unit="₹" unitPosition="prefix" onChange={setHra} formatDisplay={formatLakhs} />
          <SliderInput label="LTA" value={lta} min={0} max={200000} step={5000} unit="₹" unitPosition="prefix" onChange={setLta} formatDisplay={formatLakhs} />
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Deductions (Old Regime)</p>
          <SliderInput label="Section 80C (max ₹1.5L)" value={s80c} min={0} max={150000} step={5000} unit="₹" unitPosition="prefix" onChange={setS80c} formatDisplay={formatLakhs} />
          <SliderInput label="Section 80D (Health Insurance)" value={s80d} min={0} max={100000} step={2500} unit="₹" unitPosition="prefix" onChange={setS80d} formatDisplay={formatLakhs} />
          <SliderInput label="Home Loan Interest (24b)" value={homeLoan} min={0} max={200000} step={10000} unit="₹" unitPosition="prefix" onChange={setHomeLoan} formatDisplay={formatLakhs} />
          <SliderInput label="NPS 80CCD (max ₹50K)" value={nps} min={0} max={50000} step={5000} unit="₹" unitPosition="prefix" onChange={setNps} formatDisplay={formatLakhs} />
        </div>

        <div className="space-y-4">
          <div className={`rounded-xl border-2 p-4 text-center ${better === "new" ? "border-green-400 bg-green-50" : "border-primary bg-primary-50"}`}>
            <p className="text-sm font-semibold text-gray-600">Better Regime for You</p>
            <p className={`text-2xl font-bold ${better === "new" ? "text-green-700" : "text-primary"}`}>
              {better === "new" ? "New Regime" : "Old Regime"}
            </p>
            <p className="mt-1 text-sm text-gray-500">Saves {formatLakhs(result.savings)} in tax</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Old Regime Tax</p>
              <p className="mt-1 text-xl font-bold text-gray-900">{formatLakhs(result.oldRegime.totalTax)}</p>
              <p className="text-xs text-gray-400">₹{formatCurrency(result.oldRegime.inHandMonthly)}/mo in-hand</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">New Regime Tax</p>
              <p className="mt-1 text-xl font-bold text-gray-900">{formatLakhs(result.newRegime.totalTax)}</p>
              <p className="text-xs text-gray-400">₹{formatCurrency(result.newRegime.inHandMonthly)}/mo in-hand</p>
            </div>
          </div>
          <SummaryCard
            title="Old Regime Breakdown"
            items={[
              { label: "Taxable Income", value: formatLakhs(result.oldRegime.taxableIncome) },
              { label: "Basic Tax", value: formatLakhs(result.oldRegime.basicTax), color: "red" },
              { label: "Cess (4%)", value: formatLakhs(result.oldRegime.cess) },
              { label: "Total Tax", value: formatLakhs(result.oldRegime.totalTax), color: "red" },
            ]}
          />
          <SummaryCard
            title="New Regime Breakdown"
            items={[
              { label: "Taxable Income", value: formatLakhs(result.newRegime.taxableIncome) },
              { label: "Basic Tax", value: formatLakhs(result.newRegime.basicTax), color: "red" },
              { label: "Cess (4%)", value: formatLakhs(result.newRegime.cess) },
              { label: "Total Tax", value: formatLakhs(result.newRegime.totalTax), color: "red" },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">Old vs New Regime Comparison</h3>
        <ChartWrapper
          type="grouped-bar"
          data={chartData}
          dataKeys={{ x: "regime", y: ["Total Tax", "In-Hand (Annual)"] }}
          colors={["#ef4444", "#10b981"]}
          height={280}
        />
      </div>
    </div>
  );
}
