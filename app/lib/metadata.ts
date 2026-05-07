import { Metadata } from "next";

const BASE_URL = "https://delhiscrapdealer.com";
const SITE_NAME = "Sonu Scrap Dealer";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string | Array<string>;
  noIndex?: boolean;
}

const DEFAULT_KEYWORDS = [
  "delhi scrap dealer",
  "delhi scrap rates",
  "scrap dealer Delhi",
  "kabadiwala in Delhi",
  "best scrap rates",
  "scrap metal buyer",
  "ac scrap buyer",
  "fridge scrap buyer",
  "washing machine scrap buyer",
  "heater scrap buyer",
  "e-waste recycling Delhi",
  "doorstep scrap pickup",
  "old newspaper buyer",
  "iron scrap price",
  "copper scrap buyer",
  "aluminum scrap price Delhi",
];

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
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
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "Q-xDL7vQl5o3uslf5azs_m0mwpkQz3aoGQANaNbYai4",
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