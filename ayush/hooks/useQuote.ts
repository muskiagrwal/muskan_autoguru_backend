import { quoteApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useQuote = () => {
    const queryClient = useQueryClient();

    const requestQuoteMutation = useMutation({
        mutationFn: quoteApi.requestQuote,
        onSuccess: () => {
            toast.success("Quote requested successfully");
            queryClient.invalidateQueries({ queryKey: ["userQuotes"] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to request quote");
        },
    });

    const respondQuoteMutation = useMutation({
        mutationFn: ({ id, body }: { id: string; body: any }) => quoteApi.respondToQuote(id, body),
        onSuccess: () => {
            toast.success("Response sent successfully");
            queryClient.invalidateQueries({ queryKey: ["mechanicQuotes"] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to respond to quote");
        },
    });

    return { requestQuoteMutation, respondQuoteMutation };
};

export const useUserQuotes = () => {
    return useQuery({
        queryKey: ["userQuotes"],
        queryFn: quoteApi.getUserQuotes,
    });
};

export const useMechanicQuotes = () => {
    return useQuery({
        queryKey: ["mechanicQuotes"],
        queryFn: quoteApi.getMechanicQuotes,
    });
};
