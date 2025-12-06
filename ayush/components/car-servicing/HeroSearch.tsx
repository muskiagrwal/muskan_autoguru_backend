"use client";

interface HeroSearchProps {
    makeName: string;
    modelName?: string;
}

const HeroSearch = ({ makeName, modelName }: HeroSearchProps) => {
    return (
        <div className="bg-[#00d68f] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Title & Subtitle */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {modelName
                        ? `Need a ${modelName} car service?`
                        : `Find the best ${makeName} mechanics near you`}
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                    {modelName
                        ? `Instantly book Australia's best ${makeName} mechanics and save.`
                        : "Get free quote, book online and save."}
                </p>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto bg-white rounded-lg p-1 flex flex-col md:flex-row shadow-lg mb-12">
                    {/* Make Input */}
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {/* Optional Icon */}
                        </div>
                        <select
                            className="block w-full pl-4 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm rounded-l-md text-gray-900 appearance-none bg-transparent"
                            defaultValue={makeName}
                        >
                            <option>{makeName}</option>
                            {/* Add more options if needed */}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Model Input */}
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 relative">
                        <select
                            className="block w-full pl-4 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm text-gray-900 appearance-none bg-transparent"
                            defaultValue={modelName || ""}
                        >
                            <option value="" disabled>{modelName ? modelName : "Which model?"}</option>
                            {modelName && <option value={modelName}>{modelName}</option>}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Postcode Input */}
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            className="block w-full pl-4 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm text-gray-900 rounded-r-md"
                            placeholder="Postcode or Suburb"
                        />
                    </div>

                    {/* Button */}
                    <div className="p-1">
                        <button className="w-full md:w-auto bg-[#1f2132] text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors h-full">
                            Let's go!
                        </button>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-200 p-2 rounded-full">
                            <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm">Australia's #1 booking site</p>
                            <p className="text-xs text-gray-600">for car services & car repairs</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-pink-200 p-2 rounded-full">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm">Book now, pay later</p>
                            <p className="text-xs text-gray-600">Interest-free payments</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-blue-200 p-2 rounded-full">
                            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm">Transparent prices</p>
                            <p className="text-xs text-gray-600">no surprises</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSearch;
