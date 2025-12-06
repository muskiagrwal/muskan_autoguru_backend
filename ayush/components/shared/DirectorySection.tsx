"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Location {
    state: string;
    suburbs: string[];
}

interface DirectorySectionProps {
    title: string;
    locations: Location[];
    baseUrl: string;
}

const DirectorySection: React.FC<DirectorySectionProps> = ({ title, locations, baseUrl }) => {
    const [activeState, setActiveState] = useState(locations[0]?.state || "NSW");

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                    {locations.map((loc) => (
                        <button
                            key={loc.state}
                            onClick={() => setActiveState(loc.state)}
                            className={`px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeState === loc.state
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {loc.state}
                        </button>
                    ))}
                </div>

                {/* Location List */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {locations.find(l => l.state === activeState)?.suburbs.map((suburb) => (
                        <Link
                            key={suburb}
                            href={`${baseUrl}/${activeState.toLowerCase()}/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {suburb}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DirectorySection;
