"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Heart } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home", description: "Welcome" },
  { name: "About", href: "#about", description: "Our Story" },
  { name: "Services", href: "#services", description: "What We Do" },
  { name: "Gallery", href: "#gallery", description: "Our Clinic" },
  { name: "Contact", href: "#contact", description: "Get in Touch" },
];

export function PinkBlueHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-primary-pink to-primary-blue text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9022920992</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Mon-Sat: 9AM-9PM, Sun: 10AM-6PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">ig</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">yt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "elegant-nav shadow-luxury"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="elegant-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Heart className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                </motion.div>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary-pink opacity-20 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              <div>
                <h1 className="font-display text-xl lg:text-2xl font-semibold text-sophisticated">
                  Soulful Dental Care
                </h1>
                <p className="text-sm lg:text-base text-primary-pink font-medium">
                  Dr. Swapnil Rachha
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Button
                    variant="ghost"
                    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-primary-pink bg-soft-pink"
                        : "text-charcoal hover:text-primary-pink hover:bg-soft-pink"
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active Indicator */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-pink to-primary-blue rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-primary-pink opacity-0 group-hover:opacity-10 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="btn-outline-elegant"
                onClick={() => window.open('tel:+919022920992', '_blank')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              
              <Button
                className="btn-elegant animate-pulse-pink"
                onClick={() => scrollToSection("#contact")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-charcoal" />
                ) : (
                  <Menu className="h-6 w-6 text-charcoal" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-soft-white shadow-luxury border-t border-primary-pink/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="elegant-container py-8">
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? "text-primary-pink bg-soft-pink"
                            : "text-charcoal hover:text-primary-pink hover:bg-soft-pink"
                        }`}
                        onClick={() => scrollToSection(item.href)}
                      >
                        <div className="text-left">
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-warm-gray">{item.description}</div>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile CTA Buttons */}
                <motion.div
                  className="flex flex-col space-y-4 mt-8 pt-8 border-t border-primary-pink/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Button
                    className="btn-elegant w-full"
                    onClick={() => {
                      scrollToSection("#contact");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="btn-outline-elegant w-full"
                    onClick={() => {
                      window.open('tel:+919022920992', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call +91 9022920992
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-30 lg:h-34"></div>
    </>
  );
}

export default PinkBlueHeader; 