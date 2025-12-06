"use client";

import { MOCK_SERVICES } from "@/constants/dummyData";
import { useCreateCarService, useUpdateCarService, useDeleteCarService } from "@/hooks/useCarService";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2, Eye, Edit, Trash, Plus, Wrench } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type CarService = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    features: string[];
    providers: any[];
    isActive: boolean;
};

import { useRouter } from "next/navigation";

export default function ServicesPage() {
    const router = useRouter();
    // const { data: services, isLoading } = useCarServices();
    const services = MOCK_SERVICES;
    const isLoading = false;
    const createService = useCreateCarService();
    const updateService = useUpdateCarService();
    const deleteService = useDeleteCarService();

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<CarService | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        icon: "Wrench",
        features: ""
    });

    const handleEdit = (service: CarService) => {
        // setSelectedService(service);
        // setFormData({
        //     title: service.title,
        //     description: service.description,
        //     icon: service.icon,
        //     features: service.features.join(", ")
        // });
        // setIsEditModalOpen(true);
        router.push(`/admin/services/${service._id}`);
    };

    const handleDelete = (service: CarService) => {
        setSelectedService(service);
        setIsDeleteModalOpen(true);
    };

    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createService.mutateAsync({
                ...formData,
                features: formData.features.split(",").map(f => f.trim()).filter(f => f)
            });
            setIsAddModalOpen(false);
            setFormData({ title: "", description: "", icon: "Wrench", features: "" });
        } catch (error) {
            // Error handled in hook
        }
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedService) return;
        try {
            await updateService.mutateAsync({
                id: selectedService._id,
                data: {
                    ...formData,
                    features: formData.features.split(",").map(f => f.trim()).filter(f => f)
                }
            });
            setIsEditModalOpen(false);
            setSelectedService(null);
        } catch (error) {
            // Error handled in hook
        }
    };

    const confirmDelete = async () => {
        if (!selectedService) return;
        try {
            await deleteService.mutateAsync(selectedService._id);
            setIsDeleteModalOpen(false);
            setSelectedService(null);
        } catch (error) {
            // Error handled in hook
        }
    };

    const columns: ColumnDef<CarService>[] = [
        {
            accessorKey: "title",
            header: "Service Name",
            cell: ({ row }) => (
                <div className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        <Wrench className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{row.getValue("title")}</div>
                        <div className="text-xs text-gray-500">/{row.original.slug}</div>
                    </div>
                </div>
            ),
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-xs">{row.getValue("description")}</div>,
        },
        {
            accessorKey: "features",
            header: "Features",
            cell: ({ row }) => <div className="text-gray-600">{row.original.features.length} features</div>,
        },
        {
            accessorKey: "isActive",
            header: "Status",
            cell: ({ row }) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.original.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                    {row.original.isActive ? 'Active' : 'Inactive'}
                </span>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Details"
                            onClick={() => handleEdit(row.original)}
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
                <Loader2 className="w-8 h-8 animate-spin text-red-600" />
            </div>
        );
    }

    const data = services || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Services</h1>
                    <p className="text-gray-500 mt-1">Manage car repair services</p>
                </div>
                <button
                    onClick={() => {
                        setFormData({ title: "", description: "", icon: "Wrench", features: "" });
                        setIsAddModalOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Service
                </button>
            </div>

            <DataTable columns={columns} data={data} searchKey="title" searchPlaceholder="Search services..." />

            {/* Add Service Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Service">
                <form className="space-y-4" onSubmit={handleAddSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Title</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="e.g. Air Conditioning"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            required
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Service description..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Regas, Leak Test, Repairs"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" disabled={createService.isPending} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium disabled:opacity-50">
                            {createService.isPending ? 'Adding...' : 'Add Service'}
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Edit Service Modal */}
            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Service">
                <form className="space-y-4" onSubmit={handleEditSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Title</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            required
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" disabled={updateService.isPending} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium disabled:opacity-50">
                            {updateService.isPending ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                loading={deleteService.isPending}
                title="Delete Service"
                description={`Are you sure you want to delete ${selectedService?.title}? This action cannot be undone.`}
            />
        </div>
    );
}
