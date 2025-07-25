"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "DSC (1).png", "DSC (2).png", "DSC (3).png", "DSC (4).png", "DSC (5).png", "DSC (6).png", 
  "DSC (7).png", "DSC (8).png", "DSC (9).png", "DSC (10).png", "DSC (11).png", "DSC (12).png", 
  "DSC (13).png", "DSC (14).png", "DSC (15).png", "DSC (16).png", "DSC (17).png", "DSC (18).png", 
  "DSC (19).png", "DSC (20).png", "DSC (21).png", "DSC (22).png", "DSC (23).png", "DSC (24).png", 
  "DSC (25).png", "DSC (26).png", "DSC (27).png", "DSC (28).png", "DSC (29).png", "DSC (30).png", 
  "DSC (31).png", "DSC (32).png", "DSC (33).png", "DSC (34).png", "DSC (35).png", "DSC (36).png", 
  "DSC (37).png", "DSC (38).png", "DSC (39).png", "DSC (40).png", "DSC (41).png", "DSC (42).png", 
  "DSC (43).png", "DSC (44).png", "DSC (45).png"
];

export function ImageGridCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const imagesPerPage = 9; // 3x3 grid
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  
  // Get current page images
  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = galleryImages.slice(startIndex, endIndex);
    
    // Fill remaining slots with empty placeholders if needed
    while (pageImages.length < imagesPerPage) {
      pageImages.push('');
    }
    
    return pageImages;
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [autoRotate, totalPages]);

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setAutoRotate(false); // Stop auto-rotation when user interacts
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setAutoRotate(false); // Stop auto-rotation when user interacts
    setTimeout(() => setIsAnimating(false), 600);
  };

  const flipVariants = {
    initial: { rotateY: 0, scale: 1 },
    hover: { 
      rotateY: 15, 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    flip: {
      rotateY: [0, 90, 0],
      scale: [1, 0.8, 1],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      rotateY: 90, 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    enter: { 
      rotateY: 0, 
      opacity: 1,
      transition: { duration: 0.3, delay: 0.3 }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Gallery Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <RotateCw className="w-5 h-5 text-primary-blue" />
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages} • {galleryImages.length} Photos
          </span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <Button
          onClick={prevPage}
          disabled={isAnimating}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-light-blue border-primary-blue text-primary-blue disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setAutoRotate(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-primary-blue scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-primary-blue/50'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextPage}
          disabled={isAnimating}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-light-pink border-primary-pink text-primary-pink disabled:opacity-50"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* 3x3 Image Grid */}
      <div className="relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="grid grid-cols-3 gap-4 md:gap-6"
          >
            {getCurrentPageImages().map((filename, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                variants={flipVariants}
                initial="initial"
                whileHover="hover"
                animate={isAnimating ? "flip" : "initial"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="aspect-square relative group cursor-pointer"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-primary-blue to-primary-pink group-hover:shadow-modern-lg transition-shadow duration-300">
                  {filename ? (
                    <>
                      <div className="relative w-full h-full">
                        <Image
                          src={`/soulfuldentalcare/${filename}`}
                          alt={`Clinic Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Image Number Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-dark-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {currentPage * imagesPerPage + index + 1}
                        </div>

                        {/* Flip Indicator */}
                        {hoveredIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute bottom-3 right-3 bg-primary-blue/90 backdrop-blur-sm rounded-full p-2"
                          >
                            <RotateCw className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </>
                  ) : (
                    // Empty placeholder
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Auto-rotation Control */}
      <div className="text-center mt-6">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
            autoRotate 
              ? 'bg-primary-blue text-white hover:bg-dark-blue' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {autoRotate ? 'Auto-rotation ON' : 'Auto-rotation OFF'}
        </button>
      </div>

      {/* Grid Info */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Hover over images for flip effect • Click arrows or dots to navigate
      </div>
    </div>
  );
}