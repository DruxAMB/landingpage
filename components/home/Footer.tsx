"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = (): React.ReactElement => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-24 min-h-[515px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and social icons */}
          <div className="space-y-6">
            <div>
              <Image 
                src="/logo.png" 
                alt="Chaapa Logo" 
                width={150} 
                height={50}
                className="h-auto"
              />
            </div>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Youtube size={20} />
              </Link>
              <Link href="https://linkedin.com/company/chaapa" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  What is Chaapa Ride
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Meet the team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Rider help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Driver help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Join the Waitlist */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Join the Waitlist</h3>
            <Button className="bg-gradient-to-r from-[#FF5757] to-[#E30613] hover:opacity-90 text-white font-medium px-6 py-2 h-auto rounded-md">
              Join our Waitlist
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
