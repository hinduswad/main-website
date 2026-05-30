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
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HinduSwad - Premium Food Delivery Job Recruitment Portal",
  description: "Join India's leading food delivery and logistics operations network. Immediate hiring for Field Officers, Sales Executives, and TeleCallers.",
  icons: {
    icon: "/images/web-icon-32x32.png",
    apple: "/images/ios-icon-180x180.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased text-zinc-900 bg-white" suppressHydrationWarning>
        <Navbar session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
