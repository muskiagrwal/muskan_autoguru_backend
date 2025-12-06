import React from "react";
import { Calendar, DollarSign, CheckCircle, Clock } from "lucide-react";

const stats = [
    {
        title: "Total Bookings",
        value: "12",
        change: "+2 this week",
        icon: Calendar,
        color: "bg-blue-500",
    },
    {
        title: "Total Revenue",
        value: "$4,250",
        change: "+15% vs last month",
        icon: DollarSign,
        color: "bg-green-500",
    },
    {
        title: "Completed Jobs",
        value: "8",
        change: "66% completion rate",
        icon: CheckCircle,
        color: "bg-purple-500",
    },
    {
        title: "Pending Quotes",
        value: "3",
        change: "Action required",
        icon: Clock,
        color: "bg-orange-500",
    },
];

const SupplierDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                                    <Icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                                </div>
                                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
                </div>
                <div className="p-6 text-center text-gray-500 py-12">
                    <p>No recent bookings to display.</p>
                </div>
            </div>
        </div>
    );
};

export default SupplierDashboard;
