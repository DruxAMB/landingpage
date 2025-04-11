"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, scaleUp } from "@/animations/variants";

export const Welcome = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      className="w-full py-16 px-4 md:px-8 mt-40 md:mt-0 flex flex-col items-center text-center"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h1 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to <span className="text-rose-500">Chaapa Ride</span>
        </motion.h1>
        
        <motion.p 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mb-12"
        >
          Watch and introduction video of who we are at Chaapa Ride, and the community 
          we are building for the ride hailing industry.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ delay: 0.4 }}
          className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0GB-zcBQezo?si=UrQiXijX6MfJpNTV"
            title="Chaapa Ride Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};
