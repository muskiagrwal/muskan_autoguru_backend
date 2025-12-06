"use client";
import React, { useRef } from "react";
import { BRANDS } from "@/lib/constants";

// Duplicate the list for seamless looping
const duplicatedBrands = [...BRANDS, ...BRANDS];

const BrandsWeServe = () => {
    const brandsWrapperRef = useRef(null);

    // Calculate animation duration based on the number of brands for consistent speed
    const animationDuration = BRANDS.length * 2.5;

    // Function to render a single brand item (reused for the loop)
    const renderBrandItem = (brand: any, index: number) => (
        <div
            key={index}
            // Simple container for alignment and hover glow effect
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-[1.15] cursor-pointer h-24 hover:drop-shadow-lg"
        >
            <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                // Increased size (max-h-20)
                className="max-h-20 w-auto max-w-full"
            />
        </div>
    );


    return (
        // Added dark gradient background to the section
        <section className="py-24 bg-gray-900 overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/5 after:to-black/30">
            {/* Custom Styles for Animation and Fade Mask */}
            <style>
                {`
                /* Keyframe for the infinite scroll from right to left */
                @keyframes scroll-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); } 
                }

                /* Apply animation to the brand wrapper */
                .animate-scroll {
                    animation: scroll-left ${animationDuration}s linear infinite;
                    will-change: transform;
                }

                /* Pause animation on hover */
                .scroll-container:hover .animate-scroll {
                    animation-play-state: paused;
                }

                /* Fade mask for blending logos into the background edges */
                .fade-mask::before, .fade-mask::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 10vw; /* Responsive width for fade */
                    z-index: 10;
                    pointer-events: none;
                }

                .fade-mask::before {
                    left: 0;
                    background: linear-gradient(to right, #111827 0%, transparent 100%);
                }

                .fade-mask::after {
                    right: 0;
                    background: linear-gradient(to left, #111827 0%, transparent 100%);
                }

                /* Ensure dark background is used for the fade gradient */
                .bg-gray-900 {
                    background-color: #111827; 
                }
                `}
            </style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Header: Increased size and tracking for impact */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">
                        World-Class Service for Every <span className="text-red-600">Brand</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-red-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                        We specialize in the meticulous maintenance and high-performance tuning of all major luxury, European, and domestic vehicle manufacturers.
                    </p>
                </div>
            </div>

            {/* Carousel Container with Fade Mask */}
            <div
                className="relative w-full overflow-hidden whitespace-nowrap scroll-container fade-mask py-4"
            >
                {/* Brand Wrapper */}
                <div
                    ref={brandsWrapperRef}
                    className="flex space-x-20 animate-scroll" // Increased space-x for better logo separation
                >
                    {/* Render the logos twice for seamless infinite scrolling */}
                    {duplicatedBrands.map((brand, index) => renderBrandItem(brand, index))}
                </div>
            </div>

        </section>
    );
};

export default BrandsWeServe;