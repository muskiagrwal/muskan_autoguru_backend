import React, { useEffect } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { ChevronLeft, HelpCircle } from 'lucide-react';
import { TASK_CATEGORIES, CATEGORY_TASKS } from '@/constants';
import QuoteSidebar from './QuoteSidebar';
import { useQuoteStore } from '@/store/useQuoteStore';

const TaskCategoryStep = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const quoteId = params.quoteId as string;
    const categoryId = Number(searchParams.get('selectedRepairCategoryId'));

    const { tasks: storeTasks, addTask, removeTask } = useQuoteStore();

    const category = TASK_CATEGORIES.find(c => c.id === categoryId);
    const tasks = CATEGORY_TASKS[categoryId as keyof typeof CATEGORY_TASKS] || [];

    const handleBack = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'task-select');
        currentParams.delete('selectedRepairCategoryId');
        router.push(`/quote/${quoteId}?${currentParams.toString()}`);
    };

    const handleToggleTask = (task: string) => {
        if (storeTasks.includes(task)) {
            removeTask(task);
        } else {
            addTask(task);
        }
    };

    const handleNext = () => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('step', 'customer-notes-for-mechanic');
        currentParams.set('isProductFlow', 'false');
        currentParams.set('isFleet', 'false');
        // No need to pass tasks in URL anymore

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
                        What job are you after?
                    </h2>

                    <h3 className="text-sm font-bold text-gray-600 uppercase mb-6">
                        {category?.name || 'CATEGORY'} REPAIRS, INSTALLATIONS & INSPECTIONS
                    </h3>

                    <div className="space-y-4 mb-8">
                        {tasks.map((task, index) => (
                            <div key={index} className="flex items-center justify-between group">
                                <label className="flex items-center gap-4 cursor-pointer flex-1">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={storeTasks.includes(task)}
                                            onChange={() => handleToggleTask(task)}
                                            className="peer h-6 w-6 border-2 border-gray-300 rounded transition-colors checked:bg-[#00D09C] checked:border-[#00D09C] focus:ring-0 focus:ring-offset-0"
                                        />
                                        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className={`text-[#1C2B39] font-bold text-sm transition-colors group-hover:text-[#00D09C]`}>
                                        {task}
                                    </span>
                                </label>
                                <HelpCircle className="w-5 h-5 text-gray-400 cursor-help hover:text-gray-600" />
                            </div>
                        ))}
                    </div>

                    {storeTasks.length > 0 && (
                        <div className="flex justify-end">
                            <button
                                onClick={handleNext}
                                className="bg-[#00D09C] text-white font-bold py-3 px-8 rounded hover:bg-[#00b88a] transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <QuoteSidebar />
            </div>
        </div>
    );
};

export default TaskCategoryStep;
