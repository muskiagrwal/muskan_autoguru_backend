import Link from "next/link";

interface ModelComparisonProps {
    makeName: string;
    popularModels: { name: string; image: string; slug?: string }[];
    otherModels: string[];
}

const ModelComparison = ({ makeName, popularModels, otherModels }: ModelComparisonProps) => {
    return (
        <div className="py-12 border-t border-gray-200">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Compare {makeName} car service costs</h2>
                <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-500 font-semibold uppercase">Average Customer Rating</span>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">4.7</span>
                    <span className="text-sm text-gray-500">• 10411 reviews</span>
                </div>
            </div>

            {/* Popular Models Grid */}
            {popularModels && popularModels.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {popularModels.map((model, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">
                            {model.slug ? (
                                <Link href={`/car-servicing/${makeName.toLowerCase()}/${model.slug}`} className="contents">
                                    <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{model.name}</span>
                                </Link>
                            ) : (
                                <>
                                    <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{model.name}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* OR Separator */}
            <div className="relative flex py-5 items-center mb-8">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 uppercase text-sm">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Other Models List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                {otherModels.map((model, index) => (
                    <a key={index} href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors text-sm">
                        {model}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ModelComparison;
