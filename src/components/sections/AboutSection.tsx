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
  BookOpen,
  Trophy,
  Clock,
  Star
} from "lucide-react";

const timeline = [
  {
    year: "2007",
    title: "Journey Begins",
    description: "Started dental practice with a vision to transform children's dental experiences",
    icon: GraduationCap,
    side: "left"
  },
  {
    year: "2010",
    title: "Advanced Specialization",
    description: "Completed MDS in Pediatric & Preventive Dentistry from M.A. Rangoonwala College",
    icon: Award,
    side: "right"
  },
  {
    year: "2015",
    title: "Soulful Dental Care Founded",
    description: "Established premier pediatric dental clinic in Kothrud, Pune",
    icon: Building2,
    side: "left"
  },
  {
    year: "2018",
    title: "Emergency Medical Certification",
    description: "Earned PGD EMS from Inamdar Hospital, affiliated with American Heart Association",
    icon: Stethoscope,
    side: "right"
  },
  {
    year: "2024",
    title: "17+ Years of Excellence",
    description: "Trusted by 5000+ families, recognized as Pune's leading pediatric dentist",
    icon: Trophy,
    side: "left"
  }
];

const expertise = [
  {
    title: "Pediatric Expertise",
    description: "Specialized techniques for treating children with anxiety-free approaches",
    icon: Heart,
    stats: "5000+ Children Treated"
  },
  {
    title: "Advanced Training",
    description: "Emergency medical services training ensures highest safety standards",
    icon: Stethoscope,
    stats: "PGD EMS Certified"
  },
  {
    title: "Community Leadership",
    description: "Founding member and honorary treasurer of Pune Pediatric Dentists Association",
    icon: Users,
    stats: "Professional Leadership"
  }
];

const memberships = [
  "Indian Society for Pediatric & Preventive Dentistry",
  "American Heart Association",
  "Indian Dental Association", 
  "Pune Pediatric Dentists Association"
];

export function AboutSection() {
  return (
    <section id="about" className="elegant-section bg-[var(--soft-white)]">
      <div className="elegant-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-[var(--light-gold)] text-[var(--navy)] border-[var(--warm-gold)] px-6 py-2">
            About Dr. Rachha
          </Badge>
          <h2 className="display-2 text-sophisticated mb-8">
            A Journey of
            <span className="block text-elegant">Compassionate Care</span>
          </h2>
          <p className="body-large text-[var(--warm-gray)] max-w-3xl mx-auto">
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
                <div className="w-24 h-24 rounded-2xl bg-[var(--warm-gold)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">SR</span>
                </div>
                <div>
                  <h3 className="heading-2 text-sophisticated mb-3">Dr. Swapnil K. Rachha</h3>
                  <p className="text-[var(--warm-gold)] font-semibold text-lg mb-2">
                    MDS - Pediatric & Preventive Dentistry
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[var(--warm-gold)] text-[var(--warm-gold)]" />
                    ))}
                    <span className="text-[var(--warm-gray)] ml-2">Trusted by 5000+ families</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="body-regular text-[var(--charcoal)] leading-relaxed">
                  My journey in pediatric dentistry began with a simple belief: every child deserves 
                  a dental experience that builds confidence, not fear. This philosophy has guided 
                  my practice for over 17 years.
                </p>
                
                <p className="body-regular text-[var(--charcoal)] leading-relaxed">
                  From my early days at Sinhgad Dental College to founding Soulful Dental Care, 
                  I've dedicated myself to creating an environment where children feel safe, 
                  comfortable, and even excited about their dental visits.
                </p>

                <div className="elegant-card p-6 bg-[var(--light-gold)] border-l-4 border-[var(--warm-gold)]">
                  <blockquote className="font-accent text-lg italic text-[var(--navy)] leading-relaxed">
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
                  className="elegant-card p-6 group hover:border-[var(--warm-gold)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[var(--light-gold)] rounded-xl p-3 group-hover:bg-[var(--warm-gold)] transition-colors">
                      <item.icon className="h-6 w-6 text-[var(--navy)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="heading-3 text-sophisticated mb-2">{item.title}</h4>
                      <p className="body-small text-[var(--warm-gray)] mb-3">{item.description}</p>
                      <Badge className="bg-[var(--sage-green)] text-white text-xs">
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
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--warm-gold)] via-[var(--sage-green)] to-[var(--navy)]"></div>

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
                        className="w-16 h-16 rounded-full bg-[var(--warm-gold)] flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${item.side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <motion.div
                        className="elegant-card p-6 group hover:border-[var(--warm-gold)]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="text-[var(--warm-gold)] font-bold text-xl mb-2">
                          {item.year}
                        </div>
                        <h4 className="heading-3 text-sophisticated mb-3">
                          {item.title}
                        </h4>
                        <p className="body-small text-[var(--warm-gray)] leading-relaxed">
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
                className="elegant-card p-6 text-center group hover:border-[var(--warm-gold)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-12 w-12 text-[var(--warm-gold)] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-[var(--navy)] text-center leading-snug">
                  {membership}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="premium-card p-12 text-center">
            <motion.div
              className="mb-8"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-16 w-16 text-[var(--warm-gold)] mx-auto" />
            </motion.div>
            
            <h3 className="heading-2 text-sophisticated mb-6">
              Committed to <span className="text-elegant">Community Welfare</span>
            </h3>
            
            <p className="body-large text-[var(--warm-gray)] max-w-3xl mx-auto mb-8">
              Beyond clinical practice, Dr. Rachha actively contributes to community welfare through 
              organizations like Manavya, Being Social, and Carbonari, focusing on underprivileged 
              and specially-abled children.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--warm-gold)] mb-2">Manavya</div>
                <div className="text-[var(--warm-gray)]">Supporting underprivileged children</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--sage-green)] mb-2">Being Social</div>
                <div className="text-[var(--warm-gray)]">Community welfare initiatives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--navy)] mb-2">Carbonari</div>
                <div className="text-[var(--warm-gray)]">Specially-abled children support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;