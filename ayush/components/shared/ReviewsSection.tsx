import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Review {
    id: number;
    customer: string;
    car: string;
    mechanic: string;
    rating: number;
    date: string;
    review: string;
    image: string;
}

interface ReviewsSectionProps {
    title: string;
    reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ title, reviews }) => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-3xl font-light text-gray-900 mb-12">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="relative w-16 h-10 rounded overflow-hidden flex-shrink-0">
                                    <Image
                                        src={review.image}
                                        alt={review.car}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900">{review.customer}</h4>
                                    <p className="text-xs text-gray-500">{review.car}</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <h5 className="font-bold text-sm text-gray-900 mb-1">{review.mechanic}</h5>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                fill={i < review.rating ? "currentColor" : "none"}
                                                className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400">• {review.date}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                                "{review.review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
