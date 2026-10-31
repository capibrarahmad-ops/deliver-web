import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HN Fuel Supply - Professional Fuel Delivery and Diesel Supply",
    short_name: "HN Fuel Supply",
    description:
      "HN Fuel Supply is a trusted fuel supplier providing dependable diesel delivery, on-site fuel delivery services, and 24/7 emergency fuel supply for fleets, machinery & generators.",
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

