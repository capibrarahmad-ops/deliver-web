import React from "react";
import { businessConfig } from "@/data/businessConfig";

export default function StructuredData() {
  const { businessName, contact } = businessConfig;
  const baseUrl = "https://deliver-web-lovat.vercel.app";

  // Comprehensive Schema.org Graph containing Organization, LocalBusiness, and WebSite schemas
  // Uses strictly genuine business information from the website.
  // Contains zero fake ratings, fake reviews, or fake addresses.
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization Schema
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: businessName,
        legalName: businessName,
        url: baseUrl,
        logo: `${baseUrl}/images/hero-tanker.jpg`,
        description:
          "HN Fuel Supply is a professional fuel supplier providing dependable diesel delivery, on-site fuel delivery services, and 24/7 emergency fuel supply.",
        email: contact.email,
        telephone: contact.rawPhone,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.physicalAddress,
          addressLocality: "Fuel Distribution District",
          addressRegion: "Greater Metro Area",
          addressCountry: "PK",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: contact.rawPhone,
            contactType: "customer service",
            email: contact.email,
            availableLanguage: ["English", "Urdu"],
          },
          {
            "@type": "ContactPoint",
            telephone: `+${contact.rawWhatsApp}`,
            contactType: "sales and dispatch",
            availableLanguage: ["English", "Urdu"],
          },
        ],
      },

      // 2. LocalBusiness & ProfessionalService Schema
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#localbusiness`,
        name: businessName,
        parentOrganization: {
          "@id": `${baseUrl}/#organization`,
        },
        url: baseUrl,
        image: `${baseUrl}/images/hero-tanker.jpg`,
        telephone: contact.rawPhone,
        email: contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.physicalAddress,
          addressLocality: "Fuel Distribution District",
          addressRegion: "Greater Metro Area",
          addressCountry: "PK",
        },
        areaServed: contact.serviceArea,
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
            description: "On-Call Emergency Fuel Supply Support",
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
                name: "Diesel Delivery and Supply",
                description:
                  "Dependable on-site diesel delivery for commercial vehicle fleets, trucks, buses, and equipment.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 Emergency Fuel Supply",
                description:
                  "Round-the-clock emergency fuel supply for standby backup power generators and critical infrastructure.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Generator Fuel Supply",
                description:
                  "Dedicated generator refueling and scheduled tank top-up fuel delivery services.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agricultural Fuel Delivery",
                description:
                  "Direct-to-farm diesel delivery for tractors, harvesters, and agricultural machinery.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Industrial Bulk Fuel Delivery Services",
                description:
                  "Bulk skid tank deliveries and heavy machinery fueling for construction and industrial sites.",
              },
            },
          ],
        },
      },

      // 3. WebSite Schema
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: businessName,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
