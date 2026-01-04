/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createBooking } from "@/app/services/booking.service";
import { getTourById } from "@/app/services/tour.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TourDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const { data: tour, isLoading } = useQuery({
    queryKey: ["tour", id],
    queryFn: () => getTourById(id),
    enabled: !!id,
  });

  const [date, setDate] = useState("");

  const handleBooking = async () => {
    if (!date) return alert("Please select a date");

    try {
      await createBooking(id, date);
      alert("Booking requested!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{tour.title}</h1>
      <p>{tour.description}</p>
      <p>City: {tour.city}</p>
      <p>Price: ${tour.price}</p>

      <div className="mt-4">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded ml-2"
        />
        <button
          onClick={handleBooking}
          className="ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Book
        </button>
      </div>
    </div>
  );
}
