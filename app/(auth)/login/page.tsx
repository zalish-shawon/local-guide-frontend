/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/services/auth.service";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<{ email: string; password: string }>();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded bg-white">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("email")} placeholder="Email" className="p-2 border rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
}
