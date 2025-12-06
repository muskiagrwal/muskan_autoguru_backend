"use client";

import React from "react";
import IntroSection from "@/components/shared/IntroSection";
import DirectorySection from "@/components/shared/DirectorySection";
import ContentGrid from "@/components/shared/ContentGrid";
import FaqSection from "@/components/shared/FaqSection";
import ExploreInsights from "@/components/mechanics/ExploreInsights";
import RunningReviews from "@/components/mechanics/RunningReviews";
import {
  MECHANIC_ARTICLES,
  MECHANIC_FAQS,
  RECENT_REVIEWS,
  LOCATIONS
} from "@/lib/constants";

const MechanicsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Search Section - Moved to Layout */}

      {/* Intro Section */}
      <IntroSection
        image="/car-guy.png"
        title="Find the best mechanic for your next car service or repair with AutoGuru"
        description="AutoGuru simplifies the process of finding qualified mechanics across Australia. With clear pricing, verified service providers, and online booking, you can secure reliable automotive care with ease."
        subDescription="Select your region or enter your vehicle details to proceed."
      />

      {/* Explore Insights Section */}
      <ExploreInsights articles={MECHANIC_ARTICLES} />


      {/* FAQ Section */}
      <FaqSection
        faqs={MECHANIC_FAQS}
      />

      {/* Running Reviews Section */}
      <RunningReviews reviews={RECENT_REVIEWS} />

      {/* Directory Section */}
      <DirectorySection
        title="Find a mechanic near you"
        locations={LOCATIONS}
        baseUrl="/mechanics"
      />

    </div>
  );
};

export default MechanicsPage;