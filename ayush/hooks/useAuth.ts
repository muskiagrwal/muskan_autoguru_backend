import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { toast } from 'sonner';
import { authApi } from '@/lib/api';

// Mock API calls - replace with actual API calls
const loginUser = async (data: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock response
    if (data.email === 'test@example.com' && data.password === 'password') {
        return { user: { id: '1', firstName: 'Test', lastName: 'User', email: data.email }, token: 'mock-token' };
    }
    throw new Error('Invalid credentials');
};

const signupUser = async (data: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { user: { id: '2', firstName: data.firstName || 'New', lastName: data.lastName || 'User', email: data.email }, token: 'mock-token' };
}

export const useAuth = () => {
    const router = useRouter();
    const { login } = useAuthStore();

    const loginMutation = useMutation({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            login(data.user, data.token);
            toast.success('Logged in successfully');
            router.push('/');
        },
        onError: (error: any) => {
            toast.error(error.message || 'Login failed');
        },
    });

    const signupMutation = useMutation({
        mutationFn: authApi.signup,
        onSuccess: (data) => {
            login(data.user, data.token);
            toast.success('Account created successfully');
            router.push('/');
        },
        onError: (error: any) => {
            toast.error(error.message || 'Signup failed');
        }
    });

    const logout = () => {
        const { logout } = useAuthStore.getState();
        logout();
        router.push('/login');
        toast.success('Logged out successfully');
    }

    return {
        loginMutation,
        signupMutation,
        logout
    };
};
