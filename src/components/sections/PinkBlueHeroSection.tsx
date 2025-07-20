"use client";

import { useState, useEffect } from "react";
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
  Star,
  Phone,
  MapPin
} from "lucide-react";

const floatingElements = [
  { icon: Sparkles, delay: 0, position: "top-20 left-20", color: "text-primary-pink" },
  { icon: Star, delay: 1, position: "top-40 right-32", color: "text-primary-blue" },
  { icon: Heart, delay: 2, position: "bottom-32 left-32", color: "text-accent-teal" },
  { icon: Award, delay: 3, position: "bottom-20 right-20", color: "text-accent-purple" },
];

const achievements = [
  { number: "17+", label: "Years Experience", icon: Award, gradient: "from-primary-pink to-secondary-pink" },
  { number: "5000+", label: "Happy Families", icon: Users, gradient: "from-primary-blue to-secondary-blue" },
  { number: "4.9", label: "Patient Rating", icon: Star, gradient: "from-accent-teal to-accent-purple" },
];

export function PinkBlueHeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [randomDots, setRandomDots] = useState<Array<{left: string, top: string, duration: number, delay: number}>>([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions only on client side to avoid hydration mismatch
    const dots = [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setRandomDots(dots);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        
        {/* Floating Decorative Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} ${element.color} opacity-20`}
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
          {isClient && randomDots.map((dot, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary-pink' : 'bg-primary-blue'}`}
              style={{
                left: dot.left,
                top: dot.top,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
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
              <Badge className="bg-soft-pink text-primary-pink border-primary-pink px-6 py-2 text-sm font-medium">
                🦷 Pediatric Dental Specialist • MDS Qualified
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
                Your Smiles
                <span className="block text-elegant font-display">Our Passion</span>
                <span className="block text-primary-blue text-4xl lg:text-5xl">
                  Creating Beautiful Smiles
                </span>
              </h1>
              
              <p className="body-large text-warm-gray max-w-xl leading-relaxed">
                Dr. Swapnil K. Rachha brings 17+ years of expertise in pediatric dentistry, 
                transforming smiles and building confidence with gentle, compassionate care.
              </p>
            </motion.div>

            {/* Professional Quote */}
            <motion.div
              className="elegant-card p-8 border-l-4 border-primary-pink"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <blockquote className="font-accent text-lg italic text-charcoal leading-relaxed">
                "A reason to happy smile is just an appointment away. 
                Transform your smile - Transform your life."
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-pink to-primary-blue"></div>
                <span className="text-charcoal font-semibold">Dr. Swapnil K. Rachha</span>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="elegant-card p-4 hover:border-primary-pink transition-colors">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-pink" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Call Us</p>
                    <p className="text-xs text-warm-gray">+91 9022920992</p>
                  </div>
                </div>
              </div>
              
              <div className="elegant-card p-4 hover:border-primary-blue transition-colors">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-blue" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Location</p>
                    <p className="text-xs text-warm-gray">Kothrud, Pune</p>
                  </div>
                </div>
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
                className="btn-elegant group animate-pulse-pink"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToAbout}
                className="btn-outline-elegant"
              >
                Learn More About Us
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
                  <div className="elegant-card p-6 group hover:border-primary-pink">
                    <div className={`bg-gradient-to-r ${stat.gradient} rounded-full p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="heading-3 text-charcoal mb-1">{stat.number}</div>
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
                <div className="aspect-[4/5] bg-gradient-to-br from-soft-pink to-soft-blue rounded-2xl overflow-hidden">
                  {/* Professional Portrait */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src="/soulfuldentalcare/drswapnil.jpg" 
                      alt="Dr. Swapnil K. Rachha"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-full h-full items-center justify-center text-center">
                      <div>
                        <div className="w-32 h-32 bg-gradient-to-r from-primary-pink to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">SR</span>
                        </div>
                        <p className="text-warm-gray font-medium">Dr. Swapnil Rachha</p>
                        <p className="text-primary-pink text-sm">Pediatric Dentist</p>
                      </div>
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
                  <Award className="h-8 w-8 text-primary-pink mx-auto mb-2" />
                  <div className="text-sm font-semibold text-charcoal">MDS Certified</div>
                  <div className="text-xs text-warm-gray">Pediatric Expert</div>
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
                  <Star className="h-8 w-8 text-primary-blue mx-auto mb-2" />
                  <div className="text-sm font-semibold text-charcoal">4.9★ Rating</div>
                  <div className="text-xs text-warm-gray">5000+ Patients</div>
                </div>
              </motion.div>

              {/* Elegant Background Shapes */}
              <motion.div
                className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-primary-pink opacity-10 z-0"
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
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary-blue opacity-10 z-0"
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

        {/* Scroll Indicator */}
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
            <span className="text-sm font-medium group-hover:text-primary-pink transition-colors">
              Discover More
            </span>
            <div className="w-6 h-10 border-2 border-primary-pink rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-primary-pink to-primary-blue rounded-full mt-2"
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

export default PinkBlueHeroSection; 