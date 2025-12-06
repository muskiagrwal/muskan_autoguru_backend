"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { carDetails } from "@/constants/carData";
import ServiceIntervals from "@/components/car-servicing/ServiceIntervals";
import ModelSidebarLeft from "@/components/car-servicing/ModelSidebarLeft";
import ModelSidebarRight from "@/components/car-servicing/ModelSidebarRight";

const CarModelPage = () => {
    const params = useParams();
    const make = params.make as string;
    const model = params.model as string;

    const makeDetails = carDetails[make];
    const modelDetails = makeDetails?.models?.[model];

    if (!makeDetails || !modelDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Model Not Found</h1>
                    <p className="text-gray-600 mb-8">Sorry, we don't have details for this car model yet.</p>
                    <Link href={`/car-servicing/${make}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to {makeDetails?.name || "Car Servicing"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Sidebar */}
                    <div className="lg:w-1/4">
                        <ModelSidebarLeft
                            makeName={makeDetails.name}
                            modelName={modelDetails.name}
                            image={modelDetails.image}
                            rating={modelDetails.rating}
                            quotesProvided={modelDetails.quotesProvided}
                            expertMechanics={modelDetails.expertMechanics}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">What else should I know about {modelDetails.name}?</h1>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>
                                The <span className="text-blue-600 font-medium">{makeDetails.name}</span> {modelDetails.description.replace(`The ${makeDetails.name} `, '')}
                            </p>
                        </div>

                        <ServiceIntervals
                            makeName={makeDetails.name}
                            modelName={modelDetails.name}
                            intervals={modelDetails.serviceIntervals}
                        />
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/4">
                        <ModelSidebarRight />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarModelPage;
