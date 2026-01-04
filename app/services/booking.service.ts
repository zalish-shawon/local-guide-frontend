import api from "./api";

export const createBooking = (tourId: string, date: string) =>
  api.post("/bookings", { tourId, date });

export const getMyBookings = async () => {
  try {
    const res = await api.get("/bookings/my");

    // ✅ return ARRAY ONLY
    return Array.isArray(res.data?.data) ? res.data.data : [];
  } catch (error) {
    console.error("getMyBookings error:", error);
    return []; // NEVER undefined
  }
};
export const updateBookingStatus = (id: string, status: string) =>
  api.patch(`/bookings/${id}/status`, { status });
