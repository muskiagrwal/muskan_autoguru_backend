"use client";

import React from "react";
import Link from "next/link";
import { Star, ChevronRight, MapPin } from "lucide-react";

const WindscreenReplacementPage = () => {
    const title = "Windscreen Replacement";

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
                                4.9 • based on 850+ reviews
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
                                    How much does windscreen replacement cost?
                                </h2>
                                <p>
                                    The cost of replacing a windscreen varies depending on the make and model of your vehicle, as well as features like rain sensors, heated glass, or ADAS (Advanced Driver Assistance Systems) cameras.
                                </p>
                                <p className="mt-4">
                                    A standard windscreen replacement typically starts from around $300. However, for modern vehicles with advanced technology, the cost can range from $500 to over $1,500, especially if camera recalibration is required.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    Repair vs. Replacement
                                </h2>
                                <p>
                                    Not all damaged windscreens need to be replaced. Small chips (usually smaller than a $1 coin) can often be repaired if they are not in the driver's direct line of sight.
                                </p>
                                <p className="mt-4">
                                    You should consider replacement if:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>The chip or crack is larger than a $1 coin.</li>
                                    <li>The damage is in the driver's critical vision area.</li>
                                    <li>The damage is at the edge of the windscreen.</li>
                                    <li>There are multiple chips or cracks.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    What is involved in a replacement?
                                </h2>
                                <p>
                                    A professional windscreen replacement involves:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Removing the old windscreen and seals.</li>
                                    <li>Cleaning and preparing the frame.</li>
                                    <li>Applying new adhesive and installing the new glass.</li>
                                    <li>Allowing the adhesive to cure (usually 60 minutes).</li>
                                    <li>Recalibrating safety cameras (if applicable).</li>
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
                                    Top Glass Specialists
                                </h3>
                                <MapPin className="w-4 h-4 text-blue-500" />
                            </div>
                            <ul className="space-y-0 border-t border-gray-100">
                                {["Sydney", "Brisbane", "Melbourne", "Perth", "Adelaide"].map((city) => (
                                    <li key={city} className="border-b border-gray-100">
                                        <Link href="#" className="flex items-center justify-between py-3 group">
                                            <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                                                Glass Specialists in {city}
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
                                    "Windscreen Chip Repair vs Replacement",
                                    "Is it illegal to drive with a cracked windscreen?",
                                    "How to stop a windscreen crack from spreading",
                                    "What is ADAS calibration?",
                                    "Does insurance cover windscreen replacement?"
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
                            <span className="text-xs text-gray-500 ml-1">4.9 • 850+ reviews</span>
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

export default WindscreenReplacementPage;
