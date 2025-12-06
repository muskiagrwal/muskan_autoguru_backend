import React from 'react';
import { CheckCircle2, Circle, Clock, Wrench, Car, MapPin, ChevronRight } from 'lucide-react';

interface ServiceStatusCardProps {
    vehicleName: string;
    serviceType: string;
    status: 'booked' | 'dropped_off' | 'inspection' | 'in_progress' | 'ready' | 'completed';
    date: string;
}

const steps = [
    { id: 'booked', label: 'Booked' },
    { id: 'dropped_off', label: 'Dropped Off' },
    { id: 'inspection', label: 'Inspection' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'ready', label: 'Ready' },
    { id: 'completed', label: 'Completed' },
];

const ServiceStatusCard: React.FC<ServiceStatusCardProps> = ({ vehicleName, serviceType, status, date }) => {
    const currentStepIndex = steps.findIndex((step) => step.id === status);

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <Car className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Active Service</h2>
                    </div>
                    <p className="text-gray-500">Tracking for: <span className="font-semibold text-gray-900">{vehicleName}</span></p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    {serviceType}
                </div>
            </div>

            <div className="relative mb-12 px-2">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-gray-100 rounded-full hidden md:block"></div>

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out hidden md:block shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                    style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                ></div>

                <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                    {steps.map((step, index) => {
                        const isCompleted = index <= currentStepIndex;
                        const isCurrent = index === currentStepIndex;

                        return (
                            <div key={step.id} className="flex md:flex-col items-center gap-4 md:gap-3 group">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-white z-10
                                        ${isCompleted ? 'border-blue-600 text-blue-600 shadow-lg shadow-blue-100 scale-110' : 'border-gray-200 text-gray-300'}
                                        ${isCurrent ? 'ring-4 ring-blue-50 scale-125' : ''}
                                    `}
                                >
                                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                                </div>
                                <span
                                    className={`text-sm font-medium transition-colors duration-300 md:text-center
                                        ${isCompleted ? 'text-gray-900' : 'text-gray-400'}
                                        ${isCurrent ? 'text-blue-600 font-bold' : ''}
                                    `}
                                >
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-sm">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Est. Completion</p>
                        <p className="text-sm font-bold text-gray-900">Today, 5:00 PM</p>
                    </div>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-sm">
                        <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Technician</p>
                        <p className="text-sm font-bold text-gray-900">John D.</p>
                    </div>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default ServiceStatusCard;
