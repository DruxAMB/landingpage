"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = (): React.ReactElement => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Red background with text */}
        <div className="bg-[#E30613] text-white py-16 px-4 md:px-8 lg:px-16 xl:px-40 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              RideHailing redefined
            </h2>
            
            <p className="text-xl font-normal mb-12">
              Let&apos;s connect. Whether you&apos;re a potential partner, curious rider, or just excited about 
              what we&apos;re building—drop us a line
            </p>
            
            <Button className="bg-gradient-to-r from-white to-rose-100 hover:opacity-90 text-[#E30613] font-medium text-xl px-10 py-3 h-auto rounded-md">
              Learn more
            </Button>
          </div>
        </div>
        
        {/* Right side - Contact form */}
        <div className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-40">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-medium mb-8">
              We would love to hear from you.
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <Input 
                  id="email"
                  type="email" 
                  className="w-full bg-gray-200 border-0 rounded-md p-3" 
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <Input 
                  id="subject"
                  type="text" 
                  className="w-full bg-gray-200 border-0 rounded-md p-3" 
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Leave a message</label>
                <Textarea 
                  id="message"
                  className="w-full bg-gray-200 border-0 rounded-md p-3 min-h-[150px]" 
                  placeholder="Your message"
                />
              </div>
              
              <div className="text-right">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 text-white font-medium px-10 py-2 h-auto rounded-md"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// mx-auto py-16 px-4 md:px-8 lg:px-16 xl:px-40