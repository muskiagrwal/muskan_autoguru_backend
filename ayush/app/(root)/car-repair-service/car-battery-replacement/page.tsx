"use client";

import React from "react";
import Link from "next/link";
import { Star, ChevronRight, MapPin } from "lucide-react";

const CarBatteryReplacementPage = () => {
    const title = "Car Battery Replacement";

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Sidebar (Rating & Payment) */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Rating Card */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                                Average rating for {title}
                            </h3>
                            <div className="flex items-center space-x-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-xs text-gray-500">
                                4.8 • based on 1,200+ reviews
                            </p>
                        </div>

                        {/* Payment Options */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center space-x-4 mb-4 grayscale opacity-70">
                                {/* Placeholders for logos */}
                                <span className="font-bold text-xs italic">afterpay</span>
                                <span className="font-bold text-xs text-orange-500">humm</span>
                                <span className="font-bold text-xs">zip</span>
                            </div>
                            <div className="font-bold text-lg mb-1">AVAILABLE</div>
                            <p className="text-[10px] text-gray-400 mb-4">
                                *T&Cs apply. Participating service providers only
                            </p>
                            <p className="text-[10px] text-blue-500">
                                *Available at select service providers. T&Cs apply.
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            {title}
                        </h1>

                        <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    How much does car battery replacement cost?
                                </h2>
                                <p>
                                    The cost of a car battery replacement can vary depending on your vehicle's make and model, as well as the type of battery required (e.g., standard lead-acid, AGM, or EFB for stop/start vehicles).
                                </p>
                                <p className="mt-4">
                                    On average, you can expect to pay anywhere from $150 to $450 for a new car battery, including installation and disposal of the old unit.
                                </p>
                                <p className="mt-4">
                                    Premium batteries with longer warranties or higher cold cranking amps (CCA) will typically be at the higher end of this range.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    What is car battery replacement?
                                </h2>
                                <p>
                                    Car battery replacement involves removing your old, dead, or failing battery and installing a new one that meets or exceeds your vehicle manufacturer's specifications.
                                </p>
                                <p className="mt-4">
                                    A professional replacement service includes:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Testing the old battery to confirm it needs replacing.</li>
                                    <li>Checking the charging system (alternator) to ensure it's working correctly.</li>
                                    <li>Cleaning battery terminals and cable ends to prevent corrosion.</li>
                                    <li>Installing the new battery and ensuring it's securely fastened.</li>
                                    <li>Resetting any battery management systems (BMS) if required.</li>
                                    <li>Responsibly recycling your old battery.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    Signs you need a new battery
                                </h2>
                                <p>
                                    Common signs that your car battery is on its way out include:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Slow engine cranking when starting.</li>
                                    <li>Dim headlights or interior lights.</li>
                                    <li>The "Check Battery" warning light is on.</li>
                                    <li>The battery case is swollen or leaking.</li>
                                    <li>The battery is more than 3-5 years old.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar (Top Repairers & Articles) */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Top Repairers */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-900">
                                    Top Battery Specialists
                                </h3>
                                <MapPin className="w-4 h-4 text-blue-500" />
                            </div>
                            <ul className="space-y-0 border-t border-gray-100">
                                {["Sydney", "Brisbane", "Melbourne", "Perth", "Adelaide"].map((city) => (
                                    <li key={city} className="border-b border-gray-100">
                                        <Link href="#" className="flex items-center justify-between py-3 group">
                                            <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                                                Battery Specialists in {city}
                                            </span>
                                            <ChevronRight className="w-3 h-3 text-blue-500" />
                                        </Link>
                                    </li>
                                ))}
                                <li className="border-b border-gray-100">
                                    <Link href="#" className="flex items-center justify-between py-3 group">
                                        <span className="text-xs text-blue-600 font-medium">View all</span>
                                        <ChevronRight className="w-3 h-3 text-blue-500" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-900">
                                    Related Articles
                                </h3>
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                            <ul className="space-y-0 border-t border-gray-100">
                                {[
                                    "How long does a car battery last?",
                                    "How to jump start a car",
                                    "What is a Stop/Start battery?",
                                    "Signs of a bad alternator vs bad battery",
                                    "How to clean battery corrosion"
                                ].map((article, idx) => (
                                    <li key={idx} className="border-b border-gray-100">
                                        <Link href="#" className="flex items-center justify-between py-3 group">
                                            <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {article}
                                            </span>
                                            <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0 ml-2" />
                                        </Link>
                                    </li>
                                ))}
                                <li className="border-b border-gray-100">
                                    <Link href="#" className="flex items-center justify-between py-3 group">
                                        <span className="text-xs text-blue-600 font-medium">View all</span>
                                        <ChevronRight className="w-3 h-3 text-blue-500" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="hidden md:block">
                        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">4.8 • 1,200+ reviews</span>
                        </div>
                    </div>
                    <button className="bg-[#00D26A] hover:bg-[#00b85c] text-white font-bold py-3 px-8 rounded-md transition-colors uppercase tracking-wide text-sm">
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Spacer for sticky footer */}
            <div className="h-24"></div>
        </div>
    );
};

export default CarBatteryReplacementPage;
