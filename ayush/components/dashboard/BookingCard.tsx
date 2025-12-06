"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, Star, MessageCircle, FileText, ChevronRight, Car } from "lucide-react";

interface BookingCardProps {
    booking: {
        id: number;
        serviceType: string;
        date: string;
        time: string;
        vehicle: string;
        status: string;
        location: string;
        price: string;
        mechanic: {
            name: string;
            image?: string;
            rating: number;
            reviews: number;
        };
    };
    onContact: () => void;
    onDownloadInvoice: () => void;
    onViewProfile: () => void;
}

const BookingCard = ({ booking, onContact, onDownloadInvoice, onViewProfile }: BookingCardProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmed": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Completed": return "bg-green-100 text-green-700 border-green-200";
            case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            default: return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">{booking.serviceType}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm gap-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {booking.time}
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{booking.price}</p>
                        <p className="text-sm text-gray-500">Total Amount</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    {/* Vehicle & Location */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                                <Car className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Vehicle Details</p>
                                <p className="text-sm text-gray-500">{booking.vehicle}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Service Location</p>
                                <p className="text-sm text-gray-500">{booking.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Mechanic Details */}
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 overflow-hidden">
                                {booking.mechanic.image ? (
                                    <img src={booking.mechanic.image} alt={booking.mechanic.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                                        {booking.mechanic.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">{booking.mechanic.name}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    <span className="font-medium text-gray-700">{booking.mechanic.rating}</span>
                                    <span>({booking.mechanic.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={onViewProfile}
                                className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                                View Profile
                            </button>
                            <button
                                onClick={onContact}
                                className="p-2 bg-white text-blue-600 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors"
                                title="Contact Mechanic"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-end gap-3 border-t border-gray-100">
                {booking.status === "Completed" && (
                    <button
                        onClick={onDownloadInvoice}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FileText className="w-4 h-4" />
                        Invoice
                    </button>
                )}
                <Link
                    href={`/dashboard/bookings/${booking.id}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default BookingCard;
