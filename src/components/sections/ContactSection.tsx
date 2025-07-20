"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle, Navigation, MessageCircle, Star, Heart } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Clinic Address",
    details: [
      "Soulful Dental Care",
      "Office No.308, 3rd Floor, Success Square",
      "Above Tanishq Showroom, Karve Putala Chowk",
      "Karve Road, Kothrud, Pune 411038"
    ],
    action: "Get Directions",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: [
      "+91 9022920992",
      "Available for emergencies",
      "WhatsApp appointments available"
    ],
    action: "Call Now",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: [
      "swapnil.rachha@gmail.com",
      "General inquiries welcome",
      "Quick response guaranteed"
    ],
    action: "Send Email",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    details: [
      "Monday - Friday: 9:00 AM - 2:30 PM, 5:00 PM - 9:00 PM",
      "Saturday: 9:00 AM - 2:30 PM, 4:00 PM - 9:00 PM",
      "Sunday: Closed (Emergency available)"
    ],
    action: "Book Appointment",
    color: "from-orange-500 to-orange-600"
  }
];

const appointmentTypes = [
  "Regular Checkup",
  "Dental Cleaning",
  "Emergency Visit",
  "Consultation",
  "Treatment Follow-up",
  "Other"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    appointmentType: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        childAge: "",
        appointmentType: "",
        message: "",
        preferredDate: "",
        preferredTime: ""
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your
            <span className="gradient-text"> Appointment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to give your child the best dental care? Get in touch with us to book 
            an appointment or ask any questions about our services.
          </p>
        </motion.div>
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="medical-card h-full hover:shadow-xl transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <div className={`bg-gradient-to-r ${info.color} rounded-xl p-3 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                  Book an Appointment
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Parent/Guardian Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child's Age
                        </label>
                        <Input
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          placeholder="e.g., 5 years"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Appointment Type
                      </label>
                      <select
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select appointment type</option>
                        {appointmentTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <Input
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">Select time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="8:00 PM">8:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about any specific concerns or requirements for your child..."
                        rows={4}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Book Appointment
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Appointment Request Sent!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you! We'll contact you within 24 hours to confirm your appointment.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>We look forward to caring for your child's smile!</span>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
          {/* Map and Quick Contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Map Card */}
            <Card className="medical-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Navigation className="mr-3 h-5 w-5 text-blue-600" />
                  Find Our Clinic
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Easily located in Kothrud, Pune with ample parking available
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Quick Contact Options */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="mr-3 h-5 w-5 text-blue-600" />
                  Quick Contact
                </CardTitle>
                <p className="text-gray-600">
                  Need immediate assistance? Use these quick contact options.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  onClick={() => window.open('https://wa.me/919022920992', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  onClick={() => window.open('tel:+919022920992', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3"
                  onClick={() => window.open('mailto:swapnil.rachha@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Dental Emergency?
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      Dr. Rachha is available for emergency dental care. 
                      Call immediately for urgent situations.
                    </p>
                    <Button 
                      className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
                      onClick={() => window.open('tel:+919022920992', '_blank')}
                    >
                      Emergency Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Patient Reviews Teaser */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Trusted by 5000+ Families
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    "Dr. Rachha made my daughter's first dental visit so comfortable. 
                    She actually looks forward to her appointments now!"
                  </p>
                  <p className="text-blue-600 font-medium text-sm">
                    - Parent Review
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 