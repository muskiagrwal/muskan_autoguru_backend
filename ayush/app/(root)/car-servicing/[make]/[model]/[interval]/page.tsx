"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { carDetails } from "@/constants/carData";
import ServiceIntervals from "@/components/car-servicing/ServiceIntervals";
import ServiceQuoteList from "@/components/car-servicing/ServiceQuoteList";

const ServiceIntervalPage = () => {
    const params = useParams();
    const make = params.make as string;
    const model = params.model as string;
    const interval = decodeURIComponent(params.interval as string);

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
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {makeDetails.name} {modelDetails.name} - {interval} service costs
                    </h1>
                    <p className="text-gray-600 mt-2">Compare quotes so you know you are paying a fair price!</p>
                </div>

                <ServiceQuoteList
                    makeName={makeDetails.name}
                    modelName={modelDetails.name}
                    interval={interval}
                />

                <div className="mt-16 text-center">
                    <ServiceIntervals
                        makeName={makeDetails.name}
                        modelName={modelDetails.name}
                        intervals={modelDetails.serviceIntervals}
                    />
                </div>
            </div>

        </div>
    );
};

export default ServiceIntervalPage;
