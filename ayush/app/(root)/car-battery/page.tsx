"use client";

import React from "react";
import IntroSection from "@/components/shared/IntroSection";
import DirectorySection from "@/components/shared/DirectorySection";
import ContentGrid from "@/components/shared/ContentGrid";
import FaqSection from "@/components/shared/FaqSection";
import ExploreInsights from "@/components/mechanics/ExploreInsights";
import RunningReviews from "@/components/mechanics/RunningReviews";
import CommonRepairs from "@/components/car-battery/CommonRepairs";
import {
  CAR_BATTERY_ARTICLES,
  CAR_BATTERY_FAQS,
  COMMON_BATTERY_REPAIRS,
  RECENT_REVIEWS,
  LOCATIONS
} from "@/lib/constants";

const CarBatteryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <IntroSection
        image="/car-service/car-battery.jpg"
        title="Find a local battery specialist with AutoGuru"
        description="Find and compare battery specialists in one convenient place. We are the quickest way to get quotes from local experts. You can even Book Now, Pay Later with convenient payment options such as Afterpay, humm and Zip, how good is that!"
        subDescription="Enter your car and location details and we'll take care of the rest. Too easy!"
      />

      {/* Common Repairs Section */}
      <CommonRepairs
        title="Common Battery Repairs"
        repairs={COMMON_BATTERY_REPAIRS}
      />

      {/* Explore Insights Section */}
      <ExploreInsights articles={CAR_BATTERY_ARTICLES} />


      {/* FAQ Section */}
      <FaqSection
        faqs={CAR_BATTERY_FAQS}
      />

      {/* Running Reviews Section */}
      <RunningReviews reviews={RECENT_REVIEWS} />

      {/* Directory Section */}
      <DirectorySection
        title="Find a battery specialist near you"
        locations={LOCATIONS}
        baseUrl="/car-battery"
      />

    </div>
  );
};

export default CarBatteryPage;