import { reviewApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useReview = () => {
    const queryClient = useQueryClient();

    const createReviewMutation = useMutation({
        mutationFn: reviewApi.createReview,
        onSuccess: () => {
            toast.success("Review created successfully");
            queryClient.invalidateQueries({ queryKey: ["mechanicReviews"] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to create review");
        },
    });

    return { createReviewMutation };
};

export const useMechanicReviews = (mechanicId: string) => {
    return useQuery({
        queryKey: ["mechanicReviews", mechanicId],
        queryFn: () => reviewApi.getReviewsByMechanic(mechanicId),
        enabled: !!mechanicId,
    });
};

export const useReviews = () => {
    return useQuery({
        queryKey: ["reviews"],
        queryFn: reviewApi.getAllReviews,
    });
};
