"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { MOCK_SERVICES } from "@/constants/dummyData";
import { ChevronLeft, Save, Trash, Plus, Wrench, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import AddSubServiceModal from "@/components/supplier/AddSubServiceModal";

const ServiceDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const serviceId = params.serviceId as string;

    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        // Mock fetching data
        const foundService = MOCK_SERVICES.find(s => s._id === serviceId);
        if (foundService) {
            setService(foundService);
        }
        setLoading(false);
    }, [serviceId]);

    if (loading) return <div className="p-8">Loading...</div>;
    if (!service) return <div className="p-8">Service not found</div>;

    const subServiceColumns: ColumnDef<any>[] = [
        {
            accessorKey: "name",
            header: "Sub-Service",
            cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-xs">{row.getValue("description")}</div>,
        },
        {
            accessorKey: "price",
            header: "Base Price",
            cell: ({ row }) => <div>${row.getValue("price")}</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex justify-end">
                    <button
                        onClick={() => toast.info(`Edit ${row.original.name}`)}
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
                Back to Services
            </button>

            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Wrench className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
                        <p className="text-gray-500">{service.features.length} Key Features</p>
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
                            defaultValue={service.description}
                        />
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900">Sub-Services & Pricing</h2>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                            >
                                <Plus className="w-4 h-4" /> Add Sub-Service
                            </button>
                        </div>
                        <DataTable
                            columns={subServiceColumns}
                            data={service.subServices || []}
                            searchKey="name"
                            searchPlaceholder="Search sub-services..."
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Features</h2>
                        <div className="space-y-3">
                            {service.features.map((feature: string, index: number) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <input
                                        type="text"
                                        defaultValue={feature}
                                        className="flex-1 p-2 border border-gray-200 rounded-lg text-sm"
                                    />
                                </div>
                            ))}
                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-2">
                                <Plus className="w-4 h-4" /> Add Feature
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Status</h2>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">Active Service</span>
                            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" defaultChecked={service.isActive} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddSubServiceModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                serviceName={service.title}
                availableSubServices={service.availableSubServices || []}
            />
        </div>
    );
};

export default ServiceDetailPage;
