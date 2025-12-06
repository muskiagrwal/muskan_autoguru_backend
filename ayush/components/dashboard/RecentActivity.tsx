import React from 'react';
import { Bell, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const activities = [
    {
        id: 1,
        type: 'success',
        title: 'Service Completed',
        message: 'Your Toyota Camry service has been completed successfully.',
        time: '2 hours ago',
        icon: CheckCircle,
        color: 'text-green-600',
        bg: 'bg-green-100',
        border: 'border-green-200'
    },
    {
        id: 2,
        type: 'info',
        title: 'Invoice Available',
        message: 'Invoice #INV-2023-001 is now available for download.',
        time: 'Yesterday',
        icon: FileText,
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        border: 'border-blue-200'
    },
    {
        id: 3,
        type: 'warning',
        title: 'Upcoming Booking',
        message: 'Reminder: You have a booking scheduled for tomorrow at 10:00 AM.',
        time: '2 days ago',
        icon: AlertCircle,
        color: 'text-orange-600',
        bg: 'bg-orange-100',
        border: 'border-orange-200'
    },
];

const RecentActivity = () => {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                    Recent Activity
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-0 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-100"></div>

                {activities.map((activity) => (
                    <div key={activity.id} className="relative flex gap-6 pb-8 last:pb-0 group">
                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-sm ${activity.bg} ${activity.color}`}>
                            <activity.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 pt-1">
                            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900">{activity.title}</h3>
                                    <div className="flex items-center gap-1 text-xs text-gray-400 bg-white px-2 py-1 rounded-full border border-gray-100">
                                        <Clock className="w-3 h-3" />
                                        {activity.time}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{activity.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
