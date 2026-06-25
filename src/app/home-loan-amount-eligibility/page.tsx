import type { Metadata } from "next";
import Link from "next/link";
import { HomeLoanCalculator } from "@/components/calculators/HomeLoanCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Loan Amount Eligibility Calculator 2026 — Maximum Loan Amount India",
  description:
    "Check your home loan amount eligibility instantly. Free calculator shows maximum loan amount based on salary. Compare eligibility across banks India.",
  keywords: [
    "home loan amount eligibility",
    "maximum home loan amount",
    "home loan amount calculator india",
    "how much home loan can i get",
    "home loan eligibility amount",
  ],
  alternates: { canonical: "https://www.rupeemath.co.in/home-loan-amount-eligibility" },
  openGraph: {
    title: "Home Loan Amount Eligibility Calculator 2026 — Maximum Loan Amount India | RupeeMath",
    description:
      "Free calculator: check your maximum home loan amount eligibility based on salary. Compare across banks India.",
    url: "https://www.rupeemath.co.in/home-loan-amount-eligibility",
  },
};

const faqs = [
  {
    question: "How is the maximum home loan amount calculated in India?",
    answer:
      "Indian banks calculate the maximum home loan amount using the FOIR (Fixed Obligation to Income Ratio) method applied in reverse. The bank first determines your maximum allowable monthly EMI — typically 40 to 50 percent of your net take-home salary. Any existing EMIs you pay on car loans, personal loans, or credit cards are subtracted from this capacity. The remaining EMI headroom is then reverse-calculated using the standard EMI formula to determine the maximum principal you can borrow at the offered interest rate and chosen tenure. For example, a salary of ₹80,000 with a 50 percent FOIR gives a maximum EMI capacity of ₹40,000. At 8.5 percent for 20 years, this EMI capacity supports a loan of approximately ₹42 lakh. Separately, the bank also applies a Loan-to-Value (LTV) cap of 75 to 80 percent of the property's market value — so even if your income supports a higher amount, the loan cannot exceed 80 percent of what the property is worth.",
  },
  {
    question: "What salary is needed to get a ₹50 lakh home loan?",
    answer:
      "To qualify for a ₹50 lakh home loan, you need a net monthly take-home salary of approximately ₹86,000 to ₹1,08,000, depending on the tenure you choose and whether you have any existing EMIs. At 8.5 percent interest for 20 years, a ₹50 lakh loan has an EMI of approximately ₹43,391. At 50 percent FOIR with no existing loans, the required salary is ₹86,782. At 40 percent FOIR, the required salary rises to ₹1,08,478. If you have existing EMIs totalling ₹10,000 per month, add that to the required salary figures. Adding a co-applicant such as a working spouse can bring the combined household income to the required threshold even if neither individual qualifies alone. Maintaining a CIBIL score above 750 and choosing a longer tenure of 25 to 30 years can also marginally increase the eligible amount on the same salary.",
  },
  {
    question: "Does tenure affect how much home loan amount I am eligible for?",
    answer:
      "Yes — tenure has a direct and significant effect on your maximum eligible loan amount. A longer tenure means a lower monthly EMI for the same loan amount, which means your fixed monthly income can support a higher principal. At 8.5 percent interest on a ₹60,000 salary with 50 percent FOIR and no existing loans, a 15-year tenure supports a loan of approximately ₹24.6 lakh, a 20-year tenure supports ₹28.3 lakh, and a 30-year tenure supports ₹33.5 lakh — nearly ₹9 lakh more eligibility simply by extending tenure by 15 years. The trade-off is substantially higher total interest over the loan life. A practical approach is to choose a longer tenure for maximum eligibility while committing to make annual prepayments as your income grows, which reduces the effective tenure and total interest without locking you into a high mandatory monthly payment.",
  },
  {
    question: "Do existing loans reduce my home loan amount eligibility?",
    answer:
      "Yes — every existing EMI directly and proportionally reduces your home loan amount eligibility. Banks subtract all current monthly EMI obligations from your maximum EMI capacity before computing the eligible home loan amount. If your salary is ₹70,000 and you have a car loan EMI of ₹10,000, your effective available EMI for a home loan drops from ₹35,000 to ₹25,000 — which at 8.5 percent for 20 years translates to a loan of approximately ₹26.4 lakh instead of ₹37 lakh. That is a ₹10.6 lakh reduction in eligibility from a single car loan. Credit card minimum due amounts are also counted, even if you pay in full each month. The most effective strategy if you are planning a home loan is to pay off smaller outstanding loans entirely before applying — freeing up the full FOIR headroom for the home loan EMI.",
  },
  {
    question: "Which bank gives the highest home loan amount in India?",
    answer:
      "The maximum home loan amount any bank can sanction is ultimately capped by the Loan-to-Value (LTV) ratio — 75 to 80 percent of the property value — and by your income-based eligibility. Within those constraints, all major banks apply broadly similar FOIR norms of 40 to 50 percent. However, some lenders apply a slightly more liberal FOIR or accept a wider range of income types. PSU banks like SBI and Bank of Baroda typically use 50 percent FOIR for salaried borrowers. Some NBFCs and Housing Finance Companies like LIC HFL, PNB Housing, and HDFC (HFC entity) may consider rental income, freelance income, or anticipated future income for certain borrower profiles, potentially resulting in a higher sanctioned amount. The bank that gives you the highest loan amount will depend entirely on your specific income profile, credit score, property value, and the documentation you are able to provide.",
  },
  {
    question: "Can I get a home loan for 90 percent of the property value?",
    answer:
      "No. RBI guidelines cap home loan LTV ratios as follows: for loans up to ₹30 lakh, the maximum LTV is 90 percent; for loans between ₹30 lakh and ₹75 lakh, the maximum LTV is 80 percent; for loans above ₹75 lakh, the maximum LTV is 75 percent. This means on a ₹40 lakh property, the maximum loan is ₹32 lakh (80 percent) and you must arrange the remaining ₹8 lakh as a down payment. On a ₹20 lakh property, the loan can go up to ₹18 lakh (90 percent). These LTV limits are regulatory ceilings — individual banks may apply stricter caps depending on the property type, location, legal assessment, and your credit profile. The property must have a clear title and approved building plan to qualify for the maximum LTV.",
  },
];

export default function HomeLoanAmountEligibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home Loan Eligibility", href: "/home-loan-eligibility" },
          { label: "Maximum Loan Amount" },
        ]}
      />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Home Loan Amount Eligibility — Maximum Loan Amount 2026
      </h1>
      <p className="mb-8 text-gray-500">
        Find out the maximum home loan amount you can get based on your monthly salary and
        financial obligations. Uses the standard bank FOIR method with live calculation.
      </p>

      <HomeLoanCalculator />
      <PDFDownload title="Home Loan Amount Eligibility Report" />

      <AffiliateCTA
        heading="Check Real Loan Offers from 20+ Banks"
        subtext="Get pre-approved home loan offers without affecting your CIBIL score."
        ctaLabel="Check Home Loan Offers →"
        ctaHref="#"
      />

      {/* Salary-wise eligibility table */}
      <section className="mt-10 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-xl font-bold text-gray-900">
          Home Loan Amount Eligibility by Salary 2026
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Maximum loan amount at 8.5% interest, 20-year tenure, 50% FOIR, zero existing EMIs
        </p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-navy-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Monthly Salary</th>
                <th className="px-4 py-3 text-right font-semibold">Max EMI (50%)</th>
                <th className="px-4 py-3 text-right font-semibold">20 Years</th>
                <th className="px-4 py-3 text-right font-semibold">25 Years</th>
                <th className="px-4 py-3 text-right font-semibold">30 Years</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {[
                { salary: "₹20,000", emi: "₹10,000", y20: "~₹10.6L", y25: "~₹12.4L", y30: "~₹13.3L" },
                { salary: "₹30,000", emi: "₹15,000", y20: "~₹15.9L", y25: "~₹18.6L", y30: "~₹19.9L" },
                { salary: "₹40,000", emi: "₹20,000", y20: "~₹21.1L", y25: "~₹24.8L", y30: "~₹26.6L" },
                { salary: "₹50,000", emi: "₹25,000", y20: "~₹26.4L", y25: "~₹31.0L", y30: "~₹33.2L" },
                { salary: "₹60,000", emi: "₹30,000", y20: "~₹31.7L", y25: "~₹37.2L", y30: "~₹39.8L" },
                { salary: "₹75,000", emi: "₹37,500", y20: "~₹39.6L", y25: "~₹46.5L", y30: "~₹49.8L" },
                { salary: "₹1,00,000", emi: "₹50,000", y20: "~₹52.8L", y25: "~₹62.0L", y30: "~₹66.4L" },
                { salary: "₹1,50,000", emi: "₹75,000", y20: "~₹79.3L", y25: "~₹93.0L", y30: "~₹99.6L" },
                { salary: "₹2,00,000", emi: "₹1,00,000", y20: "~₹1.06 Cr", y25: "~₹1.24 Cr", y30: "~₹1.33 Cr" },
              ].map((row, i) => (
                <tr key={row.salary} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.salary}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{row.emi}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">{row.y20}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y25}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.y30}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          At 8.5% p.a. with zero existing EMIs. Actual eligibility varies by lender, CIBIL score,
          employment type, and property value. Use the calculator above for your exact figure.
        </p>
      </section>

      {/* Main content */}
      <div className="mt-10 space-y-6">

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            What is Home Loan Amount Eligibility?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Home loan amount eligibility refers to the maximum principal amount a bank or housing finance
            company is willing to lend you for purchasing or constructing a residential property. It is
            not a fixed number — it is calculated individually for each applicant based on a combination
            of income, financial obligations, credit history, age, and the value of the property being
            purchased. Understanding your eligibility before approaching a lender is critically important
            because it sets realistic expectations about the property you can afford, tells you how much
            you need to arrange as a down payment, and helps you avoid the embarrassment and CIBIL score
            damage of a rejected loan application. A rejected application appears in your credit report
            as a hard enquiry and signals financial distress to other lenders, making subsequent
            applications harder.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The two primary constraints on your home loan amount eligibility are income-based and
            property-based. The income-based constraint uses the FOIR (Fixed Obligation to Income Ratio)
            method to determine the maximum monthly EMI you can support, and then reverse-calculates the
            loan principal from that EMI. The property-based constraint uses the Loan-to-Value (LTV)
            ratio — banks will only lend up to 75 to 90 percent of the property's market value
            regardless of how high your income eligibility may be. Your actual sanctioned loan amount is
            the lower of these two constraints. For most borrowers with moderate incomes, the income
            constraint is the binding one. For very high-income borrowers purchasing moderately priced
            properties, the LTV constraint often kicks in first.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Beyond income and property value, your CIBIL score plays an important secondary role. A score
            below 650 will result in outright rejection at most banks. A score between 650 and 750 will
            get you approved but at a higher interest rate and possibly a lower loan amount. A score
            above 750 qualifies you for the bank's best rate tier, and some lenders offer marginally
            higher LTV ratios (and thus higher loan amounts) to borrowers with excellent credit profiles
            as they represent lower default risk. Employment stability — at least two continuous years
            with the current employer for salaried applicants, or three years of consistent business
            income for self-employed borrowers — is the third major factor assessed alongside income
            and credit score.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            How Banks Calculate Maximum Home Loan Amount
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The bank's calculation begins with your net monthly take-home salary — the amount credited
            to your bank account after all deductions including PF, professional tax, and income tax.
            This is distinct from your gross salary or CTC, which includes employer contributions and
            benefits that you never receive in hand. Banks use the net figure because that is the actual
            cash available to service the EMI. For self-employed borrowers, the income figure used is
            typically the average net profit as declared in the Income Tax Return over the past two to
            three years — not the current year revenue, which can be higher due to recent business
            growth. Banks specifically choose the more conservative multi-year average to protect
            against income volatility.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Once the income figure is established, the bank applies the FOIR limit — typically 50
            percent for salaried borrowers in good standing, and sometimes 40 to 45 percent for
            self-employed borrowers or those with less stable income profiles. All existing fixed monthly
            obligations are subtracted from this FOIR capacity: car loan EMI, personal loan EMI, credit
            card minimum due, and any other loan obligations. The result is the maximum home loan EMI
            the bank is willing to approve. This EMI figure is then plugged into the reverse EMI formula
            — using the bank's current interest rate and your chosen tenure — to arrive at the maximum
            principal amount you can borrow. This entire calculation is done within seconds by our
            home loan amount eligibility calculator above.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            After computing the income-based maximum, the bank applies the LTV cap on the property side.
            For properties valued up to ₹30 lakh, LTV can be up to 90 percent. For properties valued
            between ₹30 lakh and ₹75 lakh, LTV is capped at 80 percent. For properties above ₹75 lakh,
            LTV is limited to 75 percent. The bank's technical team conducts a physical valuation of
            the property and may assess it at a value lower than the sale agreement price — particularly
            for under-construction properties or properties in areas with thin transaction history. The
            final sanctioned amount is the minimum of the income-based eligibility and the LTV-based
            ceiling. If the property is valued lower than expected, you may need a larger down payment
            even if your income supports a higher loan.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Home Loan Amount Eligibility Formula
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The formula banks use to determine maximum home loan amount involves two steps. First,
            compute the maximum allowable EMI from income. Second, reverse-calculate the loan principal
            from that EMI. Here is the exact calculation with a worked example for a borrower with a
            ₹80,000 monthly salary, a ₹8,000 existing car loan EMI, applying at 8.5 percent interest
            for a 20-year tenure.
          </p>

          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-border bg-gray-50 p-4">
              <p className="mb-1 font-bold text-gray-800">Step 1 — Maximum Allowable EMI</p>
              <p className="mb-2 font-mono text-sm text-primary">
                Max EMI = (Net Monthly Salary × FOIR) − Existing EMIs
              </p>
              <p className="text-xs text-gray-600">
                = (₹80,000 × 0.50) − ₹8,000 = ₹40,000 − ₹8,000 = <strong>₹32,000/month available</strong>
              </p>
            </div>

            <div className="rounded-lg border border-border bg-gray-50 p-4">
              <p className="mb-1 font-bold text-gray-800">Step 2 — Maximum Loan Principal</p>
              <p className="mb-2 font-mono text-sm text-primary">
                {"Loan = Max EMI × [(1+r)^n − 1] ÷ [r × (1+r)^n]"}
              </p>
              <p className="text-xs text-gray-600">
                Where r = 8.5 ÷ 12 ÷ 100 = 0.007083 (monthly rate), n = 20 × 12 = 240 months
                <br />
                = ₹32,000 × [(1.007083)^240 − 1] ÷ [0.007083 × (1.007083)^240]
                <br />
                ≈ <strong>₹33.7 lakh maximum loan amount</strong>
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
              <p className="mb-1 font-bold text-primary">Step 3 — Apply LTV Cap</p>
              <p className="text-xs text-gray-700">
                If the property is valued at ₹45 lakh: LTV cap = 80% × ₹45L = ₹36L.
                Income-based eligibility (₹33.7L) is lower, so <strong>₹33.7 lakh is the sanctioned amount</strong>.
                <br />
                If the property is valued at ₹38 lakh: LTV cap = 80% × ₹38L = ₹30.4L.
                LTV cap is now lower, so <strong>₹30.4 lakh is the sanctioned amount</strong> — down payment needed is ₹7.6L.
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            The calculator at the top of this page runs this exact calculation in real time. Adjust
            income, existing EMIs, rate, and tenure to instantly see how each variable affects your
            maximum eligible loan amount.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            How to Maximise Your Home Loan Amount Eligibility
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            The single most impactful action you can take to maximise your home loan amount eligibility
            is to add a working co-applicant. When you apply jointly — most commonly with a working
            spouse — the bank adds both incomes together before computing the FOIR-based maximum EMI.
            A household with one spouse earning ₹60,000 and the other earning ₹45,000 has a combined
            income of ₹1,05,000 and a maximum EMI capacity of ₹52,500 (at 50 percent FOIR). At 8.5
            percent for 20 years, this capacity supports a loan of approximately ₹55.5 lakh — compared
            to ₹31.7 lakh for the higher-earning spouse alone. That is ₹23.8 lakh of additional
            eligibility created simply by adding the second income. The co-applicant also generates
            independent tax benefits — each can claim Section 24(b) interest deduction and Section 80C
            principal deduction separately, doubling the household's annual tax savings from the loan.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Paying off existing small loans before applying is the second most effective lever. Since
            every existing EMI reduces your available FOIR headroom, eliminating a ₹10,000 car loan
            EMI increases your available home loan EMI by ₹10,000 — which at 8.5 percent for 20 years
            translates to approximately ₹10.6 lakh in additional home loan eligibility. If you are
            planning to apply for a home loan six to twelve months from now, use that window to pay off
            personal loans, two-wheeler loans, or any other small loans. Even reducing your credit card
            outstanding balance helps, because banks count the credit card minimum due (typically 5
            percent of outstanding balance) as an existing obligation when computing FOIR.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Improving your CIBIL score in the months before applying is the third major strategy.
            A score above 750 not only improves your chances of approval — it may result in a lower
            interest rate of 0.25 to 0.5 percent compared to a score of 700 to 749. A lower rate
            means a lower EMI per lakh borrowed, which allows a higher principal on the same monthly
            payment. Additionally, maintaining a stable employment history (no job changes in the
            six months before applying), declaring all documentable income sources including rental
            income and freelance earnings in your ITR, and choosing the longest tenure the bank offers
            for your age profile are all incremental steps that can meaningfully increase your maximum
            eligible home loan amount.
          </p>
        </section>

        {/* Internal links */}
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-4 text-base font-bold text-gray-900">Related Home Loan Calculators</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Home Loan Eligibility Calculator", href: "/home-loan-eligibility", desc: "Full eligibility with income and EMI breakdown" },
              { label: "Joint Home Loan Eligibility", href: "/joint-home-loan-eligibility", desc: "Combined income eligibility for co-applicants" },
              { label: "Home Loan on ₹30,000 Salary", href: "/home-loan-for-30000-salary", desc: "Detailed guide for lower-income borrowers" },
              { label: "EMI for ₹30 Lakh Home Loan", href: "/emi-30-lakh-home-loan", desc: "Monthly payment at all rates and tenures" },
              { label: "EMI for ₹50 Lakh Home Loan", href: "/emi-50-lakh-home-loan", desc: "Monthly payment at all rates and tenures" },
              { label: "Home Loan Eligibility by Salary", href: "/home-loan-on-salary", desc: "Salary-wise eligibility table and calculator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition hover:border-primary hover:bg-orange-50"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">{link.label}</p>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
                <span className="ml-2 text-primary">→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <FAQSection items={faqs} />
    </div>
  );
}
