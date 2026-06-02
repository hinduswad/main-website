import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { auth } from "@/lib/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300","400","500","600","700","800","900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hinduswad.com"),
  title: {
    default: "Hindu Swad — Taste with Trust | India's Next Food Discovery Platform",
    template: "%s | Hindu Swad",
  },
  description:
    "Hindu Swad Private Limited — India's upcoming food discovery and restaurant exploration platform. Connecting food lovers with great dining experiences. Launching soon.",
  keywords: [
    "Hindu Swad", "hinduswad", "food discovery India", "restaurant discovery",
    "food tech India", "Indian food platform", "coming soon food app",
    "taste with trust", "Hindu Swad Private Limited",
  ],
  authors: [{ name: "Hindu Swad Private Limited" }],
  creator: "Hindu Swad Private Limited",
  publisher: "Hindu Swad Private Limited",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hinduswad.com",
    siteName: "Hindu Swad",
    title: "Hindu Swad — Taste with Trust",
    description: "India's next food discovery platform. Connecting food lovers with great dining experiences. Launching soon.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Hindu Swad — Taste with Trust" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindu Swad — Taste with Trust",
    description: "India's next food discovery platform. Launching soon.",
    site: "@hinduswad",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/web-icon-32x32.png",
    apple: "/images/ios-icon-180x180.png",
  },
  alternates: { canonical: "https://hinduswad.com" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hindu Swad Private Limited",
  alternateName: "Hindu Swad",
  url: "https://hinduswad.com",
  logo: "https://hinduswad.com/images/logo.jpeg",
  description: "India's upcoming food discovery and restaurant exploration platform.",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  contactPoint: [{
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@hinduswad.com",
    availableLanguage: ["English","Hindi","Kannada"],
  }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased text-zinc-900 bg-white" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
