"use client";

import { MOCK_INQUIRIES } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2, Eye, Trash } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

// Define the shape of our data
type Inquiry = {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
    status: string;
};

export default function InquiriesPage() {
    // const { data: inquiries, isLoading } = useInquiries();
    const inquiries = MOCK_INQUIRIES;
    const isLoading = false;
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

    const handleView = (inquiry: Inquiry) => {
        setSelectedInquiry(inquiry);
        setIsViewModalOpen(true);
    };

    const handleDelete = (inquiry: Inquiry) => {
        setSelectedInquiry(inquiry);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success("Inquiry deleted");
        setIsDeleteModalOpen(false);
        setSelectedInquiry(null);
    };

    const columns: ColumnDef<Inquiry>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "subject",
            header: "Subject",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("subject")}</div>,
        },
        {
            accessorKey: "createdAt",
            header: "Date",
            cell: ({ row }) => {
                const date = row.getValue("createdAt") as string;
                return <div className="text-gray-600">{date ? format(new Date(date), 'MMM d, yyyy') : 'N/A'}</div>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View"
                            onClick={() => handleView(row.original)}
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDelete(row.original)}
                        >
                            <Trash className="w-4 h-4" />
                        </button>
                    </div>
                );
            },
        },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    // Mock data if API returns empty
    const data = (inquiries && inquiries.length > 0) ? inquiries : [
        { _id: '1', name: 'Alice Johnson', email: 'alice@example.com', subject: 'Service Inquiry', message: 'How much for a full service?', createdAt: '2023-11-25T10:00:00Z', status: 'New' },
        { _id: '2', name: 'Bob Williams', email: 'bob@example.com', subject: 'Booking Issue', message: 'I cannot book online.', createdAt: '2023-11-24T14:30:00Z', status: 'Read' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
                <p className="text-gray-500 mt-1">Manage contact form submissions</p>
            </div>

            <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder="Search inquiries..." />

            {/* View Inquiry Modal */}
            <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="Inquiry Details">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">From</h4>
                        <p className="text-gray-900">{selectedInquiry?.name} ({selectedInquiry?.email})</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Subject</h4>
                        <p className="text-gray-900">{selectedInquiry?.subject}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Message</h4>
                        <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded-md text-sm">{selectedInquiry?.message}</p>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">Close</button>
                    </div>
                </div>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Inquiry"
                description="Are you sure you want to delete this inquiry? This action cannot be undone."
            />
        </div>
    );
}
