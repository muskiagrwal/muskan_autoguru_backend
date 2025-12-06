import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesOffered = () => {

    const services = [
        {
            id: 1,
            title: "Car servicing",
            image: "/hero/hero-car-1.avif",
            link: "/car-servicing",
        },
        {
            id: 2,
            title: "Mechanics",
            image: "/hero/hero-car-2.avif",
            link: "/mechanics",
        },
        {
            id: 3,
            title: "Windscreens",
            image: "/hero/hero-car-3.avif",
            link: "/windscreens",
        },
        {
            id: 4,
            title: "Clutch",
            image: "/gallery/engine-repair.jpg",
            link: "/car-repair-service/clutch",
        },
        {
            id: 5,
            title: "Suspension & Steering",
            image: "/gallery/diagnostic.jpg",
            link: "/car-repair-service/suspension",
        },
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                        Services offered
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Everything your car needs, all in one place.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-8 overflow-x-auto pb-4 md:pb-0">
                    {services.map((service) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="group flex flex-col items-center space-y-4 min-w-[200px]"
                        >
                            <div className="relative w-48 h-32 md:w-40 md:h-28 lg:w-48 lg:h-32 rounded-lg overflow-hidden shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl  group-hover:grayscale-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-serif text-gray-900 text-center max-w-[150px] leading-tight group-hover:text-emerald-600 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                                {service.title}
                            </h3>
                        </Link>
                    ))}

                    {/* View More Link */}
                    <Link
                        href="/services"
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium underline decoration-1 underline-offset-4 ml-4 whitespace-nowrap"
                    >
                        + view more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;
