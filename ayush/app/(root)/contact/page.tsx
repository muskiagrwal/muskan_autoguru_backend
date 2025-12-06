"use client";

import React, { useState } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesOffered from "@/components/homepage/ServicesOffered";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<"customer" | "business">("customer");

  return (
    <div className="min-h-screen bg-white pb-20">
      <ContactHero />

      {/* Toggle */}
      <div className="flex justify-center mt-8 relative z-10">
        <div className="bg-white rounded-full p-1 shadow-lg flex items-center border border-gray-100">
          <button
            onClick={() => setActiveTab("customer")}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "customer"
              ? "bg-black text-white shadow-md"
              : "text-gray-500 hover:text-gray-900"
              }`}
          >
            Customer
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "business"
              ? "bg-black text-white shadow-md"
              : "text-gray-500 hover:text-gray-900"
              }`}
          >
            Business
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Options */}
          <div className="space-y-12">
            {/* Enquiry */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                I have a general enquiry about my booking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is for customers that already have an AutoGuru booking. We
                will not be able to provide you a quote using this form, please
                click on &apos;Get Quotes&apos; below.
              </p>
            </div>

            {/* Quote */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                I would like to get a quote
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Finding a trusted repairer, getting quotes, and booking online has
                never been easier. Flexible payment methods including Afterpay,
                humm and Zip are available with participating service providers.
              </p>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Get quotes
              </Link>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                I need help with something else
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Check out our{" "}
                <Link href="#" className="underline hover:text-black">
                  Customer FAQs page
                </Link>{" "}
                for answers to other commonly asked questions.
              </p>
              <Link
                href="#"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                View FAQs
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Section - Booking Actions */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              {/* Reschedule */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Reschedule my booking
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Life gets in the way. We&apos;re here to help. Login to My
                  Garage and see if your booking can be rescheduled to another
                  date or time.
                </p>
              </div>

              {/* Cancel */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Cancel my booking
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  We understand things don&apos;t always work out. If you
                  can&apos;t reschedule, login to My Garage and see if your
                  booking can be cancelled. If your booking was prepaid you may be
                  eligible for a refund.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/login"
                className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                Login to My Garage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ServicesOffered />
    </div>
  );
};

export default ContactPage;