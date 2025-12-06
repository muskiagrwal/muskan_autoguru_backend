"use client";

import { MOCK_VEHICLES_DATA } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Plus, Edit, Trash, Car } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type VehicleMake = {
    id: string;
    name: string;
    logo: string;
    description: string;
    models: any[];
};

export default function VehiclesPage() {
    const router = useRouter();
    const [vehicles, setVehicles] = useState(MOCK_VEHICLES_DATA);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState<VehicleMake | null>(null);

    const handleView = (make: VehicleMake) => {
        router.push(`/admin/vehicles/${make.id}`);
    };

    const handleDelete = (make: VehicleMake) => {
        setSelectedMake(make);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success(`Vehicle make ${selectedMake?.name} deleted`);
        setIsDeleteModalOpen(false);
        setSelectedMake(null);
    };

    const columns: ColumnDef<VehicleMake>[] = [
        {
            accessorKey: "name",
            header: "Make",
            cell: ({ row }) => (
                <div className="flex items-center">
                    <img src={row.original.logo} alt={row.original.name} className="w-8 h-8 mr-3 object-contain" />
                    <div className="font-medium text-gray-900">{row.getValue("name")}</div>
                </div>
            ),
        },
        {
            accessorKey: "models",
            header: "Models",
            cell: ({ row }) => <div className="text-gray-600">{row.original.models.length} Models</div>,
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-md">{row.getValue("description")}</div>,
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

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Vehicles</h1>
                    <p className="text-gray-500 mt-1">Manage vehicle makes and models</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Make
                </button>
            </div>

            <DataTable columns={columns} data={vehicles} searchKey="name" searchPlaceholder="Search makes..." />

            {/* Add Make Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Vehicle Make">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Vehicle make added"); setIsAddModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Make Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="e.g. BMW" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="https://..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Description..." />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Add Make</button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Vehicle Make"
                description={`Are you sure you want to delete ${selectedMake?.name}? This action cannot be undone.`}
            />
        </div>
    );
}
