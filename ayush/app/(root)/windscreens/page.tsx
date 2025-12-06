"use client";

import React from "react";
import IntroSection from "@/components/shared/IntroSection";
import DirectorySection from "@/components/shared/DirectorySection";
import FaqSection from "@/components/shared/FaqSection";
import ExploreInsights from "@/components/mechanics/ExploreInsights";
import RunningReviews from "@/components/mechanics/RunningReviews";
import CommonRepairs from "@/components/car-battery/CommonRepairs";
import {
  WINDSCREEN_ARTICLES,
  WINDSCREEN_FAQS,
  COMMON_WINDSCREEN_REPAIRS,
  RECENT_REVIEWS,
  LOCATIONS
} from "@/lib/constants";

const WindscreensPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <IntroSection
        image="/car-service/auto-glass.jpg"
        title="Expert Windscreen Repair & Replacement"
        description="Don't let a chipped or cracked windscreen compromise your safety. Our network of auto glass specialists can repair or replace your windscreen quickly and affordably, often at your home or workplace."
        subDescription="Enter your vehicle details to get an instant quote."
      />

      {/* Common Repairs Section */}
      <CommonRepairs
        title="Common Windscreen Services"
        repairs={COMMON_WINDSCREEN_REPAIRS}
      />

      {/* Explore Insights Section */}
      <ExploreInsights articles={WINDSCREEN_ARTICLES} />

      {/* FAQ Section */}
      <FaqSection
        faqs={WINDSCREEN_FAQS}
      />

      {/* Running Reviews Section */}
      <RunningReviews reviews={RECENT_REVIEWS} />

      {/* Directory Section */}
      <DirectorySection
        title="Find a windscreen specialist near you"
        locations={LOCATIONS}
        baseUrl="/windscreens"
      />
    </div>
  );
};

export default WindscreensPage;