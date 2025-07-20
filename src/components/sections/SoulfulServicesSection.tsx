"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  Shield, 
  Sparkles, 
  Crown, 
  Scissors, 
  Smile, 
  Heart, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Star,
  Target,
  Users,
  Award
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Specialized dental care designed specifically for infants, children, and adolescents in a comfortable, child-friendly environment.",
    features: ["Kid-friendly approach", "Anxiety-free procedures", "Parent education", "Fun atmosphere"],
    color: "from-primary-pink to-deep-pink",
    popular: true
  },
  {
    icon: Crown,
    title: "Root Canal Treatment",
    description: "Advanced root canal treatments performed with latest techniques to save your natural teeth with minimal discomfort.",
    features: ["Painless procedures", "Advanced techniques", "Natural tooth preservation", "Long-lasting results"],
    color: "from-primary-blue to-deep-blue",
    popular: false
  },
  {
    icon: Target,
    title: "Dental Implants",
    description: "State-of-the-art dental implant solutions to replace missing teeth with natural-looking, permanent results.",
    features: ["Permanent solution", "Natural appearance", "Expert implantology", "High success rate"],
    color: "from-teal-accent to-purple-accent",
    popular: false
  },
  {
    icon: Smile,
    title: "Orthodontic Treatment & Invisible Braces",
    description: "Modern orthodontic solutions including Invisalign and traditional braces to create perfect smiles.",
    features: ["Invisalign available", "Traditional braces", "Custom treatment plans", "Beautiful results"],
    color: "from-purple-accent to-primary-pink",
    popular: false
  },
  {
    icon: Sparkles,
    title: "Cosmetic Treatment / Porcelain Veneers",
    description: "Enhance your smile with cosmetic treatments including porcelain veneers for a stunning transformation.",
    features: ["Porcelain veneers", "Smile makeovers", "Natural aesthetics", "Confidence boost"],
    color: "from-primary-pink to-primary-blue",
    popular: false
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional teeth whitening treatments to brighten your smile safely and effectively.",
    features: ["Safe procedures", "Dramatic results", "Professional grade", "Long-lasting whitening"],
    color: "from-primary-blue to-teal-accent",
    popular: false
  }
];

const additionalServices = [
  "Oral Health Consultation & X-Ray",
  "Dental Crowns, Bridges And Dentures", 
  "Wisdom Tooth Painless Extraction",
  "Gum Surgeries And Healing",
  "Diet Counselling For Caries Prevention",
  "Laser Dentistry",
  "Dental Fillings",
  "TMJ Treatment",
  "Snoring and Sleep Apnea Treatment"
];

const specialFeatures = [
  {
    icon: Heart,
    title: "Child-Friendly Approach",
    description: "Special techniques to make dental visits fun and stress-free for children",
    color: "primary-pink"
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    description: "Emergency medical training ensures the highest safety standards",
    color: "primary-blue"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times that work with your family's schedule",
    color: "teal-accent"
  },
  {
    icon: Star,
    title: "Quality Care",
    description: "State-of-the-art equipment and latest dental techniques",
    color: "purple-accent"
  }
];

export function SoulfulServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="elegant-section bg-white">
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
            Our Services
          </Badge>
          <h2 className="display-2 text-sophisticated mb-8">
            Comprehensive
            <span className="block text-elegant">Dental Care</span>
          </h2>
          <p className="body-large text-warm-gray max-w-3xl mx-auto">
            From routine checkups to specialized treatments, we provide complete dental care 
            tailored specifically for children and families with the highest standards of care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
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
              <Card className="elegant-card h-full service-card-hover group relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary-pink to-primary-blue text-white border-0">
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
                    <CardTitle className="text-xl font-semibold text-charcoal group-hover:text-primary-pink transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-warm-gray mb-6 leading-relaxed">
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
                        <CheckCircle className="h-4 w-4 text-primary-pink flex-shrink-0" />
                        <span className="text-charcoal text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full btn-outline-elegant group-hover:bg-soft-pink group-hover:border-primary-pink transition-colors"
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

        {/* Additional Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 text-sophisticated mb-4">
              Additional <span className="text-elegant">Services</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
              We offer a comprehensive range of dental treatments to meet all your oral health needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                className="elegant-card p-4 text-center group hover:border-primary-pink cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={scrollToContact}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-pink flex-shrink-0" />
                  <span className="text-charcoal font-medium text-left">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Features Section */}
        <motion.div
          className="premium-card p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 text-sophisticated mb-4">
              Why Choose
              <span className="text-elegant"> Soulful Dental Care?</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
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
                <div className="elegant-card p-6 group hover:border-primary-pink">
                  <div className={`bg-gradient-to-r from-${feature.color} to-primary-blue rounded-full p-4 w-fit mx-auto mb-4`}>
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

        {/* Emergency Care Banner */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary-pink to-primary-blue text-white overflow-hidden">
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
                    className="bg-white text-primary-pink hover:bg-gray-100 font-semibold"
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
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="elegant-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="heading-2 text-sophisticated mb-6">
                Ready to Give Your Child the Best Dental Care?
              </h3>
              <p className="body-large text-warm-gray mb-8 max-w-2xl mx-auto">
                Schedule a consultation with Dr. Swapnil Rachha and discover why thousands of families 
                trust us with their children's oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="btn-elegant animate-pulse-pink px-8 py-4"
                  onClick={scrollToContact}
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-outline-elegant px-8 py-4"
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Our Clinic
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-primary-pink/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-pink">5000+</div>
                  <div className="text-warm-gray text-sm">Happy Patients</div>
                </div>
                <div className="w-px h-12 bg-primary-pink/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">17+</div>
                  <div className="text-warm-gray text-sm">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-primary-pink/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-accent">4.9★</div>
                  <div className="text-warm-gray text-sm">Patient Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default SoulfulServicesSection; 