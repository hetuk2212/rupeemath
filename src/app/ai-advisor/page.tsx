import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { AdvisorForm } from "./AdvisorForm";

export const metadata: Metadata = {
  title: "AI Financial Advisor — Can I Afford This Loan? 2026",
  description:
    "Get a personalized loan affordability analysis in seconds. Enter your salary and expenses — RupeeMath AI tells you if you can afford that loan and how to manage it.",
  keywords: [
    "can I afford this loan",
    "loan affordability calculator India",
    "AI financial advisor India",
    "home loan affordability checker",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/ai-advisor" },
  openGraph: {
    title: "AI Financial Advisor — Can I Afford This Loan? | RupeeMath",
    description: "Enter your salary, expenses, and loan details. RupeeMath AI gives you a personalized affordability verdict in seconds.",
    url: "https://www.rupeemath.co.in/ai-advisor",
  },
};

export default function AIAdvisorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "AI Financial Advisor" }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-sm">
          ✨ New Feature
        </div>
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">
          AI Financial Advisor —{" "}
          <span className="text-primary">Can I Afford This Loan?</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Enter your salary, monthly expenses, and loan details. RupeeMath AI analyzes your
          complete financial picture and gives you an honest, personalized verdict — should you
          take this loan, and how to manage it smartly.
        </p>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "📊 Budget breakdown",
            "✅ Affordability verdict",
            "💡 Savings tips",
            "⚡ Smart recommendation",
          ].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold text-primary"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <AdvisorForm />

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
        RupeeMath AI provides educational guidance only. It is not a substitute for advice from
        a SEBI-registered financial advisor or a certified CA. All analysis is based on inputs
        you provide and standard Indian banking norms.
      </p>
    </div>
  );
}
