"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, CreditCard } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

// Define your carousel slides data
const carouselSlides = [
    {
        id: 1,
        image:
            "/car.webp",
        alt: "White Jeep Grand Cherokee",
        heading: "Supercharge your auto repair business",
        description: "Grow your online presence and manage digital bookings all in one place.",
        buttonText: "Learn more",
        buttonLink: "/learn-more",
        featureIcon: <CreditCard size={28} />,
        featureTitle: "Flexible Payments",
        featureDescription: "Convert more customers with flexible payment options Afterpay, humm and Zip, online and in-store.",
    },
    {
        id: 2,
        image:
            "/car.webp",
        alt: "Black Ford Ranger",
        heading: "Streamline your workshop operations",
        description: "Efficiently manage jobs, customers, and inventory with our all-in-one platform.",
        buttonText: "Discover features",
        buttonLink: "/features",
        featureIcon: <CreditCard size={28} />,
        featureTitle: "Advanced Reporting",
        featureDescription: "Gain insights into your business performance with comprehensive analytics.",
    },
    {
        id: 3,
        image:
            "/car.webp",
        alt: "Blue Honda Civic",
        heading: "Connect with more customers locally",
        description: "Boost your visibility and attract new clients through our extensive network.",
        buttonText: "Get started",
        buttonLink: "/get-started",
        featureIcon: <CreditCard size={28} />,
        featureTitle: "Seamless Integration",
        featureDescription: "Integrate with your existing tools for a smooth workflow and data sync.",
    },
];

const AutoGuruBannerCarousol = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const featureRef = useRef(null);

    const currentSlide = carouselSlides[currentSlideIndex];

    const animateContent = useCallback((direction = 1) => {
        const tl = gsap.timeline();

        // Animate out current content
        tl.to([headingRef.current, descriptionRef.current, buttonRef.current, featureRef.current], {
            y: direction * 20, // Move up/down slightly
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.in",
        }, "start")
            .to(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power2.in",
            }, "start")
            .call(() => {
                // Update the state after content fades out
                // This will trigger a re-render with the new slide data
            })
            .to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            }, "end") // Use a label for overlapping animations
            .fromTo([headingRef.current, descriptionRef.current, buttonRef.current, featureRef.current],
                { y: -direction * 20, opacity: 0 }, // Animate in from opposite direction
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
                "end-=0.2" // Start animating in content slightly before image finishes
            );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % carouselSlides.length;
            return newIndex;
        });
    };

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + carouselSlides.length) % carouselSlides.length;
            return newIndex;
        });
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="bg-[#E9FFFA] rounded-2xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between min-h-[500px] overflow-hidden relative">
                {/* Left Navigation Arrow */}
                <button
                    onClick={goToPrevSlide}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
                    aria-label="Previous slide"
                >
                    <ArrowLeft size={24} className="text-gray-700" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                    onClick={goToNextSlide}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
                    aria-label="Next slide"
                >
                    <ArrowRight size={24} className="text-gray-700" />
                </button>

                {/* Carousel Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full z-0 gap-5">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:pr-8 relative h-[400px]">
                        <Image
                            ref={imageRef}
                            key={currentSlide.id}
                            src={currentSlide.image}
                            alt={currentSlide.alt}
                            fill
                            className="object-contain"
                        />
                    </div>


                    {/* Text Content Section */}
                    <div ref={contentRef} className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 ref={headingRef} key={`heading-${currentSlide.id}`} className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            {currentSlide.heading}
                        </h2>
                        <p ref={descriptionRef} key={`desc-${currentSlide.id}`} className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                            {currentSlide.description}
                        </p>
                        <Link href={currentSlide.buttonLink} passHref>
                            <button ref={buttonRef} key={`btn-${currentSlide.id}`} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 mb-12">
                                {currentSlide.buttonText}
                            </button>
                        </Link>

                        <div ref={featureRef} key={`feature-${currentSlide.id}`} className="flex items-center flex-col lg:flex-row bg-white rounded-lg p-6 shadow-sm max-w-md mx-auto lg:mx-0">
                            <div className="text-gray-700 mr-0 lg:mr-4 mb-4 lg:mb-0">
                                {currentSlide.featureIcon}
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{currentSlide.featureTitle}</h3>
                                <p className="text-gray-600 text-sm">{currentSlide.featureDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 mt-8">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlideIndex ? "w-8 bg-teal-500" : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoGuruBannerCarousol;