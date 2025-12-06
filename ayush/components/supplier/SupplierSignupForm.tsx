"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SupplierSignupForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        console.log("Supplier Signup Data:", formData);
        toast.success("Thanks for joining! We'll be in touch shortly.");

        // Redirect to dashboard (mock login)
        setTimeout(() => {
            router.push("/supplier/dashboard");
        }, 1500);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Join the network</h3>
            <p className="text-sm text-gray-500 mb-6">
                Get more bookings and grow your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                    </label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="e.g. Joe's Garage"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="name@business.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="0400 000 000"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#00D26A] text-white font-bold py-3 rounded-lg hover:bg-[#00b059] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                    Join Now
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    By joining, you agree to our Terms of Service and Privacy Policy.
                </p>
            </form>
        </div>
    );
};

export default SupplierSignupForm;
