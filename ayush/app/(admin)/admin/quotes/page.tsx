"use client";

import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { toast } from "sonner";

import { MOCK_QUOTES } from "@/constants/dummyData";

type Quote = {
    id: number;
    customer: string;
    vehicle: string;
    service: string;
    status: string;
    date: string;
};

export default function QuotesPage() {
    const [quotes] = useState(MOCK_QUOTES);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

    const handleView = (quote: Quote) => {
        setSelectedQuote(quote);
        setIsViewModalOpen(true);
    };

    const handleRespond = (quote: Quote) => {
        setSelectedQuote(quote);
        setIsRespondModalOpen(true);
    };

    const columns: ColumnDef<Quote>[] = [
        {
            accessorKey: "customer",
            header: "Customer",
            cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("customer")}</div>,
        },
        {
            accessorKey: "vehicle",
            header: "Vehicle",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("vehicle")}</div>,
        },
        {
            accessorKey: "service",
            header: "Service",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("service")}</div>,
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("date")}</div>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string;
                return (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'Accepted' ? 'bg-green-100 text-green-800' :
                        status === 'Responded' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                        }`}>
                        {status}
                    </span>
                );
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Details"
                            onClick={() => handleView(row.original)}
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Responses"
                            onClick={() => handleRespond(row.original)}
                        >
                            <MessageSquare className="w-4 h-4" />
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Quotes</h1>
                <p className="text-gray-500 mt-1">Monitor quote requests and responses</p>
            </div>

            <DataTable columns={columns} data={quotes} searchKey="customer" searchPlaceholder="Search quotes..." />

            {/* View Quote Modal */}
            <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="Quote Details">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Customer</h4>
                        <p className="text-gray-900">{selectedQuote?.customer}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Vehicle</h4>
                        <p className="text-gray-900">{selectedQuote?.vehicle}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Service</h4>
                        <p className="text-gray-900">{selectedQuote?.service}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Status</h4>
                        <p className="text-gray-900">{selectedQuote?.status}</p>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">Close</button>
                    </div>
                </div>
            </Modal>

            {/* Respond Modal */}
            <Modal isOpen={isRespondModalOpen} onClose={() => setIsRespondModalOpen(false)} title="Respond to Quote">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Response sent"); setIsRespondModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Enter your response..." />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsRespondModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium">Send Response</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
