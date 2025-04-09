"use client";

import {
    ChevronDownIcon,
    MessageSquareIcon,
    MessagesSquare,
    Settings2Icon,
  } from "lucide-react";
  import React, { JSX } from "react";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  
  export const Hero = (): JSX.Element => {
  
    return (
      <div className="bg-white pt-16 mb-20">
        <div className="mx-auto relative max-h-screen px-4 md:px-8 lg:px-16 xl:px-40">
          {/* Background blur effect */}
          <div className="absolute w-full md:w-2/3 aspect-square top-[10%] left-1/2 -translate-x-1/2 bg-[#fecdd326] rounded-full blur-[100px] pointer-events-none" />
  
          {/* Main content */}
          <main className="py-8 md:py-16 mx-auto">
            <div className="flex flex-col md:flex-row gap-14 justify-between">
              {/* Left side content */}
              <div className="flex flex-col mx-auto md:m-0 gap-4">
                <div className="font-medium text-2xl md:text-[28px] lg:text-[32px]">
                  <span>Borderless</span>
                  <span className="text-[24px]">&nbsp;</span>
                  <span className="font-semibold">Payments</span>
                </div>
  
                <h1 className="font-medium text-black text-4xl md:text-[50px] lg:text-[60px] leading-tight">
                  for Boda Bodas <br />
                  &amp; Cabs
                </h1>
  
                <p className="font-medium text-black text-lg max-w-[546px]">
                  No local SIM. No currency exchange. Just seamless payments in
                  your local currency, powered by stablecoins in the backend.
                </p>
  
                <Button className="w-full md:w-[189px] h-[46px] rounded-[10px] bg-rose-500 text-white mt-8">
                  Join our Waitlist
                </Button>
              </div>
  
              {/* Right side form */}
              <div className="w-full md:max-w-[340px] mx-auto md:m-0">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium text-gray-700 text-lg">
                    Request a Ride
                  </h2>
                  <Settings2Icon className="w-[22px] h-5 text-gray-500" />
                </div>
  
                <p className="font-medium text-gray-400 text-base mb-6">
                  No need for local sim or currency exchange
                </p>
  
                <Card className="bg-gray-50 border-[0.6px] rounded-xl mb-4">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-gray-600 text-base">
                      Location
                    </span>
                  </CardContent>
                </Card>
  
                <Card className="bg-gray-50 border-[0.6px] rounded-xl mb-4">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-gray-600 text-base">
                      Destination
                    </span>
                    <div className="h-[25px] rounded-[10px] flex items-center bg-rose-500 px-2.5 py-1">
                      <span className="font-medium text-white text-sm mr-2">
                        Country
                      </span>
                      <ChevronDownIcon className="w-[11px] h-2.5 text-white" />
                    </div>
                  </CardContent>
                </Card>
  
                <Button className="w-full h-[45px] bg-white border border-rose-500 text-rose-500 font-medium text-lg rounded-[10px]">
                  View Prices
                </Button>
              </div>
            </div>
          </main>
  
          {/* Chat button */}
          <div className="fixed bottom-6 right-6">
              <MessagesSquare className="w-12 h-12 md:w-16 md:h-16 text-[#FDA4AF] hover:text-[#F43F5E] rounded-full bg-[#F43F5E] hover:bg-[#FDA4AF] shadow-[0px_4px_8px_#6b728014] p-4 cursor-pointer" />
          </div>
  
          {/* Status indicator */}
          <div className="flex items-center text-sm mt-20 absolute left-6">
            <span className="font-medium text-rose-500">CHR </span>
            <span className="font-medium text-rose-300">$24.19</span>
  
            <div className="w-3 h-3 mx-2">
              <div className="w-[9px] h-[9px] top-0 left-1 bg-emerald-400 rounded-[4.5px]" />
              <img
                className="absolute w-2 h-2 top-1 left-0"
                alt="Ellipse"
                src="/ellipse-16.svg"
              />
            </div>
  
            <span className="font-medium text-emerald-500 hidden sm:inline">
              192977089
            </span>
          </div>
        </div>
      </div>
    );
  };