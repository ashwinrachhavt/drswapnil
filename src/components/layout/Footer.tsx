"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-soft-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Swapnil Rachha</h3>
            <p className="text-sm">Pediatric Dentist & Personal Portfolio</p>
            <p className="mt-2 text-xs">Transforming smiles with gentle care and sophisticated design.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  About
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Services
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Gallery
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Dental Care Tips
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Child Oral Health
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Emergency Guidelines
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  Insurance Info
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 text-sm">
                  FAQ
                </Button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" className="p-0 text-soft-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="p-0 text-soft-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="p-0 text-soft-white">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="p-0 text-soft-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            &copy; {currentYear} Dr. Swapnil Rachha. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Button variant="ghost" className="p-0 text-xs">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="p-0 text-xs">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}