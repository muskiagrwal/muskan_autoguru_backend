import React from "react";
import Image from "next/image";

interface Article {
    id: number;
    title: string;
    author: string;
    category: string;
    image: string;
}

interface ContentGridProps {
    title?: string;
    articles: Article[];
    showPaymentCard?: boolean;
}

const ContentGrid: React.FC<ContentGridProps> = ({ title = "Want to know more?", articles, showPaymentCard = true }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-xl font-bold text-gray-700 mb-12 uppercase tracking-wide">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Flexible Payments Card */}
                    {showPaymentCard && (
                        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase">Flexible Payments</h3>
                            <div className="flex gap-4 items-center justify-center flex-wrap">
                                {/* Payment Logos (Placeholders) */}
                                <div className="bg-green-100 text-green-800 px-4 py-2 rounded font-bold">Afterpay</div>
                                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded font-bold">Humm</div>
                                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded font-bold">Zip</div>
                            </div>
                            <p className="text-xs text-gray-400 mt-8">*Available at select service providers. T&Cs apply.</p>
                        </div>
                    )}

                    {/* Articles */}
                    {articles.map((article) => (
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
    );
};

export default ContentGrid;
