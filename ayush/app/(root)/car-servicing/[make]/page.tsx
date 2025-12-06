"use client";

import { useParams } from "next/navigation";
import { carDetails } from "@/constants/carData";
import Link from "next/link";

import ServiceCosts from "@/components/car-servicing/ServiceCosts";
import ModelComparison from "@/components/car-servicing/ModelComparison";
import CommonRepairs from "@/components/car-servicing/CommonRepairs";
import ServiceLocations from "@/components/car-servicing/ServiceLocations";

const CarMakePage = () => {
    const params = useParams();
    const make = params.make as string;
    const details = carDetails[make];

    if (!details) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Not Found</h1>
                    <p className="text-gray-600 mb-8">Sorry, we don't have details for this car make yet.</p>
                    <Link href="/car-servicing" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to Car Servicing
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{details.name}</h1>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p className="mb-6">{details.description}</p>
                            <p className="mb-6">{details.serviceGuide}</p>
                            {details.facts && (
                                <p>
                                    <span className="font-bold text-gray-900">{details.name} facts:</span> {details.facts}
                                </p>
                            )}
                        </div>

                        <ServiceCosts makeName={details.name} costs={details.serviceCosts} />

                        <ModelComparison
                            makeName={details.name}
                            popularModels={details.popularModels || []}
                            otherModels={details.otherModels || []}
                        />

                        <CommonRepairs makeName={details.name} repairs={details.commonRepairs || []} />

                        <ServiceLocations
                            makeName={details.name}
                            serviceCentres={details.serviceCentres || {}}
                            mobileMechanics={details.mobileMechanics || {}}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to:</h3>
                            <ul className="space-y-3">
                                {details.links.map((link: string, index: number) => (
                                    <li key={index}>
                                        <a href="#" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors block py-1">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                                {details.links.length === 0 && (
                                    <li className="text-gray-500 italic">No quick links available.</li>
                                )}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-2">Need help?</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Our team is here to assist you with any questions about servicing your {details.name}.
                                </p>
                                <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarMakePage;
