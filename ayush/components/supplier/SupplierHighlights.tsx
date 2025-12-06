"use client";

import React from "react";
import Link from "next/link";

const SupplierHighlights = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">

                {/* Section 1: Quote while sleeping */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Quote and book customers while you're sleeping!
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Our instant quote feature allows you to quote and book customers 24/7.
                            Your business will be available to customers at all times, increasing your opportunity to secure more work.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        {/* Placeholder for "Quote while sleeping" visual - Map/Phone mockup */}
                        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/why-choose-us-car.png"
                                alt="Instant Quoting"
                                className="w-full h-auto rounded-lg shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Online Presence */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Stand out with a bigger online presence.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Sign up and receive a member profile page displayed on Google, directory listings, search results and heaps more,
                            all geared towards making you as visible online as possible.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        {/* Placeholder for "Online Presence" visual - Profile/Reviews mockup */}
                        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white rounded shadow p-4 mb-4">
                                <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="bg-white rounded shadow p-4 ml-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                                <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SupplierHighlights;
