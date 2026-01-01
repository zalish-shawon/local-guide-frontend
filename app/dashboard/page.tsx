"use client";

import Sidebar from "../components/Sidebar";
import { getUserFromToken } from "../lib/auth";

export default function Dashboard() {
  const user = getUserFromToken();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar role={user.role} />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
        {user.role === "tourist" && <p>See your bookings and explore tours.</p>}
        {user.role === "guide" && <p>Manage your tours and bookings here.</p>}
        {user.role === "admin" && <p>Admin dashboard: Manage users and tours.</p>}
      </main>
    </div>
  );
}
