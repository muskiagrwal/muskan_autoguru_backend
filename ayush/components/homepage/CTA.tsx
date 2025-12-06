"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for CTA section
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8" ref={ctaRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fadeIn">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
            Book your car service or repair in minutes with our easy-to-use platform
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-service"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Book a Service
            </Link>
            <Link
              href="/book-repair"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Book a Repair
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;