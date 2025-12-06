import React from "react";
import Image from "next/image";

interface IntroSectionProps {
    image: string;
    title: string;
    description: string;
    subDescription?: string;
    imageAlt?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
    image,
    title,
    description,
    subDescription,
    imageAlt = "Intro image",
}) => {
    return (
        <section className="my-8 py-10 lg:my-10  max-w-7xl mx-auto px-6 lg:px-8 rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] w-full">
                    {/* Car Image - Background */}
                    <div className="absolute -right-10 bottom-10 w-[80%] h-[90%] z-0">
                        <Image
                            src="/mechanic/car.png"
                            alt="Car"
                            fill
                            className="object-contain object-right-bottom"
                            style={{ transform: "scaleX(-1)" }}
                        />
                    </div>
                    {/* Mechanic Image - Foreground */}
                    <div className="absolute left-0 bottom-0 w-[80%] h-[90%] z-10">
                        <Image
                            src="/mechanic/mechanic.png"
                            alt="Mechanic"
                            fill
                            className="object-contain object-left-bottom"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {title}
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>
                    {subDescription && (
                        <p className="text-gray-600 leading-relaxed">
                            {subDescription}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
