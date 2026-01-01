"use client";
import Link from "next/link";

export default function Sidebar({ role }: { role: string }) {
  return (
    <aside className="w-64 border-r p-4 h-screen">
      <h2 className="font-bold mb-4">Menu</h2>
      {role === "tourist" && (
        <ul className="flex flex-col gap-2">
          <li><Link href="/dashboard/tourist/bookings">My Bookings</Link></li>
          <li><Link href="/tours">Explore Tours</Link></li>
        </ul>
      )}
      {role === "guide" && (
        <ul className="flex flex-col gap-2">
          <li><Link href="/dashboard/guide/tours">My Tours</Link></li>
          <li><Link href="/dashboard/guide/bookings">Tour Requests</Link></li>
        </ul>
      )}
      {role === "admin" && (
        <ul className="flex flex-col gap-2">
          <li><Link href="/dashboard/admin/users">Manage Users</Link></li>
          <li><Link href="/dashboard/admin/tours">Manage Tours</Link></li>
        </ul>
      )}
    </aside>
  );
}
