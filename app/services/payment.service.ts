import api from "./api";

export const createPaymentIntent = (bookingId: string) =>
  api.post("/payments/create-intent", { bookingId });
