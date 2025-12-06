"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Wrench, PiggyBank, AlertTriangle } from "lucide-react";
import NeedARepair from "@/components/general/NeedARepair";
import { CAR_ADVICE_TIPS, CAR_ADVICE_ARTICLES, CAR_ADVICE_FAQS } from "@/lib/constants";

const CarAdvicePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench": return <Wrench className="w-6 h-6 text-blue-600" />;
      case "PiggyBank": return <PiggyBank className="w-6 h-6 text-blue-600" />;
      case "AlertTriangle": return <AlertTriangle className="w-6 h-6 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Search Section */}
      <NeedARepair pageType="car-advice" />

      {/* Intro Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/hero/hero-car-1.avif"
              alt="Mechanic giving advice"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Expert Car Advice & Tips
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Keeping your car running smoothly doesn't have to be a mystery. Our expert advice helps you understand your vehicle better, save money on repairs, and make informed decisions. From routine maintenance to troubleshooting common issues, we've got you covered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Browse our curated tips and articles below to learn more about car care, safety, and how to get the most out of your vehicle. If you're unsure about anything, our network of certified mechanics is always here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl font-light text-gray-900 mb-12">
            Essential Car Care Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAR_ADVICE_TIPS.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {getIcon(section.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.category}</h3>
                </div>
                <ul className="space-y-4">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
                      <span className="mr-3 text-blue-400 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-gray-700 mb-12 uppercase tracking-wide">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAR_ADVICE_ARTICLES.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-[10px] text-white font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-500">By {article.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600 mb-2">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900">
            Expert Answers
          </h3>
        </div>

        <div className="space-y-4">
          {CAR_ADVICE_FAQS.map((faq, index) => (
            <div key={index} className="bg-blue-50/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-700">{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarAdvicePage;