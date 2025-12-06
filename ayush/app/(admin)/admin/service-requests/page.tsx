"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Check, X, Eye, FileText } from "lucide-react";
import { toast } from "sonner";
import { Modal } from "@/components/ui/Modal";

// Mock data for service requests
const MOCK_REQUESTS = [
    {
        id: "req-1",
        serviceName: "Hybrid Battery Replacement",
        description: "Replacement of high-voltage battery for hybrid vehicles.",
        proposedPrice: 1200,
        requester: "John's Auto Shop",
        date: "2024-05-20",
        status: "pending"
    },
    {
        id: "req-2",
        serviceName: "EV Charging Port Repair",
        description: "Repairing damaged charging ports for electric vehicles.",
        proposedPrice: 350,
        requester: "Green Mechanics",
        date: "2024-05-21",
        status: "pending"
    }
];

type ServiceRequest = typeof MOCK_REQUESTS[0];

const ServiceRequestsPage = () => {
    const [requests, setRequests] = useState<ServiceRequest[]>(MOCK_REQUESTS);
    const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const handleApprove = (id: string) => {
        setRequests(prev => prev.filter(req => req.id !== id));
        toast.success("Service request approved and added to global services.");
        setIsDetailModalOpen(false);
    };

    const handleReject = (id: string) => {
        setRequests(prev => prev.filter(req => req.id !== id));
        toast.error("Service request rejected.");
        setIsDetailModalOpen(false);
    };

    const handleView = (request: ServiceRequest) => {
        setSelectedRequest(request);
        setIsDetailModalOpen(true);
    };

    const columns: ColumnDef<ServiceRequest>[] = [
        {
            accessorKey: "serviceName",
            header: "Service Name",
            cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("serviceName")}</div>,
        },
        {
            accessorKey: "requester",
            header: "Requested By",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("requester")}</div>,
        },
        {
            accessorKey: "proposedPrice",
            header: "Proposed Price",
            cell: ({ row }) => <div className="text-gray-600">${row.getValue("proposedPrice")}</div>,
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => <div className="text-gray-500 text-sm">{row.getValue("date")}</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex items-center justify-end space-x-2">
                    <button
                        onClick={() => handleView(row.original)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Details"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => handleApprove(row.original.id)}
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                        title="Approve"
                    >
                        <Check className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => handleReject(row.original.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        title="Reject"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Service Requests</h1>
                <p className="text-gray-500 mt-1">Review and approve new service requests from mechanics.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <DataTable
                    columns={columns}
                    data={requests}
                    searchKey="serviceName"
                    searchPlaceholder="Search requests..."
                />
            </div>

            {selectedRequest && (
                <Modal
                    isOpen={isDetailModalOpen}
                    onClose={() => setIsDetailModalOpen(false)}
                    title="Request Details"
                >
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Service Name</h3>
                            <p className="text-lg font-medium text-gray-900">{selectedRequest.serviceName}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Description</h3>
                            <p className="text-gray-700 bg-gray-50 p-3 rounded-md">{selectedRequest.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Proposed Price</h3>
                                <p className="text-gray-900">${selectedRequest.proposedPrice}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Requested By</h3>
                                <p className="text-gray-900">{selectedRequest.requester}</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-4">
                            <button
                                onClick={() => handleReject(selectedRequest.id)}
                                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm font-medium border border-red-200"
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleApprove(selectedRequest.id)}
                                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md text-sm font-medium"
                            >
                                Approve & Add Service
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ServiceRequestsPage;
