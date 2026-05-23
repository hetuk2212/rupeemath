"use client";

import { Slider } from "@/components/ui/slider";
import { clampValue } from "@/lib/utils";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  unitPosition?: "prefix" | "suffix";
  onChange: (value: number) => void;
  formatDisplay?: (value: number) => string;
}

export function SliderInput({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  unitPosition = "prefix",
  onChange,
  formatDisplay,
}: SliderInputProps) {
  const display = formatDisplay ? formatDisplay(value) : value.toString();

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-2">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <div className="flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50/60 px-3 py-1.5">
          {unitPosition === "prefix" && unit && (
            <span className="text-sm font-bold text-primary">{unit}</span>
          )}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              const num = parseFloat(e.target.value);
              if (!isNaN(num)) onChange(clampValue(num, min, max));
            }}
            onBlur={(e) => {
              const num = parseFloat(e.target.value);
              if (isNaN(num)) onChange(min);
              else onChange(clampValue(num, min, max));
            }}
            className="w-24 bg-transparent text-right text-sm font-bold text-gray-900 focus:outline-none"
          />
          {unitPosition === "suffix" && unit && (
            <span className="text-sm font-semibold text-gray-500">{unit}</span>
          )}
        </div>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>
          {unitPosition === "prefix" ? unit : ""}
          {min.toLocaleString("en-IN")}
          {unitPosition === "suffix" ? unit : ""}
        </span>
        <span className="font-bold text-primary">{display}</span>
        <span>
          {unitPosition === "prefix" ? unit : ""}
          {max.toLocaleString("en-IN")}
          {unitPosition === "suffix" ? unit : ""}
        </span>
      </div>
    </div>
  );
}
