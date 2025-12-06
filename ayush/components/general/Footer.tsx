"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../homepage/Logo";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/hero/footer-bg.jpg')] bg-cover bg-center" />
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">

          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Are you an auto repairer?</h3>

            <div className="flex gap-4">
              <Link href="/supplier/login" className="px-8 py-3 bg-[#333] text-white text-sm rounded hover:bg-[#444]">
                Login
              </Link>
              <Link href="/supplier/signup" className="px-8 py-3 bg-white text-black text-sm rounded hover:bg-gray-200">
                Signup
              </Link>
            </div>

            <div>
              <h4 className="text-sm mb-1 font-medium">Our other sites</h4>
              <Link
                href={"/b2b"}
                className="text-sm text-gray-400 underline underline-offset-4 decoration-gray-500 hover:text-white block"
              >
                Bussiness
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 underline underline-offset-4 decoration-gray-500 hover:text-white"
              >
                New Zealand
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-600 fill-red-600" />
              <span className="text-xs text-gray-500">Crafted by AIMP</span>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col items-center gap-8 text-center max-w-lg mx-auto">
            <div className="bg-white p-4 rounded">
              <Logo />
            </div>

            <div className="flex items-center  gap-4">
              <div className="w-20 h-8  rounded-full bg-white border border-white/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-black">AG</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-300">
                We acknowledge the Yugambeh people of the Gold Coast and their Elders past and present,
                as well as the Aboriginal and Torres Strait Islander communities across all regions we operate in.
              </p>
            </div>

            <div className="flex gap-5">
              <Link href="#"><Facebook className="w-4 h-4" /></Link>
              <Link href="#"><Instagram className="w-4 h-4" /></Link>
              <Link href="#"><Linkedin className="w-4 h-4" /></Link>
            </div>

            <p className="text-gray-400 text-sm">Copyright © 2025 AutoGuru Australia Pty Ltd</p>
          </div>

          {/* RIGHT COLUMN - QUICK LINKS */}
          <div className="justify-self-end">
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <div className="space-y-4">

              <div>
                <button
                  onClick={() => toggleSection("mechanics")}
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <span>Mechanics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "mechanics" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "mechanics" && (
                  <div className="pt-2 pl-4 space-y-2">
                    <Link href="/mechanics" className="text-sm text-gray-400 block hover:text-white">All Mechanics</Link>
                    <Link href="/mechanics/sydney" className="text-sm text-gray-400 block hover:text-white">Sydney</Link>
                    <Link href="/mechanics/melbourne" className="text-sm text-gray-400 block hover:text-white">Melbourne</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("repairs")}
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <span>Popular Car Repairs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "repairs" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "repairs" && (
                  <div className="pt-2 pl-4 space-y-2">
                    <Link href="/car-servicing" className="block text-sm text-gray-400 hover:text-white">Car Servicing</Link>
                    <Link href="/brakes" className="block text-sm text-gray-400 hover:text-white">Brakes</Link>
                    <Link href="/suspension" className="block text-sm text-gray-400 hover:text-white">Suspension</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("makes")}
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <span>Popular Makes</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "makes" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "makes" && (
                  <div className="pt-2 pl-4 space-y-2">
                    <Link href="/toyota" className="block text-sm text-gray-400 hover:text-white">Toyota</Link>
                    <Link href="/mazda" className="block text-sm text-gray-400 hover:text-white">Mazda</Link>
                    <Link href="/hyundai" className="block text-sm text-gray-400 hover:text-white">Hyundai</Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
