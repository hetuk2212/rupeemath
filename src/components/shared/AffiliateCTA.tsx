import { ArrowRight } from "lucide-react";

interface AffiliateCTAProps {
  heading: string;
  subtext: string;
  ctaLabel: string;
  ctaHref?: string;
  variant?: "primary" | "secondary";
}

export function AffiliateCTA({
  heading,
  subtext,
  ctaLabel,
  ctaHref = "#",
  variant = "primary",
}: AffiliateCTAProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`mt-8 rounded-2xl p-6 sm:p-8 ${
        isPrimary
          ? "bg-gradient-to-r from-primary to-primary-700 text-white"
          : "border border-primary-200 bg-primary-50 text-gray-900"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3
            className={`text-lg font-bold ${isPrimary ? "text-white" : "text-gray-900"}`}
          >
            {heading}
          </h3>
          <p className={`mt-1 text-sm ${isPrimary ? "text-blue-100" : "text-gray-600"}`}>
            {subtext}
          </p>
        </div>
        <a
          href={ctaHref}
          rel="nofollow sponsored"
          className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
            isPrimary
              ? "bg-white text-primary hover:bg-blue-50"
              : "bg-primary text-white hover:bg-primary-600"
          }`}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
