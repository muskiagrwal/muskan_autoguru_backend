"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    FileText,
    Settings,
    User,
    LogOut,
    Wrench,
    Car
} from "lucide-react";
import Logo from "@/components/homepage/Logo";

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/supplier/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Bookings",
        href: "/supplier/bookings",
        icon: Calendar
    },
    {
        title: "My Services",
        href: "/supplier/services",
        icon: Wrench
    },
    {
        title: "My Vehicles",
        href: "/supplier/vehicles",
        icon: Car
    },
    {
        title: "Quotes",
        href: "/supplier/quotes",
        icon: FileText
    },
    {
        title: "Profile",
        href: "/supplier/profile",
        icon: User
    },
    {
        title: "Settings",
        href: "/supplier/settings",
        icon: Settings
    }
];

const SupplierSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <Link href="/">
                    <Logo color="white" />
                </Link>
                <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Supplier Portal
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default SupplierSidebar;
