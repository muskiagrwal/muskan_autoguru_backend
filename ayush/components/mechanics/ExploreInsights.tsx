import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
    id: number;
    title: string;
    author: string;
    category: string;
    image: string;
}

interface ExploreInsightsProps {
    articles: Article[];
}

const ExploreInsights: React.FC<ExploreInsightsProps> = ({ articles }) => {
    // Group articles by category
    const articlesByCategory = articles.reduce((acc, article) => {
        if (!acc[article.category]) {
            acc[article.category] = [];
        }
        acc[article.category].push(article);
        return acc;
    }, {} as Record<string, Article[]>);

    return (
        <section className="bg-black py-16 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Right Column - Content */}
                    <div className="space-y-8 w-full">
                        <div className="flex items-center gap-4 mb-16 group cursor-pointer">
                            <h2 className="text-3xl font-serif">Explore More Insights</h2>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>

                        {Object.entries(articlesByCategory).map(([category, articles]) => (
                            <div key={category}>
                                <h3 className="text-sm font-bold tracking-wider text-gray-400 mb-8 uppercase">
                                    {category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {articles.map((article) => (
                                        <Link href="#" key={article.id} className="group block h-full">
                                            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                                                <div className="relative h-32 w-full">
                                                    <Image
                                                        src={article.image}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-3 flex flex-col flex-grow">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                                                        {article.title}
                                                    </h4>
                                                    <div className="mt-auto flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-bold">
                                                            {article.author.substring(0, 2).toUpperCase()}
                                                        </div>
                                                        <span className="text-sm text-gray-600 font-medium">
                                                            By {article.author}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreInsights;
