import { contactApi } from "@/lib/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export const useContact = () => {
    return useMutation({
        mutationKey: ["contact"],
        mutationFn: contactApi.sendContactForm,
        onSuccess: () => {
            toast.success("Message sent successfully! We will contact you shortly.")
        },
        onError: () => {
            toast.error("Failed to send message. Please try again.")
        }
    })
}

export const useInquiries = () => {
    return useQuery({
        queryKey: ["inquiries"],
        queryFn: contactApi.getAllInquiries,
    })
}
