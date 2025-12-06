"use client";

import React, { useState } from 'react';
import { Upload, CheckCircle2, Loader2, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useB2B } from '@/hooks/useB2B';

const B2BRegisterForm = () => {
    const [step, setStep] = useState(1);
    const { registerMutation } = useB2B();
    const [formData, setFormData] = useState({
        businessName: '',
        abn: '',
        contactName: '',
        email: '',
        phone: '',
        address: '',
        serviceTypes: [] as string[],
        documents: {
            registration: null as { name: string, base64: string } | null,
            insurance: null as { name: string, base64: string } | null,
            workersComp: null as { name: string, base64: string } | null
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: keyof typeof formData.documents) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData(prev => ({
                    ...prev,
                    documents: {
                        ...prev.documents,
                        [docType]: { name: file.name, base64: base64String }
                    }
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        registerMutation.mutate(formData, {
            onSuccess: () => {
                setStep(3); // Success step
            }
        });
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <section id="register-form" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-slate-900 p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-2">Partner Application</h2>
                        <p className="text-slate-300">Join the AutoGuru network in 3 simple steps</p>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>1</div>
                            <div className={`w-16 h-1 bg-slate-700 ${step >= 2 ? 'bg-blue-500' : ''}`}></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>2</div>
                            <div className={`w-16 h-1 bg-slate-700 ${step >= 3 ? 'bg-blue-500' : ''}`}></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>3</div>
                        </div>
                    </div>

                    <div className="p-8">
                        {step === 1 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-xl font-bold text-gray-900">Business Details</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="e.g. John's Auto Care"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ABN (Australian Business Number)</label>
                                        <input
                                            type="text"
                                            name="abn"
                                            value={formData.abn}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="XX XXX XXX XXX"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                                        <input
                                            type="text"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="email@business.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="0400 000 000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Street, Suburb, State, Postcode"
                                    />
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={nextStep}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                                    >
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-xl font-bold text-gray-900">Verification Documents</h3>
                                <p className="text-sm text-gray-500">Please upload the following documents to verify your business status in Australia.</p>

                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Business Registration Certificate</h4>
                                                    <p className="text-xs text-gray-500">ASIC Registration or similar</p>
                                                </div>
                                            </div>
                                            <label className="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                                Upload
                                                <input type="file" className="hidden" onChange={(e) => handleFileChange(e, 'registration')} />
                                            </label>
                                        </div>
                                        {formData.documents.registration && (
                                            <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {formData.documents.registration.name}
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Public Liability Insurance</h4>
                                                    <p className="text-xs text-gray-500">Certificate of Currency</p>
                                                </div>
                                            </div>
                                            <label className="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                                Upload
                                                <input type="file" className="hidden" onChange={(e) => handleFileChange(e, 'insurance')} />
                                            </label>
                                        </div>
                                        {formData.documents.insurance && (
                                            <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {formData.documents.insurance.name}
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Workers Compensation</h4>
                                                    <p className="text-xs text-gray-500">If applicable</p>
                                                </div>
                                            </div>
                                            <label className="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                                Upload
                                                <input type="file" className="hidden" onChange={(e) => handleFileChange(e, 'workersComp')} />
                                            </label>
                                        </div>
                                        {formData.documents.workersComp && (
                                            <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {formData.documents.workersComp.name}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <button
                                        onClick={prevStep}
                                        className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={registerMutation.isPending}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {registerMutation.isPending ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h3>
                                <p className="text-gray-600 max-w-md mx-auto mb-8">
                                    Thank you for applying to partner with AutoGuru. Our team will review your documents and contact you within 24-48 hours.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium transition-colors"
                                >
                                    Return Home
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default B2BRegisterForm;
