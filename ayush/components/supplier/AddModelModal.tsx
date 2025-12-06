import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

interface AddModelModalProps {
    isOpen: boolean;
    onClose: () => void;
    makeName: string;
}

const AddModelModal: React.FC<AddModelModalProps> = ({ isOpen, onClose, makeName }) => {
    const [modelName, setModelName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!modelName.trim()) {
            toast.error("Please enter a model name");
            return;
        }

        // Mock API call
        toast.success(`Model ${modelName} added to ${makeName} (mock)`);
        handleClose();
    };

    const handleClose = () => {
        setModelName('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={`Add New ${makeName} Model`}>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="modelName" className="block text-sm font-medium text-gray-700 mb-1">
                        Model Name
                    </label>
                    <input
                        type="text"
                        id="modelName"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                        placeholder="e.g. Mustang GT"
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
                        Add Model
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddModelModal;
