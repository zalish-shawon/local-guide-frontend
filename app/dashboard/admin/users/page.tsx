/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { approveGuide, getAllUsers } from "@/app/services/admin.service";
import { useQuery } from "@tanstack/react-query";

export default function AdminUsers() {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  


  if (isLoading) return <p>Loading users...</p>;
  if (!Array.isArray(users)) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      {users?.map((u: any) => (
        <div
          key={u._id}
          className="border p-2 mb-2 rounded flex justify-between items-center"
        >
          <span>
            {u.name} ({u.role})
          </span>

          {u.role === "guide" && !u.isApproved && (
            <button
              onClick={async () => {
                await approveGuide(u._id);
                refetch();
              }}
              className="p-1 bg-green-500 text-white rounded"
            >
              Approve
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
