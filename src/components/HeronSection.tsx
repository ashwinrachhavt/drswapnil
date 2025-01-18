import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeronSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="w-full px-4 py-12 bg-white text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Dr. Swapnil K. Rachha
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          M.D.S.(PEDIATRIC DENTIST)
        </p>
        <p className="text-base text-gray-700 leading-8 max-w-3xl mx-auto mb-8">
          I am an enthusiastic Pediatric Dentist known for my diligent work in Pune, India. As the Founder & Chief Dental Surgeon at Soulful Dental Care, I am committed to providing the best dental care and honest treatment. My patients, especially children, appreciate my compassionate approach. I am also active in community welfare, working with underprivileged children.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-md">
            Book An Appointment
          </Button>
          <Button variant="outline" className="border-gray-800 text-gray-800 px-6 py-3 rounded-md">
            Contact Us
          </Button>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">Phone: +91 9022920992</p>
            <p className="text-gray-600">Email: swapnil.rachha@gmail.com</p>
            <p className="text-gray-600">Hours: 09.00 AM - 09.00 PM</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
            <p className="text-gray-600">Office No.308, 3rd Floor, Success Sequre</p>
            <p className="text-gray-600">Above Tanishq Showroom, Karve Putala Chowk</p>
            <p className="text-gray-600">Karve Road, Kothrud, Pune 411038</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
              <a href="#" className="text-red-600 hover:text-red-800">YouTube</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeronSection;
