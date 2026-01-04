/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../services/payment.service";

export default function CheckoutForm({ bookingId }: { bookingId: string }) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePay = async () => {
    const { data } = await createPaymentIntent(bookingId);
    const result = await stripe?.confirmCardPayment(data.clientSecret, {
      payment_method: { card: elements?.getElement(CardElement)! },
    });
    if (result?.paymentIntent?.status === "succeeded") alert("Payment Successful");
  };

  return (
    <div className="p-6 border rounded bg-white">
      <CardElement />
      <button onClick={handlePay} className="mt-4 p-2 bg-blue-500 text-white rounded">Pay Now</button>
    </div>
  );
}
