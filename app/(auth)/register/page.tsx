/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/services/auth.service";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<{ name: string; email: string; password: string; role: "tourist" | "guide" }>();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data);
      alert("Registered! Please login.");
      router.push("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded bg-white">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("name")} placeholder="Name" className="p-2 border rounded" />
        <input {...register("email")} placeholder="Email" className="p-2 border rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="p-2 border rounded" />
        <select {...register("role")} className="p-2 border rounded">
          <option value="tourist">Tourist</option>
          <option value="guide">Guide</option>
        </select>
        <button type="submit" className="p-2 bg-green-500 text-white rounded">Register</button>
      </form>
    </div>
  );
}
