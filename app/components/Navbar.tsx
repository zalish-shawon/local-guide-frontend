"use client";
import Link from "next/link";
import { getUserFromToken, logout } from "../lib/auth";

export default function Navbar() {
  const user = getUserFromToken();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div>
        <Link href="/" className="font-bold text-xl">Local Guide</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/tours">Tours</Link>
        {user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
