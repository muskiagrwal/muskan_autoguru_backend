import React, { useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import QuoteSidebar from './QuoteSidebar';
import { useQuoteStore } from '@/store/useQuoteStore';

const CustomerDetailsStep1 = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;

    const { customer, setCustomerEmail } = useQuoteStore();
    const [email, setEmail] = useState(customer.email || '');

    const handleBack = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'customer-notes-for-mechanic');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setCustomerEmail(email);

        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'customer-details-step2');
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
                    <h1 className="text-3xl font-bold text-[#00D09C] mb-2">
                        We've got you!
                    </h1>
                    <h2 className="text-3xl font-bold text-[#1C2B39] mb-8">
                        Just a few more details.
                    </h2>

                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm max-w-xl">
                        <form onSubmit={handleNext} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00D09C] focus:border-[#00D09C]"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#00D09C] text-white font-bold py-3 px-4 rounded hover:bg-[#00b88a] transition-colors"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar showGetQuotes={false} />
            </div>
        </div>
    );
};

export default CustomerDetailsStep1;
