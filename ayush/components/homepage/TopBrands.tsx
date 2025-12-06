import React from "react";
import Image from "next/image";
import { BRANDS } from "@/lib/constants";

const TopBrands = () => {
    // Select a subset of brands to display in the grid
    // The design shows roughly 8 brands. We'll use 8 from our list.
    const displayBrands = BRANDS.slice(0, 8);

    return (
        <section className="relative w-full py-24 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/top-brand-top-service-image.jpg"
                    alt="Car tail light background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <div className="space-y-6 max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Top brands. Top service. <br />
                            <span className="text-gray-300">Zero hassle.</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Servicing top auto brands in Australia.
                        </p>
                    </div>

                    {/* Right Column: Logo Grid */}
                    <div className="grid grid-cols-3 gap-4 auto-rows-[120px] md:auto-rows-[160px]">
                        {/* Row 1 - 3 cards */}
                        {displayBrands.slice(0, 3).map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 flex items-center justify-center transition-transform hover:scale-105 duration-300"
                            >
                                <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                            </div>
                        ))}

                        {/* Row 2 Left card */}
                        <div className="col-span-1  bg-white rounded-lg p-6 flex items-center justify-center">
                            <img src={displayBrands[3].logo} alt="" className="w-full h-full object-contain" />
                        </div>

                        {/* Row 2 Middle SMALL card */}
                        <div className="col-span-1 h-[80px] md:h-[100px] bg-white rounded-lg p-4 flex items-center justify-center my-auto">
                            <img src={displayBrands[4].logo} alt="" className="w-full h-full object-contain" />
                        </div>

                        {/* Row 2 Right card */}
                        <div className="col-span-1  bg-white rounded-lg p-6 flex items-center justify-center">
                            <img src={displayBrands[5].logo} alt="" className="w-full h-full object-contain" />
                        </div>

                        {/* Row 3 - 2 cards long */}
                        <div className="col-span-3 grid grid-cols-2 gap-4">
                            {displayBrands.slice(6, 8).map((brand, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-28"
                                >
                                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TopBrands;
