"use client";
import Link from "next/link";
import { getUserFromToken, logout } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const user = getUserFromToken();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div>
        <Link href="/" className="font-bold text-2xl text-indigo-600 hover:text-indigo-700 transition">
          Local Guide
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 items-center">
        <Link
          href="/tours"
          className="text-gray-700 hover:text-indigo-600 transition font-medium"
        >
          Tours
        </Link>

        {user ? (
          <>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="px-4 py-1 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 rounded-md border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
