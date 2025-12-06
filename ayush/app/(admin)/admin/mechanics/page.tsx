"use client";

import { MOCK_MECHANICS } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2, Eye, CheckCircle, XCircle, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type Mechanic = {
    _id: string;
    businessName: string;
    contactName: string;
    email: string;
    address: string;
    rating: number;
    status: string;
};

export default function MechanicsPage() {
    // const { data: mechanics, isLoading } = useMechanics();
    const mechanics = MOCK_MECHANICS;
    const isLoading = false;
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMechanic, setSelectedMechanic] = useState<Mechanic | null>(null);

    const handleEdit = (mechanic: Mechanic) => {
        setSelectedMechanic(mechanic);
        setIsEditModalOpen(true);
    };

    const handleDelete = (mechanic: Mechanic) => {
        setSelectedMechanic(mechanic);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success(`Mechanic ${selectedMechanic?.businessName} deleted`);
        setIsDeleteModalOpen(false);
        setSelectedMechanic(null);
    };

    const columns: ColumnDef<Mechanic>[] = [
        {
            accessorKey: "businessName",
            header: "Business Name",
            cell: ({ row }) => (
                <div>
                    <div className="font-medium text-gray-900">{row.getValue("businessName") || 'N/A'}</div>
                    <div className="text-xs text-gray-500">{row.original.email}</div>
                </div>
            ),
        },
        {
            accessorKey: "contactName",
            header: "Contact Person",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("contactName") || 'N/A'}</div>,
        },
        {
            accessorKey: "address",
            header: "Location",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("address") || 'N/A'}</div>,
        },
        {
            accessorKey: "rating",
            header: "Rating",
            cell: ({ row }) => (
                <div className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-1">★</span>
                    {row.getValue("rating") || '0.0'}
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string;
                return (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'approved' ? 'bg-green-100 text-green-800' :
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
                        <button className="p-1 text-gray-400 hover:text-green-600 transition-colors" title="Approve">
                            <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 transition-colors" title="Reject">
                            <XCircle className="w-4 h-4" />
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
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    const data = mechanics || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mechanics</h1>
                    <p className="text-gray-500 mt-1">Manage registered mechanics and approvals</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Mechanic
                </button>
            </div>

            <DataTable columns={columns} data={data} searchKey="businessName" searchPlaceholder="Search mechanics..." />

            {/* Add Mechanic Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Mechanic">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Mechanic added"); setIsAddModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Auto Fix" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="123 Main St" />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Add Mechanic</button>
                    </div>
                </form>
            </Modal>

            {/* Edit Mechanic Modal */}
            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Mechanic">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Mechanic updated"); setIsEditModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input type="text" defaultValue={selectedMechanic?.businessName} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                        <input type="text" defaultValue={selectedMechanic?.contactName} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" defaultValue={selectedMechanic?.email} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" defaultValue={selectedMechanic?.address} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
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
                title="Delete Mechanic"
                description={`Are you sure you want to delete ${selectedMechanic?.businessName}? This action cannot be undone.`}
            />
        </div>
    );
}
