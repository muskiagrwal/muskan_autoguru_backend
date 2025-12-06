import React from "react";
import SearchHero from "@/components/general/SearchHero";
import DynamicBreadcrumbs from "@/components/general/DynamicBreadcrumbs";

export default function AirConditioningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <SearchHero
                title="Car Air Conditioning Service & Repair"
                subtitle="Keep your cool with a car air conditioning service"
                backgroundImage="/car-service/air-conditioning.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <DynamicBreadcrumbs />
            </div>
            {children}
        </div>
    );
}
