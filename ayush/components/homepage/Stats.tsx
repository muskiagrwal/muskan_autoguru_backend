"use client";
import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600">2500+</div>
            <div className="mt-2 text-lg text-gray-600">Service Providers</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600">500K+</div>
            <div className="mt-2 text-lg text-gray-600">Jobs Completed</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600">4.8<span className="text-lg">/5</span></div>
            <div className="mt-2 text-lg text-gray-600">Customer Rating</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600">100%</div>
            <div className="mt-2 text-lg text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;