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
}: AffiliateCTAProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-2xl bg-navy-900 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-black uppercase tracking-widest text-primary">
            Sponsored
          </p>
          <h3 className="text-lg font-bold text-white">{heading}</h3>
          <p className="mt-1 text-sm text-navy-300">{subtext}</p>
        </div>
        <a
          href={ctaHref}
          rel="nofollow sponsored"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-4 text-xs text-navy-600">Powered by Paisabazaar</p>
    </section>
  );
}
