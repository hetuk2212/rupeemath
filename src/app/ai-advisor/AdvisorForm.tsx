"use client";

import { useState, useMemo, useEffect, useRef } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type FormState = {
  salary: string;
  city: string;
  age: string;
  rent: string;
  food: string;
  travel: string;
  utilities: string;
  existingEmis: string;
  misc: string;
  loanType: string;
  loanAmount: string;
  tenure: number;
  rate: string;
};

const LOAN_TYPES = ["Home Loan", "Car Loan", "Bike Loan", "Personal Loan", "Education Loan"];

const LOADING_MESSAGES = [
  "Analyzing your salary...",
  "Calculating your expenses...",
  "Checking loan affordability...",
  "Preparing your personalized plan...",
  "Almost ready...",
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function num(s: string | number): number {
  const n = parseFloat(String(s).replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
}

function calcEMI(principal: number, annualRate: number, tenureYears: number): number {
  if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = tenureYears * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function parseAIResponse(text: string): Record<string, string> {
  const headings = [
    "VERDICT",
    "MONTHLY BUDGET BREAKDOWN",
    "WHERE YOU CAN SAVE",
    "OUR RECOMMENDATION",
    "ONE SMART TIP",
  ];
  const result: Record<string, string> = {};

  for (let i = 0; i < headings.length; i++) {
    const current = headings[i].replace(/\s+/g, "\\s+");
    const next = headings[i + 1]?.replace(/\s+/g, "\\s+");
    const pattern = new RegExp(
      current + "[:\\s]*\\n([\\s\\S]*?)" + (next ? `(?=${next})` : "$"),
      "i"
    );
    const match = text.match(pattern);
    if (match) result[headings[i]] = match[1].trim();
  }

  if (!result["VERDICT"]) {
    result["VERDICT"] = text.split(/\n\n/)[0].trim();
  }
  return result;
}

type VerdictStyle = { bg: string; border: string; heading: string; textColor: string };

function getVerdictStyle(verdict: string): VerdictStyle {
  const v = verdict.toLowerCase();
  if (
    v.includes("risky") || v.includes("cannot afford") || v.includes("not afford") ||
    v.includes("unaffordable") || v.includes("do not recommend") || v.includes("not advisable")
  ) {
    return {
      bg: "bg-red-50",
      border: "border-red-300",
      heading: "This may be risky for you",
      textColor: "text-red-700",
    };
  }
  if (
    v.includes("careful") || v.includes("tight") || v.includes("stretch") ||
    v.includes("challenging") || v.includes("but you") || v.includes("cautiously")
  ) {
    return {
      bg: "bg-orange-50",
      border: "border-orange-300",
      heading: "You can afford this, but carefully",
      textColor: "text-orange-700",
    };
  }
  return {
    bg: "bg-green-50",
    border: "border-green-300",
    heading: "Yes, you can afford this! ✓",
    textColor: "text-green-700",
  };
}

function getCTA(loanType: string) {
  const map: Record<string, { heading: string; label: string }> = {
    "Home Loan": { heading: "Ready to Apply for a Home Loan?", label: "Compare Home Loan Rates →" },
    "Car Loan": { heading: "Looking for the Best Car Loan?", label: "Get Best Car Loan Rates →" },
    "Bike Loan": { heading: "Looking for the Best Bike Loan?", label: "Get Best Bike Loan Rates →" },
    "Personal Loan": { heading: "Need a Personal Loan?", label: "Check Personal Loan Offers →" },
    "Education Loan": { heading: "Planning an Education Loan?", label: "Compare Education Loan Rates →" },
  };
  return map[loanType] ?? map["Personal Loan"];
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function SectionCard({
  emoji, title, content, colorClass,
}: { emoji: string; title: string; content: string; colorClass: string }) {
  return (
    <div className={`rounded-2xl border p-5 ${colorClass}`}>
      <p className="mb-2 text-xs font-black uppercase tracking-widest text-gray-500">
        {emoji} {title}
      </p>
      <p className="text-sm leading-relaxed text-gray-700">{content}</p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export function AdvisorForm() {
  const [form, setForm] = useState<FormState>({
    salary: "",
    city: "Metro",
    age: "",
    rent: "",
    food: "",
    travel: "",
    utilities: "",
    existingEmis: "0",
    misc: "",
    loanType: "Home Loan",
    loanAmount: "",
    tenure: 20,
    rate: "8.5",
  });

  const [loading, setLoading] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Rotating loading messages
  useEffect(() => {
    if (loading) {
      setMsgIdx(0);
      timerRef.current = setInterval(() => {
        setMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length);
      }, 2000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const emi = useMemo(
    () => calcEMI(num(form.loanAmount), num(form.rate), form.tenure),
    [form.loanAmount, form.rate, form.tenure]
  );

  const sections = useMemo(() => (result ? parseAIResponse(result) : null), [result]);

  // Budget numbers
  const salary = num(form.salary);
  const rent = num(form.rent);
  const food = num(form.food);
  const travel = num(form.travel);
  const utilities = num(form.utilities);
  const existingEmis = num(form.existingEmis);
  const misc = num(form.misc);
  const totalExpenses = rent + food + travel + utilities + existingEmis + misc;
  const currentSavings = salary - totalExpenses;
  const afterSavings = currentSavings - Math.round(emi);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/ai-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          salary: num(form.salary),
          city: form.city,
          age: num(form.age),
          rent,
          food,
          travel,
          utilities,
          existingEmis,
          misc,
          loanType: form.loanType,
          loanAmount: num(form.loanAmount),
          tenure: form.tenure,
          rate: num(form.rate),
          calculatedEmi: Math.round(emi),
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setResult(data.result);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Render helpers ── */

  function numField(
    key: keyof FormState,
    label: string,
    placeholder: string,
    optional = false
  ) {
    return (
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-600">
          {label}
          {!optional && <span className="ml-0.5 text-primary">*</span>}
        </label>
        <div className="flex items-center rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition">
          <span className="mr-2 text-sm font-bold text-gray-400">₹</span>
          <input
            type="number"
            min="0"
            placeholder={placeholder}
            value={form[key] as string}
            onChange={(e) => set(key, e.target.value as FormState[typeof key])}
            className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-300"
          />
        </div>
      </div>
    );
  }

  /* ── Loading UI ── */
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-white px-6 py-16 shadow-sm">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <span className="text-2xl">✨</span>
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-gray-800">{LOADING_MESSAGES[msgIdx]}</p>
          <p className="mt-1 text-xs text-gray-400">RupeeMath AI is reading your finances</p>
        </div>
        <div className="flex gap-1.5">
          {LOADING_MESSAGES.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === msgIdx ? "bg-primary scale-125" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ── Results UI ── */
  if (result && sections) {
    const vstyle = getVerdictStyle(sections["VERDICT"] ?? "");
    const cta = getCTA(form.loanType);

    return (
      <div className="space-y-5">
        {/* Back button */}
        <button
          onClick={() => { setResult(null); setError(null); }}
          className="flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition hover:border-primary hover:text-primary"
        >
          ← Analyze Again
        </button>

        {/* Card 1 — Verdict */}
        <div className={`rounded-2xl border-2 p-6 ${vstyle.bg} ${vstyle.border}`}>
          <p className="text-xs font-black uppercase tracking-widest text-gray-500">AI Verdict</p>
          <p className={`mt-2 text-2xl font-black ${vstyle.textColor}`}>{vstyle.heading}</p>
          {sections["VERDICT"] && (
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{sections["VERDICT"]}</p>
          )}
        </div>

        {/* Card 2 — Budget Table */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
            Monthly Budget Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-xs font-semibold text-gray-400">
                  <th className="pb-2.5 text-left">Category</th>
                  <th className="pb-2.5 text-right">Current</th>
                  <th className="pb-2.5 text-right">After Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { label: "Salary", cur: salary, aft: salary, type: "salary" },
                  { label: "House Rent", cur: rent, aft: rent, type: "exp" },
                  { label: "Food & Groceries", cur: food, aft: food, type: "exp" },
                  { label: "Travel & Fuel", cur: travel, aft: travel, type: "exp" },
                  { label: "Utilities", cur: utilities, aft: utilities, type: "exp" },
                  { label: "Existing EMIs", cur: existingEmis, aft: existingEmis, type: "exp" },
                  { label: "Misc / Entertainment", cur: misc, aft: misc, type: "exp" },
                  { label: `New ${form.loanType} EMI`, cur: 0, aft: Math.round(emi), type: "new" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-2 font-medium text-gray-600">{row.label}</td>
                    <td className={`py-2 text-right font-semibold ${row.type === "salary" ? "text-green-600" : "text-gray-700"}`}>
                      {row.cur === 0 && row.type !== "salary" ? "—" : fmt(row.cur)}
                    </td>
                    <td className={`py-2 text-right font-semibold ${
                      row.type === "salary" ? "text-green-600"
                        : row.type === "new" ? "text-primary"
                        : "text-gray-700"
                    }`}>
                      {row.aft === 0 && row.type === "exp" ? "—" : fmt(row.aft)}
                    </td>
                  </tr>
                ))}
                {/* Savings row */}
                <tr className="border-t-2 border-gray-200">
                  <td className="py-3 font-black text-gray-900">Net Monthly Savings</td>
                  <td className={`py-3 text-right text-base font-black ${currentSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {fmt(currentSavings)}
                  </td>
                  <td className={`py-3 text-right text-base font-black ${afterSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {fmt(afterSavings)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {afterSavings < 0 && (
            <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700">
              ⚠️ Your savings go negative after this loan — monthly outgo will exceed your income. Consider a lower loan amount or longer tenure.
            </div>
          )}
          {afterSavings >= 0 && afterSavings < salary * 0.1 && (
            <div className="mt-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-xs font-semibold text-orange-700">
              ⚠️ After this EMI you will save less than 10% of income. Build a 3-month emergency fund before committing.
            </div>
          )}
        </div>

        {/* Card 3 — AI Sections */}
        <div className="space-y-4">
          {sections["WHERE YOU CAN SAVE"] && (
            <SectionCard emoji="💡" title="Where You Can Save" content={sections["WHERE YOU CAN SAVE"]} colorClass="bg-blue-50 border-blue-100" />
          )}
          {sections["OUR RECOMMENDATION"] && (
            <SectionCard emoji="✅" title="Our Recommendation" content={sections["OUR RECOMMENDATION"]} colorClass="bg-green-50 border-green-100" />
          )}
          {sections["ONE SMART TIP"] && (
            <SectionCard emoji="⚡" title="One Smart Tip" content={sections["ONE SMART TIP"]} colorClass="bg-yellow-50 border-yellow-100" />
          )}
          {/* Fallback if parsing didn't work */}
          {!sections["WHERE YOU CAN SAVE"] && !sections["OUR RECOMMENDATION"] && (
            <div className="rounded-2xl border border-border bg-white p-5">
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-primary">Full AI Analysis</p>
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">{result}</pre>
            </div>
          )}
        </div>

        {/* Card 4 — Affiliate CTA */}
        <div className="rounded-2xl bg-navy-900 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Next Step</p>
          <p className="mt-2 text-lg font-black text-white">{cta.heading}</p>
          <p className="mt-1 text-sm text-navy-300">
            Compare offers from 20+ banks without affecting your CIBIL score.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-black text-white shadow-lg shadow-primary/30 transition hover:bg-primary-600"
          >
            {cta.label}
          </a>
        </div>
      </div>
    );
  }

  /* ── Form UI ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Details */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
          Personal Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {numField("salary", "Monthly Take-Home Salary", "e.g. 60000")}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              City Type<span className="ml-0.5 text-primary">*</span>
            </label>
            <select
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              <option>Metro</option>
              <option>Non-Metro</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Age<span className="ml-0.5 text-primary">*</span>
            </label>
            <input
              type="number"
              min="18"
              max="65"
              placeholder="e.g. 30"
              value={form.age}
              onChange={(e) => set("age", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
          Monthly Expenses
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {numField("rent", "House Rent", "e.g. 15000")}
          {numField("food", "Food & Groceries", "e.g. 8000")}
          {numField("travel", "Travel & Fuel", "e.g. 3000")}
          {numField("utilities", "Utilities — Electricity, Internet", "e.g. 2000")}
          {numField("existingEmis", "Existing EMIs", "0 if none", true)}
          {numField("misc", "Entertainment & Misc", "e.g. 3000", true)}
        </div>

        {salary > 0 && totalExpenses > 0 && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
            <span className="text-xs font-semibold text-gray-500">Current monthly savings (before loan)</span>
            <span className={`text-sm font-black ${currentSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
              {fmt(currentSavings)}
            </span>
          </div>
        )}
      </div>

      {/* Loan Details */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm ring-1 ring-orange-100">
        <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
          Loan Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Loan Type<span className="ml-0.5 text-primary">*</span>
            </label>
            <select
              value={form.loanType}
              onChange={(e) => set("loanType", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              {LOAN_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          {numField("loanAmount", "Loan Amount Wanted", "e.g. 3000000")}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Expected Interest Rate (%)<span className="ml-0.5 text-primary">*</span>
            </label>
            <input
              type="number"
              min="1"
              max="30"
              step="0.1"
              placeholder="e.g. 8.5"
              value={form.rate}
              onChange={(e) => set("rate", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Preferred Tenure —{" "}
              <span className="font-black text-primary">{form.tenure} years</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={form.tenure}
              onChange={(e) => set("tenure", parseInt(e.target.value) as unknown as FormState["tenure"])}
              className="mt-2 w-full cursor-pointer accent-orange-500"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>1 yr</span>
              <span>30 yrs</span>
            </div>
          </div>
        </div>

        {/* Live EMI display */}
        {emi > 0 && (
          <div className="mt-5 rounded-2xl bg-primary px-5 py-4 shadow-md shadow-primary/20">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200">
                  Your Calculated EMI
                </p>
                <p className="mt-0.5 text-3xl font-black text-white">
                  {fmt(Math.round(emi))}
                  <span className="ml-1.5 text-sm font-semibold text-orange-200">/month</span>
                </p>
              </div>
              <div className="text-right text-xs text-orange-200">
                <p className="font-bold">{form.loanType}</p>
                <p>{fmt(num(form.loanAmount))} · {form.tenure} yrs · {form.rate}%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-2xl bg-primary py-4 text-base font-black text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl active:translate-y-0"
      >
        Analyze My Finances →
      </button>

      <p className="text-center text-xs text-gray-400">
        Powered by Anthropic Claude · Your data is never stored
      </p>
    </form>
  );
}
