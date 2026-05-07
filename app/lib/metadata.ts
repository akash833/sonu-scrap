import { Metadata } from "next";

const BASE_URL = "https://sonuscrap.com";
const SITE_NAME = "Sonu Scrap Dealer";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
}: GenerateMetadataProps): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Best Scrap Rates & Doorstep Pickup in Delhi`;

  const metaDescription =
    description ||
    "Sonu Scrap Dealer is North Delhi's most trusted buyer for metal, paper, plastic, and e-waste scrap. Instant doorstep pickup and market-leading rates.";

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}