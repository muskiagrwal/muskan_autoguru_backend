"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import { PRICING_PACKAGES } from "@/lib/constants";

const Pricing = () => {
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pricingRef.current) {
            gsap.fromTo(
                pricingRef.current.querySelectorAll(".pricing-card"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: pricingRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={pricingRef} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Pricing Plans</h2>
                    <h3 className="text-4xl font-bold text-gray-900">
                        Transparent Pricing
                    </h3>
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {PRICING_PACKAGES.map((pkg, index) => (
                        <div
                            key={index}
                            className={`pricing-card relative bg-white rounded-xl overflow-hidden transition-all duration-300 ${pkg.popular
                                ? 'shadow-2xl scale-105 border-t-4 border-red-600 z-10'
                                : 'shadow-lg border border-gray-100 hover:shadow-xl'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="bg-red-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                                <div className="flex justify-center items-baseline mb-8">
                                    <span className="text-5xl font-extrabold text-gray-900">${pkg.price}</span>
                                </div>

                                <ul className="space-y-4 text-left mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-lg font-bold transition-all uppercase tracking-wide text-sm ${pkg.popular
                                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
