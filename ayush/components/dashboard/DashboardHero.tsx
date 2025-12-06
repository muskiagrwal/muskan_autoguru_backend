import React from 'react';
import { User, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DashboardHeroProps {
    userName: string;
    totalServices: number;
    nextServiceDue: string;
}

const DashboardHero: React.FC<DashboardHeroProps> = ({ userName, totalServices, nextServiceDue }) => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl mb-8">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-4">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">Premium Member</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        {getGreeting()}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{userName}</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
                        Your vehicle is in good hands. Track your services, manage bookings, and keep your car running smoothly.
                    </p>
                    <Link
                        href="/book-service"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
                    >
                        Book a Service
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 min-w-[160px] flex-1 md:flex-none">
                        <p className="text-blue-200 text-sm font-medium mb-2">Total Services</p>
                        <p className="text-4xl font-bold text-white">{totalServices}</p>
                        <p className="text-xs text-gray-400 mt-2">Lifetime services</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 min-w-[160px] flex-1 md:flex-none">
                        <p className="text-blue-200 text-sm font-medium mb-2">Next Service</p>
                        <p className="text-2xl font-bold text-white">{nextServiceDue}</p>
                        <p className="text-xs text-gray-400 mt-2">Estimated date</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHero;
