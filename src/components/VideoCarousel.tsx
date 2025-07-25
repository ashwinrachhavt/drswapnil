"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: "jvQbvxGxfAY",
    title: "Dental Clinic in Kothrud | Multispecialty Dental Clinic in Pune | Soulful Dental Care",
    description: "Take a comprehensive tour of our state-of-the-art dental clinic in Kothrud, Pune. See our modern facilities, advanced equipment, and child-friendly environment designed for optimal patient care."
  },
  {
    id: "Mc2G2LNZjlo",
    title: "Advanced Dental Care & Treatment Procedures",
    description: "Discover our range of dental services and treatment procedures. From pediatric dentistry to cosmetic treatments, see how we provide gentle, effective care for the whole family."
  }
];

export function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-light-blue to-light-pink">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-blue mb-4">
              Virtual Clinic Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our clinic through these comprehensive videos showcasing our facilities, technology, and patient care approach.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white p-6 shadow-modern-lg rounded-2xl">
              {/* Video Player */}
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[currentVideo].id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={videos[currentVideo].title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                />
              </div>
              
              {/* Video Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-semibold text-dark-blue mb-3">
                  {videos[currentVideo].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {videos[currentVideo].description}
                </p>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <Button
                  onClick={prevVideo}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-light-blue border-primary-blue text-primary-blue"
                  disabled={videos.length <= 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-3">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentVideo 
                          ? 'bg-primary-blue scale-125 shadow-lg' 
                          : 'bg-gray-300 hover:bg-primary-blue/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  onClick={nextVideo}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-light-pink border-primary-pink text-primary-pink"
                  disabled={videos.length <= 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}