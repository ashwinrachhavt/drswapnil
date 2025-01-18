"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Generate image paths from 1 to 45
  const images = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    src: `/soulfuldentalcare/DSC (${i + 1}).png`,
    alt: `Dental clinic image ${i + 1}`,
  }));

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };


const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
};

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Clinic Gallery
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedImage(image);
                setSelectedIndex(index);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <motion.img
                  key={selectedImage.src}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                />

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                  {selectedIndex + 1} / {images.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
