"use client";

import {
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
    <section
      className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24"
      style={{
        background: "radial-gradient(circle at 50% 50%, #fff 60%, #FFE0E0 100%)"
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-gray-500 text-base mb-2 mt-2">Chaapa Ride</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
          <span className="text-[#B30202]">Feel at home </span>
          <br className="lg:hidden"/>
          <span className="text-[#FF6B6B]">anywhere you land.</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg font-normal mb-12 max-w-2xl mx-auto">
          We are your trusted companion when you land in a new country, no stress, no conversion rates, no feeling lost. Just order for a ride like a local.
        </p>
        <button
          className="px-8 py-3 rounded-lg text-white font-semibold text-base md:text-lg bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:from-[#E30613] hover:to-[#FF5757] transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
          onClick={() => window.location.href = 'https://tally.so/r/w4OkD5'}
        >
          Join Waitlist
        </button>
      </div>
    </section>
  );
};