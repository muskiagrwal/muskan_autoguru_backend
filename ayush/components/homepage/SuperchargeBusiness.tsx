import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SuperchargeBusiness = () => {
    return (
        <section className="max-w-7xl  mx-auto py-32  bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Banner Image */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12 rounded-lg ">
                    <Image
                        src="/hero/super-charge-image.jpg"
                        alt="Modern auto repair workshop"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Supercharge your <br /> <span className="italic text-gray-600">auto repair business.</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-md font-light leading-relaxed">
                            Grow your online presence and manage digital bookings all in one
                            place with our premium partner tools.
                        </p>
                        <Link
                            href="/supplier/signup"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-black transition-all duration-300 group rounded-sm shadow-lg hover:shadow-xl"
                        >
                            Partner with us
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-l border-gray-200 pl-0 md:pl-8 lg:pl-12">
                        {/* Flexible Payments */}
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-sans font-medium text-gray-900">Flexible Payments</h3>
                            <p className="text-xs text-gray-400 max-w-[200px]">
                                Convert more customers with flexible payment options Afterpay, humm and Zip, online and in-store.
                            </p>
                        </div>

                        {/* Reserve with Google */}
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-xl font-bold text-gray-500">G</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-sans font-medium text-gray-600 uppercase tracking-wider">Reserve with</span>
                                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">Google</span>
                            </div>
                            <p className="text-xs text-gray-400 max-w-[200px]">
                                Make it easy for your customers to book directly from Google Search and Maps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperchargeBusiness;
