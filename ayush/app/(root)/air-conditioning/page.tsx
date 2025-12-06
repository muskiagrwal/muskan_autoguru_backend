"use client";

import React from "react";
import IntroSection from "@/components/shared/IntroSection";
import DirectorySection from "@/components/shared/DirectorySection";
import FaqSection from "@/components/shared/FaqSection";
import ExploreInsights from "@/components/mechanics/ExploreInsights";
import RunningReviews from "@/components/mechanics/RunningReviews";
import CommonRepairs from "@/components/car-battery/CommonRepairs";
import {
    AIR_CONDITIONING_ARTICLES,
    AIR_CONDITIONING_FAQS,
    COMMON_AIR_CONDITIONING_REPAIRS,
    RECENT_REVIEWS,
    LOCATIONS
} from "@/lib/constants";

const AirConditioningPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Intro Section */}
            <IntroSection
                image="/car-service/air-conditioning.png"
                title="Expert Car Air Conditioning Services"
                description="Stay comfortable on the road with a fully functioning air conditioning system. Our qualified mechanics can perform re-gas, leak detection, and repairs to keep your AC running cold."
                subDescription="Enter your vehicle details to compare quotes from local experts."
            />

            {/* Common Repairs Section */}
            <CommonRepairs
                title="Common Air Conditioning Services"
                repairs={COMMON_AIR_CONDITIONING_REPAIRS}
            />

            {/* Explore Insights Section */}
            <ExploreInsights articles={AIR_CONDITIONING_ARTICLES} />

            {/* FAQ Section */}
            <FaqSection
                faqs={AIR_CONDITIONING_FAQS}
            />

            {/* Running Reviews Section */}
            <RunningReviews reviews={RECENT_REVIEWS} />

            {/* Directory Section */}
            <DirectorySection
                title="Find an AC specialist near you"
                locations={LOCATIONS}
                baseUrl="/air-conditioning"
            />
        </div>
    );
};

export default AirConditioningPage;
