"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { authApi } from "@/lib/api";
import { User, Mail, Calendar, LogOut, Loader2, ShieldCheck } from "lucide-react";

interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    role: string;
}

const AdminProfilePage = () => {
    const router = useRouter();
    const { isAuthenticated, logout } = useAuthStore();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        const fetchProfile = async () => {
            try {
                const data = await authApi.getCurrentUser();
                if (data.success && data.user) {
                    setProfile(data.user);
                } else {
                    setError("Failed to load profile data.");
                }
            } catch (err: any) {
                console.error("Profile fetch error:", err);
                setError(err.message || "An error occurred while fetching profile.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [isAuthenticated, router]);

    const handleLogout = () => {
        logout();
        router.push("/admin/login");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <p className="text-red-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-blue-600 hover:underline"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!profile) return null;

    const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase();
    const joinDate = new Date(profile.createdAt).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Profile</h1>

            <div className="bg-white shadow rounded-xl overflow-hidden border border-gray-100">
                {/* Header / Banner */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-32 relative">
                    <div className="absolute -bottom-12 left-8">
                        <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-600">
                                {initials}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {profile.firstName} {profile.lastName}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                <p className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </button>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Email Address</p>
                                <p className="text-gray-900 font-medium">{profile.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <Calendar className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Member Since</p>
                                <p className="text-gray-900 font-medium">{joinDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfilePage;
