import React, { useState, useMemo } from 'react';
import { Modal } from '@/components/ui/Modal';
import { MOCK_SERVICES } from '@/constants/dummyData';
import { toast } from 'sonner';

interface AddServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({ isOpen, onClose }) => {
    const [selectedServiceId, setSelectedServiceId] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const selectedService = useMemo(() =>
        MOCK_SERVICES.find(service => service._id === selectedServiceId),
        [selectedServiceId]
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedServiceId) {
            toast.error("Please select a service");
            return;
        }

        // Mock API call
        toast.success(`Service added: ${selectedService?.title} for $${price || 'TBD'}`);
        handleClose();
    };

    const handleClose = () => {
        setSelectedServiceId('');
        setPrice('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add Service">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type
                    </label>
                    <select
                        id="service"
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Service</option>
                        {MOCK_SERVICES.map((service) => (
                            <option key={service._id} value={service._id}>
                                {service.title}
                            </option>
                        ))}
                    </select>
                    {selectedService && (
                        <p className="mt-1 text-sm text-gray-500">
                            {selectedService.description}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                        Base Price ($) <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="e.g. 150"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                    />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Add Service
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddServiceModal;
