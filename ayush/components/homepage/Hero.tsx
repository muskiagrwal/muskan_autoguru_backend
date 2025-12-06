"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroForm from "@/components/form/HeroForm";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero/hero-section-image.jpg"
                    alt="Premium Car Service"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-end">

                {/* Content Container - Right Aligned */}
                <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-end text-right mt-20 md:mt-0">

                    {/* Headlines */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-serif text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Car servicing made easy
                        </h1>
                        <p className="text-gray-300 text-xs font-medium tracking-wide uppercase opacity-80">
                            Know what you're paying for. Know who's working on your car.
                        </p>
                    </motion.div>

                    {/* Quote Form */}
                    <HeroForm />

                </div>
            </div>
        </section>
    );
};

export default Hero;
