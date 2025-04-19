"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, scaleUp } from "@/animations/variants";

export const Welcome = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 md:py-32"
      id="welcome"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #FFA9A9 10%, #B30202 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-white text-3xl md:text-5xl font-extrabold mb-4 md:mb-6"
        >
          You are dealing with champs!
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-white text-base font-medium mb-12 max-w-3xl mx-auto"
        >
          Chaapa Ride took home 10,000 USD at the ETiHopia Builders Residency, a
          huge win that fuels our vision for the future of ride-hailing across
          Africa. Watch our demo video below to see what and why we&apos;re building.
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ delay: 0.4 }}
          className="w-full max-w-2xl aspect-video rounded-2xl bg-gray-200 mx-auto flex items-center justify-center overflow-hidden"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0GB-zcBQezo?si=UrQiXijX6MfJpNTV"
            title="Chaapa Ride Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>{" "}
        </motion.div>
      </div>
    </motion.section>
  );
};