import ElegantHeroSection from "@/components/sections/ElegantHeroSectionClient";
import { ElegantAboutSection } from "@/components/sections/ElegantAboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ChatBot } from "@/components/chat/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ElegantHeroSection />
      <ElegantAboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <ChatBot />
    </div>
  );
}
