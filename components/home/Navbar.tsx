"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Ride", active: true },
    { label: "Drive", active: false },
    { label: "About", active: false },
    { label: "Help", active: false },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-40">

      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <Image
          className="max-w-[203px] h-auto object-contain"
          alt="Chapa logo"
          height={100}
          width={100}
          src="/logo.png"
        />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <span
                  className={`font-medium text-base ${
                    item.active ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Connect button and menu */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="rounded-[10px] bg-gradient-to-t from-[rgba(237,2,2,1)] to-[#670101] cursor-pointer" onClick={() => window.open('https://calendly.com/chaaparide/', '_blank')}>
            Connect
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-[52px] h-[37px] bg-gray-100 border-none rounded-[10px] cursor-pointer"
          >
            <div className="flex gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-sm" />
              <div className="w-1 h-1 bg-gray-500 rounded-sm" />
              <div className="w-1 h-1 bg-gray-500 rounded-sm" />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`py-2 px-4 text-base ${
                  item.active ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4 w-full rounded-[10px] bg-gradient-to-t from-[rgba(237,2,2,1)] to-[#670101] cursor-pointer" onClick={() => window.open('https://calendly.com/chaaparide/', '_blank')}>
              Connect
            </Button>
          </nav>
        </div>
      )}

      </div>
      <Separator />
    </header>
  );
};
