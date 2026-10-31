import React from "react";
import { businessConfig } from "@/data/businessConfig";

export default function StructuredData() {
  const { businessName, contact } = businessConfig;
  const baseUrl = "https://deliver-web-lovat.vercel.app";

  // 1. Local Business & Professional Fuel Delivery Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#organization`,
    name: businessName,
    legalName: businessName,
    alternateName: [
      "HN Fuel Delivery",
      "HN Fuel Supply Pakistan",
      "HN Diesel & Petrol Delivery",
      "HN Fuel",
    ],
    url: baseUrl,
    logo: `${baseUrl}/images/hero-tanker.jpg`,
    image: [
      `${baseUrl}/images/hero-tanker.jpg`,
      `${baseUrl}/images/service-diesel.jpg`,
      `${baseUrl}/images/service-generator.jpg`,
      `${baseUrl}/images/service-agriculture.jpg`,
      `${baseUrl}/images/service-industrial.jpg`,
    ],
    description:
      "HN Fuel Supply provides dependable on-site fuel delivery, commercial diesel supply, petrol supply, and 24/7 emergency fuel delivery for vehicles, generators, machinery, farms, and industrial operations.",
    telephone: contact.rawPhone,
    email: contact.email,
    priceRange: "$$",
    paymentAccepted: "Cash, Bank Transfer",
    currenciesAccepted: "PKR, USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.physicalAddress,
      addressLocality: "Greater Metro Area",
      addressRegion: "Industrial Corridors",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.6844",
      longitude: "73.0479",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: contact.serviceArea,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.rawPhone,
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: `+${contact.rawWhatsApp}`,
        contactType: "sales & dispatch",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "06:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 On-Call Emergency Fuel Delivery Support",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HN Fuel Supply Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diesel Supply and Delivery",
            description:
              "Reliable on-site diesel supply for cars, trucks, buses, commercial fleets, and heavy equipment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Petrol Supply and Delivery",
            description:
              "Direct on-site petrol supply and gasoline delivery for compatible vehicles, machinery, and equipment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Emergency Fuel Delivery",
            description:
              "Round-the-clock emergency diesel and fuel delivery for backup generators, hospitals, data centers, and critical operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generator Fuel Supply",
            description:
              "Specialized refueling and tank top-ups for commercial and industrial standby power generators.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agricultural Fuel Supply",
            description:
              "Direct-to-field bulk diesel fuel delivery for tractors, combines, and irrigation pumps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial and Bulk Fuel Supply",
            description:
              "Heavy machinery, earthmoving equipment, and on-site bulk storage tank diesel delivery.",
          },
        },
      ],
    },
  };

  // 2. WebSite Schema (gives Google explicit site name & canonical identity)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: businessName,
    alternateName: "hnfuelsupply.com",
    description:
      "Reliable on-site fuel delivery, commercial diesel supply, petrol supply, and emergency fuel delivery by HN Fuel Supply.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  // 3. FAQ Schema for Rich Snippets in Google SERP
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I order fuel delivery from HN Fuel Supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can order diesel or fuel delivery directly by calling ${contact.displayPhone} or by sending a message on WhatsApp at ${contact.displayWhatsApp}. HN Fuel Supply offers direct communication with free delivery straight to your location.`,
        },
      },
      {
        "@type": "Question",
        name: "Does HN Fuel Supply provide 24/7 emergency fuel delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, HN Fuel Supply provides 24/7 emergency fuel delivery services for backup generators, commercial facilities, critical infrastructure, and fleet operations to prevent downtime.",
        },
      },
      {
        "@type": "Question",
        name: "What fuel types and machinery does HN Fuel Supply service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HN Fuel Supply delivers high-grade commercial diesel and petrol fuel for cars, trucks, buses, tractors, construction machinery, and standby backup generators.",
        },
      },
      {
        "@type": "Question",
        name: "What areas are served by HN Fuel Supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `HN Fuel Supply delivers across ${contact.serviceArea}, providing direct on-site refueling to commercial yards, farm fields, and industrial facilities.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
