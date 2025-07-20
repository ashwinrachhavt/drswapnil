import type { Metadata } from "next";
import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import { PinkBlueHeader } from "@/components/layout/PinkBlueHeader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const crimson = Crimson_Text({ 
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soulful Dental Care | Dr. Swapnil K. Rachha - Pediatric Dentist Kothrud, Pune",
  description: "Soulful Dental Care - Expert pediatric dentistry with 17+ years of experience. Dr. Swapnil Rachha provides gentle, compassionate dental care for children in Kothrud, Pune. Specializing in pediatric, implant and cosmetic dentistry.",
  keywords: [
    "Soulful Dental Care",
    "pediatric dentist Kothrud",
    "pediatric dentist Pune",
    "children dentist Pune",
    "dental care for kids",
    "Dr. Swapnil Rachha",
    "Dr. Sneha Rachha",
    "MDS pediatric dentistry",
    "dental implants Pune",
    "cosmetic dentistry Pune",
    "root canal treatment Pune",
    "orthodontic treatment Pune",
    "anxiety-free dental treatment",
    "best dentist Kothrud",
    "dental clinic Kothrud"
  ],
  authors: [{ name: "Dr. Swapnil K. Rachha" }],
  creator: "Soulful Dental Care",
  openGraph: {
    title: "Soulful Dental Care | Dr. Swapnil K. Rachha - Pediatric Dentist",
    description: "Your Smiles Our Passion - Transform your smile, Transform your life. Expert pediatric dentistry with 17+ years of experience in Kothrud, Pune.",
    url: "https://soulfuldentalcare.com",
    siteName: "Soulful Dental Care",
    images: [
      {
        url: "/soulfuldentalcare/clinic-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Soulful Dental Care - Dr. Swapnil K. Rachha Pediatric Dentist Kothrud Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulful Dental Care | Expert Pediatric Dentist Kothrud, Pune",
    description: "Your Smiles Our Passion - Creating beautiful smiles with 17+ years of expertise",
    images: ["/soulfuldentalcare/clinic-hero.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Kothrud, Pune",
    "geo.position": "18.5074;73.8077",
    "ICBM": "18.5074, 73.8077",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crimson.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#E91E63" />
        <meta name="msapplication-TileColor" content="#E91E63" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentalClinic",
              "name": "Soulful Dental Care",
              "description": "Expert pediatric dentistry with 17+ years of experience",
              "url": "https://soulfuldentalcare.com",
              "telephone": "+91 9022920992",
              "email": "swapnil.rachha@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No.308, 3rd Floor, Success Square, Above Tanishq Showroom, Karve Putala Chowk, Karve Road",
                "addressLocality": "Kothrud",
                "addressRegion": "Maharashtra",
                "postalCode": "411038",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5074",
                "longitude": "73.8077"
              },
              "openingHours": [
                "Mo-Fr 09:00-14:30,17:00-21:00",
                "Sa 09:00-14:30,16:00-21:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500+"
              },
              "medicalSpecialty": ["Pediatric Dentistry", "Dental Implants", "Cosmetic Dentistry"],
              "physician": {
                "@type": "Person",
                "name": "Dr. Swapnil K. Rachha",
                "jobTitle": "Pediatric Dentist",
                "medicalSpecialty": "Pediatric Dentistry"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <PinkBlueHeader />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
