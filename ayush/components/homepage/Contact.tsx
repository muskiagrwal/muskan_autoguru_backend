"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import { useContact } from "@/hooks/useContact";

const Contact = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const { mutate: sendContactForm, isPending } = useContact();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        make: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendContactForm(formState, {
            onSuccess: () => {
                setFormState({
                    name: "",
                    email: "",
                    phone: "",
                    make: "",
                    service: "",
                    message: ""
                });
            }
        });
    };

    useEffect(() => {
        if (contactRef.current) {
            gsap.fromTo(
                contactRef.current.querySelector(".contact-container"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={contactRef} className="mt-5 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Contact Us</h2>
                    <h3 className="text-4xl font-bold text-gray-900">
                        Book Your Appointment
                    </h3>
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
                </div>

                <div className="contact-container bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                    {/* Contact Info Side */}
                    <div className="lg:w-1/3 bg-gray-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-lg font-medium">Visit Us</p>
                                        <p className="text-gray-400 mt-1">123 Service Lane, Auto City, AC 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-red-500 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-lg font-medium">Call Us</p>
                                        <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-red-500 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-lg font-medium">Email Us</p>
                                        <p className="text-gray-400 mt-1">info@autoguru.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex justify-between">
                                    <span>Mon - Fri</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>9:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 p-12 bg-white">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Car Model</label>
                                <input
                                    type="text"
                                    name="make"
                                    value={formState.make}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                    placeholder="e.g. Toyota Camry"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Required</label>
                                <select
                                    name="service"
                                    value={formState.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="basic">Basic Service</option>
                                    <option value="standard">Standard Service</option>
                                    <option value="premium">Premium Service</option>
                                    <option value="repair">General Repair</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                    placeholder="Tell us more about your car issues..."
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "Sending..." : "Confirm Booking"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
