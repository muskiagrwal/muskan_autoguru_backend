"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import DashboardHero from "@/components/dashboard/DashboardHero";
import ServiceStatusCard from "@/components/dashboard/ServiceStatusCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Loader2, Calendar, Clock, MapPin } from "lucide-react";

const DashboardPage = () => {
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();
    const [loading, setLoading] = useState(true);

    // Mock data - in a real app, this would come from an API
    const dashboardData = {
        userName: user?.firstName || "Customer",
        totalServices: 12,
        nextServiceDue: "Aug 15, 2024",
        activeService: {
            vehicleName: "Toyota Camry (2020)",
            serviceType: "Logbook Service",
            status: "in_progress" as const,
            date: "Today",
        },
        nextAppointment: {
            date: "Tomorrow, 10:00 AM",
            service: "Brake Inspection",
            location: "AutoGuru Center, Sydney"
        }
    };

    return (
        <div className="space-y-8">
            <DashboardHero
                userName={dashboardData.userName}
                totalServices={dashboardData.totalServices}
                nextServiceDue={dashboardData.nextServiceDue}
            />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="xl:col-span-2 space-y-8">
                    {/* Active Service Status */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Current Service Status</h2>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                Live Updates
                            </span>
                        </div>
                        <ServiceStatusCard
                            vehicleName={dashboardData.activeService.vehicleName}
                            serviceType={dashboardData.activeService.serviceType}
                            status={dashboardData.activeService.status}
                            date={dashboardData.activeService.date}
                        />
                    </section>

                    {/* Quick Actions */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                        <QuickActions />
                    </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Next Appointment Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-200">
                        <h3 className="text-lg font-semibold mb-4 opacity-90">Next Appointment</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-lg">{dashboardData.nextAppointment.date}</p>
                                    <p className="text-blue-100 text-sm">Date & Time</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-lg">{dashboardData.nextAppointment.service}</p>
                                    <p className="text-blue-100 text-sm">Service Type</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-lg">{dashboardData.nextAppointment.location}</p>
                                    <p className="text-blue-100 text-sm">Location</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                            View Details
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                            <button className="text-sm text-blue-600 hover:underline">View All</button>
                        </div>
                        <RecentActivity />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
