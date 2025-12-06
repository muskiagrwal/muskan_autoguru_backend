import React from 'react';
import Link from 'next/link';

interface Quote {
    id: string;
    carName: string;
    location: string;
    distance: string;
    supplierName: string;
    services: string[];
    price: number;
    rating: number;
    reviews: number;
    image: string;
}

interface ServiceQuoteListProps {
    makeName: string;
    modelName: string;
    interval: string;
}

const ServiceQuoteList = ({ makeName, modelName, interval }: ServiceQuoteListProps) => {
    // Mock data based on the screenshot
    const quotes: Quote[] = [
        {
            id: '1',
            carName: `2002 ${makeName.toUpperCase()} ${modelName.toUpperCase()}`,
            location: 'Virginia',
            distance: '19 April 2010', // Using date as placeholder for "Reviewed" text in screenshot
            supplierName: 'Redline Auto Engineers',
            services: ['Logbook Service', interval],
            price: 179.58,
            rating: 5,
            reviews: 12,
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=150&q=80'
        },
        {
            id: '2',
            carName: `2005 ${makeName.toUpperCase()} ${modelName.toUpperCase()}`,
            location: 'Belconnen',
            distance: '10 April 2010',
            supplierName: 'The Car Doctor',
            services: ['Logbook Service', interval],
            price: 185.00,
            rating: 4.5,
            reviews: 8,
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=150&q=80'
        },
        {
            id: '3',
            carName: `2005 ${makeName.toUpperCase()} ${modelName.toUpperCase()}`,
            location: 'Highton',
            distance: '10 November 2009',
            supplierName: 'Righton Automotive Services',
            services: ['Logbook Service', interval],
            price: 190.45,
            rating: 4.8,
            reviews: 24,
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=150&q=80'
        }
    ];

    return (
        <div className="space-y-4">
            <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900">See our best priced {makeName} {modelName} service quotes below</h2>
                <div className="flex justify-center items-center mt-2">
                    <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">4.7 stars based on 2,689 reviews for {makeName} {modelName} services and repairs</p>
            </div>

            {quotes.map((quote) => (
                <div key={quote.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition-shadow">

                    {/* Left: Details */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div className="text-xs text-gray-500 flex items-center gap-2">
                                <span>📅 Reviewed - {quote.distance}</span>
                                <span>📍 {quote.location}</span>
                            </div>
                        </div>

                        <h3 className="font-bold text-sm text-gray-900 mb-1">{quote.carName}</h3>

                        <div className="text-sm mb-1">
                            <span className="text-gray-600">Auto supplier - </span>
                            <Link href="#" className="text-blue-600 hover:underline font-medium">
                                {quote.supplierName}
                            </Link>
                        </div>

                        <div className="text-sm mb-1">
                            <span className="text-gray-600">Services - </span>
                            <span className="text-gray-800">{quote.services.join(' - ')}</span>
                        </div>

                        <div className="text-sm font-bold text-gray-900 mt-2">
                            Price - ${quote.price.toFixed(2)} Inc GST
                        </div>

                        <div className="mt-3">
                            <Link href="#" className="text-blue-600 text-sm font-medium hover:underline">
                                Get a quote for your car
                            </Link>
                        </div>
                    </div>

                    {/* Right: Car Image */}
                    <div className="w-full md:w-48 flex-shrink-0 flex items-center justify-center">
                        <img
                            src={quote.image}
                            alt={quote.carName}
                            className="w-full h-auto object-contain max-h-32"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceQuoteList;
