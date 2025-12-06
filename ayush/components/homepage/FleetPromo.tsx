"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FleetPromo = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero/premium-care-bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" /> {/* Subtle overlay */}
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Premium care for every vehicle you manage.
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                                One platform to book, track, and manage all fleet servicing.
                                Streamline your operations with real-time data and expert support.
                            </p>

                            <Link
                                href="/fleet-guru"
                                className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-sm font-medium hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm group"
                            >
                                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visuals */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Dashboard Image */}
                            <div className="relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/hero/monitor-screen.png"
                                    alt="Fleet Dashboard"
                                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                                />
                            </div>

                            {/* Car Image Overlay */}
                            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-[40%] z-20 shadow-2xl rounded-lg overflow-hidden border-4 border-white/10 hidden md:block">
                                <img
                                    src="/hero/premium-care-car.jpg"
                                    alt="Fleet Vehicle"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FleetPromo;
