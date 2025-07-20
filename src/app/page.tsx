import { PinkBlueHeroSection } from "@/components/sections/PinkBlueHeroSection";
import { PinkBlueAboutSection } from "@/components/sections/PinkBlueAboutSection";
import { SoulfulServicesSection } from "@/components/sections/SoulfulServicesSection";
import { SoulfulTestimonialsSection } from "@/components/sections/SoulfulTestimonialsSection";
import { SoulfulGallerySection } from "@/components/sections/SoulfulGallerySection";
import { SoulfulContactSection } from "@/components/sections/SoulfulContactSection";
import { ChatBot } from "@/components/chat/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PinkBlueHeroSection />
      <PinkBlueAboutSection />
      <SoulfulServicesSection />
      <SoulfulTestimonialsSection />
      <SoulfulGallerySection />
      <SoulfulContactSection />
      <ChatBot />
    </div>
  );
}
