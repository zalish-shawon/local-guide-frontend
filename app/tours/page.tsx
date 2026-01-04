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


  if (isLoading) return <p>Loading tours...</p>;
  if (error) return <p>Failed to load tours</p>;

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {data?.map((tour: any) => (
        <div
          key={tour._id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold">{tour.title}</h3>
          <p>{tour.city}</p>
          <p>${tour.price}</p>
          <Link
            href={`/tours/${tour._id}`}
            className="text-blue-500 mt-2 inline-block"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}
