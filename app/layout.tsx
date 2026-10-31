import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/businessConfig";
import StructuredData from "@/components/StructuredData";

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

const siteUrl = "https://hnfuelsupply.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HN Fuel Supply | Professional Fuel Delivery and Diesel Supply",
    template: `%s | ${businessConfig.businessName}`,
  },
  description:
    "HN Fuel Supply is a trusted fuel supplier providing dependable diesel delivery, on-site fuel delivery services, and 24/7 emergency fuel supply for fleets, machinery & generators.",
  keywords: [
    "HN Fuel Supply",
    "hn fuel supply",
    "fuel supplier",
    "diesel delivery",
    "fuel delivery services",
    "emergency fuel supply",
    "diesel supply",
    "commercial fuel delivery",
    "generator fuel supply",
    "on-site diesel delivery",
    "bulk fuel delivery",
    "agricultural diesel delivery",
    "industrial fuel supplier",
  ],
  authors: [{ name: businessConfig.businessName, url: siteUrl }],
  creator: businessConfig.businessName,
  publisher: businessConfig.businessName,
  applicationName: businessConfig.businessName,
  category: "Fuel Supply & Logistics",
  classification: "Fuel Delivery Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HN Fuel Supply | Professional Fuel Delivery and Diesel Supply",
    description:
      "HN Fuel Supply is a trusted fuel supplier providing dependable diesel delivery, on-site fuel delivery services, and 24/7 emergency fuel supply for commercial fleets, generators, and industrial operations.",
    url: siteUrl,
    siteName: businessConfig.businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-tanker.jpg",
        width: 1200,
        height: 630,
        alt: `${businessConfig.businessName} - Professional Fuel Delivery and Diesel Supply Tanker`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HN Fuel Supply | Professional Fuel Delivery and Diesel Supply",
    description:
      "HN Fuel Supply is a trusted fuel supplier providing dependable diesel delivery, on-site fuel delivery services, and 24/7 emergency fuel supply.",
    images: ["/images/hero-tanker.jpg"],
    creator: "@hnfuelsupply",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "google-site-verification=HN_Fuel_Supply_GSC_Verification",
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Greater Metro Area",
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#060b14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
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
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-[#060b14] text-slate-100 selection:bg-[#f59e0b] selection:text-slate-950 pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
