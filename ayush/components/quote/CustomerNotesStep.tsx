import React from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import QuoteSidebar from './QuoteSidebar';

import { useQuoteStore } from '@/store/useQuoteStore';

const CustomerNotesStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;

    const { notes, setNotes } = useQuoteStore();

    const handleBack = () => {
        router.back();
    };

    const handleNext = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('step', 'customer-details-step1');
        router.push(`/quote/${quoteId}?${params.toString()}`);
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
                    <h1 className="text-2xl font-bold text-[#1C2B39] mb-6">
                        Do you need to add details for the mechanic?
                    </h1>

                    <div className="mb-8">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            NOTES
                        </label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Additional information for the mechanic"
                            className="w-full h-32 p-4 border border-gray-300 rounded focus:outline-none focus:border-[#00D09C] resize-none text-gray-700"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleNext}
                            className="bg-[#00D09C] text-white font-bold py-3 px-12 rounded hover:bg-[#00b88a] transition-colors w-full sm:w-auto"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar showGetQuotes={false} />
            </div>
        </div>
    );
};

export default CustomerNotesStep;
