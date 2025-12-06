"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Check, X, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Mock data
const MOCK_PROPOSALS = [
    {
        id: "prop-1",
        businessName: "Sydney Auto Repairs",
        contactName: "Michael Chang",
        abn: "51 824 753 556",
        email: "michael@sydneyauto.com.au",
        date: "2024-06-01",
        status: "pending"
    },
    {
        id: "prop-2",
        businessName: "Melbourne Mobile Mechanics",
        contactName: "Sarah Smith",
        abn: "22 123 456 789",
        email: "sarah@melbournemobile.com.au",
        date: "2024-06-02",
        status: "pending"
    }
];

type Proposal = typeof MOCK_PROPOSALS[0];

const B2BProposalsPage = () => {
    const router = useRouter();
    const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);

    const handleView = (id: string) => {
        router.push(`/admin/b2b-proposals/${id}`);
    };

    const columns: ColumnDef<Proposal>[] = [
        {
            accessorKey: "businessName",
            header: "Business Name",
            cell: ({ row }) => (
                <div className="flex items-center">
                    <div className="p-2 bg-purple-50 rounded-lg mr-3">
                        <Building2 className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="font-medium text-gray-900">{row.getValue("businessName")}</div>
                </div>
            ),
        },
        {
            accessorKey: "contactName",
            header: "Contact",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("contactName")}</div>,
        },
        {
            accessorKey: "abn",
            header: "ABN",
            cell: ({ row }) => <div className="text-gray-600 font-mono text-xs">{row.getValue("abn")}</div>,
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => <div className="text-gray-500 text-sm">{row.getValue("date")}</div>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {row.getValue("status")}
                </span>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex items-center justify-end space-x-2">
                    <button
                        onClick={() => handleView(row.original.id)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Details"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">B2B Partnership Proposals</h1>
                <p className="text-gray-500 mt-1">Review and manage partnership applications from businesses.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <DataTable
                    columns={columns}
                    data={proposals}
                    searchKey="businessName"
                    searchPlaceholder="Search proposals..."
                />
            </div>
        </div>
    );
};

export default B2BProposalsPage;
