import React from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";

interface Repair {
    id: number;
    title: string;
    image: string;
}

interface CommonRepairsProps {
    title: string;
    repairs: Repair[];
}

const CommonRepairs: React.FC<CommonRepairsProps> = ({ title, repairs }) => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <h2 className="text-3xl font-serif text-gray-900">{title}</h2>
                    <Wrench className="w-6 h-6 text-blue-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {repairs.map((repair) => (
                        <div
                            key={repair.id}
                            className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                        >
                            <Image
                                src={repair.image}
                                alt={repair.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {repair.title}
                                </h3>
                                <div className="h-1 w-12 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommonRepairs;
