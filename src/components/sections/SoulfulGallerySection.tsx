"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Video, 
  MapPin, 
  Clock, 
  Star, 
  Heart,
  Award,
  Shield,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "DSC (1).png", "DSC (2).png", "DSC (3).png", "DSC (4).png", "DSC (5).png", "DSC (6).png", "DSC (7).png", "DSC (8).png", "DSC (9).png", "DSC (10).png", "DSC (11).png", "DSC (12).png", "DSC (13).png", "DSC (14).png", "DSC (15).png", "DSC (16).png", "DSC (17).png", "DSC (18).png", "DSC (19).png", "DSC (20).png", "DSC (21).png", "DSC (22).png", "DSC (23).png", "DSC (24).png", "DSC (25).png", "DSC (26).png", "DSC (27).png", "DSC (28).png", "DSC (29).png", "DSC (30).png", "DSC (31).png", "DSC (32).png", "DSC (33).png", "DSC (34).png", "DSC (35).png", "DSC (36).png", "DSC (37).png", "DSC (38).png", "DSC (39).png", "DSC (40).png", "DSC (41).png", "DSC (42).png", "DSC (43).png", "DSC (44).png", "DSC (45).png"
];

const clinicFeatures = [
  {
    icon: Shield,
    title: "Advanced Sterilization",
    description: "International standards of hygiene and sterilization protocols"
  },
  {
    icon: Heart,
    title: "Child-Friendly Design", 
    description: "Colorful, welcoming environment designed specifically for children"
  },
  {
    icon: Star,
    title: "Latest Technology",
    description: "State-of-the-art dental equipment for precise and comfortable treatment"
  },
  {
    icon: Sparkles,
    title: "Comfortable Ambiance",
    description: "Relaxing atmosphere with modern amenities for patient comfort"
  }
];

export function SoulfulGallerySection() {
  return (
    <section id="gallery" className="elegant-section bg-slate-50">
      <div className="elegant-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-soft-blue text-primary-blue border-primary-blue px-6 py-2">
            Gallery
          </Badge>
          <h2 className="display-2 text-sophisticated mb-8">
            Our Beautiful
            <span className="block text-elegant">Clinic</span>
          </h2>
          <p className="body-large text-warm-gray max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art dental clinic designed with comfort, 
            safety, and child-friendly atmosphere in mind.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryImages.map((filename, index) => (
            <motion.div
              key={filename}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="elegant-card h-full group hover:border-primary-blue overflow-hidden">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-blue to-primary-pink flex items-center justify-center">
                    <Image
                      src={`/soulfuldentalcare/${filename}`}
                      alt={filename}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Clinic Features */}
        <motion.div
          className="premium-card p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 text-sophisticated mb-4">
              Clinic <span className="text-elegant">Features</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
              Our clinic is designed to provide the highest standards of care in a 
              comfortable, modern environment that puts patients at ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="elegant-card p-6 group hover:border-primary-pink">
                  <div className="bg-gradient-to-r from-primary-pink to-primary-blue rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Information */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Location Details */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-2 text-sophisticated mb-6">
                Visit Our <span className="text-elegant">Clinic</span>
              </h3>
              <p className="body-large text-warm-gray mb-8">
                Located in the heart of Kothrud, Pune, our clinic is easily accessible 
                with ample parking facilities and convenient public transport connectivity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary-pink to-primary-blue rounded-xl p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Address</h4>
                  <p className="text-warm-gray">
                    Office No.308, 3rd Floor, Success Square<br />
                    Above Tanishq Showroom, Karve Putala Chowk<br />
                    Karve Road, Kothrud, Pune 411038
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary-blue to-teal-accent rounded-xl p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Clinic Hours</h4>
                  <div className="text-warm-gray space-y-1">
                    <p>Monday - Friday: 9:00 AM - 2:30 PM, 5:00 PM - 9:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:30 PM, 4:00 PM - 9:00 PM</p>
                    <p>Sunday: Closed (Emergency available)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-teal-accent to-purple-accent rounded-xl p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Specializations</h4>
                  <p className="text-warm-gray">
                    Pediatric Dentistry, Implant Dentistry, Cosmetic Dentistry, 
                    Root Canal Treatment, Orthodontics
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="btn-elegant animate-pulse-pink"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="elegant-card overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary-blue to-teal-accent flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-white/90">
                      Easily find our clinic with detailed directions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="btn-outline-elegant"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Get Directions
              </Button>
              <Button
                variant="outline"
                className="btn-outline-elegant"
                onClick={() => window.open('tel:+919022920992', '_blank')}
              >
                Call Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SoulfulGallerySection; 