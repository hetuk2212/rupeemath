"use client";

import { useState, useMemo } from "react";
import { ResultDisplay } from "@/components/shared/ResultDisplay";
import { SummaryCard } from "@/components/shared/SummaryCard";
import { calculateGST, type GSTRate, type GSTCalcType } from "@/lib/calculators/gst";
import { formatCurrency } from "@/lib/utils";

const GST_RATES: GSTRate[] = [5, 12, 18, 28];

export function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState<GSTRate>(18);
  const [calcType, setCalcType] = useState<GSTCalcType>("add");

  const result = useMemo(
    () => calculateGST({ amount, gstRate, calculationType: calcType }),
    [amount, gstRate, calcType]
  );

  return (
    <div id="calc-pdf-content" className="space-y-6 pb-20 md:pb-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">GST Details</h2>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Calculation Type</p>
            <div className="flex flex-col gap-2">
              {[
                { value: "add" as GSTCalcType, label: "Add GST to price", desc: "Enter base price, get GST + final price" },
                { value: "extract" as GSTCalcType, label: "Extract GST from price", desc: "Enter GST-inclusive price, get base + GST" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setCalcType(opt.value)}
                  className={`rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all ${
                    calcType === opt.value
                      ? "border-primary bg-primary-50 text-primary"
                      : "border-orange-100 bg-white text-gray-600 hover:border-primary"
                  }`}
                >
                  <p className="font-bold">{opt.label}</p>
                  <p className="text-xs opacity-70">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              {calcType === "add" ? "Original Price (excl. GST)" : "Price Including GST"}
            </label>
            <div className="flex items-center gap-2 rounded-xl border-2 border-orange-200 bg-orange-50/40 px-4 py-2.5 focus-within:border-primary">
              <span className="text-lg font-bold text-primary">₹</span>
              <input
                type="number"
                value={amount}
                min={1}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  if (!isNaN(v) && v > 0) setAmount(v);
                }}
                className="flex-1 bg-transparent text-lg font-bold text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">GST Rate</p>
            <div className="grid grid-cols-4 gap-2">
              {GST_RATES.map((r) => (
                <button
                  key={r}
                  onClick={() => setGstRate(r)}
                  className={`rounded-xl border py-3 text-sm font-black transition-all ${
                    gstRate === r
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-orange-100 bg-white text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ResultDisplay
            label="GST Amount"
            value={`₹${formatCurrency(result.gstAmount)}`}
            sublabel={`${gstRate}% GST on ₹${formatCurrency(result.originalAmount)}`}
            pills={[
              { label: "CGST (50%)", value: `₹${formatCurrency(result.cgst)}`, color: "saffron" },
              { label: "SGST (50%)", value: `₹${formatCurrency(result.sgst)}`, color: "saffron" },
              { label: "Total + GST", value: `₹${formatCurrency(result.finalAmount)}`, color: "white" },
            ]}
            stickyLabel="GST Amount"
          />

          <div className="rounded-2xl bg-navy-900 p-5">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-navy-500">GST Breakdown</p>
            <div className="space-y-3">
              {[
                { label: "Base Amount (excl. GST)", value: `₹${formatCurrency(result.originalAmount)}`, highlight: false },
                { label: `CGST @ ${gstRate / 2}%`, value: `₹${formatCurrency(result.cgst)}`, highlight: false },
                { label: `SGST @ ${gstRate / 2}%`, value: `₹${formatCurrency(result.sgst)}`, highlight: false },
                { label: `Total GST @ ${gstRate}%`, value: `₹${formatCurrency(result.gstAmount)}`, highlight: false },
                { label: "Final Amount (incl. GST)", value: `₹${formatCurrency(result.finalAmount)}`, highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between rounded-xl px-3 py-2 ${row.highlight ? "bg-primary/20" : "bg-navy-800"}`}>
                  <span className="text-sm text-navy-300">{row.label}</span>
                  <span className={`text-sm font-bold ${row.highlight ? "text-gold-500" : "text-white"}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <SummaryCard
            items={[
              { label: "Original Amount", value: `₹${formatCurrency(result.originalAmount)}`, color: "blue" },
              { label: "CGST", value: `₹${formatCurrency(result.cgst)}`, color: "gray" },
              { label: "SGST", value: `₹${formatCurrency(result.sgst)}`, color: "gray" },
              { label: "Total GST", value: `₹${formatCurrency(result.gstAmount)}`, color: "red" },
              { label: "Final Price", value: `₹${formatCurrency(result.finalAmount)}`, color: "blue" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
