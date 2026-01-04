/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/app/services/api";

export const getTours = async () => {
  try {
    const res = await api.get("/tours");
    return res.data?.data ?? [];
  } catch (error) {
    console.error("getTours error:", error);
    return [];
  }
};
export const getTourById = async (id: string) => {
  try {
    const res = await api.get(`/tours/${id}`);
    return res.data?.data ?? null;
  } catch (error) {
    console.error("getTourById error:", error);
    return null;
  }
};
export const createTour = (data: any) => api.post("/tours", data);
export const updateTour = (id: string, data: any) => api.patch(`/tours/${id}`, data);
export const deleteTour = (id: string) => api.delete(`/tours/${id}`);
export const searchTours = (params: any) => api.get(`/tours/search`, { params });
