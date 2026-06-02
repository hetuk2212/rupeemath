import type { MetadataRoute } from "next";

const base = "https://www.rupeemath.co.in";

const calcPages = [
  "/sip-calculator",
  "/emi-calculator",
  "/fd-calculator",
  "/income-tax-calculator",
  "/home-loan-eligibility",
  "/salary-calculator",
  "/ppf-calculator",
  "/hra-calculator",
  "/rd-calculator",
  "/swp-calculator",
  "/step-up-sip-calculator",
  "/gratuity-calculator",
  "/gst-calculator",
  "/home-loan-on-salary",
  "/emi-30-lakh-home-loan",
  "/sip-5000-per-month",
  "/blog",
  "/blog/home-loan-tips-india",
  "/blog/sip-vs-fd-which-is-better",
  "/blog/new-vs-old-tax-regime-2026",
  "/blog/how-to-improve-cibil-score",
  "/blog/home-loan-documents-required",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    ...calcPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];
}
