"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, scaleUp, staggerContainer } from "@/animations/variants";

interface TeamMemberProps {
  imageSrc: string;
  name?: string;
  role?: string;
  index: number;
  isInView: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, role, index, isInView }) => {
  return (
    <motion.div 
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleUp}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
      className="flex flex-col"
    >
      <div className="bg-[#FFF5F5] aspect-square w-full rounded-lg overflow-hidden">
        {imageSrc && (
          <Image 
            src={imageSrc} 
            alt={name || "Team member"} 
            className="w-full h-full object-cover"
            height={400}
            width={400}
          />
        )}
      </div>
      {name && <h3 className="mt-3 text-xl font-medium text-white">{name}</h3>}
      {role && <p className="text-gray-300">{role}</p>}
    </motion.div>
  );
};

export const Team = (): React.ReactElement => {
  const { ref, isInView } = useScrollAnimation();
  
  const teamMembers = [
    { id: 1, imageSrc: "/druxamb.png", name: "Muhammad Amoo", role: "Frontend Engineer" },
    { id: 2, imageSrc: "/diana.png", name: "Najuma Diana", role: "Designer, Product Validation Engineer" },
    { id: 3, imageSrc: "/kodjo.png", name: "Labore Kodjo Agbetisassi", role: "Backend Engineer" },
  ];

  return (
    <motion.div 
      ref={ref}
      className="w-full bg-black text-white py-16 px-4 md:px-8 lg:px-16 xl:px-40"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-16"
        >
          The <span className="text-rose-300">Team</span>
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};