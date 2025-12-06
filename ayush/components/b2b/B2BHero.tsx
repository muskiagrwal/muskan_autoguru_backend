import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const B2BHero = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Grow Your Auto Business with <span className="text-blue-400">AutoGuru</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-xl">
                            Join Australia's leading network of verified mechanics. Get access to thousands of customers, streamlined booking tools, and guaranteed payments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/b2b/register"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
                            >
                                Partner With Us
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#benefits"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/20 rounded-lg hover:bg-white/10 transition-all"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>Verified Partners</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>Guaranteed Payment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1530046339160-ce3e41600f2f?auto=format&fit=crop&q=80"
                            alt="Mechanic working on car"
                            className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                        />

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                                    $
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Average Partner Earnings</p>
                                    <p className="text-2xl font-bold">$12,500<span className="text-sm font-normal text-gray-400">/mo</span></p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                            </div>
                            <p className="text-xs text-green-600 mt-2 font-medium">+24% growth vs industry avg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default B2BHero;
