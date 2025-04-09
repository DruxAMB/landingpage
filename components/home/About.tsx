"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const About = (): React.ReactElement => {
  return (
    <div className="w-full bg-[#E30613] text-white">
      <div className="max-w-[1440px] mx-auto py-16 px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8">
            <h2 className="text-5xl font-bold">About us</h2>
            
            <p className="text-xl font-normal">
              Chaapa Ride is redefining mobility with seamless, borderless payments for 
              ride-hailing.
            </p>
            
            <p className="text-xl font-normal mt-6">
              We&apos;re building a future where paying for cabs and Boda Bodas is as easy as 
              tapping a button, powered by blockchain but accessible to everyone, 
              even without crypto knowledge.
            </p>
            
            <div className="pt-4">
              <Button className="bg-white hover:bg-gray-100 text-[#E30613] font-semibold px-8 py-2 h-auto rounded-md text-lg">
                Join our Waitlist
              </Button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
              height={100}
              width={100}
                src="/boda-riders.svg" 
                alt="Boda Boda riders on motorcycles" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
