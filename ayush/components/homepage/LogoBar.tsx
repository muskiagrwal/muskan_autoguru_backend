"use client";

import React from "react";
import Image from "next/image";

const logos = [
    { src: "/ampol.svg", alt: "Ampol Logo" },
    { src: "/customfleet.svg", alt: "Custom Fleet Logo" },
    { src: "/ampol.svg", alt: "Ampol Logo" },
    { src: "/ampol.svg", alt: "Ampol Logo" },
    { src: "/ampol.svg", alt: "Ampol Logo" },
];

const LogoBar = () => {
    return (
        <div className="bg-white py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Heading */}
                <div className="text-center mb-10">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                        Trusted by industry leaders
                    </h3>
                </div>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative h-12 md:h-16 w-28 md:w-40 grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LogoBar;
