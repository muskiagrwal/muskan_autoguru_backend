"use client";

import { useState } from "react";

interface ServiceLocationsProps {
    makeName: string;
    serviceCentres: Record<string, string[]>;
    mobileMechanics: Record<string, string[]>;
}

const ServiceLocations = ({ makeName, serviceCentres, mobileMechanics }: ServiceLocationsProps) => {
    const [activeTab, setActiveTab] = useState("NSW");
    const states = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];

    return (
        <div className="py-12 border-t border-gray-200">
            {/* Service Centres Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{makeName} Service Centres in Australia</h2>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                    {states.map((state) => (
                        <button
                            key={state}
                            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === state
                                    ? "border-b-2 border-gray-900 text-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab(state)}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                    {serviceCentres[activeTab]?.map((location, index) => (
                        <a key={index} href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors text-sm">
                            {location}
                        </a>
                    ))}
                    {!serviceCentres[activeTab] && (
                        <p className="text-gray-500 italic col-span-4">No service centres listed for {activeTab}.</p>
                    )}
                </div>
            </div>

            {/* Mobile Mechanics Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{makeName} Mobile Mechanics in Australia</h2>

                {/* Tabs (Reuse activeTab for simplicity, or could have separate state) */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                    {states.map((state) => (
                        <button
                            key={`mobile-${state}`}
                            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === state
                                    ? "border-b-2 border-gray-900 text-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab(state)}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                    {mobileMechanics[activeTab]?.map((location, index) => (
                        <a key={index} href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors text-sm">
                            {location}
                        </a>
                    ))}
                    {!mobileMechanics[activeTab] && (
                        <p className="text-gray-500 italic col-span-4">No mobile mechanics listed for {activeTab}.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceLocations;
