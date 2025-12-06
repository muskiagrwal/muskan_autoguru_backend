import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Vehicle {
    id: string;
    name: string;
    details: string;
}

interface Customer {
    email: string;
    name: string;
    mobile: string;
    location: string;
}

interface QuoteState {
    quoteId: string | null;
    tasks: string[];
    notes: string;
    vehicle: Vehicle | null;
    customer: Customer;

    setQuoteId: (id: string) => void;
    addTask: (task: string) => void;
    removeTask: (task: string) => void;
    setTasks: (tasks: string[]) => void;
    setVehicle: (vehicle: Vehicle) => void;
    setCustomerEmail: (email: string) => void;
    setCustomerDetails: (name: string, mobile: string, location?: string) => void;
    setNotes: (notes: string) => void;
    resetStore: () => void;
}

export const useQuoteStore = create<QuoteState>()(
    persist(
        (set) => ({
            quoteId: null,
            tasks: [],
            notes: '',
            vehicle: {
                id: '482',
                name: 'Ford Fiesta',
                details: '2012 Petrol Automatic 1.6 Litres Ti-VCT'
            }, // Mocked default
            customer: {
                email: '',
                name: '',
                mobile: '',
                location: ''
            },

            setQuoteId: (id) => set({ quoteId: id }),

            addTask: (task) => set((state) => ({
                tasks: state.tasks.includes(task) ? state.tasks : [...state.tasks, task]
            })),

            removeTask: (task) => set((state) => ({
                tasks: state.tasks.filter((t) => t !== task)
            })),

            setTasks: (tasks) => set({ tasks }),

            setVehicle: (vehicle) => set({ vehicle }),

            setCustomerEmail: (email) => set((state) => ({
                customer: { ...state.customer, email }
            })),

            setCustomerDetails: (name, mobile, location) => set((state) => ({
                customer: {
                    ...state.customer,
                    name,
                    mobile,
                    ...(location && { location })
                }
            })),

            setNotes: (notes) => set({ notes }),

            resetStore: () => set({
                quoteId: null,
                tasks: [],
                notes: '',
                customer: { email: '', name: '', mobile: '', location: '' }
            })
        }),
        {
            name: 'quote-storage',
        }
    )
);
