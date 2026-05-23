import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy — RupeeMath",
  description:
    "Read RupeeMath's privacy policy to understand how we collect, use, and protect your data when you use our free financial calculators.",
  alternates: { canonical: "https://www.rupeemath.co.in/privacy-policy" },
};

const sections = [
  {
    heading: "1. Information We Collect",
    content: `RupeeMath does not require you to create an account or provide any personal information to use our calculators. All calculations are performed entirely in your browser — no data is sent to our servers.

We may collect non-personally identifiable information automatically through analytics tools, including:
• Pages visited and time spent on each page
• Device type, browser, and operating system
• Approximate geographic location (country/city level)
• Referring website or search query that brought you to our site`,
  },
  {
    heading: "2. Cookies",
    content: `RupeeMath uses cookies to improve your experience. Cookies are small text files stored on your device. We use:

• Essential cookies: Required for the website to function correctly.
• Analytics cookies: Used by Google Analytics to understand how visitors interact with our site (pages visited, session duration, etc.). This data is aggregated and anonymous.
• Advertising cookies: Used by Google AdSense to show relevant advertisements. These cookies may track your browsing behaviour across websites to deliver personalised ads.

You can disable cookies at any time through your browser settings. Note that disabling cookies may affect the functionality of some features.`,
  },
  {
    heading: "3. Google Analytics",
    content: `We use Google Analytics to understand how our website is used. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.

We use this information only to improve our website. Google Analytics collects only the IP address assigned to you on the date you visit this site, not your name or other personally identifying information.

You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on available at https://tools.google.com/dlpage/gaoptout.`,
  },
  {
    heading: "4. Google AdSense",
    content: `RupeeMath uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites on the internet.

Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet. You may opt out of personalised advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads.

We do not have access to or control over the cookies used by Google AdSense.`,
  },
  {
    heading: "5. Third-Party Links",
    content: `Our website may contain links to third-party websites, financial products, or services. These links are provided for your convenience and informational purposes only.

RupeeMath has no control over the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policy of every website you visit. We are not responsible for the privacy practices or content of those sites.`,
  },
  {
    heading: "6. How We Use Your Information",
    content: `The non-personal information we collect is used solely to:
• Analyse website traffic and improve user experience
• Understand which calculators and features are most useful
• Serve relevant advertisements through Google AdSense
• Diagnose technical issues with the website

We do not sell, trade, or rent your personal information to third parties.`,
  },
  {
    heading: "7. Data Security",
    content: `Since RupeeMath does not collect personal data or store any user inputs, there is minimal data security risk associated with using our calculators. All financial inputs you enter are processed locally in your browser and are never transmitted to or stored on our servers.`,
  },
  {
    heading: "8. Children's Privacy",
    content: `RupeeMath is not directed at children under the age of 13. We do not knowingly collect any personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete such information.`,
  },
  {
    heading: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically. The date of the last update is shown at the bottom of this page.`,
  },
  {
    heading: "10. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:

Email: admin@rupeemath.co.in
Website: https://www.rupeemath.co.in`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-400">
          Last updated: May 2025 &nbsp;|&nbsp; Effective for{" "}
          <a href="https://www.rupeemath.co.in" className="text-primary hover:underline">
            www.rupeemath.co.in
          </a>
        </p>
        <p className="mt-4 text-gray-600">
          At RupeeMath, your privacy is important to us. This Privacy Policy explains what
          information we collect, how we use it, and your rights regarding your data when you
          visit and use our free financial calculators.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">{section.heading}</h2>
            <div className="rounded-xl border border-border bg-gray-50 p-5">
              <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
                {section.content}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-primary-200 bg-primary-50 p-5 text-sm text-gray-600">
        <p>
          <strong className="text-primary">Questions about this policy?</strong> Contact us at{" "}
          <a href="mailto:admin@rupeemath.co.in" className="font-medium text-primary hover:underline">
            admin@rupeemath.co.in
          </a>
        </p>
      </div>
    </div>
  );
}
