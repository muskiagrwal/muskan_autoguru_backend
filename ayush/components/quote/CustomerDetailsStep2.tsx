import React, { useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import QuoteSidebar from './QuoteSidebar';
import { useQuoteStore } from '@/store/useQuoteStore';
import { useBooking } from '@/hooks/useBooking';

const CustomerDetailsStep2 = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;

    const { customer, setCustomerDetails, tasks, vehicle, notes } = useQuoteStore();

    const [name, setName] = useState(customer.name || '');
    const [mobile, setMobile] = useState(customer.mobile || '');
    const booking = useBooking();

    // Use location from store, fallback to search params if needed
    const location = customer.location || searchParams.get('location');

    const handleBack = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'customer-details-step1');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleSendCode = (e: React.FormEvent) => {
        e.preventDefault();
        setCustomerDetails(name, mobile, location || undefined);

        booking.mutate({
            quoteId,
            vehicle,
            location,
            customer: {
                email: customer.email,
                name,
                mobile,
            },
            serviceType: tasks,
            notes
        });

        // alert(`Verification code sent to ${mobile} for ${name} (${customer.email})`);

        // Redirect to mechanic selection step
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'mechanic-selection');
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
                        Almost there.
                    </h2>

                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm max-w-xl">
                        <form onSubmit={handleSendCode} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00D09C] focus:border-[#00D09C]"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    required
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00D09C] focus:border-[#00D09C]"
                                    placeholder="Enter your mobile number"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={true}
                                className="w-full bg-[#00D09C] text-white font-bold py-3 px-4 rounded hover:bg-[#00b88a] transition-colors"
                            >
                                Send verification code  (for --production)
                            </button>


                            <button
                                type="submit"
                                className="w-full bg-[#00D09C] text-white font-bold py-3 px-4 rounded hover:bg-[#00b88a] transition-colors"
                            >
                                Submit (for --development)
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

export default CustomerDetailsStep2;
