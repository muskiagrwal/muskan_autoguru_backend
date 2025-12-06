"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Star, Clock, ShieldCheck, Droplets, Sparkles, Car } from "lucide-react";


const CarWashPage = () => {
    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 backdrop-blur-sm mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-100">Premium Detailing Service</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Give Your Car the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Shine It Deserves</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Experience the ultimate car care with our eco-friendly washing and premium detailing services. We bring back that showroom glow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#packages"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
                        >
                            View Packages
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold backdrop-blur-sm transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Droplets className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Products</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We use biodegradable, water-saving products that are tough on dirt but gentle on your car's paint and the environment.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Protection</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our premium wax and ceramic coating options provide long-lasting protection against UV rays, rain, and road grime.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Efficient</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get a professional wash in under 30 minutes with our express service, or drop it off for a full detail while you work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section id="packages" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Wash Package</h2>
                        <p className="text-xl text-gray-600">Transparent pricing for every level of clean</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Basic Package */}
                        <div className="relative p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-colors group">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Express Wash</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-gray-900">$29</span>
                                <span className="text-gray-500">/ sedan</span>
                            </div>
                            <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">
                                Perfect for a quick refresh to remove surface dust and dirt.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Exterior Hand Wash",
                                    "Wheel & Tyre Clean",
                                    "Chamois Dry",
                                    "Tyre Shine"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-6 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                                Book Now
                            </button>
                        </div>

                        {/* Premium Package */}
                        <div className="relative p-8 bg-gray-900 text-white rounded-3xl shadow-xl transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                POPULAR
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Deluxe Detail</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold">$89</span>
                                <span className="text-gray-400">/ sedan</span>
                            </div>
                            <p className="text-gray-300 mb-8 pb-8 border-b border-gray-800">
                                A comprehensive clean inside and out for that new car feel.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Everything in Express",
                                    "Interior Vacuum",
                                    "Window Cleaning (In & Out)",
                                    "Dashboard & Console Wipe",
                                    "Door Jambs Cleaned",
                                    "Spray Wax Application"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50">
                                Book Now
                            </button>
                        </div>

                        {/* Ultimate Package */}
                        <div className="relative p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-colors group">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Showroom Shine</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-gray-900">$199</span>
                                <span className="text-gray-500">/ sedan</span>
                            </div>
                            <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">
                                The ultimate treatment for car enthusiasts who want perfection.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Everything in Deluxe",
                                    "Hand Polish & Wax",
                                    "Leather Conditioning",
                                    "Carpet Shampoo",
                                    "Engine Bay Wash",
                                    "Clay Bar Treatment"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-6 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-blue-600 rounded-3xl p-12 relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make your car shine?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Book your appointment today and experience the best car wash service in town. We guarantee satisfaction with every wash.
                            </p>
                            <Link
                                href="/book-service"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CarWashPage;
