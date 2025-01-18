'use client';  // Add this at the top since you're using framer-motion

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Clinic Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Soulful Dental Care<br />
                The Business Hub, Office Number 108,<br />
                Dahanukar Colony, Karve Road,<br />
                Opposite to Mirch Masala Hotel,<br />
                Above Ford Showroom,<br />
                Pune, Maharashtra 411038
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Phone: +91 99607 89079<br />
                Email: swapnil.rachha@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Clinic Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              Monday to Friday: 9:00 AM - 2:30 PM, 5:00 PM - 9:00 PM<br />
              Saturday: 9:00 AM - 2:30 PM, 4:00 PM - 9:00 PM
            </p>
          </CardContent>
        </Card>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                className="relative inline-flex overflow-hidden rounded-full p-[0.1px] bg-gradient-to-r from-blue-500 to-purple-600 text-white py-1 px-12 shadow-lg focus:outline-none mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-purple backdrop-blur-3xl font-bold text-xl">
                  Submit
                </span>
              </motion.button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;