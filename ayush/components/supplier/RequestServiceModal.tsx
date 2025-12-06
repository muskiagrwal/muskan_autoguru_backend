import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

interface RequestServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RequestServiceModal: React.FC<RequestServiceModalProps> = ({ isOpen, onClose }) => {
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState('');
    const [proposedPrice, setProposedPrice] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!serviceName.trim()) {
            toast.error("Please enter a service name");
            return;
        }

        // Mock API call
        toast.success(`Request for "${serviceName}" submitted for approval.`);
        handleClose();
    };

    const handleClose = () => {
        setServiceName('');
        setDescription('');
        setProposedPrice('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Request New Service">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-sm mb-4">
                    <p>
                        Can't find the service you offer? Submit a request to add it.
                        Once approved by an admin, it will be available for selection.
                    </p>
                </div>

                <div>
                    <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Name
                    </label>
                    <input
                        type="text"
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        placeholder="e.g. Hybrid Battery Replacement"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe what this service entails..."
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="proposedPrice" className="block text-sm font-medium text-gray-700 mb-1">
                        Proposed Base Price ($)
                    </label>
                    <input
                        type="number"
                        id="proposedPrice"
                        value={proposedPrice}
                        onChange={(e) => setProposedPrice(e.target.value)}
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
                        Submit Request
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default RequestServiceModal;
