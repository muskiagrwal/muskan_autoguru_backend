"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (aboutRef.current) {
            gsap.fromTo(
                aboutRef.current.querySelector(".about-content"),
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 70%",
                    },
                }
            );
            gsap.fromTo(
                aboutRef.current.querySelector(".about-image"),
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 70%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={aboutRef} className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 about-content">
                        <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">
                            About AutoGuru
                        </h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            We Are Committed To <br /> Quality And Excellence
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            AutoGuru is a premium car service center dedicated to providing top-tier automotive care. With a team of certified experts and state-of-the-art technology, we ensure your vehicle performs at its best.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            From routine maintenance to complex repairs, we handle every job with precision and care. Our transparent pricing and customer-centric approach make us the preferred choice for luxury car owners.
                        </p>

                        <Link
                            href="/about"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md uppercase tracking-wide text-sm"
                        >
                            Read More
                        </Link>
                    </div>

                    <div className="lg:w-1/2 about-image relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="AutoGuru Workshop"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block border-l-4 border-red-600">
                            <p className="text-5xl font-bold text-gray-900">15+</p>
                            <p className="text-gray-500 font-medium mt-1">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
