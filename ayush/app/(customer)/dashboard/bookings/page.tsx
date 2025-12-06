"use client";

import React, { useState } from "react";
import Link from "next/link";
import BookingCard from "@/components/dashboard/BookingCard";
import MechanicContactModal from "@/components/dashboard/MechanicContactModal";
import MechanicProfileModal from "@/components/dashboard/MechanicProfileModal";
import { toast } from "sonner";
import { Filter } from "lucide-react";

const BookingsPage = () => {
    const [selectedMechanic, setSelectedMechanic] = useState<any>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [filter, setFilter] = useState("All");

    // Sample booking data with mechanic details
    const bookings = [
        {
            id: 1,
            serviceType: "Basic Service",
            date: "June 15, 2023",
            time: "10:00 AM",
            vehicle: "Toyota Camry (2020)",
            status: "Confirmed",
            location: "Sydney CBD",
            price: "$180.00",
            mechanic: {
                name: "John Smith",
                rating: 4.8,
                reviews: 124,
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
                address: "123 George St, Sydney NSW 2000",
                phone: "+61 412 345 678",
                email: "john.smith@mechanic.com",
                specialties: ["General Repair", "Toyota Specialist", "Diagnostics"],
                about: "Over 15 years of experience working with Japanese vehicles. Certified Toyota technician."
            }
        },
        {
            id: 2,
            serviceType: "Brake Repair",
            date: "July 5, 2023",
            time: "2:00 PM",
            vehicle: "Honda Civic (2018)",
            status: "Completed",
            location: "Chatswood",
            price: "$320.00",
            mechanic: {
                name: "Sarah Johnson",
                rating: 4.9,
                reviews: 89,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                address: "45 Victoria Ave, Chatswood NSW 2067",
                phone: "+61 498 765 432",
                email: "sarah.j@autocare.com",
                specialties: ["Brakes", "Suspension", "Honda Specialist"],
                about: "Passionate about car safety and performance. Expert in brake systems and suspension tuning."
            }
        },
        {
            id: 3,
            serviceType: "Logbook Service",
            date: "August 12, 2023",
            time: "9:00 AM",
            vehicle: "Ford Ranger (2021)",
            status: "Pending",
            location: "Parramatta",
            price: "$280.00",
            mechanic: {
                name: "Mike Wilson",
                rating: 4.7,
                reviews: 56,
                // No image to test fallback
                address: "88 Church St, Parramatta NSW 2150",
                phone: "+61 455 555 555",
                email: "mike.wilson@fordpro.com",
                specialties: ["Logbook Service", "4x4 Specialist", "Diesel Engines"],
                about: "Specializing in 4x4 and diesel vehicles. Ensuring your off-roader is ready for any adventure."
            }
        }
    ];

    const handleContact = (mechanic: any) => {
        setSelectedMechanic(mechanic);
        setIsContactModalOpen(true);
    };

    const handleViewProfile = (mechanic: any) => {
        setSelectedMechanic(mechanic);
        setIsProfileModalOpen(true);
    };

    const handleDownloadInvoice = (bookingId: number) => {
        toast.success("Invoice downloaded successfully");
    };

    const filteredBookings = filter === "All"
        ? bookings
        : bookings.filter(b => b.status === filter);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
                    <p className="text-gray-600 mt-1">Manage your service appointments</p>
                </div>

                <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                    {["All", "Confirmed", "Pending", "Completed"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === f
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-6">
                {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                        <BookingCard
                            key={booking.id}
                            booking={booking}
                            onContact={() => handleContact(booking.mechanic)}
                            onViewProfile={() => handleViewProfile(booking.mechanic)}
                            onDownloadInvoice={() => handleDownloadInvoice(booking.id)}
                        />
                    ))
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Filter className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No bookings found</h3>
                        <p className="text-gray-500 mb-6">There are no bookings with the status "{filter}"</p>
                        <button
                            onClick={() => setFilter("All")}
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Clear filter
                        </button>
                    </div>
                )}
            </div>

            {/* Modals */}
            <MechanicContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                mechanicName={selectedMechanic?.name || ""}
                mechanicImage={selectedMechanic?.image}
            />

            <MechanicProfileModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                mechanic={selectedMechanic}
            />
        </div>
    );
};

export default BookingsPage;
