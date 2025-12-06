import React from 'react';
import { ClipboardCheck, Wrench, Banknote } from 'lucide-react';

const B2BHowItWorks = () => {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "1. Apply Online",
            description: "Fill out our simple application form with your business details and required documents."
        },
        {
            icon: Wrench,
            title: "2. Get Verified",
            description: "Our team reviews your application to ensure you meet our quality standards."
        },
        {
            icon: Banknote,
            title: "3. Start Earning",
            description: "Once approved, you'll start receiving job requests from customers in your area."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Joining AutoGuru is straightforward. We've designed our process to get you up and running quickly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-blue-600 relative z-10">
                                <step.icon className="w-10 h-10" />
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BHowItWorks;
