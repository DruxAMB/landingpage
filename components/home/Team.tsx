"use client";

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
          <img 
            src={imageSrc} 
            alt={name || "Team member"} 
            className="w-full h-full object-cover"
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
    { id: 1, imageSrc: "/team-member-1.svg" },
    { id: 2, imageSrc: "/team-member-2.svg" },
    { id: 3, imageSrc: "/team-member-3.svg" },
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
