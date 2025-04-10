"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export const Footer = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.footer 
      ref={ref}
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-24 min-h-[515px]">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Logo and social icons */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image 
                src="/logo.png" 
                alt="Chaapa Logo" 
                width={150} 
                height={50}
                className="h-auto"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex space-x-4"
            >
              <Link href="https://twitter.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Youtube size={20} />
              </Link>
              <Link href="https://linkedin.com/company/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* About Us */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-medium text-lg"
            >
              About Us
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  What is Chaapa Ride
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Meet the team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </motion.ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-medium text-lg"
            >
              Support
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Rider help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Driver help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
            </motion.ul>
          </motion.div>

          {/* Join the Waitlist */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-medium text-lg"
            >
              Join the Waitlist
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 text-white font-medium px-8 py-4 h-auto rounded-md cursor-pointer" onClick={() => window.location.href = "https://tally.so/r/w4OkD5"}>
                Join our Waitlist
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
