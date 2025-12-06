import { homeServiceApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useHomeService = () => {
    const queryClient = useQueryClient();

    const createHomeServiceMutation = useMutation({
        mutationFn: homeServiceApi.createHomeService,
        onSuccess: () => {
            toast.success("Home service booking created successfully");
            queryClient.invalidateQueries({ queryKey: ["homeServices"] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to create home service booking");
        },
    });

    return { createHomeServiceMutation };
};

export const useHomeServices = () => {
    return useQuery({
        queryKey: ["homeServices"],
        queryFn: homeServiceApi.getAllHomeServices,
    });
};

export const useHomeServiceById = (id: string) => {
    return useQuery({
        queryKey: ["homeService", id],
        queryFn: () => homeServiceApi.getHomeServiceById(id),
        enabled: !!id,
    });
};
