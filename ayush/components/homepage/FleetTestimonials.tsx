import React from "react";
import Image from "next/image";

const FleetTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            company: "City Logistics",
            name: "Mariah",
            role: "Business Owner",
            image: "/hero/hero-car-1.avif",
            content:
                "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
        },
        {
            id: 2,
            company: "Metro Transport",
            name: "James",
            role: "Fleet Manager",
            image: "/hero/hero-car-2.avif",
            content:
                "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
        },
        {
            id: 3,
            company: "Urban Delivery",
            name: "Sarah",
            role: "Operations Head",
            image: "/hero/hero-car-3.avif",
            content:
                "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
        },
    ];

    // Duplicate the list for seamless looping
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="relative w-full py-24 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/homepage/dark_abstract_ribbed_background.png"
                    alt="Abstract dark background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
            </div>

            <style>
                {`
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll-left 30s linear infinite;
            will-change: transform;
          }
          .scroll-container:hover .animate-scroll {
            animation-play-state: paused;
          }
          /* Fade mask for blending cards into the background edges */
          .fade-mask::before, .fade-mask::after {
            content: '';
            position: absolute;
            top: 0;
            height: 100%;
            width: 10vw;
            z-index: 10;
            pointer-events: none;
          }
          .fade-mask::before {
            left: 0;
            background: linear-gradient(to right, #000 0%, transparent 100%);
          }
          .fade-mask::after {
            right: 0;
            background: linear-gradient(to left, #000 0%, transparent 100%);
          }
        `}
            </style>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Testimonials
                    </h2>
                    <p className="text-gray-400 text-lg uppercase tracking-widest font-light">
                        Experience That Speaks for Itself
                    </p>
                    <p className="text-white text-sm md:text-base max-w-2xl mx-auto pt-4">
                        88% of auto repairers believe the AutoGuru fleet portal has a
                        positive impact on their business
                    </p>
                </div>

                {/* Scrolling Container */}
                <div className="relative w-full overflow-hidden whitespace-nowrap scroll-container fade-mask py-4">
                    <div className="flex space-x-8 animate-scroll">
                        {duplicatedTestimonials.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:-translate-y-2 duration-300 w-[350px] md:w-[400px] flex-shrink-0 whitespace-normal"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.company}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                            [{item.company}]
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {item.name} - {item.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetTestimonials;
