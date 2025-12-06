"use client";

import React from "react";
import { X, MapPin, Star, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

interface MechanicProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    mechanic: {
        name: string;
        image?: string;
        rating: number;
        reviews: number;
        address: string;
        phone: string;
        email: string;
        specialties: string[];
        about: string;
    } | null;
}

const MechanicProfileModal = ({ isOpen, onClose, mechanic }: MechanicProfileModalProps) => {
    if (!isOpen || !mechanic) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute -bottom-12 left-8 flex items-end">
                        <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                {mechanic.image ? (
                                    <img src={mechanic.image} alt={mechanic.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-3xl">
                                        {mechanic.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 px-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{mechanic.name}</h2>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="ml-1 font-medium text-gray-900">{mechanic.rating}</span>
                                </div>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-600">{mechanic.reviews} reviews</span>
                                <span className="text-gray-400">•</span>
                                <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-xs font-medium">
                                    <ShieldCheck className="w-3 h-3 mr-1" />
                                    Verified
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Book Service
                            </button>
                            <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Message
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {mechanic.about || "Experienced mechanic dedicated to providing top-quality service. Specializing in diagnostics, repairs, and maintenance for all vehicle makes and models."}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialties</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mechanic.specialties?.map((specialty, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                            {specialty}
                                        </span>
                                    )) || (
                                            <>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">General Repair</span>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Diagnostics</span>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Maintenance</span>
                                            </>
                                        )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
                                <div className="bg-gray-100 rounded-xl h-48 w-full overflow-hidden relative">
                                    {/* Google Map Embed */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(mechanic.address)}`}
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                    {/* Fallback/Overlay if API key is missing or for demo purposes, we can use a direct embed URL for a generic location or the specific address if we had a real key. 
                                        For this demo, I'll use a standard embed URL that works without a key for some modes or a placeholder if it fails. 
                                        Actually, let's use the 'maps?q=' format which is simpler for free usage limits or just a static map image if we want to be safe. 
                                        But the user asked for "google map", so an iframe with a query is best. 
                                        Since I don't have a real API key, I will use the embed URL that often works for testing: 
                                        https://maps.google.com/maps?q=...&t=&z=13&ie=UTF8&iwloc=&output=embed
                                    */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        id="gmap_canvas"
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(mechanic.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                                <h3 className="font-semibold text-gray-900">Contact Info</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span className="text-sm">{mechanic.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone className="w-5 h-5 shrink-0" />
                                        <span className="text-sm">{mechanic.phone || "+61 400 000 000"}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Mail className="w-5 h-5 shrink-0" />
                                        <span className="text-sm">{mechanic.email || "contact@mechanic.com"}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                                <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Mon - Fri</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Saturday</span>
                                        <span>9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Sunday</span>
                                        <span className="text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MechanicProfileModal;
