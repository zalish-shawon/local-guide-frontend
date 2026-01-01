/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export const loginUser = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const registerUser = (data: { name: string; email: string; password: string; role: "tourist" | "guide" }) =>
  api.post("/auth/register", data);

export const getProfile = () => api.get("/users/me");
export const updateProfile = (data: any) => api.patch("/users/me", data);
