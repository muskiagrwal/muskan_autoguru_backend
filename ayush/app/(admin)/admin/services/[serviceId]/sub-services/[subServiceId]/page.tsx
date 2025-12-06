"use client";

import { MOCK_SERVICES } from "@/constants/dummyData";
import { ArrowLeft, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function SubServiceDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const serviceId = params.serviceId as string;
    const subServiceId = params.subServiceId as string;

    const [service, setService] = useState<any>(null);
    const [subService, setSubService] = useState<any>(null);

    useEffect(() => {
        const foundService = MOCK_SERVICES.find(s => s._id === serviceId);
        if (foundService) {
            setService(foundService);
            const foundSubService = foundService.subServices?.find((s: any) => s.id === subServiceId);
            if (foundSubService) {
                setSubService(foundSubService);
            }
        }
    }, [serviceId, subServiceId]);

    const handleSaveSubService = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Sub-service details saved");
    };

    if (!subService || !service) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/admin/services/${serviceId}`} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{subService.name}</h1>
                    <p className="text-gray-500 mt-1">{service.title} Sub-Service Details</p>
                </div>
            </div>

            <div className="max-w-2xl">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Sub-Service Information</h2>
                    <form onSubmit={handleSaveSubService} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" defaultValue={subService.name} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea rows={4} defaultValue={subService.description} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                            <input type="number" defaultValue={subService.price} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium transition-colors">
                            <Save className="w-4 h-4" />
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
