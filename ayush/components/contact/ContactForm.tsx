import React from "react";
import { Info } from "lucide-react";

const ContactForm = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Booking Reference"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-colors"
                    />
                    <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-help" />
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-colors"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-colors"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-colors"
                />

                <textarea
                    placeholder="Comments"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-colors resize-none"
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
