"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Dr. Swapnil Rachha</div>
        <div className="space-x-6">
          <Button variant="ghost" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            About
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            Services
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
            Gallery
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
