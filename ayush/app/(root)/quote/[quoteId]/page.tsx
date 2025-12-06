"use client";

import { useSearchParams } from "next/navigation";
import QuoteLocationStep from "@/components/quote/QuoteLocationStep";
import VehicleRegoCheckStep from "@/components/quote/VehicleRegoCheckStep";
import TaskSelectStep from "@/components/quote/TaskSelectStep";
import TaskCategoryStep from "@/components/quote/TaskCategoryStep";
import CustomerNotesStep from "@/components/quote/CustomerNotesStep";
import CustomerDetailsStep1 from "@/components/quote/CustomerDetailsStep1";
import CustomerDetailsStep2 from "@/components/quote/CustomerDetailsStep2";
import LogbookIntervalStep from "@/components/quote/LogbookIntervalStep";
import MechanicSelectionStep from "@/components/quote/MechanicSelectionStep";

const QuotePage = () => {
    const searchParams = useSearchParams();
    const step = searchParams.get("step");

    return (
        <div className="min-h-screen bg-white py-8">
            {step === "location" && <QuoteLocationStep />}
            {step === "vehicle-rego-check" && <VehicleRegoCheckStep />}
            {step === "task-select" && <TaskSelectStep />}
            {step === "task-category" && <TaskCategoryStep />}
            {step === "logbook-interval" && <LogbookIntervalStep />}
            {step === "customer-notes-for-mechanic" && <CustomerNotesStep />}
            {step === "customer-details-step1" && <CustomerDetailsStep1 />}
            {step === "customer-details-step2" && <CustomerDetailsStep2 />}
            {step === "mechanic-selection" && <MechanicSelectionStep />}
            {/* Add other steps here as needed */}
            {!step && (
                <div className="text-center py-12">
                    <p>Please select a step.</p>
                </div>
            )}
        </div>
    );
};

export default QuotePage;
