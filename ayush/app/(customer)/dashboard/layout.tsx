"use client";

import React from "react";
import CustomerHeader from "@/components/dashboard/CustomerHeader";
import CustomerSidebar from "@/components/dashboard/CustomerSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="fixed top-0 bottom-0 left-0 z-40 hidden lg:block">
                <CustomerSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden lg:pl-64">
                <CustomerHeader />
                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
