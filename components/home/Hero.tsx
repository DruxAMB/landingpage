"use client";

import {
  ChevronDownIcon,
  MessagesSquare,
  Settings2Icon,
} from "lucide-react";
import React, { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/animations/variants";
import { Input } from "../ui/input";

export const Hero = (): JSX.Element => {
  return (
    <div className="bg-white pt-16 mb-20 w-full">
      <div className="mx-auto relative max-h-screen px-4 md:px-8 lg:px-16 xl:px-40 max-w-[1440px]">
        {/* Background blur effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-full md:w-2/3 aspect-square top-[10%] left-1/2 -translate-x-1/2 bg-[#fecdd326] rounded-full blur-[100px] pointer-events-none" 
        />

        {/* Main content */}
        <main className="py-8 md:py-16 mx-auto">
          <div className="flex flex-col md:flex-row gap-14 justify-between">
            {/* Left side content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="flex flex-col mx-auto md:m-0 gap-4"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-medium text-2xl md:text-[28px] lg:text-[32px]"
              >
                <span>Borderless</span>
                <span className="text-[24px]">&nbsp;</span>
                <span className="font-semibold">Payments</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-medium text-black text-4xl md:text-[50px] lg:text-[60px] leading-tight"
              >
                for Boda Bodas <br />
                &amp; Cabs
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-medium text-black text-lg max-w-[546px]"
              >
                No local SIM. No currency exchange. Just seamless payments in
                your local currency, powered by stablecoins in the backend.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button className="w-full md:w-[189px] h-[46px] rounded-[10px] bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 cursor-pointer text-white mt-8" onClick={() => window.location.href = "https://tally.so/r/w4OkD5"}>
                  Join our Waitlist
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="w-full md:max-w-[340px] mx-auto md:m-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-between mb-4"
              >
                <h2 className="font-medium text-gray-700 text-lg">
                  Request a Ride
                </h2>
                <Settings2Icon className="w-[22px] h-5 text-gray-500" />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-medium text-gray-400 text-base mb-6"
              >
                No need for local sim or currency exchange
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Card className="bg-gray-50 border-[0.6px] rounded-xl mb-4">
                  <CardContent className="p-4 flex items-center justify-between">
                    <Input className="w-full font-medium text-gray-600 text-base" placeholder="Location" />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Card className="bg-gray-50 border-[0.6px] rounded-xl mb-4">
                  <CardContent className="p-4 flex items-center justify-between">
                    <Input className="w-full font-medium text-gray-600 text-base" placeholder="Destination" />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button className="w-full h-[45px] bg-white border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-medium text-lg rounded-[10px] cursor-pointer">
                  View Prices
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Chat button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="fixed bottom-6 right-6 z-20"
        >
          <MessagesSquare className="w-12 h-12 md:w-16 md:h-16 text-[#FDA4AF] hover:text-[#F43F5E] rounded-full bg-[#F43F5E] hover:bg-[#FDA4AF] shadow-[0px_4px_8px_#6b728014] p-4 cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};