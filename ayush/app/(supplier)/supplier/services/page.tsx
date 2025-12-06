"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MOCK_SERVICES } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Plus, Edit, Trash, Wrench, FilePlus } from "lucide-react";
import { toast } from "sonner";
import AddServiceModal from "@/components/supplier/AddServiceModal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import RequestServiceModal from "@/components/supplier/RequestServiceModal";

type CarService = {
    _id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
};

const SupplierServicesPage = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<CarService | null>(null);

    const handleView = (service: CarService) => {
        router.push(`/supplier/services/${service._id}`);
    };

    const handleDelete = (service: CarService) => {
        setSelectedService(service);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success(`Service ${selectedService?.title} deleted (mock)`);
        setIsDeleteModalOpen(false);
        setSelectedService(null);
    };

    const columns: ColumnDef<CarService>[] = [
        {
            accessorKey: "title",
            header: "Service",
            cell: ({ row }) => (
                <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        <Wrench className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="font-medium text-gray-900">{row.getValue("title")}</div>
                </div>
            ),
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-md">{row.getValue("description")}</div>,
        },
        {
            accessorKey: "features",
            header: "Features",
            cell: ({ row }) => <div className="text-gray-600">{row.original.features.length} Features</div>,
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
                    <h1 className="text-2xl font-bold text-gray-900">My Services</h1>
                    <p className="text-gray-500 mt-1">Manage the services you offer to customers</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsRequestModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors"
                    >
                        <FilePlus className="w-4 h-4" />
                        Request New Service
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add Service
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <DataTable
                    columns={columns}
                    data={MOCK_SERVICES}
                    searchKey="title"
                    searchPlaceholder="Search services..."
                />
            </div>

            <AddServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <RequestServiceModal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Service"
                description={`Are you sure you want to delete ${selectedService?.title}? This action cannot be undone.`}
            />
        </div>
    );
};

export default SupplierServicesPage;
