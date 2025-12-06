import React from 'react';
import { ChevronRight, Wrench, Snowflake, Shield, Battery, Disc, Settings, Activity, Search, Car } from 'lucide-react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { TASK_CATEGORIES } from '@/constants';
import QuoteSidebar from './QuoteSidebar';

import { useQuoteStore } from '@/store/useQuoteStore';

const TaskSelectStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;
    const { tasks } = useQuoteStore();

    const hasLogbookService = tasks.some(t => t.startsWith('Logbook Service'));
    const hasBasicService = tasks.includes('Basic Service');
    const isMainServiceSelected = hasLogbookService || hasBasicService;

    const iconMap: { [key: string]: any } = {
        "Air conditioning": Snowflake,
        "Roadworthy inspection": Shield,
        "Auto Glass": Car,
        "Spark plugs": Activity,
        "Battery": Battery,
        "Suspension & Steering": Settings,
        "Brakes": Disc,
        "Timing belt/chain": Settings,
        "Clutch": Settings,
        "Transmission/diff": Settings,
        "Oil leak inspection": Search,
        "Wheels & tyres": Disc,
        "Pre-Purchase inspection": Shield,
        "Window tinting": Car,
    };

    const handleCategoryClick = (categoryId: number) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'task-category');
        currentParams.set('selectedRepairCategoryId', categoryId.toString());
        // Tasks are now managed by the store, so we don't need to worry about passing them in the URL
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">
                What do you need?
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Services */}
                <div className="flex-1">
                    {/* Main Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {/* Logbook Service */}
                        <div
                            onClick={() => {
                                if (isMainServiceSelected) return;
                                const currentParams = new URLSearchParams(searchParams.toString());
                                currentParams.set('step', 'logbook-interval');
                                router.push(`/quote/${quoteId}?${currentParams.toString()}`);
                            }}
                            className={`relative bg-white border rounded-lg p-6 transition-colors shadow-sm ${isMainServiceSelected
                                    ? 'border-gray-200 opacity-50 cursor-not-allowed'
                                    : 'border-gray-200 cursor-pointer hover:border-blue-500'
                                }`}
                        >
                            {hasLogbookService && (
                                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                            )}
                            {!isMainServiceSelected && (
                                <div className="absolute -top-3 right-4 bg-[#00D09C] text-white text-xs font-bold px-2 py-1 rounded">
                                    POPULAR
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${hasLogbookService ? 'bg-green-100 text-green-600' : 'bg-green-50 text-green-600'}`}>
                                        <Wrench className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Logbook Service</span>
                                </div>
                                {!isMainServiceSelected && <ChevronRight className="w-5 h-5 text-gray-400" />}
                            </div>
                        </div>

                        {/* Basic Service */}
                        <div className={`bg-white border rounded-lg p-6 transition-colors shadow-sm ${isMainServiceSelected
                                ? 'border-gray-200 opacity-50 cursor-not-allowed'
                                : 'border-gray-200 cursor-pointer hover:border-blue-500'
                            }`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
                                        <Wrench className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Basic Service</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Help Link */}
                    <button className="text-blue-600 text-sm font-medium mb-8 hover:underline flex items-center gap-1">
                        How do I know which service to choose? <ChevronDownIcon className="w-4 h-4" />
                    </button>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {TASK_CATEGORIES.map((category) => {
                            const Icon = iconMap[category.name] || Settings;
                            return (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 px-2 rounded transition-colors group"
                                >
                                    <div className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900">
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                                        <span className="font-medium">{category.name}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <button className="text-blue-600 font-medium text-sm hover:underline">
                            Search tasks
                        </button>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar />
            </div>
        </div>
    );
};

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

export default TaskSelectStep;
