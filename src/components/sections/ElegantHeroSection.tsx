"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Heart,
  Star
} from "lucide-react";

const floatingElements = [
  { icon: Sparkles, delay: 0, position: "top-20 left-20" },
  { icon: Star, delay: 1, position: "top-40 right-32" },
  { icon: Heart, delay: 2, position: "bottom-32 left-32" },
  { icon: Award, delay: 3, position: "bottom-20 right-20" },
];

const achievements = [
  { number: "17+", label: "Years Experience", icon: Award },
  { number: "5000+", label: "Happy Families", icon: Users },
  { number: "4.9", label: "Patient Rating", icon: Star },
];

export function ElegantHeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-sage-green to-warm-gold opacity-5"></div>
        
        {/* Floating Decorative Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-warm-gold opacity-20`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.2, 
              scale: 1, 
              rotate: 0,
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 2,
              delay: element.delay,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <element.icon className="w-8 h-8 lg:w-12 lg:h-12" />
          </motion.div>
        ))}
        
        {/* Elegant Dots Pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-warm-gold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="elegant-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-light-gold text-navy border-warm-gold px-6 py-2 text-sm font-medium">
                Pediatric Dental Specialist • MDS Qualified
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="display-1 text-sophisticated">
                Crafting
                <span className="block text-elegant font-display">Beautiful Smiles</span>
                <span className="block text-sage-green text-4xl lg:text-5xl">
                  with Gentle Care
                </span>
              </h1>
              
              <p className="body-large text-warm-gray max-w-xl leading-relaxed">
                Dr. Swapnil K. Rachha brings 17+ years of expertise in pediatric dentistry, 
                creating positive dental experiences that last a lifetime.
              </p>
            </motion.div>

            {/* Professional Quote */}
            <motion.div
              className="elegant-card p-8 border-l-4 border-warm-gold"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <blockquote className="font-accent text-lg italic text-charcoal leading-relaxed">
                "Every child deserves a dental experience that builds confidence, 
                not fear. My mission is to create lasting positive memories."
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-warm-gold"></div>
                <span className="text-navy font-semibold">Dr. Swapnil K. Rachha</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                onClick={scrollToContact}
                className="btn-elegant group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToAbout}
                className="btn-outline-elegant"
              >
                Discover My Journey
              </Button>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="elegant-card p-6 group hover:border-warm-gold">
                    <div className="bg-light-gold rounded-full p-3 w-fit mx-auto mb-3 group-hover:bg-warm-gold transition-colors">
                      <stat.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <div className="heading-3 text-navy mb-1">{stat.number}</div>
                    <div className="text-warm-gray text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait & Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Main Portrait Card */}
              <motion.div
                className="premium-card p-2 relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-light-gold to-cream rounded-2xl overflow-hidden">
                  {/* Professional Portrait */}
                  <div className="w-full h-full flex items-center justify-center bg-light-gold">
                    <img 
                      src="/soulfuldentalcare/drswapnil.jpg" 
                      alt="Dr. Swapnil K. Rachha"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="text-center">
                      <div className="w-32 h-32 bg-warm-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">SR</span>
                      </div>
                      <p className="text-warm-gray font-medium">Professional Portrait</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Credentials */}
              <motion.div
                className="absolute -top-6 -right-6 luxury-card p-4 z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <div className="text-center">
                  <Award className="h-8 w-8 text-warm-gold mx-auto mb-2" />
                  <div className="text-sm font-semibold text-navy">MDS Certified</div>
                  <div className="text-xs text-warm-gray">Pediatric Specialist</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 luxury-card p-4 z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <div className="text-center">
                  <Star className="h-8 w-8 text-warm-gold mx-auto mb-2" />
                  <div className="text-sm font-semibold text-navy">4.9★ Rating</div>
                  <div className="text-xs text-warm-gray">5000+ Patients</div>
                </div>
              </motion.div>

              {/* Elegant Background Shapes */}
              <motion.div
                className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-sage-green opacity-10 z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              <motion.div
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-warm-gold opacity-10 z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-3 text-warm-gray cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={scrollToAbout}
          >
            <span className="text-sm font-medium group-hover:text-warm-gold transition-colors">
              Discover More
            </span>
            <div className="w-6 h-10 border-2 border-warm-gold rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-warm-gold rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ElegantHeroSection; 