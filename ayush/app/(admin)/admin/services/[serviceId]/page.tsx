"use client";

import { MOCK_SERVICES } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowLeft, Plus, Edit, Trash, Eye, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type SubService = {
    id: string;
    name: string;
    description: string;
    price: number;
};

export default function ServiceDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const serviceId = params.serviceId as string;

    const [service, setService] = useState<any>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);

    useEffect(() => {
        const foundService = MOCK_SERVICES.find(s => s._id === serviceId);
        if (foundService) {
            setService(foundService);
        } else {
            // Handle not found
        }
    }, [serviceId]);

    const handleViewSubService = (subService: SubService) => {
        router.push(`/admin/services/${serviceId}/sub-services/${subService.id}`);
    };

    const handleDeleteSubService = (subService: SubService) => {
        setSelectedSubService(subService);
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteSubService = () => {
        toast.success(`Sub-service ${selectedSubService?.name} deleted`);
        setIsDeleteModalOpen(false);
        setSelectedSubService(null);
    };

    const handleSaveService = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Service details saved");
    };

    const columns: ColumnDef<SubService>[] = [
        {
            accessorKey: "name",
            header: "Sub-Service Name",
            cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-xs">{row.getValue("description")}</div>,
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => <div className="text-gray-600">${row.getValue("price")}</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Details"
                            onClick={() => handleViewSubService(row.original)}
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDeleteSubService(row.original)}
                        >
                            <Trash className="w-4 h-4" />
                        </button>
                    </div>
                );
            },
        },
    ];

    if (!service) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/services" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
                    <p className="text-gray-500 mt-1">Manage service category and sub-services</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Service Details Form */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h2>
                        <form onSubmit={handleSaveService} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input type="text" defaultValue={service.title} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                                <input type="text" defaultValue={service.slug} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} defaultValue={service.description} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                                <input type="text" defaultValue={service.icon} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium transition-colors">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sub-Services List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Sub-Services</h2>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Sub-Service
                            </button>
                        </div>
                        <DataTable columns={columns} data={service.subServices || []} searchKey="name" searchPlaceholder="Search sub-services..." />
                    </div>
                </div>
            </div>

            {/* Add Sub-Service Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Sub-Service">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Sub-service added"); setIsAddModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="e.g. Regas" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Description..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                        <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="0.00" />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium">Add Sub-Service</button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDeleteSubService}
                title="Delete Sub-Service"
                description={`Are you sure you want to delete ${selectedSubService?.name}? This action cannot be undone.`}
            />
        </div>
    );
}
