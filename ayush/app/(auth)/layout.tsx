"use client";

import { usePathname } from "next/navigation";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const customer = pathname === "/login" || pathname === "/signup";

    return (
        <div className={`${customer ? "bg-gray-50" : "bg-gray-900"} min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-full w-full space-y-8">
                {children}
            </div>
        </div>
    );
}
