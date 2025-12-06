import { mechanicApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useMechanic = () => {
    const queryClient = useQueryClient();

    const registerMechanicMutation = useMutation({
        mutationFn: mechanicApi.registerMechanic,
        onSuccess: () => {
            toast.success("Mechanic registered successfully");
            queryClient.invalidateQueries({ queryKey: ["mechanics"] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to register mechanic");
        },
    });

    return { registerMechanicMutation };
};

export const useMechanics = () => {
    return useQuery({
        queryKey: ["mechanics"],
        queryFn: mechanicApi.getAllMechanics,
    });
};

export const useMechanicById = (id: string) => {
    return useQuery({
        queryKey: ["mechanic", id],
        queryFn: () => mechanicApi.getMechanicById(id),
        enabled: !!id,
    });
};
