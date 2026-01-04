/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { approveTour, deleteTour, getAllTours } from "@/app/services/admin.service";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function AdminTours() {
  const { data: tours = [], refetch, isLoading } = useQuery({
    queryKey: ["admin-tours"],
    queryFn: getAllTours,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTour,
    onSuccess: () => refetch(),
  });

  const approveMutation = useMutation({
    mutationFn: approveTour,
    onSuccess: () => refetch(),
  });

  if (isLoading) return <p>Loading tours...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Tours</h1>

      {tours.map((tour: any) => (
        <div key={tour._id} className="border p-4 mb-2 rounded flex justify-between items-center">
          <div>
            <h2 className="font-bold">{tour.title}</h2>
            <p>City: {tour.city}</p>
            <p>Price: ${tour.price}</p>
            <p>Status: {tour.isApproved ? "Approved" : "Pending"}</p>
          </div>
          <div className="flex gap-2">
            {!tour.isApproved && (
              <button
                onClick={() => approveMutation.mutate(tour._id)}
                className="p-1 bg-green-500 text-white rounded"
              >
                Approve
              </button>
            )}
            <button
              onClick={() => deleteMutation.mutate(tour._id)}
              className="p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
