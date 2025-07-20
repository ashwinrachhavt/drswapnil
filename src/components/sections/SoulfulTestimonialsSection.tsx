"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart, Users, ThumbsUp, Award } from "lucide-react";

const testimonials = [
  {
    name: "Parent from Mahad",
    rating: 5,
    text: "Last year my son had a very serious dental problem, and he was not able to eat. After visiting Dr. Swapnil Rachha, my son was happily cooperating with the doctor for treatment from the first visit itself. It is the Great Skill of Dr Swapnil to handle the kids during the treatment. As written in the description there is 'High Quality treatment at Affordable Cost with High Standards.' It is true as they say in tagline of Soulful dental care 'Creating Beautiful Smile.'",
    treatment: "Pediatric Treatment",
    highlight: "Great skill in handling kids"
  },
  {
    name: "Parent",
    rating: 5,
    text: "Dr. Rachha is very friendly with kids. My son broke his tooth. He guided us well and easily extracted the tooth.",
    treatment: "Tooth Extraction",
    highlight: "Very friendly with kids"
  },
  {
    name: "Parent",
    rating: 5,
    text: "Nice treatment very child friendly Clinic and hygiene. Soulful dental clinic is where u get comfortness during treatment, use of advance technologies. Staff and specially Doctor Swapnil is very cooperative, friendly and makes patient feel comfortable without any anxiety.",
    treatment: "General Treatment",
    highlight: "Child-friendly and comfortable"
  },
  {
    name: "Parent",
    rating: 5,
    text: "Amazing kids handling skill. My son was not ready to sit on dentist chair. Dr swapnil Rachha handled him very carefully and with lots of patience. We came to him to finish root canal treatment with crowning in 2 days. Despite of short notice, he completed it in 2 sittings. I am very happy with the results. Thank you so much Doctor.",
    treatment: "Root Canal & Crown",
    highlight: "Amazing patience with kids"
  },
  {
    name: "Family Patient",
    rating: 5,
    text: "This Dental Clinic is truly amazing in their field! The team is very courteous, helpful and the doctors are very patient friendly and make the environment homely, hence there is no sense of fear and anxiety and we trust soulful dental for dental treatment of our entire family! Truly the best dentists in Kothrud and Pune.",
    treatment: "Family Dental Care",
    highlight: "Best dentists in Pune"
  },
  {
    name: "Parent",
    rating: 5,
    text: "I recently took my child to Soulful Dental Clinic and we had an amazing experience! Dr. Swapnil Rachha and his staff was friendly and professional, and they made sure my child was comfortable the entire time. The clinic was clean and the equipment was top of the line. My child's teeth were examined thoroughly and we were provided with a detailed report of the findings. Dr. Rachha is very knowledgeable and he provided us with great tips and advice for better oral hygiene.",
    treatment: "Pediatric Checkup",
    highlight: "Amazing experience and professional care"
  }
];

const stats = [
  { number: "5000+", label: "Happy Families", icon: Users, color: "primary-pink" },
  { number: "4.9★", label: "Average Rating", icon: Star, color: "primary-blue" },
  { number: "17+", label: "Years Experience", icon: Award, color: "teal-accent" },
  { number: "100%", label: "Satisfaction Rate", icon: ThumbsUp, color: "purple-accent" }
];

export function SoulfulTestimonialsSection() {
  return (
    <section id="testimonials" className="elegant-section bg-soft-white">
      <div className="elegant-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-soft-pink text-primary-pink border-primary-pink px-6 py-2">
            Testimonials
          </Badge>
          <h2 className="display-2 text-sophisticated mb-8">
            What People Say
            <span className="block text-elegant">About Us</span>
          </h2>
          <p className="body-large text-warm-gray max-w-3xl mx-auto">
            Let's know from our patients what they say about us! Their real-life experiences will help you 
            understand the genuine reviews about us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="elegant-card h-full group hover:border-primary-pink">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-8 w-8 text-primary-pink opacity-50" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary-pink text-primary-pink" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="font-accent text-lg italic text-charcoal leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Treatment Type */}
                  <div className="mb-4">
                    <Badge className="bg-soft-blue text-primary-blue border-primary-blue text-xs">
                      {testimonial.treatment}
                    </Badge>
                  </div>

                  {/* Highlight */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-primary-pink" />
                      <span className="text-sm font-medium text-primary-pink">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-pink to-primary-blue flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{testimonial.name}</p>
                      <p className="text-sm text-warm-gray">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          className="premium-card p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 text-sophisticated mb-4">
              Trusted by <span className="text-elegant">Thousands</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of families across Pune, 
              making us the preferred choice for pediatric dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="elegant-card p-6 group hover:border-primary-pink">
                  <div className={`bg-gradient-to-r from-${stat.color} to-primary-blue rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="heading-2 text-charcoal mb-2">{stat.number}</div>
                  <div className="text-warm-gray font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Review */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="elegant-card max-w-4xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-primary-pink to-primary-blue p-1">
              <CardContent className="bg-soft-white p-8 lg:p-12 rounded-lg">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary-pink mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="font-accent text-xl lg:text-2xl italic text-charcoal leading-relaxed mb-8">
                    "The experience with Dr. Swapnil Rachha and his team was exceptional. The way they handled my kid's treatment was amazing. With kids being impatient they made sure that he was comfortable and did the treatment with my kid liking it. Not only with the kids, they are amazing with the adults as well. The way they carry out the dental procedures as well as approach the patients is amazing again. Thank you so much. We really appreciate it 😊"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary-pink text-primary-pink" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-pink to-primary-blue flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-charcoal text-lg">Parent</p>
                      <p className="text-warm-gray">Verified Patient Family</p>
                      <Badge className="bg-gradient-to-r from-primary-pink to-primary-blue text-white text-xs mt-1">
                        ⭐ Featured Review
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="heading-2 text-sophisticated">
              Join Our Happy <span className="text-elegant">Patient Family</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
              Experience the same exceptional care that has made thousands of families smile. 
              Book your appointment today and see why we're Pune's most trusted pediatric dental clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-elegant animate-pulse-pink px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Appointment
              </motion.button>
              <motion.button
                className="btn-outline-elegant px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More About Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SoulfulTestimonialsSection; 