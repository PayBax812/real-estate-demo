import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Properties | Premium Real Estate Consultant in Kothrud, Pune",
  description: "Elite Properties is the top-rated luxury real estate consultant in Pune. Specializing in verified residential flats, commercial properties, and investment advisory in Kothrud, Baner, Hinjewadi, and Bavdhan for families & NRI buyers.",
  keywords: "Real Estate Consultant Pune, Property Dealer Pune, Luxury Flats Pune, Buy Property Pune, Commercial Property Pune, Investment Property Pune, Real Estate Agent Pune, Kothrud Real Estate, Baner Real Estate",
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Elite Properties | Premium Real Estate Consultant in Kothrud, Pune",
    description: "Discover verified luxury residential & commercial properties in Pune with Pune's top real estate boutique consultancy.",
    url: "https://eliteproperties.in",
    siteName: "Elite Properties Pune",
    images: [
      {
        url: "https://eliteproperties.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Properties Real Estate Consultant Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Properties | Premium Real Estate Consultant in Kothrud, Pune",
    description: "Discover premium real estate consulting with expert legal, RERA verification and direct-from-builder options.",
    images: ["https://eliteproperties.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business Schema JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": COMPANY.fullName,
    "image": "https://eliteproperties.in/logo.png",
    "@id": "https://eliteproperties.in/#agent",
    "url": "https://eliteproperties.in",
    "telephone": COMPANY.phone,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 12, 2nd Floor, Kapil Towers, Kothrud",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411038",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5074,
      "longitude": 73.80776
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": COMPANY.googleRating,
      "reviewCount": COMPANY.googleReviews
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="bg-primary text-white antialiased font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
