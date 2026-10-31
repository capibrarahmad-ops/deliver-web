import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HN Fuel Supply - On-Site Diesel & Fuel Delivery",
    short_name: "HN Fuel Supply",
    description:
      "Reliable on-site fuel delivery, commercial diesel supply, petrol supply, and 24/7 emergency fuel delivery for vehicles, generators, machinery & farms.",
    start_url: "/",
    display: "standalone",
    background_color: "#060b14",
    theme_color: "#060b14",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

