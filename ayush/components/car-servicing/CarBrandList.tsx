import Link from "next/link";
import { carBrands } from "@/constants/carData";

const CarBrandList = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Compare car service quotes on the most popular car makes
                    </h2>
                    <div className="mt-4 flex justify-center items-center space-x-2">
                        <span className="text-sm font-bold text-gray-500 tracking-wide uppercase">Average Customer Rating</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-800 font-semibold">4.8 • 140,252 REVIEWS</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {carBrands.map((brand) => (
                        <Link
                            key={brand.slug}
                            href={`/car-servicing/${brand.slug}`}
                            className="group flex items-center justify-center p-4 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span className="text-gray-900 font-semibold text-lg group-hover:text-white transition-colors">
                                {brand.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarBrandList;
