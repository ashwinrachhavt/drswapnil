"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Baby, Shield, Sparkles, Crown, Scissors, Smile, Heart, Zap, ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Specialized dental care designed specifically for infants, children, and adolescents in a comfortable, child-friendly environment.",
    features: ["Age-appropriate treatments", "Anxiety-free procedures", "Parent education", "Fun atmosphere"],
    color: "from-pink-500 to-rose-500",
    popular: true
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive preventive treatments to maintain optimal oral health and prevent dental problems before they start.",
    features: ["Regular checkups", "Fluoride treatments", "Dental sealants", "Oral hygiene education"],
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    icon: Crown,
    title: "Restorative Dentistry",
    description: "Advanced treatments to restore damaged teeth and maintain proper function with natural-looking results.",
    features: ["Dental fillings", "Crowns & bridges", "Root canal therapy", "Tooth repair"],
    color: "from-purple-500 to-violet-500",
    popular: false
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Aesthetic treatments to enhance your child's smile and boost their confidence with safe, effective procedures.",
    features: ["Teeth whitening", "Veneers", "Bonding", "Smile makeovers"],
    color: "from-yellow-500 to-orange-500",
    popular: false
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    description: "Safe and comfortable surgical procedures performed with the highest standards of care and pain management.",
    features: ["Wisdom teeth removal", "Tooth extractions", "Minor surgeries", "Post-op care"],
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Modern orthodontic solutions including clear aligners and traditional braces to create perfect smiles.",
    features: ["Invisalign", "Traditional braces", "Retainers", "Bite correction"],
    color: "from-teal-500 to-green-500",
    popular: false
  }
];

const specialFeatures = [
  {
    icon: Heart,
    title: "Child-Friendly Approach",
    description: "Special techniques to make dental visits fun and stress-free for children"
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    description: "Emergency medical training ensures the highest safety standards"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times that work with your family's schedule"
  },
  {
    icon: Star,
    title: "Quality Care",
    description: "State-of-the-art equipment and latest dental techniques"
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="gradient-text"> Dental Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to specialized treatments, we provide complete dental care 
            tailored specifically for children and young adults.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="medical-card h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-gradient-to-br ${service.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Special Features Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="gradient-text"> Soulful Dental Care?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond traditional dental care to create a nurturing environment 
              where children feel safe, comfortable, and excited about oral health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-4 w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Emergency Care Banner */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white overflow-hidden">
            <CardContent className="p-8 lg:p-12 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                <div className="mb-6 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                    <Zap className="h-8 w-8" />
                    <h3 className="text-2xl lg:text-3xl font-bold">Emergency Dental Care</h3>
                  </div>
                  <p className="text-white/90 text-lg max-w-2xl">
                    Dental emergencies can happen anytime. Dr. Rachha's emergency medical 
                    training ensures your child receives immediate, expert care when needed most.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm font-medium">24/7 Emergency Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span className="text-sm font-medium">PGD EMS Certified</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                  <Button 
                    size="lg"
                    className="bg-white text-red-500 hover:bg-gray-100 font-semibold"
                    onClick={scrollToContact}
                  >
                    Emergency Contact
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={scrollToContact}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="medical-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Give Your Child the Best Dental Care?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with Dr. Rachha and discover why thousands of families 
                trust us with their children's oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full"
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Our Clinic
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600 text-sm">Happy Patients</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">17+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.9★</div>
                  <div className="text-gray-600 text-sm">Patient Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection; 