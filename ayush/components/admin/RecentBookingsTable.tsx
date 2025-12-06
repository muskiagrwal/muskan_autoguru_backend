"use client";

import { useHomeServices } from "@/hooks/useHomeService";
import { Loader2, Eye, Edit } from "lucide-react";
import { format } from "date-fns";

export default function RecentBookingsTable() {
    const { data: bookings, isLoading, error } = useHomeServices();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64 bg-white rounded-lg border border-gray-100">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-white rounded-lg border border-gray-100 text-center text-red-500">
                Failed to load bookings
            </div>
        );
    }

    // Take only the last 5 bookings for the dashboard
    const recentBookings = bookings?.slice(0, 5) || [];

    return (
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="px-6 py-4 font-medium">Customer</th>
                            <th className="px-6 py-4 font-medium">Service</th>
                            <th className="px-6 py-4 font-medium">Vehicle</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {recentBookings.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No bookings found
                                </td>
                            </tr>
                        ) : (
                            recentBookings.map((booking: any) => (
                                <tr key={booking._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{booking.name}</div>
                                        <div className="text-xs text-gray-500">{booking.email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {booking.serviceType}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {booking.vehicleName} {booking.vehicleModel}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {booking.createdAt ? format(new Date(booking.createdAt), 'MMM d, yyyy') : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {booking.status || 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
