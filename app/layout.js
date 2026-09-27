import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// Opening logo animation is turned off for now (wasn't smooth enough) but the
// component is kept in place in case we want to bring it back later.
// import IntroAnimation from "@/components/IntroAnimation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://beyondhello.studio";
const SITE_NAME = "Beyond Hello";
const SITE_TITLE = "Beyond Hello · Websites built for what's next";
const SITE_DESCRIPTION =
  "Custom-built, launch-ready websites for founders and brands who want their first hello to land. Fixed-price packages, Dubai-based, clients worldwide.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Beyond Hello",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "website design Dubai",
    "web design agency Dubai",
    "custom website builder",
    "small business website",
    "e-commerce website Dubai",
    "fixed price website packages",
    "Beyond Hello",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Structured data (schema.org) so search engines can understand this is a
// real Dubai-based web design studio, not just a page of text - this is what
// powers rich results like the business name/description in search.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-main.webp`,
  image: `${SITE_URL}/images/logo-main.webp`,
  description: SITE_DESCRIPTION,
  email: "hello@beyondhello.studio",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Worldwide",
  priceRange: "AED 3,500 - AED 18,000+",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-ink text-paper font-body antialiased">
        {/* Structured data lives directly in the body per Next.js's documented
            JSON-LD pattern - search engines read it regardless of where it
            sits in the document, and this avoids fighting Next's own
            head management. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <div className="mx-auto max-w-6xl px-5">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
