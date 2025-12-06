"use client";

import React from "react";
import Link from "next/link";
import { Star, ChevronRight, MapPin } from "lucide-react";

const CarAirConditioningPage = () => {
    const title = "Car Air Conditioning";

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
                                4.7 • based on 500+ reviews
                            </p>
                        </div>

                        {/* Payment Options */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center space-x-4 mb-4 grayscale opacity-70">
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
                                    How much does a car AC service cost?
                                </h2>
                                <p>
                                    A standard car air conditioning service and regas typically costs between $150 and $250. This service includes checking for leaks, evacuating the old gas, and refilling the system with new refrigerant and oil.
                                </p>
                                <p className="mt-4">
                                    If repairs are needed, such as replacing a compressor, condenser, or evaporator, the cost can be significantly higher, ranging from $500 to over $1,500 depending on the vehicle and the parts required.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    Why is my AC blowing hot air?
                                </h2>
                                <p>
                                    The most common reason for an AC system blowing hot air is a low refrigerant level due to a leak. Other potential causes include:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Failed compressor clutch.</li>
                                    <li>Blocked condenser or radiator.</li>
                                    <li>Electrical faults (fuses, relays, or sensors).</li>
                                    <li>Broken blend door actuator.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    What is included in an AC service?
                                </h2>
                                <p>
                                    A comprehensive car air conditioning service generally includes:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Temperature check of the vents.</li>
                                    <li>Inspection of drive belts and pulleys.</li>
                                    <li>Leak test using nitrogen or UV dye.</li>
                                    <li>Evacuation of old refrigerant gas.</li>
                                    <li>Vacuum testing the system.</li>
                                    <li>Recharging with correct refrigerant and oil.</li>
                                    <li>Final performance test.</li>
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
                                    Top AC Specialists
                                </h3>
                                <MapPin className="w-4 h-4 text-blue-500" />
                            </div>
                            <ul className="space-y-0 border-t border-gray-100">
                                {["Sydney", "Brisbane", "Melbourne", "Perth", "Adelaide"].map((city) => (
                                    <li key={city} className="border-b border-gray-100">
                                        <Link href="#" className="flex items-center justify-between py-3 group">
                                            <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                                                AC Specialists in {city}
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
                                    "Why is my car AC blowing hot air?",
                                    "How often should I regas my car AC?",
                                    "Car AC smells bad? Here's why.",
                                    "What is the difference between R134a and R1234yf?",
                                    "How to maintain your car's AC system"
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
                            <span className="text-xs text-gray-500 ml-1">4.7 • 500+ reviews</span>
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

export default CarAirConditioningPage;
