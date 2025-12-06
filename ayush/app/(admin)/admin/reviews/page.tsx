"use client";

import { MOCK_REVIEWS } from "@/constants/dummyData";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2, Eye, Trash, Star } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import { toast } from "sonner";

type Review = {
    _id: string;
    reviewerName: string;
    mechanicName: string;
    rating: number;
    comment: string;
    createdAt: string;
};

export default function ReviewsPage() {
    // const { data: reviews, isLoading } = useReviews();
    const reviews = MOCK_REVIEWS;
    const isLoading = false;
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const handleView = (review: Review) => {
        setSelectedReview(review);
        setIsViewModalOpen(true);
    };

    const handleDelete = (review: Review) => {
        setSelectedReview(review);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        toast.success("Review deleted");
        setIsDeleteModalOpen(false);
        setSelectedReview(null);
    };

    const columns: ColumnDef<Review>[] = [
        {
            accessorKey: "reviewerName",
            header: "Reviewer",
            cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("reviewerName")}</div>,
        },
        {
            accessorKey: "mechanicName",
            header: "Mechanic",
            cell: ({ row }) => <div className="text-gray-600">{row.getValue("mechanicName")}</div>,
        },
        {
            accessorKey: "rating",
            header: "Rating",
            cell: ({ row }) => {
                const rating = row.getValue("rating") as number;
                return (
                    <div className="flex items-center text-yellow-500">
                        <span className="font-medium mr-1">{rating}</span>
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                );
            },
        },
        {
            accessorKey: "comment",
            header: "Comment",
            cell: ({ row }) => <div className="text-gray-600 truncate max-w-xs" title={row.getValue("comment")}>{row.getValue("comment")}</div>,
        },
        {
            accessorKey: "createdAt",
            header: "Date",
            cell: ({ row }) => {
                const date = row.getValue("createdAt") as string;
                return <div className="text-gray-600">{date ? format(new Date(date), 'MMM d, yyyy') : 'N/A'}</div>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center justify-end space-x-2">
                        <button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View"
                            onClick={() => handleView(row.original)}
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDelete(row.original)}
                        >
                            <Trash className="w-4 h-4" />
                        </button>
                    </div>
                );
            },
        },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    // Mock data
    const data = (reviews && reviews.length > 0) ? reviews : [
        { _id: '1', reviewerName: 'John Doe', mechanicName: 'AutoFix Pro', rating: 5, comment: 'Great service!', createdAt: '2023-11-20T10:00:00Z' },
        { _id: '2', reviewerName: 'Jane Smith', mechanicName: 'Mechanic Mike', rating: 4, comment: 'Good job but expensive.', createdAt: '2023-11-18T15:00:00Z' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
                <p className="text-gray-500 mt-1">Monitor user reviews and ratings</p>
            </div>

            <DataTable columns={columns} data={data} searchKey="reviewerName" searchPlaceholder="Search reviews..." />

            {/* View Review Modal */}
            <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="Review Details">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Reviewer</h4>
                        <p className="text-gray-900">{selectedReview?.reviewerName}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Mechanic</h4>
                        <p className="text-gray-900">{selectedReview?.mechanicName}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Rating</h4>
                        <div className="flex items-center text-yellow-500">
                            <span className="font-medium mr-1">{selectedReview?.rating}</span>
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500">Comment</h4>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded-md text-sm">{selectedReview?.comment}</p>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">Close</button>
                    </div>
                </div>
            </Modal>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Review"
                description="Are you sure you want to delete this review? This action cannot be undone."
            />
        </div>
    );
}
