"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Car, FileText, MessageCircle, Phone, Mail, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

const BookingDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    // Mock data - in a real app, fetch based on ID
    const booking = {
        id: Number(id),
        serviceType: "Logbook Service",
        date: "June 15, 2023",
        time: "10:00 AM",
        vehicle: "Toyota Camry (2020)",
        status: "Confirmed",
        location: "Sydney CBD",
        price: "$180.00",
        notes: "Please check the brakes as well.",
        mechanic: {
            name: "John Smith",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
            rating: 4.8,
            reviews: 124,
            address: "123 George St, Sydney NSW 2000",
            phone: "+61 412 345 678",
            email: "john.smith@mechanic.com",
        },
        timeline: [
            { status: "Booking Created", date: "June 10, 2023 2:30 PM", completed: true },
            { status: "Confirmed by Mechanic", date: "June 10, 2023 3:15 PM", completed: true },
            { status: "Vehicle Dropped Off", date: "June 15, 2023 9:45 AM", completed: false },
            { status: "Service In Progress", date: "-", completed: false },
            { status: "Ready for Pickup", date: "-", completed: false },
        ]
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmed": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Completed": return "bg-green-100 text-green-700 border-green-200";
            case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
            default: return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    const handleDownloadInvoice = () => {
        toast.success("Invoice downloaded successfully");
    };

    const handleContactMechanic = () => {
        toast.info("Opening chat with mechanic...");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Bookings
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Booking #{booking.id}</h1>
                    <p className="text-gray-500 mt-1">View details and track status</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDownloadInvoice}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        <FileText className="w-4 h-4" />
                        Invoice
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
                        <XCircle className="w-4 h-4" />
                        Cancel Booking
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Service Info Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{booking.serviceType}</h2>
                                <p className="text-gray-500 text-sm">Service ID: SRV-{booking.id}882</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Date</p>
                                    <p className="text-sm text-gray-500">{booking.date}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Time</p>
                                    <p className="text-sm text-gray-500">{booking.time}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <Car className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Vehicle</p>
                                    <p className="text-sm text-gray-500">{booking.vehicle}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Location</p>
                                    <p className="text-sm text-gray-500">{booking.location}</p>
                                </div>
                            </div>
                        </div>

                        {booking.notes && (
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-sm font-medium text-gray-900 mb-2">Customer Notes</p>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                    "{booking.notes}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Service Timeline</h3>
                        <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-100"></div>

                            {booking.timeline.map((step, index) => (
                                <div key={index} className="relative flex gap-4">
                                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${step.completed ? "bg-green-50 border-green-500 text-green-600" : "bg-white border-gray-200 text-gray-300"
                                        }`}>
                                        {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
                                    </div>
                                    <div className="pt-1">
                                        <p className={`text-sm font-medium ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                                            {step.status}
                                        </p>
                                        <p className="text-xs text-gray-400">{step.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    {/* Price Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Summary</h3>
                        <div className="space-y-3 pb-4 border-b border-gray-100">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Service Fee</span>
                                <span>$160.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Booking Fee</span>
                                <span>$5.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Tax (GST)</span>
                                <span>$15.00</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <span className="font-bold text-gray-900">Total</span>
                            <span className="text-xl font-bold text-blue-600">{booking.price}</span>
                        </div>
                    </div>

                    {/* Mechanic Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Mechanic Details</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <img src={booking.mechanic.image} alt={booking.mechanic.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-medium text-gray-900">{booking.mechanic.name}</p>
                                <p className="text-xs text-gray-500">Certified Mechanic</p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{booking.mechanic.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span>{booking.mechanic.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span>{booking.mechanic.email}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleContactMechanic}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Message Mechanic
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetailPage;
