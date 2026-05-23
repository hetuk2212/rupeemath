import { cn } from "@/lib/utils";

interface SummaryItem {
  label: string;
  value: string;
  color?: "green" | "red" | "blue" | "gray";
}

interface SummaryCardProps {
  items: SummaryItem[];
  title?: string;
}

const colorMap = {
  green: "text-green-600",
  red: "text-red-500",
  blue: "text-primary",
  gray: "text-gray-600",
};

export function SummaryCard({ items, title }: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-border bg-gray-50 p-4">
      {title && <p className="mb-3 text-sm font-semibold text-gray-700">{title}</p>}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{item.label}</span>
            <span
              className={cn(
                "text-sm font-semibold",
                item.color ? colorMap[item.color] : "text-gray-800"
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
