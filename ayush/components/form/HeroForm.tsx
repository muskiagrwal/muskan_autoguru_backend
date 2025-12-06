"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { HERO_DATA } from "@/constants";
import { toast } from "sonner";
import { useQuoteStore } from "@/store/useQuoteStore";

const HeroForm = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        make: "",
        model: "",
        location: ""
    });
    const [isLocating, setIsLocating] = React.useState(false);

    const { setCustomerDetails } = useQuoteStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generate a random UUID for the quote
        const quoteId = crypto.randomUUID();

        // Save location to store
        if (formData.location) {
            setCustomerDetails("", "", formData.location);
        }

        // Construct query parameters
        const params = new URLSearchParams({
            step: 'vehicle-rego-check',
            ...(formData.make && { make: formData.make }),
            ...(formData.model && { model: formData.model }),
            ...(formData.location && { location: formData.location })
        });

        router.push(`/quote/${quoteId}?${params.toString()}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                        setFormData(prev => ({
                            ...prev,
                            location: locationString
                        }));
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 p-8 rounded-sm shadow-2xl"
        >
            <h3 className="text-gray-200 text-sm font-medium mb-6 flex items-center justify-between">
                <span>Enter your details to get started</span>
                <ArrowRight className="w-4 h-4" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Make Dropdown */}
                <div className="relative group">
                    <select
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        className="w-full bg-[#2a2a2a] border border-white/10 text-gray-300 py-3.5 px-4 rounded-sm appearance-none focus:outline-none focus:border-white/30 transition-colors cursor-pointer text-sm"
                    >
                        <option value="" disabled>What do you drive?</option>
                        {HERO_DATA.carMakes.map((make) => (
                            <option key={make.value} value={make.value} className="text-black">
                                {make.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 pointer-events-none" />
                </div>

                {/* Model Dropdown */}
                <div className="relative group">
                    <select
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full bg-[#2a2a2a] border border-white/10 text-gray-300 py-3.5 px-4 rounded-sm appearance-none focus:outline-none focus:border-white/30 transition-colors cursor-pointer text-sm"
                    >
                        <option value="" disabled>Which model?</option>
                        {HERO_DATA.carModels.map((model) => (
                            <option key={model.value} value={model.value} className="text-black">
                                {model.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 pointer-events-none" />
                </div>

                {/* Location Input */}
                <div className="relative group">
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Postcode or Suburb"
                        className="w-full bg-[#2a2a2a] border border-white/10 text-white placeholder-gray-400 py-3.5 px-4 rounded-sm focus:outline-none focus:border-white/30 transition-colors text-sm pr-10"
                    />
                    <button
                        type="button"
                        onClick={handleLocationClick}
                        disabled={isLocating}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-white transition-colors disabled:opacity-50"
                        title="Use my current location"
                    >
                        {isLocating ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <MapPin className="w-4 h-4" />
                        )}
                    </button>
                </div>

                {/* CTA Button */}
                <button
                    type="submit"
                    className="block w-full bg-black text-white text-center py-4 rounded-sm font-medium hover:bg-gray-900 transition-colors mt-6 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group border border-white/10"
                >
                    Get quotes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
};

export default HeroForm;
