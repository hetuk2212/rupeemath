"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Pill {
  label: string;
  value: string;
  color?: "saffron" | "green" | "red" | "white";
}

interface ResultDisplayProps {
  label: string;
  value: string;
  sublabel?: string;
  pills?: Pill[];
  stickyLabel?: string;
}

const pillColorMap: Record<string, string> = {
  saffron: "text-primary",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-white",
};

export function ResultDisplay({ label, value, sublabel, pills = [], stickyLabel }: ResultDisplayProps) {
  const [flash, setFlash] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current !== value) {
      prevRef.current = value;
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 500);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <>
      <div className="rounded-2xl bg-navy-900 p-6 shadow-xl">
        <p className="mb-2 text-xs font-black uppercase tracking-widest text-navy-500">{label}</p>
        <p
          className={cn(
            "text-5xl font-black tracking-tight transition-all duration-300",
            flash ? "text-yellow-300" : "text-gold-500"
          )}
          style={{ transform: flash ? "scale(1.04)" : "scale(1)", transformOrigin: "left center" }}
        >
          {value}
        </p>
        {sublabel && <p className="mt-1.5 text-sm text-navy-300">{sublabel}</p>}

        {pills.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {pills.map((pill) => (
              <div key={pill.label} className="rounded-xl bg-navy-800 px-3 py-2.5 text-center">
                <p className="text-xs text-navy-400">{pill.label}</p>
                <p className={cn("mt-0.5 text-sm font-bold", pillColorMap[pill.color ?? "white"])}>
                  {pill.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {stickyLabel && (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-navy-800 bg-navy-900/95 px-4 py-3 backdrop-blur-sm md:hidden">
          <div>
            <p className="text-xs font-bold text-navy-400">{stickyLabel}</p>
            <p
              className={cn(
                "text-xl font-black transition-colors duration-300",
                flash ? "text-yellow-300" : "text-gold-500"
              )}
            >
              {value}
            </p>
          </div>
          <div className="rounded-lg bg-primary px-4 py-2 text-xs font-black text-white uppercase tracking-wider">
            ⚡ Live
          </div>
        </div>
      )}
    </>
  );
}
