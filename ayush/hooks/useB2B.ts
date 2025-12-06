import { useMutation } from '@tanstack/react-query';
import { b2bApi } from '@/lib/api';
import { toast } from 'sonner';

export const useB2B = () => {
    const registerMutation = useMutation({
        mutationFn: b2bApi.register,
        onSuccess: (data) => {
            toast.success(data.message || 'Application submitted successfully');
        },
        onError: (error: any) => {
            toast.error(error.message || 'Failed to submit application');
        },
    });

    return {
        registerMutation
    };
};
