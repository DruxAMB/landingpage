"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const Partner = (): React.ReactElement => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-20 md:py-32 relative overflow-hidden">
        {/* Red triangle in the corner */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#E30613]" 
             style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Left content */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Partner with Us to Build Borderless Mobility.
            </h2>
            
            <p className="text-xl font-normal mt-8">
              Join us in reshaping global transportation through accessible, crypto-powered ride payments
            </p>
            
            <p className="text-xl font-normal mt-4">
              — without the crypto complexity.
            </p>
            
            <p className="text-xl font-normal mt-16">
              Choose a spot from our calendar for a quick catchup.
            </p>
            
            <Button className="bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 text-white font-medium text-xl px-10 py-4 h-auto rounded-md mt-6">
              Schedule a call
            </Button>
          </div>
          
          {/* Right side - empty to allow for the red triangle */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};
