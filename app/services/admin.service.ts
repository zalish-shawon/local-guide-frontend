/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export const getAllUsers = async () => {
  try {
    const res = await api.get("/admin/users");
    return res.data; // or res.data.data
  } catch (error) {
    console.error(error);
    // ❌ NO RETURN → returns undefined
  }
};

export const approveGuide = (id: string) => api.patch(`/admin/users/${id}/approve`);
export const getAllTours = async () => {
  try {
    const res = await api.get("/admin/tours");
    // ✅ ALWAYS return array of tours
    return Array.isArray(res.data?.data) ? res.data.data : [];
  } catch (error) {
    console.error("getAllTours error:", error);
    return []; // never undefined
  }
};
export const approveTour = async (id: string) => {
  return api.patch(`/admin/tours/approve/${id}`);
};

export const deleteTour = async (id: string) => {
  return api.delete(`/admin/tours/${id}`);
};

// Update tour details
export const updateTour = (id: string, data: any) => api.patch(`/admin/tours/${id}`, data);