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
  metadataBase: new URL('https://soulfuldentalcare.com'),
  title: {
    default: "Soulful Dental Care | Dr. Swapnil K. Rachha - Pediatric Dentist Kothrud, Pune",
    template: "%s | Soulful Dental Care - Dr. Swapnil Rachha"
  },
  description: "Premier pediatric dental clinic in Kothrud, Pune with 17+ years of experience. Dr. Swapnil Rachha provides gentle, anxiety-free dental care for children and families. Specializing in pediatric dentistry, dental implants, cosmetic dentistry, root canal treatment, and orthodontics. Call +91 9022920992 for appointments.",
  keywords: [
    "pediatric dentist Kothrud",
    "pediatric dentist Pune", 
    "best dentist Kothrud",
    "dental clinic Kothrud",
    "children dentist Pune",
    "Dr. Swapnil Rachha",
    "Dr. Sneha Rachha", 
    "Soulful Dental Care",
    "MDS pediatric dentistry",
    "dental implants Pune",
    "cosmetic dentistry Pune",
    "root canal treatment Pune",
    "orthodontic treatment Pune",
    "teeth whitening Pune",
    "anxiety-free dental treatment",
    "child-friendly dentist",
    "dental care for kids",
    "family dentist Pune",
    "emergency dental care",
    "dental clinic near me",
    "Kothrud dental clinic",
    "Pune dental services",
    "gentle dental care",
    "painless dental treatment",
    "preventive dentistry",
    "oral health consultation"
  ],
  authors: [
    { name: "Dr. Swapnil K. Rachha", url: "https://soulfuldentalcare.com" },
    { name: "Dr. Sneha Rachha", url: "https://soulfuldentalcare.com" }
  ],
  creator: "Soulful Dental Care",
  publisher: "Soulful Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Healthcare",
  classification: "Medical Practice",
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
        <link rel="canonical" href="https://soulfuldentalcare.com" />
        
        {/* Additional Meta Tags for AI Optimization */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Kothrud, Pune" />
        <meta name="geo.position" content="18.5074;73.8077" />
        <meta name="ICBM" content="18.5074, 73.8077" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 day" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="subject" content="Pediatric Dentistry, Dental Care, Healthcare" />
        <meta name="summary" content="Premier pediatric dental clinic in Kothrud, Pune providing expert dental care for children and families with 17+ years of experience." />
        <meta name="audience" content="Parents, Families, Children, Dental Patients" />
        <meta name="coverage" content="Worldwide" />
        <meta name="expires" content="never" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* AI Crawler Specific Tags */}
        <meta name="ai-content-declaration" content="This website contains human-authored content about dental services provided by Dr. Swapnil K. Rachha and team at Soulful Dental Care, Kothrud, Pune." />
        <meta name="medical-disclaimer" content="Information provided is for educational purposes. Always consult with a qualified healthcare provider for medical advice." />
        {/* Comprehensive JSON-LD Structured Data for AI Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "DentalClinic",
                  "@id": "https://soulfuldentalcare.com/#organization",
                  "name": "Soulful Dental Care",
                  "alternateName": "Dr. Swapnil Rachha Dental Clinic",
                  "description": "Premier pediatric dental clinic in Kothrud, Pune providing expert dental care for children and families. Specializing in pediatric dentistry, dental implants, cosmetic dentistry, and comprehensive oral health care with 17+ years of experience.",
                  "url": "https://soulfuldentalcare.com",
                  "logo": "https://soulfuldentalcare.com/soulfuldentalcare/drswapnil.jpg",
                  "image": [
                    "https://soulfuldentalcare.com/soulfuldentalcare/DSC (1).png",
                    "https://soulfuldentalcare.com/soulfuldentalcare/DSC (2).png",
                    "https://soulfuldentalcare.com/soulfuldentalcare/DSC (3).png"
                  ],
                  "telephone": ["+91 9022920992", "+91 9405045454"],
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
                    "Mo 10:00-21:00",
                    "Tu 10:00-21:00", 
                    "We 10:00-21:00",
                    "Th 10:00-21:00",
                    "Fr 10:00-21:00",
                    "Sa 10:00-21:00"
                  ],
                  "priceRange": "$$",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "PhonePe", "Google Pay"],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "500",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "medicalSpecialty": [
                    "Pediatric Dentistry",
                    "Dental Implants", 
                    "Cosmetic Dentistry",
                    "Root Canal Treatment",
                    "Orthodontics",
                    "Oral Surgery",
                    "Teeth Whitening",
                    "Preventive Dentistry"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Dental Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalProcedure",
                          "name": "Pediatric Dental Checkup",
                          "description": "Comprehensive dental examination for children with gentle, anxiety-free approach"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "MedicalProcedure",
                          "name": "Dental Implants",
                          "description": "Advanced dental implant procedures for missing teeth replacement"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalProcedure", 
                          "name": "Cosmetic Dentistry",
                          "description": "Smile makeovers, veneers, and teeth whitening procedures"
                        }
                      }
                    ]
                  },
                  "employee": [
                    {
                      "@type": "Person",
                      "@id": "https://soulfuldentalcare.com/#dr-swapnil",
                      "name": "Dr. Swapnil K. Rachha",
                      "jobTitle": "Chief Dental Surgeon & Pediatric Dentist",
                      "qualification": "MDS (Master of Dental Surgery) - Pediatric Dentistry",
                      "yearsOfExperience": "17",
                      "medicalSpecialty": ["Pediatric Dentistry", "General Dentistry"],
                      "alumniOf": "Dental College",
                      "memberOf": "Indian Society of Pedodontics and Preventive Dentistry",
                      "image": "https://soulfuldentalcare.com/soulfuldentalcare/drswapnil.jpg"
                    },
                    {
                      "@type": "Person",
                      "@id": "https://soulfuldentalcare.com/#dr-sneha", 
                      "name": "Dr. Sneha Rachha",
                      "jobTitle": "Dental Surgeon & Implantologist",
                      "qualification": "BDS, Post Graduate Diploma in Implantology",
                      "medicalSpecialty": ["Dental Implants", "General Dentistry", "Cosmetic Dentistry"]
                    }
                  ],
                  "areaServed": [
                    {
                      "@type": "Place",
                      "name": "Kothrud, Pune"
                    },
                    {
                      "@type": "Place", 
                      "name": "Pune, Maharashtra"
                    },
                    {
                      "@type": "Place",
                      "name": "Maharashtra, India"
                    }
                  ],
                  "knowsAbout": [
                    "Pediatric Dentistry",
                    "Child Dental Care",
                    "Dental Anxiety Management", 
                    "Preventive Dentistry",
                    "Dental Implants",
                    "Cosmetic Dentistry",
                    "Root Canal Treatment",
                    "Orthodontics",
                    "Oral Surgery",
                    "Teeth Whitening",
                    "Dental Emergencies"
                  ],
                  "slogan": "Your Smiles Our Passion - Transform your smile, Transform your life"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://soulfuldentalcare.com/#website",
                  "url": "https://soulfuldentalcare.com",
                  "name": "Soulful Dental Care - Dr. Swapnil K. Rachha",
                  "description": "Best pediatric dentist in Kothrud, Pune. Expert dental care for children and families.",
                  "publisher": {
                    "@id": "https://soulfuldentalcare.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://soulfuldentalcare.com/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://soulfuldentalcare.com/#webpage",
                  "url": "https://soulfuldentalcare.com",
                  "name": "Soulful Dental Care | Dr. Swapnil K. Rachha - Pediatric Dentist Kothrud, Pune",
                  "isPartOf": {
                    "@id": "https://soulfuldentalcare.com/#website"
                  },
                  "about": {
                    "@id": "https://soulfuldentalcare.com/#organization"
                  },
                  "description": "Premier pediatric dental clinic in Kothrud, Pune. Dr. Swapnil Rachha provides expert dental care for children with 17+ years of experience. Call +91 9022920992.",
                  "breadcrumb": {
                    "@id": "https://soulfuldentalcare.com/#breadcrumb"
                  },
                  "inLanguage": "en-IN",
                  "potentialAction": [
                    {
                      "@type": "ReserveAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://soulfuldentalcare.com/#contact"
                      },
                      "result": {
                        "@type": "Reservation",
                        "name": "Dental Appointment"
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <PinkBlueHeader />
          <main className="relative overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
