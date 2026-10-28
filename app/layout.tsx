import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/businessConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${businessConfig.businessName} | Reliable Diesel Delivery & Fuel Supply`,
  description:
    "Direct on-site diesel fuel delivery for commercial businesses, backup generators, farms, and industrial operations. Contact the owner directly for dependable, professional fuel supply.",
  keywords: [
    "diesel delivery",
    "fuel supply",
    "commercial diesel",
    "generator fuel",
    "agricultural diesel delivery",
    "industrial fuel supply",
    "on-site refueling",
  ],
  authors: [{ name: businessConfig.owner.name }],
  openGraph: {
    title: `${businessConfig.businessName} - Reliable Diesel Delivery`,
    description:
      "Dependable on-site diesel fuel distribution for generators, commercial fleets, farms, and industrial job sites.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#060b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-[#060b14] text-slate-100`}
    >
      <body className="min-h-screen flex flex-col bg-[#060b14] text-slate-100 selection:bg-[#f59e0b] selection:text-slate-950 pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
