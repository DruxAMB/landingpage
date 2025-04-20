"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, scaleUp, staggerContainer } from "@/animations/variants";

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  index: number;
  isInView: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, index, isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleUp}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="rounded-full overflow-hidden w-40 h-40 md:w-48 md:h-48 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white flex items-center justify-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
            height={192}
            width={192}
            priority
          />
        )}
      </div>
      <h3 className="mt-5 text-lg md:text-xl font-extrabold text-center text-black uppercase tracking-wide">
        {name}
      </h3>
    </motion.div>
  );
};

export const Team = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();

  const teamMembers = [
    { id: 1, imageSrc: "/kodjo.jpg", name: "Labore Agbetsiassi" },
    { id: 2, imageSrc: "/diana.jpg", name: "Najjuma Diana" },
    { id: 3, imageSrc: "/druxamb.jpg", name: "Muhammad Amoo" },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full bg-white text-black py-12 px-4 md:px-8 lg:px-16 xl:px-40"
    >
      <div className="max-w-[1440px] min-h-[515px] mx-auto flex flex-col items-center">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#B30202] to-[#FF6B6B] bg-clip-text text-transparent"
        >
          Building Together
        </motion.h2>
        <p className="text-center text-base md:text-lg mb-10 md:mb-16 font-medium text-black/80 max-w-3xl">
          At the heart of Chaapa Ride is a diverse and passionate team of builders, dreamers, and doers committed to transforming how Africa moves.
        </p>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-12 w-full justify-center items-center"
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};