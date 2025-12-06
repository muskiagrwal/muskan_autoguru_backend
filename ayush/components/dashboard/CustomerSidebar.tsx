"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    User,
    Settings,
    LogOut
} from "lucide-react";
import Logo from "../homepage/Logo";
import { useAuthStore } from "@/store/useAuthStore";

const sidebarItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "My Bookings",
        href: "/dashboard/bookings",
        icon: Calendar
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings
    }
];

export default function CustomerSidebar() {
    const pathname = usePathname();
    const { user } = useAuthStore();

    const initials = user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase() : "CU";
    const userName = user ? `${user.firstName} ${user.lastName}` : "Customer User";
    const userEmail = user?.email || "customer@autoguru.com";

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <Link href="/">
                    <Logo color="white" />
                </Link>
                <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Customer Portal
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

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
                <div className="flex items-center space-x-3 px-4 py-3 text-gray-400">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 border border-gray-700">
                        <span className="text-xs font-bold">{initials}</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium text-gray-200 truncate">{userName}</p>
                        <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
