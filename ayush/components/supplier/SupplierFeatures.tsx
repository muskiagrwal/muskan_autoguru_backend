"use client";

import React from "react";
import { DollarSign, Settings, Clock, Heart, Star, Car } from "lucide-react";

const SupplierFeatures = () => {
    const features = [
        {
            icon: DollarSign,
            title: "One simple membership fee",
            description: "Pay a single subscription fee and zero commission on all AutoGuru retail marketplace bookings."
        },
        {
            icon: Settings,
            title: "Set your own pricing",
            description: "Enjoy complete control over your pricing. You can even set customised pricing for different days."
        },
        {
            icon: Clock,
            title: "Quote & book customers 24/7",
            description: "Our tech instantly quotes customers online 24/7 for you, based on your pricing."
        },
        {
            icon: Heart,
            title: "Attract new customers",
            description: "Easily collect great reviews from verified customers. Reviews are the perfect way to attract new customers!"
        },
        {
            icon: Star,
            title: "Flexible Payments",
            description: "Increase conversion with flexible payment options Afterpay, humm, and Zip. Available online and in-store."
        },
        {
            icon: Car,
            title: "Fleet work",
            description: "Access tens of thousands of fleet customers through AutoGuru's fleet partnerships."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        A complete solution to grow your business
                    </h2>
                    <div className="w-16 h-1 bg-[#00D26A] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                                <feature.icon className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupplierFeatures;
