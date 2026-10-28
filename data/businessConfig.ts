/**
 * ============================================================================
 * BUSINESS CONFIGURATION FILE
 * ============================================================================
 * 
 * Replace the placeholder values below with your actual business details.
 * Every section of the website dynamically reads from this file.
 * 
 * Instructions:
 * 1. Owner Name: Replace "Marcus Vance" with your full name.
 * 2. Business Name: Replace "Vance Diesel Delivery" with your registered company name.
 * 3. Phone Number: Replace with your actual phone number in international format.
 * 4. WhatsApp Number: Replace with your phone number without plus signs or spaces (digits only).
 * 5. Address & Service Area: Update with your exact depot location and service radius.
 * 6. Business Hours: Update your operational hours.
 * 7. Google Maps: Paste your Google Maps direct link or embed URL.
 * 8. Photos: Place your profile picture in public/images/owner-profile.jpg (or update the path here).
 */

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  owner: {
    name: string;
    title: string;
    experienceYears: string;
    photo: string;
    shortBio: string;
    commitmentStatement: string;
  };
  contact: {
    displayPhone: string;
    rawPhone: string; // for tel: links (e.g. +15551234567)
    displayWhatsApp: string;
    rawWhatsApp: string; // digits only for https://wa.me/15551234567
    email: string;
    serviceArea: string;
    physicalAddress: string;
    businessHours: string;
    googleMapsUrl: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  services: {
    id: string;
    title: string;
    description: string;
    details: string[];
    image: string;
    iconName: 'Truck' | 'Zap' | 'Tractor' | 'Factory';
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    iconName: 'UserCheck' | 'ShieldCheck' | 'BadgeDollarSign' | 'MessageSquare' | 'HeartHandshake';
  }[];
}

export const businessConfig: BusinessConfig = {
  // Replace with your official business trade name
  businessName: "Titan Diesel Logistics",
  tagline: "Reliable On-Site Commercial & Industrial Diesel Fuel Delivery",

  owner: {
    // EDIT HERE: Owner full name
    name: "Marcus Vance",
    // EDIT HERE: Owner title or role
    title: "Owner & Operations Director",
    // EDIT HERE: Number of years in fuel delivery / logistics
    experienceYears: "15+ Years",
    // EDIT HERE: Path to owner photo in /public folder
    photo: "/images/owner-profile.jpg",
    // EDIT HERE: Short introduction about the owner
    shortBio:
      "With over a decade and a half in commercial fuel logistics, Marcus Vance established Titan Diesel Logistics to deliver dependable, owner-supervised diesel fuel distribution directly to job sites, backup power generators, and agricultural operations.",
    // EDIT HERE: Owner's direct pledge & commitment to customers
    commitmentStatement:
      "When you call Titan Diesel Logistics, you speak directly with me. My priority is ensuring your generators never run dry, your heavy machinery stays fueled, and your operations experience zero unnecessary downtime through transparent communication and dependable service.",
  },

  contact: {
    // EDIT HERE: Phone number as displayed on the website
    displayPhone: "+1 (800) 555-3437",
    // EDIT HERE: Raw phone number for tel: link (no spaces or hyphens)
    rawPhone: "+18005553437",
    // EDIT HERE: WhatsApp display text
    displayWhatsApp: "+1 (800) 555-3437",
    // EDIT HERE: WhatsApp raw international digits (no +, no dashes, no spaces)
    rawWhatsApp: "18005553437",
    // EDIT HERE: Official business contact email
    email: "contact@titandiesellogistics.com",
    // EDIT HERE: Your service area coverage
    serviceArea: "Greater Metro Area, Industrial Corridors & Surrounding Regional Counties",
    // EDIT HERE: Physical depot or dispatch headquarters
    physicalAddress: "450 Industrial Parkway, Fuel Distribution District, Suite 100",
    // EDIT HERE: Operating hours
    businessHours: "Monday – Saturday: 6:00 AM – 7:00 PM | Sunday: On-Call Support",
    // EDIT HERE: Google Maps location link (Paste your actual Google Maps search or share link)
    googleMapsUrl: "https://maps.google.com/?q=Industrial+Parkway+Fuel+Depot",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: "diesel-supply",
      title: "Diesel Supply and Delivery",
      description: "Reliable diesel supply for eligible customers and businesses.",
      details: [
        "Direct delivery to fleet vehicles, yards, and on-site fuel tanks",
        "Ultra-low sulfur commercial diesel quality",
        "Scheduled recurring or flexible dispatch arrangements"
      ],
      image: "/images/service-diesel.jpg",
      iconName: "Truck",
    },
    {
      id: "generator-fuel",
      title: "Generator Fuel Supply",
      description: "Fuel supply for generators and backup power systems.",
      details: [
        "Dedicated refueling for critical backup power facilities",
        "Scheduled generator tank top-ups prior to storm or high-load seasons",
        "Safe spill-prevention transfer protocols"
      ],
      image: "/images/service-generator.jpg",
      iconName: "Zap",
    },
    {
      id: "agricultural-fuel",
      title: "Agricultural Fuel Supply",
      description: "Diesel delivery for farms and agricultural machinery.",
      details: [
        "Direct-to-field delivery for tractors, combines, and irrigation pumps",
        "Support during peak planting and harvest periods",
        "Bulk farm tank storage refills"
      ],
      image: "/images/service-agriculture.jpg",
      iconName: "Tractor",
    },
    {
      id: "industrial-bulk",
      title: "Industrial and Bulk Fuel Supply",
      description: "Fuel supply for construction sites and industrial operations, subject to availability and applicable requirements.",
      details: [
        "Heavy machinery, earthmoving equipment, and plant machinery fueling",
        "Job site bulk skid tank deliveries",
        "Rigorous adherence to on-site safety and environmental guidelines"
      ],
      image: "/images/service-industrial.jpg",
      iconName: "Factory",
    },
  ],

  whyChooseUs: [
    {
      title: "Direct Communication with the Owner",
      description:
        "Speak directly with the business owner for scheduling, questions, and order logistics without waiting on call centers or automated menus.",
      iconName: "UserCheck",
    },
    {
      title: "Reliable and Professional Service",
      description:
        "Every dispatch is executed with careful attention to safety protocols, clean handling, and professional equipment standards.",
      iconName: "ShieldCheck",
    },
    {
      title: "Clear Communication About Pricing",
      description:
        "Upfront and straightforward quotes based on current fuel market benchmarks, volume, and site location with zero hidden fees.",
      iconName: "BadgeDollarSign",
    },
    {
      title: "Convenient Contact Options",
      description:
        "Reach out immediately via direct phone call, quick WhatsApp message, or direct map navigation to our dispatch location.",
      iconName: "MessageSquare",
    },
    {
      title: "Customer-Focused Service",
      description:
        "We prioritize building dependable long-term relationships with businesses and operators through respectful, attentive service.",
      iconName: "HeartHandshake",
    },
  ],
};
