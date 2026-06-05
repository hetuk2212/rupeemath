import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationProgress } from "@/components/shared/NavigationProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rupeemath.co.in"),
  title: {
    default: "RupeeMath — Free Financial Calculators",
    template: "%s | RupeeMath",
  },
  description:
    "Free online financial calculators for India — SIP, EMI, FD, Income Tax, and Home Loan eligibility. Instant results with charts.",
  keywords: ["financial calculator", "SIP calculator", "EMI calculator", "income tax calculator India"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rupeemath.co.in",
    siteName: "RupeeMath",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-5009777619539622",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background antialiased">
        <NavigationProgress />
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5009777619539622"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="cuelinks-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var cId = '290646';
              (function(d, t) {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = (document.location.protocol == 'https:' ?
                  'https://cdn0.cuelinks.com/js/' :
                  'http://cdn0.cuelinks.com/js/') + 'cuelinksv2.js';
                document.getElementsByTagName('body')[0].appendChild(s);
              }());
            `
          }}
        />
      </body>
    </html>
  );
}
