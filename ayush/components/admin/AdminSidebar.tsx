"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Wrench,
    Calendar,
    FileText,
    Settings,
    Car,
    LogOut,
    MessageSquare,
    Star,
    FilePlus,
    Building2
} from "lucide-react";
import Logo from "../homepage/Logo";

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Bookings",
        href: "/admin/bookings",
        icon: Calendar
    },
    {
        title: "Vehicles",
        href: "/admin/vehicles",
        icon: Car
    },
    {
        title: "Services",
        href: "/admin/services",
        icon: Wrench
    },
    {
        title: "Mechanics",
        href: "/admin/mechanics",
        icon: Wrench
    },
    {
        title: "Users",
        href: "/admin/users",
        icon: Users
    },
    {
        title: "Quotes",
        href: "/admin/quotes",
        icon: FileText
    },
    {
        title: "Inquiries",
        href: "/admin/inquiries",
        icon: MessageSquare
    },
    {
        title: "Reviews",
        href: "/admin/reviews",
        icon: Star
    },
    {
        title: "Service Requests",
        href: "/admin/service-requests",
        icon: FilePlus
    },
    {
        title: "B2B Proposals",
        href: "/admin/b2b-proposals",
        icon: Building2
    },
    {
        title: "Profile",
        href: "/admin/profile",
        icon: User
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings
    }
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <Link href="/">
                    <Logo color="white" />
                </Link>
                <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Admin Portal
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

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 px-4 py-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                        <span className="text-xs font-bold">AD</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">admin@autoguru.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
