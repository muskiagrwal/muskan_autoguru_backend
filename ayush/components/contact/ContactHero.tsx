import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
    return (
        <div className="relative h-[500px] w-full overflow-hidden bg-[#1a2b4b]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact/mechanic-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for better text readability if needed, though the bg image might have it */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
                    {/* Left Column - Mechanics Image */}
                    <div className="relative h-full hidden lg:block">
                        <div className="absolute bottom-0 left-0 w-full h-[110%]">
                            <Image
                                src="/contact/mechanic-group.png"
                                alt="AutoGuru Mechanics"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="text-white py-12 lg:py-0 lg:pl-12">
                        <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                            We&apos;re here to help.
                        </h1>
                        <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
                            <p>
                                Our mission at AutoGuru is to help people better care for their
                                cars.
                            </p>
                            <p className="text-base md:text-lg text-gray-200">
                                So whether you&apos;re a customer trying to{" "}
                                <Link href="/" className="underline hover:text-white transition-colors">
                                    find and book a trusted repairer
                                </Link>
                                ; or a service provider looking to attract, quote and book
                                customers 24/7 or process fleet jobs, we&apos;re here to help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
