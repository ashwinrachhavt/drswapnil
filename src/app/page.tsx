"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Gallery from "@/app/gallery/page";
import HeronSection from "@/components/HeronSection";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-gray-800 text-gray-100">
        <div className="flex items-center justify-center mb-4">
          <Avatar className="mr-4">
            <AvatarImage src="/path/to/your/image.jpg" alt="Dr Swapnil Rachha" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <motion.h1
            className="text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dr Swapnil Rachha
          </motion.h1>
        </div>
        <p className="text-xl mb-8 text-center max-w-3xl">
          Welcome to the personal website of Dr. Swapnil Rachha, a dedicated and passionate Pediatric Dentist based in Pune, India.
          Explore my journey, achievements, and contributions to the field of dentistry.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-xl rounded-full">
          Book an Appointment
        </Button>
        <div className="mt-12 flex space-x-6">
          <Button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            About
          </Button>
          <Button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            Services
          </Button>
          <Button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
            Gallery
          </Button>
          <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact
          </Button>
        </div>
      </div>

      {/* Heron Section */}
      <HeronSection />
      <div id="about" className="py-16 bg-gray-800">
        <About />
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-gray-900">
        <Services />
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-16 bg-gray-800">
        <Gallery />
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-900">
        <Contact />
      </div>
    </main>
  );
}
