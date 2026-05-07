import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sonu Scrap Dealer",
    short_name: "delhiscrapdealer",
    description: "North Delhi's most trusted scrap buyer. Get instant cash for your metal, paper, plastic, and e-waste.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#166534", // brand-600 green
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // User should add more icons (192x192, 512x512) for full PWA support
    ],
  };
}
