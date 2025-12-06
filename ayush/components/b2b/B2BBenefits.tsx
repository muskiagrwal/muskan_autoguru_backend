import React from 'react';
import { TrendingUp, ShieldCheck, Smartphone, Users, DollarSign, Headphones } from 'lucide-react';

const benefits = [
    {
        icon: TrendingUp,
        title: "Business Growth",
        description: "Expand your customer base instantly. Our partners see an average of 30% increase in bookings within the first 3 months."
    },
    {
        icon: Smartphone,
        title: "Smart Technology",
        description: "Get access to our state-of-the-art dashboard to manage bookings, track earnings, and communicate with customers effortlessly."
    },
    {
        icon: ShieldCheck,
        title: "Verified Trust",
        description: "Join a network of vetted professionals. Our strict verification process builds trust with customers before they even book."
    },
    {
        icon: DollarSign,
        title: "Guaranteed Payments",
        description: "Say goodbye to chasing invoices. We secure payments upfront, ensuring you get paid on time, every time."
    },
    {
        icon: Users,
        title: "Dedicated Support",
        description: "Our local Australian support team is here to help you succeed, from onboarding to daily operations."
    },
    {
        icon: Headphones,
        title: "Marketing Included",
        description: "We handle the SEO, advertising, and brand building so you can focus on what you do best - fixing cars."
    }
];

const B2BBenefits = () => {
    return (
        <section id="benefits" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Why Partner with AutoGuru?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We provide the tools, customers, and support you need to take your automotive business to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BBenefits;
