"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BookServicePage = () => {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Vehicle, 2: Location, 3: Providers, 4: Date & Time
    const [vehicleDetails, setVehicleDetails] = useState({
        make: "",
        model: "",
        variant: "",
        year: "",
    });
    const [location, setLocation] = useState("");
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Mock providers data
    const providers = [
        {
            id: 1,
            name: "Local Auto Care",
            rating: 4.8,
            reviews: 124,
            distance: "0.8 km",
            price: 180,
            services: ["Basic Service", "Logbook Service", "Brake Repairs"],
            timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
            isAvailable: true
        },
        {
            id: 2,
            name: "City Mechanic Services",
            rating: 4.6,
            reviews: 98,
            distance: "1.2 km",
            price: 160,
            services: ["Basic Service", "Logbook Service", "Engine Diagnostics"],
            timeSlots: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
            isAvailable: true
        },
        {
            id: 3,
            name: "Premium Auto Workshop",
            rating: 4.9,
            reviews: 210,
            distance: "2.5 km",
            price: 210,
            services: ["Basic Service", "Logbook Service", "Transmission Service"],
            timeSlots: ["9:00 AM", "12:00 PM", "4:00 PM"],
            isAvailable: true
        }
    ];

    // Service options
    const serviceOptions = [
        { id: "basic-service", name: "Basic Service", description: "Oil change, filter replacement, basic checks", price: "From $150" },
        { id: "logbook-service", name: "Logbook Service", description: "Manufacturer-recommended maintenance", price: "From $250" },
        { id: "major-service", name: "Major Service", description: "Comprehensive inspection and maintenance", price: "From $400" }
    ];

    const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVehicleDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Final submission
            console.log("Booking details:", { vehicleDetails, location, selectedService, selectedProvider, date, time });
            router.push("/confirmation");
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Book a Service</h1>
                        <div className="mt-4 flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                            >
                                1
                            </div>
                            <div className={`h-1 flex-1 mx-2 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                            >
                                2
                            </div>
                            <div className={`h-1 flex-1 mx-2 ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                            >
                                3
                            </div>
                            <div className={`h-1 flex-1 mx-2 ${step >= 4 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                            >
                                4
                            </div>
                        </div>
                        <div className="flex justify-between mt-1 text-sm text-gray-600">
                            <span>Vehicle</span>
                            <span>Location</span>
                            <span>Providers</span>
                            <span>Date & Time</span>
                        </div>
                    </div>

                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">Vehicle Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                                    <input
                                        type="text"
                                        name="make"
                                        value={vehicleDetails.make}
                                        onChange={handleVehicleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., Toyota"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                                    <input
                                        type="text"
                                        name="model"
                                        value={vehicleDetails.model}
                                        onChange={handleVehicleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., Camry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Variant</label>
                                    <input
                                        type="text"
                                        name="variant"
                                        value={vehicleDetails.variant}
                                        onChange={handleVehicleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., Hybrid"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={vehicleDetails.year}
                                        onChange={handleVehicleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., 2020"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">Service Location</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode or Suburb</label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your postcode or suburb"
                                />
                            </div>
                            <div className="pt-4">
                                <h3 className="font-medium text-gray-900 mb-2">Recommended Service Types</h3>
                                <div className="space-y-3">
                                    {serviceOptions.map((option) => (
                                        <div
                                            key={option.id}
                                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${selectedService === option.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                                }`}
                                            onClick={() => setSelectedService(option.id)}
                                        >
                                            <input
                                                type="radio"
                                                id={option.id}
                                                name="service-type"
                                                checked={selectedService === option.id}
                                                onChange={() => { }}
                                                className="h-4 w-4 text-blue-600"
                                            />
                                            <label htmlFor={option.id} className="ml-3 flex-1">
                                                <span className="block font-medium">{option.name}</span>
                                                <span className="text-sm text-gray-600">{option.description}</span>
                                            </label>
                                            <span className="font-semibold text-gray-900">{option.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">Choose a Provider</h2>
                            <p className="text-gray-600">Select from available providers near {location || "your location"}</p>

                            <div className="space-y-4">
                                {providers.map((provider) => (
                                    <div
                                        key={provider.id}
                                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedProvider === provider.id
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 hover:border-blue-300"
                                            }`}
                                        onClick={() => setSelectedProvider(provider.id)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-lg">{provider.name}</h3>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="ml-1 text-sm text-gray-600">
                                                        {provider.rating} ({provider.reviews} reviews)
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{provider.distance} away</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-semibold text-lg">${provider.price}</div>
                                                <div className={`text-sm ${provider.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                                                    {provider.isAvailable ? 'Available' : 'Not available'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {provider.services.map((service, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">Date & Time</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                    <select
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select a time</option>
                                        {selectedProvider
                                            ? providers.find(p => p.id === selectedProvider)?.timeSlots.map((slot, idx) => (
                                                <option key={idx} value={slot}>{slot}</option>
                                            ))
                                            : <option value="">Select a provider first</option>
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-medium text-gray-900 mb-2">Booking Summary</h3>
                                <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span>Service:</span>
                                        <span className="font-medium">
                                            {selectedService
                                                ? serviceOptions.find(s => s.id === selectedService)?.name
                                                : "Not selected"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Provider:</span>
                                        <span className="font-medium">
                                            {selectedProvider
                                                ? providers.find(p => p.id === selectedProvider)?.name
                                                : "Not selected"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Price:</span>
                                        <span className="font-medium">
                                            {selectedProvider
                                                ? `$${providers.find(p => p.id === selectedProvider)?.price}`
                                                : "TBD"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Location:</span>
                                        <span className="font-medium">{location || "Not entered"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-8 flex justify-between">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`px-6 py-2 rounded-lg ${step === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={step === 3 && selectedProvider === null}
                            className={`px-6 py-2 rounded-lg ${step === 3 && selectedProvider === null
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                        >
                            {step < 4 ? "Continue" : "Confirm Booking"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookServicePage;
