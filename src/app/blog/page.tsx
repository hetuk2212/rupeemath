import type { Metadata } from "next";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Personal Finance Guides for Indian Investors",
  description:
    "Expert guides on home loans, SIP returns, income tax regimes, CIBIL score, and more. Written in plain English for Indian investors.",
  alternates: { canonical: "https://www.rupeemath.co.in/blog" },
  openGraph: {
    title: "Blog — Personal Finance Guides | RupeeMath",
    description: "Free expert articles on home loans, SIP, tax, and credit score for Indian investors.",
    url: "https://www.rupeemath.co.in/blog",
  },
};

const posts = [
  {
    slug: "home-loan-tips-india",
    title: "10 Tips to Get Best Home Loan Rate in India 2026",
    excerpt:
      "Even a 0.25% rate reduction on a ₹50 lakh loan saves ₹3 lakh+ over 20 years. Learn 10 proven strategies to secure the lowest rate from Indian banks.",
    category: "Home Loan",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "5 min",
    date: "May 2026",
  },
  {
    slug: "sip-vs-fd-which-is-better",
    title: "SIP vs FD — Which is Better for Indians in 2026?",
    excerpt:
      "SIP or Fixed Deposit? A complete comparison of returns, risk, liquidity, and tax efficiency to help you decide where to put your savings.",
    category: "Investment",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "6 min",
    date: "May 2026",
  },
  {
    slug: "new-vs-old-tax-regime-2026",
    title: "New vs Old Tax Regime — Complete Guide 2026",
    excerpt:
      "The new regime is now the default. Should you switch or stay in the old regime? A detailed breakdown of who saves more under each option.",
    category: "Tax",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: "6 min",
    date: "May 2026",
  },
  {
    slug: "how-to-improve-cibil-score",
    title: "How to Improve CIBIL Score Fast in India",
    excerpt:
      "Your CIBIL score determines loan approval and interest rate. Here are 6 proven steps to reach 750+ within 6–12 months.",
    category: "Credit Score",
    categoryColor: "bg-orange-100 text-orange-700",
    readTime: "5 min",
    date: "May 2026",
  },
  {
    slug: "home-loan-documents-required",
    title: "Home Loan Documents Required in India 2026",
    excerpt:
      "A complete checklist of every document — identity proof, income papers, property records — to get your home loan approved without delays.",
    category: "Home Loan",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "5 min",
    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Personal Finance Guides for Indian Investors
        </h1>
        <p className="text-gray-500">
          In-depth articles on home loans, SIP, income tax, and credit — written in plain English,
          no jargon.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} read
              </span>
            </div>
            <h2 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-xs font-semibold text-primary">Read article →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Editorial intro */}
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-gray-700">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Personal Finance Guides for Every Indian</h2>
          <p className="mb-3 text-gray-600">
            Managing money in India comes with its own set of complexities — dual income tax regimes, FOIR-based home loan eligibility, repo-rate-linked floating interest, PMAY subsidies, and a mutual fund landscape that grows more diverse every year. Our guides are written specifically for Indian investors, borrowers, and salaried employees who want practical, accurate information without jargon.
          </p>
          <p className="text-gray-600">
            Every article on RupeeMath is grounded in current Indian law, RBI guidelines, and real-world examples using Indian rupee amounts. We cover home loans, SIP returns, income tax regimes, CIBIL scores, and the documents every borrower needs — the topics that actually affect your financial decisions in 2026.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What You Will Learn from Our Finance Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                topic: "Home Loans",
                desc: "How banks determine your eligibility, which documents you need, how to negotiate the interest rate spread, and when to do a balance transfer. We cover PMAY subsidies, FOIR calculations, and co-applicant strategies.",
              },
              {
                topic: "Mutual Fund SIP",
                desc: "Why SIP beats FD over 10+ years, how rupee-cost averaging works through market cycles, the difference between flat and step-up SIPs, and how LTCG tax makes equity far more efficient than FD interest for high earners.",
              },
              {
                topic: "Income Tax",
                desc: "A clear breakdown of the new vs old tax regime — which saves more and for whom, all major deductions (80C, 80D, 24(b), HRA, NPS), how to compute TDS, and how to use Form 16 and ITR effectively.",
              },
              {
                topic: "CIBIL Score & Credit",
                desc: "The five factors that build and damage your CIBIL score, why 750+ is the target number, practical timelines for improvement, and how to dispute errors in your credit report for quick score recovery.",
              },
            ].map((item) => (
              <div key={item.topic} className="rounded-lg border border-border bg-white p-4">
                <p className="mb-1 font-bold text-primary">{item.topic}</p>
                <p className="text-xs leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Get the Most from RupeeMath</h2>
          <p className="mb-3 text-gray-600">
            Our guides are designed to work in tandem with our free calculators. Read an article first to understand the concept — then open the corresponding calculator and test the numbers with your own salary, loan amount, or investment. This combination of understanding and personalised calculation helps you make better-informed decisions faster.
          </p>
          <p className="text-gray-600">
            For example, after reading the <strong>New vs Old Tax Regime</strong> guide, open the Income Tax Calculator and enter your exact CTC and deductions to see which regime saves you the most — down to the rupee. Similarly, reading the <strong>Home Loan Tips</strong> article and then running the Home Loan Eligibility Calculator gives you both the strategy and the specific numbers you need before walking into a bank.
          </p>
        </section>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-orange-50 p-6 text-center">
        <BookOpen className="mx-auto mb-3 h-8 w-8 text-primary" />
        <h2 className="mb-1 text-base font-bold text-gray-900">
          Put the Knowledge Into Action
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Use our free calculators to apply what you&apos;ve learned instantly.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: "SIP Calculator", href: "/sip-calculator" },
            { label: "EMI Calculator", href: "/emi-calculator" },
            { label: "Income Tax", href: "/income-tax-calculator" },
            { label: "Home Loan Eligibility", href: "/home-loan-eligibility" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-lg border border-primary/20 bg-white px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
