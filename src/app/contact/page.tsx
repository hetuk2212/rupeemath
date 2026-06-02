import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact RupeeMath — Get in Touch",
  description:
    "Contact the RupeeMath team. Send feedback, report a bug, or suggest a new calculator. We'd love to hear from you.",
  alternates: { canonical: "https://www.rupeemath.co.in/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Contact RupeeMath
        </h1>
        <p className="text-gray-500">
          Have questions or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-5">
        {/* Contact info sidebar */}
        <div className="sm:col-span-2">
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mb-1 font-bold text-gray-900">Email us directly</h2>
            <p className="mb-3 text-sm text-gray-500">
              We typically reply within 1–2 business days.
            </p>
            <a
              href="mailto:hetuk2212@gmail.com"
              className="break-all text-sm font-semibold text-primary hover:underline"
            >
              hetuk2212@gmail.com
            </a>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-gray-50 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="mb-1 font-bold text-gray-900">What can we help with?</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
              {[
                "Bug reports or calculation errors",
                "Suggestions for new calculators",
                "General feedback about the site",
                "Business or partnership enquiries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Client form */}
        <div className="sm:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
