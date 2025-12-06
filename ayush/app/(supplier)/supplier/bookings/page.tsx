"use client";

import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

type SupplierBooking = {
    id: string;
    customer: string;
    vehicle: string;
    service: string;
    date: string;
    status: "Pending" | "Confirmed" | "Completed";
};

const MOCK_SUPPLIER_BOOKINGS: SupplierBooking[] = [
    {
        id: "#BK-7829",
        customer: "John Doe",
        vehicle: "2015 Toyota Corolla",
        service: "Logbook Service",
        date: "Dec 12, 2025",
        status: "Pending",
    },
    {
        id: "#BK-7830",
        customer: "Sarah Smith",
        vehicle: "2018 Mazda 3",
        service: "Brake Pad Replacement",
        date: "Dec 14, 2025",
        status: "Confirmed",
    },
    {
        id: "#BK-7831",
        customer: "Mike Johnson",
        vehicle: "2020 Ford Ranger",
        service: "Battery Replacement",
        date: "Dec 15, 2025",
        status: "Completed",
    },
    {
        id: "#BK-7832",
        customer: "Emily Davis",
        vehicle: "2019 Hyundai i30",
        service: "General Service",
        date: "Dec 16, 2025",
        status: "Pending",
    },
    {
        id: "#BK-7833",
        customer: "David Wilson",
        vehicle: "2016 Honda Civic",
        service: "Tyre Rotation",
        date: "Dec 18, 2025",
        status: "Confirmed",
    },
];

const columns: ColumnDef<SupplierBooking>[] = [
    {
        accessorKey: "id",
        header: "Booking ID",
        cell: ({ row }) => <span className="font-medium text-gray-900">{row.getValue("id")}</span>,
    },
    {
        accessorKey: "customer",
        header: "Customer",
    },
    {
        accessorKey: "vehicle",
        header: "Vehicle",
    },
    {
        accessorKey: "service",
        header: "Service",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            let colorClass = "bg-gray-100 text-gray-800";

            if (status === "Pending") colorClass = "bg-yellow-100 text-yellow-800";
            else if (status === "Confirmed") colorClass = "bg-green-100 text-green-800";
            else if (status === "Completed") colorClass = "bg-blue-100 text-blue-800";

            return (
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}>
                    {status}
                </span>
            );
        },
    },
    {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-end">
                    <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        View
                    </button>
                </div>
            );
        },
    },
];

const SupplierBookingsPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
            </div>

            <DataTable
                columns={columns}
                data={MOCK_SUPPLIER_BOOKINGS}
                searchKey="customer"
                searchPlaceholder="Search by customer..."
            />
        </div>
    );
};

export default SupplierBookingsPage;
