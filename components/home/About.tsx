"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

export const About = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      className="w-full bg-[#E30613] text-white"
    >
      <div className="max-w-[1440px] w-full mx-auto py-16 px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left content */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl font-bold"
            >
              About us
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl font-normal"
            >
              Chaapa Ride is redefining mobility with seamless, borderless payments for 
              ride-hailing.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl font-normal mt-6"
            >
              We&apos;re building a future where paying for cabs and Boda Bodas is as easy as 
              tapping a button, powered by blockchain but accessible to everyone, 
              even without crypto knowledge.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4"
            >
              <Button className="bg-white hover:bg-gray-100 text-[#E30613] font-semibold px-8 py-2 h-auto rounded-md text-lg cursor-pointer" onClick={() => window.location.href = "https://tally.so/r/w4OkD5"}>
                Join our Waitlist
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                height={500}
                width={600}
                src="/boda-riders.svg" 
                alt="Boda Boda riders on motorcycles" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
