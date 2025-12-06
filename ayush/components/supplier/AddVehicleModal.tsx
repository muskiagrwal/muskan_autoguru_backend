import React, { useState, useMemo } from 'react';
import { Modal } from '@/components/ui/Modal';
import { MOCK_VEHICLES_DATA } from '@/constants/dummyData';
import { toast } from 'sonner';

interface AddVehicleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({ isOpen, onClose }) => {
    const [selectedMakeId, setSelectedMakeId] = useState<string>('');
    const [selectedModelId, setSelectedModelId] = useState<string>('');

    const selectedMake = useMemo(() =>
        MOCK_VEHICLES_DATA.find(make => make.id === selectedMakeId),
        [selectedMakeId]
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedMakeId || !selectedModelId) {
            toast.error("Please select both make and model");
            return;
        }

        // Mock API call
        toast.success(`Vehicle added: ${selectedMake?.name} ${selectedMake?.models.find(m => m.id === selectedModelId)?.name}`);
        handleClose();
    };

    const handleClose = () => {
        setSelectedMakeId('');
        setSelectedModelId('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add Vehicle">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Make
                    </label>
                    <select
                        id="make"
                        value={selectedMakeId}
                        onChange={(e) => {
                            setSelectedMakeId(e.target.value);
                            setSelectedModelId(''); // Reset model when make changes
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Make</option>
                        {MOCK_VEHICLES_DATA.map((make) => (
                            <option key={make.id} value={make.id}>
                                {make.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Model
                    </label>
                    <select
                        id="model"
                        value={selectedModelId}
                        onChange={(e) => setSelectedModelId(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={!selectedMakeId}
                        required
                    >
                        <option value="">Select Model</option>
                        {selectedMake?.models.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        ))}
                    </select>
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
                        Add Vehicle
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddVehicleModal;
