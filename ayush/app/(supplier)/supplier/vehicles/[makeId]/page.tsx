"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { MOCK_VEHICLES_DATA } from "@/constants/dummyData";
import { ChevronLeft, Save, Trash, Plus, Car } from "lucide-react";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import AddModelModal from "@/components/supplier/AddModelModal";

const VehicleDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const makeId = params.makeId as string;

    const [make, setMake] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        // Mock fetching data
        const foundMake = MOCK_VEHICLES_DATA.find(m => m.id === makeId);
        if (foundMake) {
            setMake(foundMake);
        }
        setLoading(false);
    }, [makeId]);

    if (loading) return <div className="p-8">Loading...</div>;
    if (!make) return <div className="p-8">Vehicle make not found</div>;

    const modelColumns: ColumnDef<any>[] = [
        {
            accessorKey: "name",
            header: "Model Name",
            cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "rating",
            header: "Rating",
            cell: ({ row }) => <div>{row.getValue("rating")} / 5</div>,
        },
        {
            accessorKey: "expertMechanics",
            header: "Mechanics",
            cell: ({ row }) => <div>{row.getValue("expertMechanics")}</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex justify-end">
                    <button
                        onClick={() => toast.info(`Edit model ${row.original.name}`)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        Edit
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <button
                onClick={() => router.back()}
                className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
            >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Vehicles
            </button>

            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2">
                        <img src={make.logo} alt={make.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{make.name}</h1>
                        <p className="text-gray-500">{make.models.length} Models Available</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => toast.success("Changes saved (mock)")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                        <Save className="w-4 h-4" />
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Description</h2>
                        <textarea
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                            defaultValue={make.description}
                        />
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900">Models</h2>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                            >
                                <Plus className="w-4 h-4" /> Add Model
                            </button>
                        </div>
                        <DataTable
                            columns={modelColumns}
                            data={make.models}
                            searchKey="name"
                            searchPlaceholder="Search models..."
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h2>
                        <textarea
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                            defaultValue={make.facts}
                        />
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Service Guide</h2>
                        <textarea
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                            defaultValue={make.serviceGuide}
                        />
                    </div>
                </div>
            </div>

            <AddModelModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                makeName={make.name}
            />
        </div>
    );
};

export default VehicleDetailPage;
