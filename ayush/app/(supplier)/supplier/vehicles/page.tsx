"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MOCK_VEHICLES_DATA } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Plus, Edit, Trash, Car } from "lucide-react";
import { toast } from "sonner";
import AddVehicleModal from "@/components/supplier/AddVehicleModal";
import { DeleteModal } from "@/components/ui/DeleteModal";

type VehicleMake = {
    id: string;
    name: string;
    logo: string;
    description: string;
    models: any[];
};

const SupplierVehiclesPage = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState<VehicleMake | null>(null);

    const handleView = (make: VehicleMake) => {
        router.push(`/supplier/vehicles/${make.id}`);
    };

    const handleDelete = (make: VehicleMake) => {
        setSelectedMake(make);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success(`Vehicle make ${selectedMake?.name} deleted (mock)`);
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
                    <h1 className="text-2xl font-bold text-gray-900">My Vehicles</h1>
                    <p className="text-gray-500 mt-1">Manage the vehicles you service</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Vehicle
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <DataTable
                    columns={columns}
                    data={MOCK_VEHICLES_DATA}
                    searchKey="name"
                    searchPlaceholder="Search makes..."
                />
            </div>

            <AddVehicleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Vehicle Make"
                description={`Are you sure you want to delete ${selectedMake?.name}? This action cannot be undone.`}
            />
        </div>
    );
};

export default SupplierVehiclesPage;
