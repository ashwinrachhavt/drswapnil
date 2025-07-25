"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What makes Dr. Swapnil Rachha the best pediatric dentist in Kothrud, Pune?",
    answer: "Dr. Swapnil K. Rachha has 17+ years of specialized experience in pediatric dentistry with an MDS degree. He's known for his gentle, anxiety-free approach that makes children comfortable during dental visits. The clinic uses child-friendly techniques, modern equipment, and maintains international hygiene standards. With a 4.9/5 patient rating and 500+ satisfied families, Dr. Rachha has established himself as a trusted pediatric dentist in Kothrud, Pune."
  },
  {
    question: "What dental services are available at Soulful Dental Care in Kothrud?",
    answer: "Soulful Dental Care offers comprehensive dental services including: Pediatric Dentistry, Dental Implants, Cosmetic Dentistry, Root Canal Treatment, Orthodontics (Braces and Invisalign), Teeth Whitening, Wisdom Tooth Extraction, Preventive Dentistry, Oral Surgery, Crowns and Bridges, and Emergency Dental Care. All treatments are performed using latest technology with a focus on patient comfort."
  },
  {
    question: "How to book an appointment at Soulful Dental Care, Kothrud?",
    answer: "You can book an appointment by calling +91 9022920992 or +91 9405045454. WhatsApp appointments are also available on +91 9022920992. The clinic is located at Office No.308, 3rd Floor, Success Square, Above Tanishq Showroom, Karve Putala Chowk, Karve Road, Kothrud, Pune 411038. Operating hours are 10:00 AM to 9:00 PM, Monday to Saturday."
  },
  {
    question: "Is dental treatment at Soulful Dental Care painful for children?",
    answer: "No, Dr. Swapnil Rachha specializes in anxiety-free and painless dental treatment for children. The clinic uses advanced anesthesia techniques, child-friendly equipment, and a gentle approach to ensure children are comfortable throughout their treatment. The clinic environment is designed to be welcoming and non-threatening for young patients."
  },
  {
    question: "What are the qualifications of Dr. Swapnil Rachha and Dr. Sneha Rachha?",
    answer: "Dr. Swapnil K. Rachha holds an MDS (Master of Dental Surgery) in Pediatric Dentistry with 17+ years of experience. He's a member of the Indian Society of Pedodontics and Preventive Dentistry. Dr. Sneha Rachha has a BDS degree and Post Graduate Diploma in Implantology, specializing in dental implants and cosmetic dentistry. Both doctors maintain continuous education in latest dental techniques."
  },
  {
    question: "What makes Soulful Dental Care different from other dental clinics in Pune?",
    answer: "Soulful Dental Care stands out for its specialized pediatric focus, 17+ years of experience, child-friendly clinic design, painless treatment procedures, state-of-the-art equipment, international hygiene standards, convenient Kothrud location, emergency care availability, and exceptional patient satisfaction with 4.9/5 ratings. The clinic's motto 'Your Smiles Our Passion' reflects their commitment to patient care."
  },
  {
    question: "Does Soulful Dental Care offer emergency dental services in Kothrud?",
    answer: "Yes, Soulful Dental Care provides emergency dental services with same-day appointments for urgent cases. You can contact them 24/7 for emergency consultation at +91 9022920992. They handle dental emergencies including severe toothache, dental trauma, broken teeth, and other urgent dental problems with specialized pediatric emergency protocols."
  },
  {
    question: "What payment methods are accepted at Soulful Dental Care?",
    answer: "Soulful Dental Care accepts multiple payment methods including cash, credit cards, debit cards, UPI payments, PhonePe, Google Pay, and other digital payment options. They offer transparent pricing with detailed treatment plans and cost estimates provided upfront."
  },
  {
    question: "How to prepare my child for their first dental visit at Soulful Dental Care?",
    answer: "Dr. Swapnil Rachha recommends explaining the visit positively, avoiding scary words, reading dental-themed books, visiting during non-treatment times first, and bringing comfort items. The clinic is designed to be child-friendly with colorful décor and gentle staff trained to handle anxious children. First visits typically include examination, cleaning, and familiarization with the dental environment."
  },
  {
    question: "What preventive dental care does Soulful Dental Care recommend for children?",
    answer: "Soulful Dental Care emphasizes preventive care including regular dental checkups every 6 months, fluoride treatments, dental sealants, proper brushing and flossing techniques, diet counseling for caries prevention, and early orthodontic evaluation. Dr. Rachha provides comprehensive oral health education to both children and parents to maintain optimal dental health."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-blue text-white px-6 py-2">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-blue mb-4">
              Common Questions About Our Dental Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our pediatric dental services, 
              treatments, and what to expect at Soulful Dental Care in Kothrud, Pune.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-modern hover:shadow-modern-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-display font-semibold text-dark-blue pr-4 leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-primary-blue" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary-blue" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919022920992"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue hover:bg-dark-blue text-white font-semibold rounded-full transition-colors duration-300"
              >
                Call +91 9022920992
              </a>
              <a
                href="https://wa.me/919022920992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-pink hover:bg-dark-pink text-white font-semibold rounded-full transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}