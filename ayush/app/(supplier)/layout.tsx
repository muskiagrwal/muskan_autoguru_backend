import React from "react";
import SupplierSidebar from "@/components/supplier/SupplierSidebar";
import SupplierHeader from "@/components/supplier/SupplierHeader";

export default function SupplierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <SupplierSidebar />
            <main className="flex-1 overflow-y-auto">
                <SupplierHeader />
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
