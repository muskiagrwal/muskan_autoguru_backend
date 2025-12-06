"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HowItWorks = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for how it works section
    if (howItWorksRef.current) {
      gsap.fromTo(
        howItWorksRef.current.querySelectorAll('.step-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50" ref={howItWorksRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fadeIn">
            How it works
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto animate-fadeIn delay-100">
            Getting your car serviced has never been easier
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="step-card text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tell us what you need</h3>
              <p className="text-gray-500">
                Select service type, enter vehicle details and describe your car's needs.
              </p>
            </div>

            <div className="step-card text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Choose a provider</h3>
              <p className="text-gray-500">
                Compare quotes from trusted mechanics in your area.
              </p>
            </div>

            <div className="step-card text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Pick a time & place</h3>
              <p className="text-gray-500">
                Select a convenient date and time that works for you.
              </p>
            </div>

            <div className="step-card text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                4
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Get your car serviced</h3>
              <p className="text-gray-500">
                Relax as certified mechanics take care of your car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;