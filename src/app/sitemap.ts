import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rupeemath.com";
  const routes = [
    "",
    "/sip-calculator",
    "/emi-calculator",
    "/fd-calculator",
    "/income-tax-calculator",
    "/home-loan-eligibility",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
