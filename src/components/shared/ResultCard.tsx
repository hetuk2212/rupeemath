import { cn } from "@/lib/utils";

interface ResultCardProps {
  label: string;
  value: string;
  subLabel?: string;
  highlight?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ResultCard({ label, value, subLabel, highlight, size = "md" }: ResultCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-5 text-center",
        highlight
          ? "bg-navy-900 shadow-xl"
          : "border border-orange-100 bg-white shadow-sm"
      )}
    >
      <p
        className={cn(
          "font-black leading-none tracking-tight",
          size === "lg" && "text-4xl",
          size === "md" && "text-2xl",
          size === "sm" && "text-xl",
          highlight ? "text-gold-500" : "text-primary"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-xs font-bold uppercase tracking-wider",
          highlight ? "text-navy-300" : "text-gray-500"
        )}
      >
        {label}
      </p>
      {subLabel && (
        <p className={cn("mt-1 text-xs", highlight ? "text-navy-400" : "text-gray-400")}>
          {subLabel}
        </p>
      )}
    </div>
  );
}
