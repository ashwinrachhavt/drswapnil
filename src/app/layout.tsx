import type { Metadata } from "next";
import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import { ElegantHeader } from "@/components/layout/ElegantHeader";

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
  title: "Dr. Swapnil K. Rachha - Pediatric Dentist | Soulful Dental Care",
  description: "Expert pediatric dentistry with 17+ years of experience. Creating beautiful smiles for children in Pune with gentle, anxiety-free dental care.",
  keywords: [
    "pediatric dentist",
    "children dentist Pune",
    "dental care for kids",
    "Dr. Swapnil Rachha",
    "Soulful Dental Care",
    "MDS pediatric dentistry",
    "anxiety-free dental treatment"
  ],
  authors: [{ name: "Dr. Swapnil K. Rachha" }],
  creator: "Dr. Swapnil K. Rachha",
  openGraph: {
    title: "Dr. Swapnil K. Rachha - Expert Pediatric Dentist",
    description: "Creating beautiful smiles for children with 17+ years of expertise in pediatric dentistry",
    url: "https://drswapnilrachha.com",
    siteName: "Dr. Swapnil Rachha",
    images: [
      {
        url: "/soulfuldentalcare/drswapnil.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Swapnil K. Rachha - Pediatric Dentist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Swapnil K. Rachha - Expert Pediatric Dentist",
    description: "Creating beautiful smiles for children with 17+ years of expertise",
    images: ["/soulfuldentalcare/drswapnil.jpg"],
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
        <meta name="theme-color" content="#1B2951" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-cream">
          <ElegantHeader />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
