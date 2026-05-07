import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";
import { breadcrumbSchema } from "../lib/schema";
import Contact from "./Contact";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us - Schedule Your Scrap Pickup Today",
  description: "Ready to recycle? Contact Sonu Scrap Dealer via Call, WhatsApp, or our online form. Serving Model Town and North Delhi with fast response and instant payments.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://sonuscrap.com" },
              { name: "Contact", url: "https://sonuscrap.com/contact" },
            ])
          ),
        }}
      />
      <Contact />
    </>
  );
}