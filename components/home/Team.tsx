"use client";

import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  imageSrc: string;
  name?: string;
  role?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, role }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#FFF5F5] aspect-square w-full rounded-lg overflow-hidden">
        {imageSrc && (
          <Image 
            src={imageSrc} 
            alt={name || "Team member"} 
            className="w-full h-full object-cover"
            height={100}
            width={100}
          />
        )}
      </div>
      {name && <h3 className="mt-3 text-xl font-medium text-white">{name}</h3>}
      {role && <p className="text-gray-300">{role}</p>}
    </div>
  );
};

export const Team = (): React.ReactElement => {
  const teamMembers = [
    { id: 1, imageSrc: "/kodjo.png" },
    { id: 2, imageSrc: "/diana.png" },
    { id: 3, imageSrc: "/druxamb.png" },
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8 lg:px-16 xl:px-40">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          The <span className="text-rose-300">Team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember 
              key={member.id}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};