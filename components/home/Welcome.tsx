"use client";

import React from "react";

export const Welcome = (): React.ReactElement => {
  return (
    <div className="py-16 px-4 md:px-8 mt-40 md:mt-0 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to <span className="text-rose-500">Chaapa Ride</span>
      </h1>
      
      <p className="text-lg md:text-xl max-w-3xl mb-12">
        Watch and introduction video of who we are at Chaapa Ride, and the community 
        we are building for the ride hailing industry.
      </p>
      
      <div className="w-full max-w-3xl aspect-video bg-gray-200 flex items-center justify-center">
        <p className="text-2xl text-gray-600">demo video</p>
      </div>
    </div>
  );
};
