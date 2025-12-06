"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import { SERVICES } from "@/lib/constants";

const Features = () => {
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (featuresRef.current) {
            gsap.fromTo(
                featuresRef.current.querySelectorAll('.service-card'),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: "top 85%",
                    }
                }
            );
        }
    }, []);

    return (
        <section className="py-24 bg-white" ref={featuresRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">What We Do</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Premium Car Services
                    </h3>
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                        >
                            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
