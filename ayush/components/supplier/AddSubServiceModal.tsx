import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

interface AddSubServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
    availableSubServices?: string[];
}

const AddSubServiceModal: React.FC<AddSubServiceModalProps> = ({ isOpen, onClose, serviceName, availableSubServices = [] }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !price) {
            toast.error("Please select a service and enter price");
            return;
        }

        // Mock API call
        toast.success(`Sub-service ${name} added to ${serviceName} (mock)`);
        handleClose();
    };

    const handleClose = () => {
        setName('');
        setDescription('');
        setPrice('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={`Add Sub-Service to ${serviceName}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Sub-Service
                    </label>
                    <select
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select a service...</option>
                        {availableSubServices.map((service, index) => (
                            <option key={index} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Brief description of the service..."
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                        Base Price ($)
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
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
                        Add Sub-Service
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddSubServiceModal;
