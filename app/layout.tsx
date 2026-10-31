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

const siteUrl = "https://hnfuelsupply.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessConfig.businessName} | Diesel, Petrol & Emergency Fuel Delivery`,
    template: `%s | ${businessConfig.businessName}`,
  },
  description:
    "HN Fuel Supply provides dependable on-site fuel delivery, commercial diesel supply, petrol supply, and 24/7 emergency fuel delivery for vehicles, backup generators, machinery & farms.",
  keywords: [
    "HN Fuel Supply",
    "hn fuel supply",
    "hnfuelsupply",
    "fuel delivery",
    "diesel supply",
    "petrol supply",
    "emergency fuel delivery",
    "commercial diesel delivery",
    "on-site fuel delivery",
    "generator fuel supply",
    "agricultural fuel delivery",
    "industrial fuel supply",
    "24/7 emergency fuel delivery",
    "bulk diesel supply",
    "free fuel delivery",
    "diesel distributor",
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
    title: `${businessConfig.businessName} | Diesel, Petrol & Emergency Fuel Delivery`,
    description:
      "Dependable on-site fuel delivery, commercial diesel supply, petrol supply, and 24/7 emergency fuel distribution for generators, commercial fleets, farms, and industrial job sites.",
    url: siteUrl,
    siteName: businessConfig.businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-tanker.jpg",
        width: 1200,
        height: 630,
        alt: `${businessConfig.businessName} - On-Site Diesel & Fuel Delivery Tanker`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessConfig.businessName} | Diesel, Petrol & Emergency Fuel Delivery`,
    description:
      "Dependable on-site fuel delivery, commercial diesel supply, petrol supply, and 24/7 emergency fuel delivery.",
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
