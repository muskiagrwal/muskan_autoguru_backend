import { bookingApi } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useBooking = () => {
    return useMutation({
        mutationKey: ["booking"],
        mutationFn: bookingApi.createBooking,
        onSuccess: () => {
            toast.success("Booking created successfully")
        },
        onError: () => {
            toast.error("Booking failed")
        }
    })
}