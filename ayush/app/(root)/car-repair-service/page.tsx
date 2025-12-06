"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAR_REPAIR_SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/car-repair/ServiceCard";
import ServicesOffered from "@/components/homepage/ServicesOffered";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeServiceRepairingPage = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Animation for hero section
    if (sectionRefs.hero.current) {
      gsap.fromTo(
        sectionRefs.hero.current.querySelectorAll('h1, p'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRefs.hero.current,
            start: "top 80%",
          }
        }
      );
    }

    // Animation for services section
    if (sectionRefs.services.current) {
      gsap.fromTo(
        sectionRefs.services.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRefs.services.current,
            start: "top 85%",
          }
        }
      );
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-100" ref={sectionRefs.hero}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Car Repairs
            </h1>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16" ref={sectionRefs.services}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAR_REPAIR_SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ServicesOffered />
    </div>
  );
};

export default HomeServiceRepairingPage;