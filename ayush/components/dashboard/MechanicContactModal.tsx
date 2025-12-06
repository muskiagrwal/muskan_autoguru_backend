"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { toast } from "sonner";

interface MechanicContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    mechanicName: string;
    mechanicImage?: string;
}

const MechanicContactModal = ({ isOpen, onClose, mechanicName, mechanicImage }: MechanicContactModalProps) => {
    const [message, setMessage] = useState("");

    if (!isOpen) return null;

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending message
        toast.success(`Message sent to ${mechanicName}`);
        setMessage("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Mechanic</h3>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            {mechanicImage ? (
                                <img src={mechanicImage} alt={mechanicName} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
                                    {mechanicName.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">To:</p>
                            <p className="font-semibold text-gray-900">{mechanicName}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSend}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] resize-none"
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MechanicContactModal;
