"use client";

import React from "react";

const SupplierStats = () => {
    const stats = [
        { value: "9,000+", label: "auto repairers" },
        { value: "4 million+", label: "website visits per year" },
        { value: "$140 million", label: "quoted online annually" },
        { value: "160,000+", label: "verified reviews" },
    ];

    return (
        <section className="bg-[#1B1F3B] py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                                {stat.value}
                            </span>
                            <span className="text-white text-sm md:text-base font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupplierStats;
