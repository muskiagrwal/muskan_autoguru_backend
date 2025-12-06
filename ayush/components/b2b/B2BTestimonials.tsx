import React from 'react';
import { Star } from 'lucide-react';

const B2BTestimonials = () => {
    const testimonials = [
        {
            name: "Mike Thompson",
            business: "Thompson Auto Repair",
            quote: "Since joining AutoGuru, our booking volume has increased by 40%. The platform is easy to use and payments are always on time.",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            business: "City Mobile Mechanics",
            quote: "The best part is the quality of customers. They are serious about getting their cars fixed, which saves us time on quotes that go nowhere.",
            rating: 5
        },
        {
            name: "David Chen",
            business: "Express Tune & Service",
            quote: "Support team is fantastic. Whenever we have an issue, they sort it out immediately. Highly recommended for any workshop.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from mechanics who are growing their business with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.business}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BTestimonials;
