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
