import React from 'react';
import { Car, Trash2 } from 'lucide-react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useQuoteStore } from '@/store/useQuoteStore';

interface QuoteSidebarProps {
    showGetQuotes?: boolean;
}

const QuoteSidebar = ({ showGetQuotes = true }: QuoteSidebarProps) => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;

    const { tasks, removeTask, vehicle } = useQuoteStore();

    const handleGetQuotes = () => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('step', 'customer-notes-for-mechanic');
        router.push(`/quote/${quoteId}?${newSearchParams.toString()}`);
    };

    const handleChangeCar = () => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('step', 'task-select');
        router.push(`/quote/${quoteId}?${newSearchParams.toString()}`);
    };

    return (
        <div className="w-full lg:w-[320px] shrink-0">
            {/* Car Details Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-3">
                        <div className="w-16 h-10 bg-gray-100 rounded flex items-center justify-center">
                            <Car className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <div className="text-gray-500 text-xs">{vehicle?.id || '482'}</div>
                            <div className="font-bold text-gray-900">{vehicle?.name || 'Ford Fiesta'}</div>
                            <div className="text-xs text-gray-500 mt-1">Representation only.</div>
                        </div>
                    </div>
                    <button
                        onClick={handleChangeCar}
                        className="text-xs font-medium text-gray-500 border border-gray-300 rounded px-2 py-1 hover:bg-gray-50"
                    >
                        Change
                    </button>
                </div>
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2">
                    {vehicle?.details || '2012 Petrol Automatic 1.6 Litres Ti-VCT'}
                </div>
            </div>

            {/* Cart Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900">Your items</h3>
                    {tasks.length > 0 && (
                        <button
                            onClick={handleChangeCar}
                            className="text-xs font-medium text-[#00D09C] hover:underline"
                        >
                            Edit
                        </button>
                    )}
                </div>

                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-sm mb-6">
                        Your cart is empty. Please add an item to get a quote.
                    </p>
                ) : (
                    <div className="space-y-4 mb-6">
                        {tasks.map((task, index) => (
                            <div key={index} className="flex justify-between items-start group">
                                <span className="text-sm text-gray-700 flex-1 pr-2">{task}</span>
                                <button
                                    onClick={() => removeTask(task)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {showGetQuotes && (
                    <button
                        onClick={handleGetQuotes}
                        disabled={tasks.length === 0}
                        className="w-full bg-[#00D09C] text-white font-bold py-3 px-4 rounded hover:bg-[#00b88a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Get quotes
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuoteSidebar;
