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
  green: "text-emerald-600",
  red: "text-red-500",
  blue: "text-primary",
  gray: "text-gray-700",
};

const dotMap = {
  green: "bg-emerald-400",
  red: "bg-red-400",
  blue: "bg-primary",
  gray: "bg-gray-300",
};

export function SummaryCard({ items, title }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      {title && (
        <p className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">{title}</p>
      )}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full",
                  item.color ? dotMap[item.color] : "bg-gray-300"
                )}
              />
              <span className="truncate text-sm text-gray-500">{item.label}</span>
            </div>
            <span
              className={cn(
                "shrink-0 text-sm font-bold",
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
