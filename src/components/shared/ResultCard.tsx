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
        "rounded-xl border p-4 text-center",
        highlight
          ? "border-primary-200 bg-primary text-white"
          : "border-border bg-white text-gray-900"
      )}
    >
      <p
        className={cn(
          "font-bold leading-tight",
          size === "lg" && "text-3xl",
          size === "md" && "text-2xl",
          size === "sm" && "text-xl",
          highlight ? "text-white" : "text-primary"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-1 text-sm font-medium",
          highlight ? "text-blue-100" : "text-gray-500"
        )}
      >
        {label}
      </p>
      {subLabel && (
        <p className={cn("mt-0.5 text-xs", highlight ? "text-blue-200" : "text-gray-400")}>
          {subLabel}
        </p>
      )}
    </div>
  );
}
