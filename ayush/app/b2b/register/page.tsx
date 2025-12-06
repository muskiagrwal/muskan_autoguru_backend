import React from 'react';
import B2BRegisterForm from '@/components/form/B2BRegisterForm';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const B2BRegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link
                    href="/b2b"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors mb-8"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Partnership Overview
                </Link>
            </div>
            <B2BRegisterForm />
        </div>
    );
};

export default B2BRegisterPage;
