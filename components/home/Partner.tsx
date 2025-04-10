"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft } from "@/animations/variants";

export const Partner = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      className="w-full bg-white"
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-20 md:py-32 relative overflow-hidden">
        {/* Red triangle in the corner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#E30613]"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        <div className="flex flex-col w-full md:w-1/2 items-center md:items-end text-center md:text-left gap-8 relative z-10">
          {/* Left content */}
          <motion.div 
            className="space-y-6 max-w-xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Partner with Us to Build Borderless Mobility.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl font-normal mt-8"
              >
                Join us in reshaping global transportation through accessible,
                crypto-powered ride payments
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl font-normal mt-4"
              >
                — without the crypto complexity.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl font-normal mt-16"
              >
                Choose a spot from our calendar for a quick catchup.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button className="bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 text-white font-medium text-xl px-10 py-4 h-auto rounded-md mt-6 cursor-pointer">
                  Schedule a call
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - empty to allow for the red triangle */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </motion.div>
  );
};
