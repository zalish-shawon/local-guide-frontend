/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getTours } from "./services/tour.service";

export default function HomePage() {
  const { data: tours = [], isLoading } = useQuery({
    queryKey: ["featured-tours"],
    queryFn: getTours,
  });

  if (isLoading) {
    return <p className="text-center p-10">Loading tours...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Cities With Local Experts
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book trusted local guides for authentic tours, food walks, culture, and hidden gems.
          </p>
        </div>
      </section>

      {/* ================= FEATURED TOURS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Tours
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.slice(0, 6).map((tour: any) => (
            <div
              key={tour._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tour.images?.[0] || "/placeholder.jpg"}
                alt={tour.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  📍 {tour.city}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-indigo-600">
                    ${tour.price}
                  </span>
                  <Link
                    href={`/tours/${tour._id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Local Guide Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
