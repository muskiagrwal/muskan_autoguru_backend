import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { carServiceApi } from "@/lib/api";
import { toast } from "sonner";

export const useCarServices = () => {
    return useQuery({
        queryKey: ["carServices"],
        queryFn: async () => {
            const response = await carServiceApi.getAllServices();
            return response.data;
        },
    });
};

export const useCarService = (slug: string) => {
    return useQuery({
        queryKey: ["carService", slug],
        queryFn: async () => {
            const response = await carServiceApi.getServiceBySlug(slug);
            return response.data;
        },
        enabled: !!slug,
    });
};

export const useCreateCarService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: carServiceApi.createService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["carServices"] });
            toast.success("Service created successfully");
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to create service");
        },
    });
};

export const useUpdateCarService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: any }) =>
            carServiceApi.updateService(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["carServices"] });
            toast.success("Service updated successfully");
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to update service");
        },
    });
};

export const useDeleteCarService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: carServiceApi.deleteService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["carServices"] });
            toast.success("Service deleted successfully");
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to delete service");
        },
    });
};
