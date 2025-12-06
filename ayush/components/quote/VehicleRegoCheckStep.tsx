import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { useVehicleLookup } from '@/hooks/useVehicle';
import { useQuoteStore } from '@/store/useQuoteStore';
import { toast } from 'sonner';

const VehicleRegoCheckStep = () => {
    const router = useRouter();
    const params = useParams();
    const quoteId = params.quoteId as string;
    const { setVehicle } = useQuoteStore();

    const [rego, setRego] = useState('');
    const [state, setState] = useState('SA');

    const vehicleLookup = useVehicleLookup();
    const isLoading = vehicleLookup.isPending;

    const handleFindCar = () => {
        if (!rego) {
            toast.error("Please enter a registration number");
            return;
        }

        vehicleLookup.mutate(
            { state, rego },
            {
                onSuccess: (vehicle) => {
                    setVehicle(vehicle);
                    toast.success("Vehicle found!");
                    router.push(`/quote/${quoteId}?step=task-select`);
                }
            }
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column - Main Content */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Let's find your exact car.
                    </h1>

                    <div className="max-w-2xl">
                        <div className="flex flex-col sm:flex-row gap-0 mb-4 border border-emerald-400 rounded-lg overflow-hidden shadow-sm">
                            {/* State Selector */}
                            <div className="relative min-w-[80px] bg-[#00D09C]">
                                <select
                                    className="w-full h-full appearance-none bg-transparent text-white font-medium px-4 py-3 pr-8 cursor-pointer focus:outline-none"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value="NSW">NSW</option>
                                    <option value="VIC">VIC</option>
                                    <option value="QLD">QLD</option>
                                    <option value="WA">WA</option>
                                    <option value="SA">SA</option>
                                    <option value="TAS">TAS</option>
                                    <option value="ACT">ACT</option>
                                    <option value="NT">NT</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
                            </div>

                            {/* Rego Input */}
                            <div className="flex-1 bg-white">
                                <input
                                    type="text"
                                    placeholder="Enter your rego"
                                    className="w-full h-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                                    value={rego}
                                    onChange={(e) => setRego(e.target.value.toUpperCase())}
                                    onKeyDown={(e) => e.key === 'Enter' && handleFindCar()}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="bg-[#66E3C0] p-1">
                                <button
                                    onClick={handleFindCar}
                                    disabled={isLoading}
                                    className="h-full px-6 py-2 bg-[#66E3C0] text-white font-medium hover:bg-[#5adbc8] transition-colors rounded disabled:opacity-70 flex items-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Finding...
                                        </>
                                    ) : (
                                        "Find my car"
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Helper Text */}
                        <div className="flex items-start gap-3 mb-8">
                            <div className="border border-black rounded px-1 py-0.5 text-xs font-bold font-mono bg-white shrink-0">
                                S123·ABC
                                <div className="text-[6px] text-center leading-none mt-0.5">SOUTH AUSTRALIA</div>
                            </div>
                            <p className="text-gray-500 text-sm pt-1">
                                Enter your registration number to quickly identify your car
                            </p>
                        </div>

                        {/* Manual Search Link */}
                        <button className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1">
                            Or find your car by make, model and year <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="w-full lg:w-[300px] shrink-0">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <h2 className="text-[#1C2B39] text-2xl font-bold mb-1 font-sans uppercase tracking-tight">
                            BOOK NOW, PAY LATER
                        </h2>
                        <p className="text-gray-600 text-sm mb-6">
                            Interest-free payments
                        </p>

                        <div className="space-y-4">
                            {/* Afterpay Placeholder */}
                            <div className="bg-[#B2FCE4] h-16 rounded flex items-center justify-center">
                                <span className="font-bold text-xl tracking-tighter">afterpay<span className="rotate-180 inline-block">v</span></span>
                            </div>

                            {/* Humm Placeholder */}
                            <div className="bg-white h-16 rounded border border-gray-100 flex items-center justify-center">
                                <span className="text-[#FF5A00] font-bold text-xl">humm</span>
                            </div>

                            {/* Zip Placeholder */}
                            <div className="bg-white h-16 rounded border border-gray-100 flex items-center justify-center">
                                <div className="flex items-center font-black italic text-2xl">
                                    <span>Z</span>
                                    <span className="bg-[#AA8FFF] w-6 h-6 block mx-0.5"></span>
                                    <span>P</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-[#1C2B39] text-2xl font-bold uppercase tracking-widest">
                                AVAILABLE
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleRegoCheckStep;
