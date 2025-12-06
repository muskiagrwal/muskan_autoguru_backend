"use client";

import React from "react";
import IntroSection from "@/components/shared/IntroSection";
import DirectorySection from "@/components/shared/DirectorySection";
import ContentGrid from "@/components/shared/ContentGrid";
import FaqSection from "@/components/shared/FaqSection";
import ExploreInsights from "@/components/mechanics/ExploreInsights";
import RunningReviews from "@/components/mechanics/RunningReviews";
import {
    MOBILE_MECHANIC_ARTICLES,
    MOBILE_MECHANIC_FAQS,
    RECENT_REVIEWS,
    LOCATIONS
} from "@/lib/constants";

const MobileMechanicPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Intro Section */}
            <IntroSection
                image="/car-guy.png"
                title="Expert Mobile Mechanics at Your Doorstep"
                description="Skip the workshop waiting room. Our qualified mobile mechanics come to your home or office to perform servicing and repairs, saving you time and hassle."
                subDescription="Enter your vehicle details to get an instant quote."
            />

            {/* Explore Insights Section */}
            <ExploreInsights articles={MOBILE_MECHANIC_ARTICLES} />

            {/* FAQ Section */}
            <FaqSection
                faqs={MOBILE_MECHANIC_FAQS}
            />


            {/* Running Reviews Section */}
            <RunningReviews reviews={RECENT_REVIEWS} />

            {/* Directory Section */}
            <DirectorySection
                title="Find a mobile mechanic near you"
                locations={LOCATIONS}
                baseUrl="/mobile-mechanic"
            />




        </div>
    );
};

export default MobileMechanicPage;
