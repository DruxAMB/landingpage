"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

export const Contact = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Red background with text */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="bg-[#E30613] text-white py-16 px-4 md:px-8 lg:px-16 xl:px-40 flex flex-col items-center md:items-end justify-center text-center md:text-left"
        >
          <div className="max-w-md text-right">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              RideHailing redefined
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl font-normal mb-12"
            >
              Let&apos;s connect. Whether you&apos;re a potential partner, curious rider, or just excited about 
              what we&apos;re building—drop us a line
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-white to-rose-100 hover:opacity-90 text-[#E30613] font-medium text-xl px-10 py-3 h-auto rounded-md">
                Learn more
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side - Contact form */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-40 flex flex-col items-center md:items-start"
        >
          <div className="max-w-md w-full border rounded-lg p-5">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-medium mb-3"
            >
              Contact Us
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 mb-6"
            >
              We would love to hear from you.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <Input 
                  id="email"
                  type="email" 
                  className="w-full border border-gray-200 rounded-md p-3" 
                  placeholder=""
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <Input 
                  id="subject"
                  type="text" 
                  className="w-full border border-gray-200 rounded-md p-3" 
                  placeholder=""
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-gray-700 mb-2">Leave a message</label>
                <Textarea 
                  id="message"
                  className="w-full border border-gray-200 rounded-md p-3 min-h-[150px]" 
                  placeholder=""
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <input 
                  type="checkbox" 
                  id="subscribe" 
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  Subscribe me to your newsletter
                </label>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="w-full"
              >
                <Button 
                  type="submit"
                  className="w-full bg-[#E30613] hover:bg-[#c00510] text-white font-medium py-2 h-auto rounded-md"
                >
                  Submit
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};