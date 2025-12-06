"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Faq {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title?: string;
    subtitle?: string;
    faqs: Faq[];
}

const FaqSection: React.FC<FaqSectionProps> = ({
    title = "Do you have questions?",
    subtitle = "Here's what everyone else is asking!",
    faqs
}) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-lg font-medium text-gray-600 mb-2">{title}</h2>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">
                    {subtitle}
                </h3>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
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
    );
};

export default FaqSection;
