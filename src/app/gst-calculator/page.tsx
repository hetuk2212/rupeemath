import type { Metadata } from "next";
import { GSTCalculator } from "@/components/calculators/GSTCalculator";
import { PDFDownload } from "@/components/shared/PDFDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { AffiliateCTA } from "@/components/shared/AffiliateCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "GST Calculator India — Add or Extract GST Online",
  description: "Calculate GST instantly for any amount. Add GST to base price or extract GST from inclusive price. Shows CGST, SGST breakdown for 5%, 12%, 18%, and 28% GST rates.",
  keywords: ["gst calculator india", "gst calculator online", "add gst calculator", "extract gst calculator", "cgst sgst calculator"],
  alternates: { canonical: "https://www.rupeemath.co.in/gst-calculator" },
};

const faqs = [
  { question: "What are the GST rates in India?", answer: "India has four main GST rates: 5% (essential goods like packaged foods, medicines), 12% (processed foods, business class air travel, mobile phones), 18% (most services, electronics, restaurants, telecom), and 28% (luxury goods, automobiles, tobacco, aerated drinks). A few items are exempt (0%) or fall in special categories. Most B2B services and construction use 18%. If unsure, you can check the GST rate for your specific HSN or SAC code on the GST portal." },
  { question: "What is CGST and SGST?", answer: "GST is a dual structure: CGST (Central GST) goes to the central government and SGST (State GST) goes to the state government. Both are levied at half the total rate. So for 18% GST: CGST = 9%, SGST = 9%. For interstate transactions, IGST (Integrated GST) = the full rate applies (no split) and is collected by the center and then shared with states. On your invoice, you will see CGST + SGST for intrastate sales and IGST for interstate sales." },
  { question: "How do I calculate GST on a product's price?", answer: "To add GST: Final price = Base price × (1 + GST rate/100). For example, for a product costing ₹1,000 + 18% GST: Final price = 1,000 × 1.18 = ₹1,180. GST amount = ₹180 (CGST ₹90 + SGST ₹90). To extract GST from an inclusive price: Base price = Final price / (1 + GST rate/100). For ₹1,180 with 18% GST: Base = 1,180/1.18 = ₹1,000. GST = ₹180." },
  { question: "Who needs to register for GST?", answer: "GST registration is mandatory if your annual turnover exceeds ₹40 lakh (₹20 lakh for special category states) for goods. For services, the threshold is ₹20 lakh (₹10 lakh for special states). Online sellers, e-commerce operators, and businesses making interstate supplies must register regardless of turnover. Businesses below the threshold can voluntarily register to claim input tax credit on purchases." },
  { question: "Can a consumer claim GST refund?", answer: "Generally, end consumers cannot claim GST refunds since they don't file GST returns. Only GST-registered businesses can claim input tax credit (ITC) on business purchases. However, tourists (foreign nationals) visiting India can claim a refund on GST paid on certain goods purchased from stores in international airports under the Tourist Refund Scheme. Indian consumers can benefit indirectly when businesses pass on the ITC benefit as lower prices." },
];

export default function GSTPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "GST Calculator" }]} />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        GST Calculator India — Add or Extract GST
      </h1>
      <p className="mb-8 text-gray-500">
        Instantly calculate GST for any amount. Shows CGST and SGST split for 5%, 12%, 18%, and 28% rates. Works for both adding GST and reverse calculation.
      </p>
      <GSTCalculator />
      <PDFDownload title="GST Calculator Report" />
      <AffiliateCTA
        heading="Simplify GST Filing for Your Business"
        subtext="File GST returns online in minutes with automated calculations."
        ctaLabel="Try GST Filing Software →"
        ctaHref="#"
      />
      <div className="mt-10 space-y-6">
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">What is GST?</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>GST (Goods and Services Tax)</strong> is a comprehensive indirect tax levied on the manufacture, sale, and consumption of goods and services in India. It replaced multiple cascading taxes like VAT, service tax, and excise duty when it was introduced on 1 July 2017. GST operates on a dual structure — <strong>CGST</strong> (Central GST, collected by the central government) and <strong>SGST</strong> (State GST, collected by the state government) for intrastate transactions. For interstate transactions, <strong>IGST</strong> (Integrated GST) applies at the full rate. GST follows a destination-based consumption tax model — it is collected at the point of consumption, not production. India has four primary GST slabs: 5%, 12%, 18%, and 28%, applied based on the nature of goods and services.
          </p>
        </section>
        <section className="rounded-xl border border-border bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">How to Use the GST Calculator</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">1.</span><span><strong>Calculation Type:</strong> Choose "Add GST" if you have the base price and want the final price, or "Extract GST" if you have the GST-inclusive price and want the base amount.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">2.</span><span><strong>Enter Amount:</strong> Type the price in the input box.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">3.</span><span><strong>Select GST Rate:</strong> Choose 5%, 12%, 18%, or 28% based on the product or service category.</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-primary">4.</span><span><strong>Result:</strong> See the GST amount, CGST + SGST split, and final price. Download PDF for invoice or record-keeping purposes.</span></li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Common GST Rates by Category</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { rate: "5%", items: "Packaged food, medicines, life-saving drugs, economy class air travel, fertilizers, LPG" },
              { rate: "12%", items: "Processed food, business class travel, mobile phones, computers, butter, cheese" },
              { rate: "18%", items: "Restaurants, telecom, IT services, electronics, construction (commercial), cement, paint" },
              { rate: "28%", items: "Luxury cars, SUVs, motorcycles above 350cc, tobacco, aerated drinks, casinos, online gaming" },
            ].map((r) => (
              <div key={r.rate} className="rounded-xl border border-border bg-gray-50 p-4">
                <p className="mb-1 text-lg font-black text-primary">{r.rate}</p>
                <p className="text-xs text-gray-600">{r.items}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <FAQSection items={faqs} />
    </div>
  );
}
