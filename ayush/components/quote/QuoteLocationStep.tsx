import React, { useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { useQuoteStore } from '@/store/useQuoteStore';

const QuoteLocationStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;

    const { customer, setCustomerDetails } = useQuoteStore();
    const [location, setLocation] = useState(customer.location || '');
    const [isLocating, setIsLocating] = useState(false);

    const handleNext = () => {
        setCustomerDetails(customer.name, customer.mobile, location);

        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'vehicle-rego-check');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleLocationClick = async () => {
        if (!navigator.geolocation) {
            toast.error("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const data = await response.json();

                    const suburb = data.locality || data.city || data.principalSubdivision;
                    const postcode = data.postcode;

                    const locationString = [suburb, postcode].filter(Boolean).join(" ");

                    if (locationString) {
                        setLocation(locationString);
                        toast.success("Location detected successfully");
                    } else {
                        toast.error("Could not determine your location");
                    }
                } catch (error) {
                    console.error("Error fetching location:", error);
                    toast.error("Failed to fetch location details");
                } finally {
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                let errorMessage = "Failed to detect location";
                if (error.code === error.PERMISSION_DENIED) {
                    errorMessage = "Location permission denied";
                }
                toast.error(errorMessage);
                setIsLocating(false);
            }
        );
    };

    const nearbySuburbs = [
        { name: 'Kokatha', state: 'SA', postcode: '5717' },
        { name: 'Kolendo', state: 'SA', postcode: '5717' },
        { name: 'Lake Everard', state: 'SA', postcode: '5717' },
        { name: 'Mount Ive', state: 'SA', postcode: '5717' },
        { name: 'Siam', state: 'SA', postcode: '5717' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto p-6">
            {/* Left Content */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Where do you need it?</h1>

                <div className="mb-8">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Suburb or Postcode
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Where are you?"
                            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all pr-12"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleLocationClick}
                            disabled={isLocating}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-emerald-500 transition-colors disabled:opacity-50"
                            title="Use my current location"
                        >
                            {isLocating ? (
                                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <MapPin className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
                        Nearby Suburbs
                    </h3>
                    <div className="divide-y divide-gray-100">
                        {nearbySuburbs.map((suburb, index) => (
                            <div
                                key={index}
                                className="py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 group"
                                onClick={() => setLocation(`${suburb.name}, ${suburb.state}, ${suburb.postcode}`)}
                            >
                                <span className="text-gray-700 group-hover:text-gray-900">
                                    {suburb.name}, {suburb.state}, {suburb.postcode}
                                </span>
                                <span className="text-gray-400 group-hover:text-gray-600">›</span>
                            </div>
                        ))}
                    </div>
                </div> */}

                <p className="text-gray-500 text-sm mb-8">
                    Let us know your suburb or postcode to get local quotes at the best price.
                </p>

                <button
                    onClick={handleNext}
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-12 rounded-lg transition-colors"
                >
                    Let's go!
                </button>
            </div>

            {/* Right Sidebar - Payment Options */}
            <div className="lg:w-80">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                        BOOK NOW, PAY LATER
                    </h2>
                    <p className="text-gray-600 mb-6">Interest-free payments</p>

                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded flex items-center justify-center h-16 shadow-sm">
                            <span className="font-bold text-xl italic tracking-tighter">afterpay<span className="text-emerald-400">➤</span></span>
                        </div>
                        <div className="bg-white p-4 rounded flex items-center justify-center h-16 shadow-sm">
                            <span className="font-bold text-xl text-orange-500">humm</span>
                        </div>
                        <div className="bg-white p-4 rounded flex items-center justify-center h-16 shadow-sm">
                            <span className="font-bold text-xl">Z<span className="bg-purple-500 text-white px-1">i</span>P</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">
                            AVAILABLE
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteLocationStep;
