"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Camera, Building2, Users, Award, Play, ExternalLink } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const categories = [
  { id: "all", name: "All", count: 45 },
  { id: "clinic", name: "Clinic Interior", count: 15 },
  { id: "equipment", name: "Equipment", count: 12 },
  { id: "team", name: "Our Team", count: 8 },
  { id: "patients", name: "Happy Patients", count: 10 }
];

const generateGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const categoryMap: { [key: string]: string } = {
    clinic: "Modern clinic interior and comfortable treatment rooms",
    equipment: "State-of-the-art dental equipment and technology",
    team: "Our professional and caring dental team",
    patients: "Happy children after successful treatments"
  };
  for (let i = 1; i <= 45; i++) {
    const categoryKeys = Object.keys(categoryMap);
    const category = categoryKeys[i % categoryKeys.length];
    images.push({
      id: i,
      src: `/soulfuldentalcare/DSC (${i}).png`,
      alt: `${categoryMap[category]} ${i}`,
      category,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Photo ${i}`
    });
  }
  return images;
};

const galleryImages = generateGalleryImages();

const clinicHighlights = [
  {
    icon: Building2,
    title: "Modern Facility",
    description: "State-of-the-art clinic with child-friendly design"
  },
  {
    icon: Camera,
    title: "Latest Equipment",
    description: "Advanced dental technology for better treatment"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified professionals dedicated to child care"
  },
  {
    icon: Award,
    title: "Safe Environment",
    description: "Sterilized and hygienic treatment areas"
  }
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-light-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Our Clinic
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Take a
            <span className="gradient-text"> Virtual Tour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our modern, child-friendly dental clinic designed to make every visit 
            comfortable and stress-free for your little ones.
          </p>
        </motion.div>
        {/* Clinic Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clinicHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="medical-card text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-blue to-accent-teal rounded-full p-3 w-fit mx-auto mb-4">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-primary-blue to-accent-teal text-white shadow-lg"
                  : "hover:bg-light-blue hover:border-secondary-blue/20"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id 
                  ? "bg-white/20" 
                  : "bg-gray-100 text-gray-600"
              }`}>
                {category.count}
              </span>
            </Button>
          ))}
        </motion.div>
        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${image.id}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer group"
                onClick={() => handleImageClick(image, index)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-medium text-sm truncate">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Virtual Tour CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary-blue to-accent-teal text-white overflow-hidden">
            <CardContent className="p-8 lg:p-12 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                <div className="mb-6 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                    <Play className="h-8 w-8" />
                    <h3 className="text-2xl lg:text-3xl font-bold">Take a Virtual Tour</h3>
                  </div>
                  <p className="text-white/90 text-lg max-w-2xl">
                    Can't visit in person yet? Take our interactive virtual tour to explore 
                    our child-friendly clinic and see why families love Soulful Dental Care.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                  <Button 
                    size="lg"
                    className="bg-white text-primary-blue hover:bg-gray-100 font-semibold"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Virtual Tour
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={selectedImage.src}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                />
                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  className="absolute left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  className="absolute right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                {/* Close Button */}
                <Button
                  size="icon"
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                {/* Image Info */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                  <div className="text-center">
                    <div className="font-medium">{selectedImage.title}</div>
                    <div className="text-sm opacity-80">
                      {selectedIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default GallerySection; 