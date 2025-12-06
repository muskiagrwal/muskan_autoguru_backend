"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { HOTSPOTS } from "@/lib/constants";

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".hotspot",
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: carRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-black [background-image:linear-gradient(to_bottom,theme(colors.black)_70%,theme(colors.white)_70%)]"
        >
            {/* Red Triangle Accent */}
            <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#e63946] mb-8"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Why Choose Us
                </h2>
                <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                    We Offer Full Service Auto Repair & Maintenance
                </p>

                <div ref={carRef} className="relative w-full max-w-5xl mx-auto">
                    <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <Image
                            src="/Highlight_Image.png"
                            alt="Car Service"
                            fill
                            className="object-contain"
                            priority
                        />

                        {HOTSPOTS.map((spot, index) => (
                            <div
                                key={index}
                                className="hotspot absolute w-6 h-6 md:w-8 md:h-8 bg-[#e63946] rounded-full border-2 border-white cursor-pointer group"
                                style={{ top: spot.top, left: spot.left }}
                            >
                                <div className="absolute inset-0 bg-[#e63946] rounded-full animate-ping opacity-75"></div>

                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-1 bg-white text-black text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    {spot.label}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
