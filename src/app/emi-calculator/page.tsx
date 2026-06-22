import type { Metadata } from "next";
import { EMICalculator } from "@/components/calculators/EMICalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "EMI Calculator — Home Loan, Car Loan, Personal Loan India",
  description:
    "Calculate EMI for home loan, car loan and personal loan instantly. Free FOIR calculator. Check loan eligibility and monthly EMI amount. No signup needed.",
  keywords: ["EMI calculator", "loan EMI calculator India", "home loan EMI", "car loan EMI calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/emi-calculator" },
  openGraph: {
    title: "EMI Calculator — Calculate Loan EMI | RupeeMath",
    description: "Free EMI calculator for home loan, car loan, and personal loan. Get instant results.",
    url: "https://www.rupeemath.co.in/emi-calculator",
  },
};

const faqs = [
  {
    question: "Does making a prepayment reduce my EMI or tenure?",
    answer:
      "Both are possible — it depends on your bank's policy. Most banks give you the choice: either reduce the outstanding tenure (you finish the loan faster while keeping the same EMI) or reduce the EMI amount (the tenure stays the same). Reducing tenure saves more interest overall and is usually the better financial choice.",
  },
  {
    question: "What are floating rate home loans?",
    answer:
      "Floating rate home loans have an interest rate that changes with the RBI repo rate. When the RBI cuts rates, your EMI (or tenure) decreases; when rates rise, it increases. Floating rates are linked to an external benchmark (EBLR) since 2019. Fixed rate loans have a constant EMI throughout but are typically 1–2% higher than floating rates.",
  },
  {
    question: "Which bank offers the lowest home loan interest rate in India?",
    answer:
      "Interest rates change frequently. As of 2025, major PSU banks (SBI, Bank of Baroda, PNB) and private banks (HDFC, ICICI, Kotak) offer home loan rates in the range of 8.25–9.5% p.a. for salaried borrowers with good CIBIL scores. Always compare current rates at the time of applying — even a 0.25% difference saves lakhs over a 20-year tenure.",
  },
  {
    question: "How can I reduce my loan EMI?",
    answer:
      "You can reduce your EMI by: (1) making a larger down payment to reduce the principal, (2) choosing a longer repayment tenure (though this increases total interest paid), (3) negotiating a lower rate with your bank or switching to a lower-rate lender via balance transfer, or (4) making partial prepayments to reduce the outstanding principal.",
  },
  {
    question: "What is better — a shorter or longer loan tenure?",
    answer:
      "A shorter tenure means a higher EMI but significantly less total interest paid. A longer tenure lowers your monthly burden but you pay much more interest overall. For example, a ₹30 lakh loan at 8.5% for 10 years costs ₹14.9L in interest; the same loan for 20 years costs ₹33.5L in interest. Choose the shortest tenure your monthly budget can comfortably support.",
  },
];

export default function EMICalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "EMI Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        EMI Calculator — Calculate Your Loan EMI
      </h1>
      <p className="mb-8 text-gray-500">
        Find out exactly how much you&apos;ll pay each month for your home loan, car loan, or
        personal loan. See the principal vs interest breakdown.
      </p>
      <EMICalculator />
      <PDFDownload title="EMI Calculator Report" />
      <div className="mt-6 rounded-xl border border-border bg-orange-50 p-4">
        <p className="text-sm text-gray-700">
          <strong>Popular:</strong>{" "}
          <a href="/emi-30-lakh-home-loan" className="font-semibold text-primary underline underline-offset-2">
            EMI for ₹30 Lakh Home Loan →
          </a>{" "}
          — see monthly payment at all rates and tenures with a full comparison table.
        </p>
      </div>
      <AffiliateCTA
        heading="Get the Best Loan Rates"
        subtext="Compare interest rates from 20+ banks and NBFCs in India."
        ctaLabel="Compare Loan Rates →"
        ctaHref="#"
      />

      {/* SEO Content Sections */}
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is an EMI?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            An <strong>Equated Monthly Instalment (EMI)</strong> is the fixed amount you pay to your
            lender every month until the loan is fully repaid. Each EMI has two components: a
            <strong> principal</strong> portion (which reduces your outstanding loan balance) and an
            <strong> interest</strong> portion (the cost of borrowing). In the early months of a loan,
            the majority of your EMI goes toward interest. As you pay more instalments, the principal
            component rises and the interest portion decreases — this is called an <strong>amortizing
            loan</strong>. EMI-based loans are used for home loans, car loans, personal loans, and
            consumer durable loans across all major Indian banks and NBFCs.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the RupeeMath EMI Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">1.</span>
              <span><strong>Loan Amount:</strong> Enter the total loan amount you need (e.g., ₹30,00,000 for a home loan).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">2.</span>
              <span><strong>Interest Rate:</strong> Enter the annual interest rate offered by your bank (e.g., 8.5%). Check your sanction letter or bank website for the current rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">3.</span>
              <span><strong>Loan Tenure:</strong> Enter the repayment period in months (e.g., 240 months = 20 years for a home loan).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">4.</span>
              <span><strong>View results:</strong> See your Monthly EMI, Total Amount Payable, and Total Interest instantly. The pie chart shows the split between principal and interest.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-primary">5.</span>
              <span><strong>Compare scenarios:</strong> Adjust the tenure slider to see how a shorter or longer loan period affects your EMI and total interest cost.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">EMI Formula Explained</h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            The standard reducing balance EMI formula used by all Indian banks is:
          </p>
          <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800">
            EMI = P × r × (1 + r)ⁿ / [(1 + r)ⁿ – 1]
          </div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><strong>P</strong> — Principal loan amount (e.g., ₹30,00,000)</li>
            <li><strong>r</strong> — Monthly interest rate = Annual rate ÷ 12 ÷ 100 (e.g., 8.5% → 0.007083)</li>
            <li><strong>n</strong> — Number of monthly instalments (e.g., 20 years → 240 months)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Example: ₹30 lakh at 8.5% for 20 years → EMI ≈ ₹26,035/month. Total payable ≈ ₹62.5 lakh. Interest cost ≈ ₹32.5 lakh — more than the original loan.
          </p>
        </section>
      </div>

      <div className="mt-6 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">What is EMI?</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            EMI stands for Equated Monthly Instalment — the fixed amount you pay to a lender every month until your loan is completely repaid. The word &quot;equated&quot; is the key: every month, you pay the same total amount, but the split between principal and interest changes. In the early months, a much larger portion of your EMI goes toward paying interest, while only a small fraction reduces your actual loan balance. Over time, as the outstanding principal falls, the interest portion shrinks and the principal repayment portion grows. This system, called an amortizing loan structure, is used universally across home loans, car loans, personal loans, and business loans in India.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Understanding how EMI works is important because the numbers can be surprising. On a ₹30 lakh home loan at 8.5% for 20 years, you pay ₹26,035 every month. That seems manageable — but over 20 years, you will have paid ₹62.5 lakh in total. You borrowed ₹30 lakh and repaid ₹62.5 lakh — the extra ₹32.5 lakh is the cost of borrowing, paid as interest. This is not unusual or unfair — it is simply how time-value of money works over a long loan tenure. The critical insight is that even small changes in interest rate or tenure cause large changes in the total amount you ultimately pay.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Every Indian taking a loan — whether for a home, a car, a consumer durable, or personal expenses — should calculate the EMI before signing any agreement. Knowing your EMI helps you verify that it falls within your monthly budget, ensures you are not over-leveraging relative to your income, and allows you to compare loan offers from different banks on an equal footing. Most importantly, it helps you understand the real cost of your loan, not just the headline interest rate. The RupeeMath EMI calculator does this calculation instantly and also shows you a full amortisation schedule so you can see exactly how much of each instalment reduces your outstanding principal versus how much goes to the bank as interest.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Factors That Affect Your EMI</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The loan amount is the most obvious driver of your EMI — the more you borrow, the higher the monthly payment. But the relationship is linear, which makes it straightforward to plan around. If borrowing ₹30 lakh gives you an EMI of ₹26,035, then ₹25 lakh would give you approximately ₹21,700 and ₹35 lakh would be approximately ₹30,400, at the same rate and tenure. Reducing the loan amount through a larger down payment is one of the most effective ways to bring your EMI to a comfortable level, and unlike rate negotiations, it is completely within your control.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The interest rate has a non-linear but highly significant impact on your EMI. Because interest compounds over the entire tenure of the loan, even a small difference in rate translates into a large difference in total outgo. On a ₹30 lakh loan for 20 years, the difference between 8.5% and 9% is only ₹957 per month — but over 20 years, that small monthly difference adds up to ₹2.3 lakh in extra total interest. A 1% rate difference adds approximately ₹4.6 lakh to the total cost of the same loan. This is why negotiating even 0.25% off your rate, or finding a lender with a lower spread over the repo rate, is genuinely worth the effort before signing.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The loan tenure is the most flexible lever you can adjust to manage your monthly cash flow. A longer tenure reduces your monthly EMI significantly — but at the cost of paying much more total interest. A ₹30 lakh home loan at 8.5% costs ₹37,109/month for 10 years versus ₹26,035/month for 20 years — a monthly saving of ₹11,074. However, over 20 years you pay ₹62.5 lakh in total versus ₹44.5 lakh over 10 years — ₹18 lakh more in interest for the longer tenure. The right tenure depends on your income stability, age, and how much you value current cash flow versus long-term savings. A practical approach is to choose the shortest tenure your budget can comfortably support and make annual prepayments when you have surplus funds.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Tips to Reduce Your Home Loan EMI</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Making a higher down payment is the most straightforward way to reduce your EMI without any dependence on bank negotiations or interest rate movements. Banks in India lend up to 75–80% of the property value (LTV ratio), which means you must arrange at least 20–25% from your own savings. But going beyond the minimum — say 30–35% — directly reduces the loan principal, which proportionally reduces your EMI. Every extra rupee you invest as a down payment saves you more than any fixed deposit or savings account can earn, because you avoid paying loan interest (8.5%) on that amount for the entire tenure. If you are expecting a bonus or a matured investment shortly, it may be worth waiting a few months to apply with a larger down payment rather than rushing with a higher loan amount.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Improving your CIBIL score before applying can unlock a materially lower interest rate from most banks. The difference between a score of 700 and 750 can result in a 0.1–0.25% lower rate at PSU banks and 0.25–0.5% lower at some private banks. Over a 20-year loan of ₹30 lakh, each 0.25% reduction saves approximately ₹90,000 in total interest. Building your score to 750+ requires 6–12 months of clean payment history on all existing obligations, keeping credit card utilisation below 30%, and avoiding new loan applications before you apply for the home loan. Since home loans are long-term commitments, spending a few extra months improving your credit score before applying is almost always worth the financial benefit it delivers.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Making periodic prepayments during the loan tenure is one of the most powerful strategies to reduce the effective cost and duration of your loan. Every rupee you pay beyond the mandatory EMI directly reduces your outstanding principal, which in turn reduces the interest charged in all subsequent months. A single lump-sum prepayment of ₹1 lakh in year 3 of a ₹30 lakh, 8.5%, 20-year loan saves approximately ₹2–2.5 lakh in total interest and shortens the tenure by nearly 2 years. For floating rate home loans, the RBI has mandated zero prepayment penalties — so there is no financial disincentive to paying more whenever you can. Even directing your annual salary increment toward an increased EMI by 5–10% each year can dramatically reduce your total interest burden over a 20-year loan.
          </p>
        </section>

      </div>

      <div className="mt-6">
        <FAQSection items={[
          {
            question: "What is the difference between flat rate and reducing balance rate?",
            answer: "A flat rate calculates interest on the original loan amount for the entire tenure — for example, 10% flat on ₹10 lakh for 3 years means interest = ₹3 lakh regardless of how much principal you have repaid. This results in a much higher effective annual rate than the stated flat rate. A reducing balance rate (used by all Indian banks for home and car loans) calculates interest only on the outstanding principal at the start of each month. As you repay principal, your interest charge reduces each month. The reducing balance method is significantly more borrower-friendly. A 10% flat rate is roughly equivalent to an 18–20% reducing balance rate — which is why flat-rate personal loans appear cheaper on the surface but cost more in reality.",
          },
          {
            question: "Can I change my EMI amount after taking a loan?",
            answer: "Yes, though the process varies by loan type and bank. For home loans on floating rates, you can request an EMI revision at any time — banks typically allow you to increase the EMI to reduce tenure, or reduce the EMI (with a revised tenure) if you face financial difficulty. Some banks automatically adjust the EMI when interest rates change; others adjust the tenure instead. For fixed-rate loans, changing the EMI is harder and may involve foreclosure and re-borrowing. The best approach is to start with an EMI you can comfortably afford, then voluntarily increase it annually as your income grows — effectively acting like a step-up loan without formally changing the terms.",
          },
          {
            question: "What happens if I miss an EMI payment?",
            answer: "Missing an EMI payment has both financial and credit consequences. Financially, the bank charges a late payment penalty — typically 2% per month on the overdue amount — and the missed instalment accrues interest. If you miss multiple EMIs, the loan may be classified as an NPA (Non-Performing Asset) after 90 days of non-payment, at which point the bank has the legal right to initiate recovery proceedings. From a credit perspective, a single missed EMI is reported to CIBIL within 30 days and can drop your credit score by 50–100 points, making future borrowing more expensive. If you anticipate difficulty paying an EMI, contact your bank proactively — most lenders offer restructuring or moratorium options that are far less damaging than a default.",
          },
          {
            question: "Is it better to choose a shorter or longer tenure?",
            answer: "The answer depends on your monthly budget and financial priorities. A shorter tenure means a higher EMI but dramatically less total interest — a ₹30 lakh loan at 8.5% for 10 years saves ₹18 lakh in interest compared to 20 years. A longer tenure reduces the monthly burden, making the loan more affordable relative to your income, and frees up cash for other investments. The practical guideline is: choose the shortest tenure where the EMI remains comfortably within 40–45% of your net monthly income. If you choose a longer tenure, commit to making annual prepayments from your salary increments or bonuses to effectively reduce the tenure over time without the obligation of a higher fixed EMI.",
          },
          {
            question: "How does prepayment affect my EMI?",
            answer: "When you make a prepayment, most banks give you two options: either maintain the same EMI and reduce the outstanding tenure (you finish the loan faster), or maintain the same tenure and reduce the EMI (your monthly payment becomes lower). Reducing the tenure is almost always the better financial choice — it reduces the total interest you pay by a larger amount than reducing the EMI does. For example, prepaying ₹2 lakh on a ₹30 lakh, 8.5%, 20-year loan in year 3 can save ₹4.5 lakh in interest and cut 2 years off your tenure if you choose the tenure-reduction option. The same prepayment used to reduce EMI saves less total interest because the loan continues for the full 20 years.",
          },
          {
            question: "Which banks offer the lowest home loan EMI in India?",
            answer: "The lowest home loan EMIs come from the banks with the lowest interest rates, since EMI is directly driven by rate. As of 2026, PSU banks like SBI, Bank of Baroda, PNB, and Canara Bank typically offer the most competitive starting rates (8.25–8.5%) for salaried borrowers with CIBIL scores above 750. Private banks like HDFC, ICICI, Kotak, and Axis are competitive on rates and offer faster processing, often with rates in the 8.5–8.75% range. Housing Finance Companies like LIC Housing Finance and PNB Housing Finance are excellent for self-employed borrowers. The most important step is to compare the actual sanction letter from at least 3–4 banks before signing, as the rate applied to your specific profile can vary by 0.25–0.5% even among the same type of lender.",
          },
        ]} />
      </div>
    </div>
  );
}
