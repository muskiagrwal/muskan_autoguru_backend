"use client";

import React from "react";
import SupplierHero from "@/components/supplier/SupplierHero";
import SupplierStats from "@/components/supplier/SupplierStats";
import SupplierFeatures from "@/components/supplier/SupplierFeatures";
import SupplierHighlights from "@/components/supplier/SupplierHighlights";

const SupplierSignupPage = () => {
    return (
        <main className="bg-white">
            <SupplierHero />
            <SupplierStats />
            <SupplierFeatures />
            <SupplierHighlights />

            {/* Benefits Section (Original - kept as additional CTA or removed if redundant) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Attract new customers online and grow <br className="hidden md:block" />
                        your business - <span className="text-[#00D26A]">pay ZERO commission</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
                        Join thousands of Australian mechanics who are growing their business with AutoGuru.
                        We send you qualified bookings, not just leads.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default SupplierSignupPage;
