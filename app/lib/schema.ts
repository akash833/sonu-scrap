import { BUSINESS_INFO } from "../constants";

const BASE_URL = "https://delhiscrapdealer.com";

// Local Business Schema (used globally)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sonu Scrap Dealer",
  "image": `${BASE_URL}/logo.png`,
  "@id": BASE_URL,
  "url": BASE_URL,
  "telephone": BUSINESS_INFO.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address,
    "addressLocality": "Model Town",
    "addressRegion": "Delhi",
    "postalCode": "110009",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.7150923,
    "longitude": 77.1923401
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/delhiscrapdealer",
    "https://www.instagram.com/delhiscrapdealer"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Delhi"
  },
  "hasMap": "https://maps.google.com/?q=28.7150923,77.1923401",
};

// FAQ Schema (used on Home / How It Works)
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

// Service Schema (used on Services page)
export function serviceSchema(services: { name: string; description: string }[]) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sonu Scrap Dealer",
      "url": BASE_URL,
    },
    "areaServed": {
      "@type": "City",
      "name": "Delhi",
    },
  }));
}