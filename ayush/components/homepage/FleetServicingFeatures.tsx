import React from "react";
import { Phone, ArrowDown, Zap, HandCoins } from "lucide-react";

const FleetServicingFeatures = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                        One portal to make fleet servicing easy.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Feature 1: Fewer calls */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative mb-2">
                            <Phone className="w-12 h-12 text-red-500 fill-red-500" />
                            <ArrowDown className="w-8 h-8 text-red-500 absolute -bottom-4 left-1/2 -translate-x-1/2 stroke-[3px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Fewer calls
                            </h3>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto leading-relaxed">
                                95% reduction in fleet approval calls
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Quicker approvals */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="mb-2">
                            <Zap className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Quicker approvals
                            </h3>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto leading-relaxed">
                                Bookings can be managed online
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Faster payment */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="mb-2">
                            <HandCoins className="w-12 h-12 text-yellow-600 stroke-1" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Faster payment
                            </h3>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto leading-relaxed">
                                Get paid within days instead of weeks or months
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetServicingFeatures;
