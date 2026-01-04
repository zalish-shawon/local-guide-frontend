/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CheckoutForm from "@/app/components/CheckoutForm";
import { stripePromise } from "@/app/lib/stripe";
import { Elements } from "@stripe/react-stripe-js";

export default function PayPage({ params }: any) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm bookingId={params.id} />
    </Elements>
  );
}
