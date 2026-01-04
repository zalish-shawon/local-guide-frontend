"use client";

import Sidebar from "../components/Sidebar";
import { getUserFromToken } from "../lib/auth";

export default function Dashboard() {
  const user = getUserFromToken();

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar role={user.role} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, <span className="text-indigo-600">{user.name}</span> 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Here’s what’s happening in your dashboard
          </p>
        </div>

        {/* Role Based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {user.role === "tourist" && (
            <>
              <DashboardCard
                title="My Bookings"
                description="View and manage your upcoming tours"
                color="from-indigo-500 to-purple-500"
              />
              <DashboardCard
                title="Explore Tours"
                description="Discover amazing experiences from local guides"
                color="from-emerald-500 to-teal-500"
              />
            </>
          )}

          {user.role === "guide" && (
            <>
              <DashboardCard
                title="My Tours"
                description="Create, edit, and manage your tours"
                color="from-orange-500 to-amber-500"
              />
              <DashboardCard
                title="Bookings"
                description="Track tourist bookings and schedules"
                color="from-blue-500 to-indigo-500"
              />
            </>
          )}

          {user.role === "admin" && (
            <>
              <DashboardCard
                title="Manage Users"
                description="Approve guides and manage platform users"
                color="from-red-500 to-pink-500"
              />
              <DashboardCard
                title="Manage Tours"
                description="Moderate and oversee all listed tours"
                color="from-purple-500 to-indigo-500"
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

/* ----------------- Reusable Card ----------------- */
function DashboardCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-r ${color}`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
