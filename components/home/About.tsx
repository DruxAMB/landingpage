"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

export const About = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    {
      title: "No exchange needed",
      desc: "Use your own currency, we handle the rest.",
    },
    {
      title: "No local SIM",
      desc: "Just land and ride - no setups or delays.",
    },
    {
      title: "Borderless Payments",
      desc: "Pay for rides in your local currency anywhere",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full bg-[#FFFCFC] py-16 px-4 md:px-8 lg:px-16 xl:px-40" id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-8 items-center md:items-start">
        {/* Left: Headline */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="w-full md:w-1/2 flex flex-col text-center md:text-start justify-center md:justify-start"
        >
          <h2 className="text-[#B30202] text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.1] mb-6 md:mb-0" style={{whiteSpace: 'pre-line'}}>
            The world is open,
            <br />explore it {""}
            <br className="hidden md:block" />like home.
          </h2>
        </motion.div>
        {/* Right: Feature Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-md px-6 py-5 text-left transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-default border border-[#F4F4F4]"
            >
              <div className="font-bold text-gray-900 text-lg mb-1">
                {feature.title}
              </div>
              <div className="text-gray-500 text-sm md:text-base font-normal">
                {feature.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    {/* New Section: Drive with freedom */}
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-y-20">
        {/* Left: Image */}
        <div className="w-full flex justify-center">
            <Image
              src="/cab-rider.png"
              alt="Smiling driver with red car"
              width={520}
              height={360}
              className="w-full h-auto object-cover "
              priority
            />
        </div>
        {/* Right: Text */}
        <div className="w-full flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#B30202] to-[#FF6B6B] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(255,107,107,0.15)]">
              Drive with freedom<br />and get your <br /> full value.
            </span>
          </h3>
          <p className="text-gray-600 text-base md:text-lg font-normal max-w-md">
            Chaapa gives you fair earnings, low commissions,<br className="hidden md:inline" /> instant payouts.
          </p>
        </div>
      </div>
    </section>
    </motion.section>
  );
}
