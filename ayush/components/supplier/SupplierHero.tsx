"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Bell, Star } from "lucide-react";
import SupplierSignupForm from "./SupplierSignupForm";

const SupplierHero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero/premium-care-bg.jpg"
                    alt="Workshop Background"
                    className="w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >


                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Join Australia's #1 booking site for auto repairers.
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-xl">
                                Become a member of a network that's recognised and trusted nationally by Aussie car owners.
                            </p>

                            <div className="hidden lg:block">
                                <SupplierSignupForm />
                            </div>

                            <div className="lg:hidden">
                                <Link
                                    href="#register"
                                    className="inline-block bg-[#00D26A] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#00b059] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                                >
                                    Join Now
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visuals - Phone Mockup (Hidden on large screens where form is shown, or adjusted) */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end hidden lg:flex">
                        {/* ... existing phone mockup code ... */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-[300px] md:w-[340px]"
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-white rounded-[3rem] border-[8px] border-gray-200 shadow-2xl overflow-hidden h-[600px] z-10">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-200 rounded-b-xl z-20" />

                                {/* Screen Content */}
                                <div className="w-full h-full bg-gray-50 pt-12 px-4 flex flex-col relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 left-0 w-full h-40 bg-green-50 rounded-b-[3rem] -z-10" />

                                    {/* App Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                        <div className="w-20 h-4 bg-gray-200 rounded" />
                                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                    </div>

                                    {/* Notification Cards */}
                                    <div className="space-y-4 mt-auto mb-12">
                                        {/* Card 1: New Booking */}
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#00D26A] relative transform translate-x-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="bg-green-100 p-2 rounded-full">
                                                    <CheckCircle2 className="w-5 h-5 text-[#00D26A]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">You have a new booking</h4>
                                                    <p className="text-xs text-gray-500">Be bookable online 24/7</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Card 2: Quote Request */}
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.0 }}
                                            className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500 relative transform -translate-x-2"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="bg-blue-100 p-2 rounded-full">
                                                    <Bell className="w-5 h-5 text-blue-500" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">You have a new quote request</h4>
                                                    <p className="text-xs text-gray-500">Respond to custom job requests</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Card 3: Review */}
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.2 }}
                                            className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-yellow-400 relative transform translate-x-2"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="bg-yellow-100 p-2 rounded-full">
                                                    <Star className="w-5 h-5 text-yellow-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">New 5-star review</h4>
                                                    <p className="text-xs text-gray-500">Verified reviews to attract more customers</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Blob */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] bg-green-400/20 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupplierHero;
