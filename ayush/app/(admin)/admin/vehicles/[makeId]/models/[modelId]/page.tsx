"use client";

import { MOCK_VEHICLES_DATA } from "@/constants/dummyData";
import { ArrowLeft, Save, Plus, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function ModelDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const makeId = params.makeId as string;
    const modelId = params.modelId as string;

    const [make, setMake] = useState<any>(null);
    const [model, setModel] = useState<any>(null);
    const [serviceIntervals, setServiceIntervals] = useState<string[]>([]);
    const [newInterval, setNewInterval] = useState("");

    useEffect(() => {
        const foundMake = MOCK_VEHICLES_DATA.find(m => m.id === makeId);
        if (foundMake) {
            setMake(foundMake);
            const foundModel = foundMake.models.find((m: any) => m.id === modelId);
            if (foundModel) {
                setModel(foundModel);
                setServiceIntervals(foundModel.serviceIntervals || []);
            }
        }
    }, [makeId, modelId]);

    const handleSaveModel = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Model details saved");
    };

    const handleAddInterval = () => {
        if (newInterval.trim()) {
            setServiceIntervals([...serviceIntervals, newInterval.trim()]);
            setNewInterval("");
        }
    };

    const handleDeleteInterval = (index: number) => {
        const newIntervals = [...serviceIntervals];
        newIntervals.splice(index, 1);
        setServiceIntervals(newIntervals);
    };

    if (!model || !make) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/admin/vehicles/${makeId}`} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{model.name}</h1>
                    <p className="text-gray-500 mt-1">{make.name} Model Details</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Model Details Form */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Information</h2>
                        <form onSubmit={handleSaveModel} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" defaultValue={model.name} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input type="text" defaultValue={model.image} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} defaultValue={model.description} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Quotes Provided</label>
                                    <input type="text" defaultValue={model.quotesProvided} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Expert Mechanics</label>
                                    <input type="text" defaultValue={model.expertMechanics} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                                </div>
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium transition-colors">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>

                {/* Service Intervals */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Intervals</h2>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="text"
                                value={newInterval}
                                onChange={(e) => setNewInterval(e.target.value)}
                                placeholder="e.g. 10,000km / 6mth"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                            <button
                                onClick={handleAddInterval}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-2 max-h-[500px] overflow-y-auto">
                            {serviceIntervals.map((interval, index) => (
                                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                    <span className="text-gray-700 text-sm">{interval}</span>
                                    <button
                                        onClick={() => handleDeleteInterval(index)}
                                        className="text-gray-400 hover:text-red-600 transition-colors"
                                    >
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {serviceIntervals.length === 0 && (
                                <p className="text-gray-500 text-sm text-center py-4">No service intervals defined.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
