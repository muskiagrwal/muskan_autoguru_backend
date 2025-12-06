"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Calculate the width of one set of testimonials
        // We assume the content is duplicated, so we scroll half the total width
        const scrollWidth = track.scrollWidth / 2;

        // Create the infinite scroll animation
        const animation = gsap.to(track, {
            x: -scrollWidth,
            duration: 40, // Adjust speed here (seconds for one full loop)
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth) // Resets x to 0 smoothly when it reaches -scrollWidth
            }
        });

        // Optional: Pause on hover
        const handleMouseEnter = () => animation.pause();
        const handleMouseLeave = () => animation.play();

        track.addEventListener("mouseenter", handleMouseEnter);
        track.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animation.kill();
            track.removeEventListener("mouseenter", handleMouseEnter);
            track.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gray-50 rounded-full opacity-50 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-bold text-gray-900">
                        Client Success Stories
                    </h3>
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
                </div>
            </div>

            {/* Carousel Container */}
            <div ref={containerRef} className="w-full overflow-hidden">
                {/* Track - Contains 2 sets of testimonials for infinite loop */}
                <div ref={trackRef} className="flex w-max gap-8 px-4">
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="testimonial-card w-[350px] md:w-[400px] flex-shrink-0 bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-8 right-8 text-gray-200 group-hover:text-red-100 transition-colors">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            <div className="flex mb-6 text-red-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" className="mr-1" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed relative z-10 h-32 overflow-hidden">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4 shadow-sm"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
