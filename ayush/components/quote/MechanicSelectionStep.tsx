import React, { useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { ChevronLeft, Star, MapPin, Check, ShieldCheck } from 'lucide-react';
import QuoteSidebar from './QuoteSidebar';
import { useQuoteStore } from '@/store/useQuoteStore';

// Mock data for mechanics
const MOCK_MECHANICS = [
    {
        id: 1,
        name: "AutoGuru Premium Center",
        rating: 4.9,
        reviews: 128,
        distance: "2.5 km",
        address: "123 Service Rd, Sydney",
        price: 180,
        features: ["Certified", "Warranty", "Lounge"],
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        id: 2,
        name: "Mike's Mobile Mechanics",
        rating: 4.7,
        reviews: 85,
        distance: "Mobile Service",
        address: "We come to you",
        price: 210,
        features: ["Mobile", "Contactless"],
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        id: 3,
        name: "Sydney City Garage",
        rating: 4.5,
        reviews: 243,
        distance: "5.1 km",
        address: "45 Pitt St, Sydney",
        price: 165,
        features: ["Express Service"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

const MechanicSelectionStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;
    const { vehicle, tasks } = useQuoteStore();
    const [selectedMechanic, setSelectedMechanic] = useState<number | null>(null);

    const handleBack = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'customer-details-step2');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleSelectMechanic = (mechanicId: number) => {
        setSelectedMechanic(mechanicId);
    };

    const handleContinue = () => {
        if (!selectedMechanic) return;
        // Proceed to booking confirmation or payment
        // For now, we'll just alert or redirect to a confirmation page
        alert(`Mechanic ${selectedMechanic} selected! Proceeding to confirmation...`);
        // router.push(`/quote/${quoteId}/confirmation`); // Example
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <button
                onClick={handleBack}
                className="flex items-center text-[#00D09C] font-medium mb-6 hover:underline"
            >
                <ChevronLeft className="w-5 h-5" /> Back
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Main Content */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-[#1C2B39] mb-2">
                        Select your mechanic
                    </h1>
                    <p className="text-gray-600 mb-8">
                        We found these top-rated mechanics near you for your {vehicle?.make} {vehicle?.model}.
                    </p>

                    <div className="space-y-4">
                        {MOCK_MECHANICS.map((mechanic) => (
                            <div
                                key={mechanic.id}
                                onClick={() => handleSelectMechanic(mechanic.id)}
                                className={`bg-white rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                                    ${selectedMechanic === mechanic.id ? 'border-[#00D09C] bg-green-50/30' : 'border-gray-100'}
                                `}
                            >
                                <div className="flex items-start gap-4">
                                    <img
                                        src={mechanic.image}
                                        alt={mechanic.name}
                                        className="w-20 h-20 rounded-lg object-cover bg-gray-100"
                                    />

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">{mechanic.name}</h3>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    <span className="font-bold text-gray-900">{mechanic.rating}</span>
                                                    <span className="text-gray-500 text-sm">({mechanic.reviews} reviews)</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-[#1C2B39]">${mechanic.price}</div>
                                                <div className="text-xs text-gray-500">Fixed Price</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                {mechanic.distance} - {mechanic.address}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {mechanic.features.map((feature, idx) => (
                                                <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                                                    <ShieldCheck className="w-3 h-3 mr-1 text-[#00D09C]" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1
                                        ${selectedMechanic === mechanic.id ? 'border-[#00D09C] bg-[#00D09C]' : 'border-gray-300'}
                                    `}>
                                        {selectedMechanic === mechanic.id && <Check className="w-4 h-4 text-white" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sticky bottom-4 bg-white p-4 border-t border-gray-100 shadow-lg lg:shadow-none lg:border-0 lg:static lg:p-0">
                        <button
                            onClick={handleContinue}
                            disabled={!selectedMechanic}
                            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-colors
                                ${selectedMechanic
                                    ? 'bg-[#00D09C] text-white hover:bg-[#00b88a]'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                            `}
                        >
                            Book Selected Mechanic
                        </button>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar showGetQuotes={false} />
            </div>
        </div>
    );
};

export default MechanicSelectionStep;
