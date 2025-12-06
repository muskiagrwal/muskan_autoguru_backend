import React from 'react';
import Link from 'next/link';
import { CalendarPlus, History, Car, LifeBuoy, ChevronRight, ArrowUpRight } from 'lucide-react';

const actions = [
    {
        title: 'Book New Service',
        description: 'Schedule a service',
        icon: CalendarPlus,
        href: '/book-service',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        bg: 'bg-blue-50',
    },
    {
        title: 'Service History',
        description: 'View past invoices',
        icon: History,
        href: '/dashboard/bookings',
        color: 'bg-purple-500',
        textColor: 'text-purple-500',
        bg: 'bg-purple-50',
    },
    {
        title: 'My Vehicles',
        description: 'Manage garage',
        icon: Car,
        href: '/profile',
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500',
        bg: 'bg-emerald-50',
    },
    {
        title: 'Help & Support',
        description: 'Get assistance',
        icon: LifeBuoy,
        href: '/contact',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        bg: 'bg-orange-50',
    },
];

const QuickActions = () => {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <Link
                        key={action.title}
                        href={action.href}
                        className="group relative flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-blue-100 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className={`w-12 h-12 rounded-xl ${action.bg} ${action.textColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                            <action.icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                            <p className="text-sm text-gray-500">{action.description}</p>
                        </div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="w-5 h-5 text-gray-400" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
