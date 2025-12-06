"use client";

import { MOCK_VEHICLES_DATA } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowLeft, Plus, Edit, Trash, Eye, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type VehicleModel = {
    id: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    quotesProvided: string;
    expertMechanics: string;
    description: string;
    serviceIntervals: string[];
};

export default function MakeDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const makeId = params.makeId as string;

    const [make, setMake] = useState<any>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);

    useEffect(() => {
        const foundMake = MOCK_VEHICLES_DATA.find(m => m.id === makeId);
        if (foundMake) {
            setMake(foundMake);
        } else {
            // Handle not found
        }
    }, [makeId]);

    const handleViewModel = (model: VehicleModel) => {
        router.push(`/admin/vehicles/${makeId}/models/${model.id}`);
    };

    const handleDeleteModel = (model: VehicleModel) => {
        setSelectedModel(model);
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteModel = () => {
        toast.success(`Model ${selectedModel?.name} deleted`);
        setIsDeleteModalOpen(false);
        setSelectedModel(null);
    };

    const handleSaveMake = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Make details saved");
    };

    const columns: ColumnDef<VehicleModel>[] = [
        {
            accessorKey: "name",
            header: "Model Name",
            cell: ({ row }) => (
                <div className="flex items-center">
                    <img src={row.original.image} alt={row.original.name} className="w-10 h-8 mr-3 object-cover rounded" />
                    <div className="font-medium text-gray-900">{row.getValue("name")}</div>
                </div>
            ),
        },
        {
            accessorKey: "rating",
            header: "Rating",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("rating")} ({row.original.reviews} reviews)</div>,
        },
        {
            accessorKey: "serviceIntervals",
            header: "Service Intervals",
            cell: ({ row }) => <div className="text-gray-600">{row.original.serviceIntervals.length} defined</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Details"
                            onClick={() => handleViewModel(row.original)}
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDeleteModel(row.original)}
                        >
                            <Trash className="w-4 h-4" />
                        </button>
                    </div>
                );
            },
        },
    ];

    if (!make) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/vehicles" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{make.name}</h1>
                    <p className="text-gray-500 mt-1">Manage make details and models</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Make Details Form */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Make Details</h2>
                        <form onSubmit={handleSaveMake} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" defaultValue={make.name} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                                <input type="text" defaultValue={make.logo} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} defaultValue={make.description} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Facts</label>
                                <textarea rows={4} defaultValue={make.facts} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Logbook Cost</label>
                                    <input type="number" defaultValue={make.serviceCosts.logbook} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Basic Cost</label>
                                    <input type="number" defaultValue={make.serviceCosts.basic} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                                </div>
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium transition-colors">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>

                {/* Models List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Models</h2>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Model
                            </button>
                        </div>
                        <DataTable columns={columns} data={make.models} searchKey="name" searchPlaceholder="Search models..." />
                    </div>
                </div>
            </div>

            {/* Add Model Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Model">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Model added"); setIsAddModalOpen(false); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="e.g. Corolla" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="https://..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Description..." />
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium">Add Model</button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDeleteModel}
                title="Delete Model"
                description={`Are you sure you want to delete ${selectedModel?.name}? This action cannot be undone.`}
            />
        </div>
    );
}
