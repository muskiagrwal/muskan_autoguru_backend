"use client";

import { MOCK_BOOKINGS } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2, Eye, Edit, Trash } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type Booking = {
    _id: string;
    name: string;
    email: string;
    serviceType: string;
    vehicleName: string;
    vehicleModel: string;
    createdAt: string;
    status: string;
};

export default function BookingsPage() {
    // const { data: bookings, isLoading } = useHomeServices();
    const bookings = MOCK_BOOKINGS;
    const isLoading = false;
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const handleEdit = (booking: Booking) => {
        setSelectedBooking(booking);
        setIsEditModalOpen(true);
    };

    const handleDelete = (booking: Booking) => {
        setSelectedBooking(booking);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success(`Booking for ${selectedBooking?.name} deleted`);
        setIsDeleteModalOpen(false);
        setSelectedBooking(null);
    };

    const columns: ColumnDef<Booking>[] = [
        {
            accessorKey: "name",
            header: "Customer",
            cell: ({ row }) => (
                <div>
                    <div className="font-medium text-gray-900">{row.getValue("name")}</div>
                    <div className="text-xs text-gray-500">{row.original.email}</div>
                </div>
            ),
        },
        {
            accessorKey: "serviceType",
            header: "Service",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("serviceType")}</div>,
        },
        {
            accessorKey: "vehicleName",
            header: "Vehicle",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("vehicleName")} {row.original.vehicleModel}</div>,
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
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string;
                return (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'completed' ? 'bg-green-100 text-green-800' :
                        status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                        }`}>
                        {status || 'Pending'}
                    </span>
                );
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors" title="View Details">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Edit"
                            onClick={() => handleEdit(row.original)}
                        >
                            <Edit className="w-4 h-4" />
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
                <Loader2 className="w-8 h-8 animate-spin text-red-600" />
            </div>
        );
    }

    const data = bookings || [];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
                <p className="text-gray-500 mt-1">Manage all service bookings</p>
            </div>

            <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder="Search bookings..." />

            {/* Edit Booking Modal */}
            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Booking Status">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Booking updated"); setIsEditModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select defaultValue={selectedBooking?.status} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500">
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium">Save Changes</button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Booking"
                description={`Are you sure you want to delete the booking for ${selectedBooking?.name}? This action cannot be undone.`}
            />
        </div>
    );
}
