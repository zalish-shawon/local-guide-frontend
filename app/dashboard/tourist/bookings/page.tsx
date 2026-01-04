/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMyBookings } from "@/app/services/booking.service";
import { useQuery } from "@tanstack/react-query";

export default function MyBookingsPage() {
  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getMyBookings,
  });

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Failed to load bookings</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      {bookings.map((booking: any) => (
        <div key={booking._id} className="border p-4 mb-2 rounded">
          <p>Tour: {booking.tour?.title}</p>
          <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}
