/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getTours } from "@/app/services/tour.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ToursPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading tours...</p>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Failed to load tours</p>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Tours</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((tour: any) => (
          <div
            key={tour._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
              <p className="text-gray-500 mb-1">
                <span className="font-medium">City:</span> {tour.city}
              </p>
              <p className="text-gray-700 font-medium mb-3">${tour.price}</p>
            </div>

            <Link
              href={`/tours/${tour._id}`}
              className="mt-auto text-center py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
