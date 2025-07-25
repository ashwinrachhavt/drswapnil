"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const shorts = [
  {
    id: "2Xp8dVKdFmU",
    title: "Quick Dental Tips",
    description: "Essential oral health tips for daily care"
  },
  {
    id: "4h6D1r_hiPU", 
    title: "Pediatric Care Highlights",
    description: "How we make dental visits fun for kids"
  },
  {
    id: "a_liPn7iRzc",
    title: "Modern Equipment Tour",
    description: "Latest dental technology in action"
  },
  {
    id: "8A5RQOreyQ8",
    title: "Patient Testimonial",
    description: "Real patient experiences and feedback"
  },
  {
    id: "wXQac_Gohes",
    title: "Treatment Procedures",
    description: "Quick overview of our gentle procedures"
  },
  {
    id: "gYp7UuerW3c",
    title: "Clinic Highlights",
    description: "Best moments from our dental practice"
  }
];

export function YouTubeShorts() {
  const [visibleShorts, setVisibleShorts] = useState(3); // Show 3 shorts initially
  const [startIndex, setStartIndex] = useState(0);

  const nextShorts = () => {
    if (startIndex + visibleShorts < shorts.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevShorts = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const currentShorts = shorts.slice(startIndex, startIndex + visibleShorts);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-pink text-white px-6 py-2">
              YouTube Shorts
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-blue mb-4">
              Quick Dental Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bite-sized videos with quick tips, patient stories, and behind-the-scenes moments from our dental practice.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={prevShorts}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-light-blue"
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1}-{Math.min(startIndex + visibleShorts, shorts.length)} of {shorts.length}
            </div>
            
            <Button
              onClick={nextShorts}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-light-pink"
              disabled={startIndex + visibleShorts >= shorts.length}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentShorts.map((short, index) => (
              <motion.div
                key={`${startIndex}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white shadow-modern rounded-2xl overflow-hidden group hover:shadow-modern-lg transition-all duration-300 cursor-pointer"
                      onClick={() => window.open(`https://www.youtube.com/shorts/${short.id}`, '_blank')}>
                  {/* Shorts Video Player - Vertical aspect ratio */}
                  <div className="relative w-full h-0 pb-[177.78%] overflow-hidden bg-gradient-to-br from-primary-blue to-primary-pink">
                    {/* Thumbnail with fallback to iframe */}
                    <div className="absolute inset-0">
                      <img
                        src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                        alt={short.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to iframe if thumbnail fails
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <iframe
                                src="https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1&controls=1&showinfo=0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="${short.title}"
                                class="absolute top-0 left-0 w-full h-full"
                                referrerPolicy="strict-origin-when-cross-origin"
                              ></iframe>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-primary-blue ml-1" />
                      </div>
                    </div>
                    
                    {/* Shorts badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white text-xs px-2 py-1">
                        Shorts
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Short Info */}
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-dark-blue mb-2 line-clamp-1">
                      {short.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {short.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Shorts Button */}
          {shorts.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                onClick={() => {
                  if (visibleShorts === 3) {
                    setVisibleShorts(shorts.length);
                    setStartIndex(0);
                  } else {
                    setVisibleShorts(3);
                    setStartIndex(0);
                  }
                }}
                className="bg-gradient-to-r from-primary-blue to-primary-pink hover:from-dark-blue hover:to-dark-pink text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {visibleShorts === 3 ? 'View All Shorts' : 'Show Less'}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}