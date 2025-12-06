import { vehicleApi } from "@/lib/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export const useVehicleLookup = () => {
    return useMutation({
        mutationKey: ["vehicle-lookup"],
        mutationFn: vehicleApi.lookupByRego,
        onError: () => {
            toast.error("Could not find vehicle details")
        }
    })
}

export const useVehicles = () => {
    return useQuery({
        queryKey: ["vehicles"],
        queryFn: vehicleApi.getAllVehicles,
    })
}
