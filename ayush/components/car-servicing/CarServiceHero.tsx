"use client";

import Link from "next/link";
import Image from "next/image";
import { carBrands } from "@/constants/carData";

export default function CarServiceHero() {
    // Filter to show only the specific brands from the design if needed, 
    // or just take the first 8 as they seem to match the requested list.
    const featuredBrands = carBrands.slice(0, 8);

    return (
        <div className="w-full bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            Compare car service quotes on the most popular car makes
                        </h1>

                        {/* Rating Section */}
                        <div className="mb-10">
                            <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">
                                AVERAGE CUSTOMER RATING
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
                                    4.8 • 140,252 REVIEWS
                                </span>
                            </div>
                        </div>

                        {/* Brand Buttons Grid */}
                        <div className="w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                {featuredBrands.map((brand) => (
                                    <Link
                                        key={brand.slug}
                                        href={`/car-servicing/${brand.slug}`}
                                        className="flex items-center justify-center bg-black text-white py-3 px-4 rounded text-sm font-medium hover:bg-gray-800 transition-colors text-center"
                                    >
                                        {brand.name}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="/car-servicing/all-brands"
                                className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline"
                            >
                                + view more
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">

                        {/* Car Image */}
                        <div className="relative z-0 flex items-center justify-center w-full h-full">
                            <Image
                                src="/car-service/car-image.png"
                                alt="Blue Car"
                                width={1200}
                                height={720}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>

                        {/* Mechanic standing near the wheel */}
                        <div className="absolute bottom-10 right-[5%] md:right-[10%] z-10 w-[40%] md:w-[45%] h-auto flex items-end">
                            <Image
                                src="/car-service/car-guy.png"
                                alt="Mechanic"
                                width={500}
                                height={500}
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
