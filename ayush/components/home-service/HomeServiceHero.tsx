"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function HomeServiceHero() {
    return (
        <div className="w-full bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            Home Service Repairing: We Come to You
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Experience the ultimate convenience. We pick up your car from your home or office, service it at our certified workshops, and drop it back to you.
                        </p>

                        {/* Rating Section */}
                        <div className="mb-8">
                            <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">
                                TRUSTED BY THOUSANDS
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-900 font-medium text-sm">
                                    4.9 • 5,000+ HAPPY CUSTOMERS
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">Free Doorstep Pickup & Drop-off</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">Certified Workshop Service</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">Transparent Pricing & Updates</span>
                            </div>
                        </div>

                        <Link
                            href="/book-service/booking"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Book a Home Service
                        </Link>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2 relative h-[300px] md:h-[450px] flex items-center justify-center">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/car-service/car-image.png"
                                alt="Home Service Repair"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
