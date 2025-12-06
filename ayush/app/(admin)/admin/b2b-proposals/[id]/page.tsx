"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { ChevronLeft, FileText, CheckCircle, XCircle, Download } from "lucide-react";
import { toast } from "sonner";

const ProposalDetailPage = () => {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    // Mock data - in real app fetch by ID
    const proposal = {
        id: "prop-1",
        businessName: "Sydney Auto Repairs",
        contactName: "Michael Chang",
        abn: "51 824 753 556",
        email: "michael@sydneyauto.com.au",
        phone: "0412 345 678",
        address: "123 George St, Sydney NSW 2000",
        date: "2024-06-01",
        status: "pending",
        documents: [
            { name: "Business_Registration.pdf", type: "Registration" },
            { name: "Public_Liability.pdf", type: "Insurance" },
            { name: "Workers_Comp.pdf", type: "Insurance" }
        ]
    };

    const handleApprove = () => {
        toast.success("Proposal approved! Partner account created.");
        router.push("/admin/b2b-proposals");
    };

    const handleReject = () => {
        toast.error("Proposal rejected.");
        router.push("/admin/b2b-proposals");
    };

    return (
        <div className="space-y-6">
            <button
                onClick={() => router.back()}
                className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
            >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Proposals
            </button>

            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{proposal.businessName}</h1>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            Pending Review
                        </span>
                        <span className="text-gray-500 text-sm">Submitted on {proposal.date}</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleReject}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg hover:bg-red-50 font-medium transition-colors"
                    >
                        <XCircle className="w-4 h-4" />
                        Reject
                    </button>
                    <button
                        onClick={handleApprove}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
                    >
                        <CheckCircle className="w-4 h-4" />
                        Approve Partnership
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Business Details</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Contact Person</dt>
                                <dd className="mt-1 text-sm text-gray-900">{proposal.contactName}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">ABN</dt>
                                <dd className="mt-1 text-sm text-gray-900 font-mono">{proposal.abn}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">{proposal.email}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900">{proposal.phone}</dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500">Address</dt>
                                <dd className="mt-1 text-sm text-gray-900">{proposal.address}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Submitted Documents</h2>
                        <div className="space-y-3">
                            {proposal.documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                                            <p className="text-xs text-gray-500">{doc.type}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h2 className="text-lg font-bold text-blue-900 mb-2">Verification Checklist</h2>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-sm text-blue-800">
                                <input type="checkbox" className="rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                                Valid ABN
                            </label>
                            <label className="flex items-center gap-2 text-sm text-blue-800">
                                <input type="checkbox" className="rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                                Insurance Currency
                            </label>
                            <label className="flex items-center gap-2 text-sm text-blue-800">
                                <input type="checkbox" className="rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                                Address Verification
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalDetailPage;
