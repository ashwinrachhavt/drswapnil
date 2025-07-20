"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users, 
  Building2,
  Stethoscope,
  Trophy,
  Star,
  CheckCircle
} from "lucide-react";

const timeline = [
  {
    year: "2007",
    title: "Journey Begins",
    description: "Started dental practice with a vision to transform children's dental experiences",
    icon: GraduationCap,
    side: "left",
    color: "primary-pink"
  },
  {
    year: "2010",
    title: "Advanced Specialization",
    description: "Completed MDS in Pediatric & Preventive Dentistry from M.A. Rangoonwala College",
    icon: Award,
    side: "right",
    color: "primary-blue"
  },
  {
    year: "2015",
    title: "Soulful Dental Care Founded",
    description: "Established premier pediatric dental clinic in Kothrud, Pune",
    icon: Building2,
    side: "left",
    color: "teal-accent"
  },
  {
    year: "2018",
    title: "Emergency Medical Certification",
    description: "Earned PGD EMS from Inamdar Hospital, affiliated with American Heart Association",
    icon: Stethoscope,
    side: "right",
    color: "purple-accent"
  },
  {
    year: "2024",
    title: "17+ Years of Excellence",
    description: "Trusted by 5000+ families, recognized as Pune's leading pediatric dentist",
    icon: Trophy,
    side: "left",
    color: "primary-pink"
  }
];

const expertise = [
  {
    title: "Pediatric Expertise",
    description: "Specialized techniques for treating children with anxiety-free approaches",
    icon: Heart,
    stats: "5000+ Children Treated",
    color: "primary-pink"
  },
  {
    title: "Advanced Training",
    description: "Emergency medical services training ensures highest safety standards",
    icon: Stethoscope,
    stats: "PGD EMS Certified",
    color: "primary-blue"
  },
  {
    title: "Community Leadership",
    description: "Founding member and honorary treasurer of Pune Pediatric Dentists Association",
    icon: Users,
    stats: "Professional Leadership",
    color: "teal-accent"
  }
];

const memberships = [
  "Indian Society for Pediatric & Preventive Dentistry",
  "American Heart Association",
  "Indian Dental Association", 
  "Pune Pediatric Dentists Association"
];

const qualities = [
  { icon: CheckCircle, text: "Gentle approach with children", color: "primary-pink" },
  { icon: CheckCircle, text: "State-of-the-art equipment", color: "primary-blue" },
  { icon: CheckCircle, text: "Emergency medical training", color: "teal-accent" },
  { icon: CheckCircle, text: "Honest and transparent treatment", color: "purple-accent" },
  { icon: CheckCircle, text: "Child-friendly environment", color: "primary-pink" },
  { icon: CheckCircle, text: "Preventive care focus", color: "primary-blue" }
];

export function PinkBlueAboutSection() {
  return (
    <section id="about" className="elegant-section bg-soft-white">
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
            About Dr. Rachha
          </Badge>
          <h2 className="display-2 text-sophisticated mb-8">
            A Journey of
            <span className="block text-elegant">Compassionate Care</span>
          </h2>
          <p className="body-large text-warm-gray max-w-3xl mx-auto">
            With over 17 years of dedicated service in pediatric dentistry, Dr. Swapnil K. Rachha 
            has transformed thousands of young smiles while building lasting relationships with families across Pune.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Personal Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="luxury-card p-8">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary-pink to-primary-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">SR</span>
                </div>
                <div>
                  <h3 className="heading-2 text-sophisticated mb-3">Dr. Swapnil K. Rachha</h3>
                  <p className="text-primary-pink font-semibold text-lg mb-2">
                    MDS - Pediatric & Preventive Dentistry
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary-pink text-primary-pink" />
                    ))}
                    <span className="text-warm-gray ml-2">Trusted by 5000+ families</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="body-regular text-charcoal leading-relaxed">
                  My journey in pediatric dentistry began with a simple belief: every child deserves 
                  a dental experience that builds confidence, not fear. This philosophy has guided 
                  my practice for over 17 years.
                </p>
                
                <p className="body-regular text-charcoal leading-relaxed">
                  From my early training to founding Soulful Dental Care in Kothrud, Pune, 
                  I've dedicated myself to creating an environment where children feel safe, 
                  comfortable, and even excited about their dental visits.
                </p>

                <div className="elegant-card p-6 bg-soft-pink border-l-4 border-primary-pink">
                  <blockquote className="font-accent text-lg italic text-charcoal leading-relaxed">
                    "My commitment extends beyond dental treatment. I believe in educating families, 
                    building trust, and creating positive experiences that last a lifetime."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="elegant-card p-6 group hover:border-primary-pink"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r from-${item.color} to-primary-blue rounded-xl p-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="heading-3 text-sophisticated mb-2">{item.title}</h4>
                      <p className="body-small text-warm-gray mb-3">{item.description}</p>
                      <Badge className="bg-gradient-to-r from-primary-pink to-primary-blue text-white text-xs">
                        {item.stats}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-pink via-teal-accent to-primary-blue"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`relative flex items-center ${
                      item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-pink to-primary-blue flex items-center justify-center shadow-luxury"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${item.side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <motion.div
                        className="elegant-card p-6 group hover:border-primary-pink"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="text-primary-pink font-bold text-xl mb-2">
                          {item.year}
                        </div>
                        <h4 className="heading-3 text-sophisticated mb-3">
                          {item.title}
                        </h4>
                        <p className="body-small text-warm-gray leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Assurance */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 text-sophisticated mb-4">
              Why Choose <span className="text-elegant">Soulful Dental Care?</span>
            </h3>
            <p className="body-large text-warm-gray max-w-2xl mx-auto">
              Our commitment to excellence ensures every child receives the highest quality 
              care in a comfortable, stress-free environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.text}
                className="elegant-card p-6 text-center group hover:border-primary-pink"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <quality.icon className={`h-8 w-8 text-${quality.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <p className="font-medium text-charcoal">{quality.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Memberships */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="elegant-divider"></div>
          
          <h3 className="heading-2 text-sophisticated mb-8">
            Professional <span className="text-elegant">Memberships</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership}
                className="elegant-card p-6 text-center group hover:border-primary-pink"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-12 w-12 text-primary-pink mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-charcoal text-center leading-snug">
                  {membership}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dr. Sneha Rachha Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="premium-card p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-soft-blue text-primary-blue border-primary-blue">
                  Meet Our Team
                </Badge>
                <h3 className="heading-2 text-sophisticated mb-6">
                  Dr. Sneha Rachha
                  <span className="block text-primary-blue text-xl">B.D.S, PGD Implantology</span>
                </h3>
                
                <p className="body-large text-warm-gray mb-6">
                  Expert in Dental Implants, Dr. Sneha Rachha brings specialized knowledge in implantology 
                  to our practice, ensuring comprehensive care for all your dental needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-blue" />
                    <span className="text-charcoal">Specialized in Dental Implants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-blue" />
                    <span className="text-charcoal">Advanced Implantology Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-blue" />
                    <span className="text-charcoal">Patient-Centric Approach</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  className="w-64 h-64 bg-gradient-to-r from-primary-blue to-teal-accent rounded-full mx-auto flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <span className="text-white text-6xl font-bold">SN</span>
                </motion.div>
                
                {/* Floating Achievement */}
                <motion.div
                  className="absolute -top-4 -right-4 luxury-card p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star className="h-6 w-6 text-primary-blue" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PinkBlueAboutSection; 