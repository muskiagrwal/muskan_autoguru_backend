import React from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { ChevronLeft, HelpCircle } from 'lucide-react';
import QuoteSidebar from './QuoteSidebar';
import { useQuoteStore } from '@/store/useQuoteStore';

const INTERVALS = [
    "10000 kms / 6 months",
    "20000 kms / 12 months",
    "30000 kms / 18 months",
    "40000 kms / 24 months",
    "50000 kms / 30 months",
    "60000 kms / 36 months",
    "70000 kms / 42 months",
    "80000 kms / 48 months",
    "90000 kms / 54 months",
    "100000 kms / 60 months",
    "110000 kms / 66 months",
];

const LogbookIntervalStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;
    const { addTask } = useQuoteStore();
    const [showHelp, setShowHelp] = React.useState(false);

    const handleBack = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'task-select');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleIntervalSelect = (interval: string) => {
        const taskName = `Logbook Service - ${interval}`;
        addTask(taskName);

        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'task-select');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
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
                    <h1 className="text-2xl font-bold text-[#00D09C] mb-2">
                        Select the closest interval <span className="text-[#1C2B39]">for your logbook service</span>
                    </h1>

                    <p className="text-gray-600 mb-6">
                        This would be closest to current kilometres driven or months since the car was made.
                        Whichever comes first. <span onClick={() => setShowHelp(!showHelp)} className="text-blue-600 font-medium cursor-pointer hover:underline">Don't know which to choose?</span>
                    </p>

                    {showHelp && (
                        <ul className="list-disc pl-5 text-gray-600 text-sm mb-8 space-y-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <li>
                                Logbook services are based on the <span className="font-bold text-gray-800">current kilometres driven</span> (check your odometer) or <span className="font-bold text-gray-800">particular time intervals</span> (vehicle age in months)
                            </li>
                            <li>
                                <span className="font-bold text-gray-800">Rule of thumb:</span> to maintain your warranty, manufacturers recommend you service your car at the closest kilometre or time (vehicle age in months) interval, whichever comes first.
                            </li>
                        </ul>
                    )}

                    <div className="space-y-2">
                        {INTERVALS.map((interval, index) => (
                            <div
                                key={index}
                                onClick={() => handleIntervalSelect(interval)}
                                className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                            >
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-[#00D09C] flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#00D09C] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="font-bold text-[#1C2B39]">{interval}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar />
            </div>
        </div>
    );
};

export default LogbookIntervalStep;
