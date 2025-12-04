"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import getCourseById from "@/app/helpers/course/getCourseById";
import createPaymentIntent from "@/app/helpers/payment/createPaymentIntent";
import { useSession } from "next-auth/react";
import confirmEnroll from "@/app/helpers/payment/confirmEnroll";

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1f2937",
      fontFamily: "Inter, sans-serif",
      "::placeholder": {
        color: "#9ca3af",
      },
    },
    invalid: {
      color: "#ef4444",
    },
  },
};

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const price = course.price;
  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    const fetchCourse = async () => {
      const result = await getCourseById(id);
      setCourse(result.data);
    };
    fetchCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const paymentIntent = await createPaymentIntent({ id, user });
    const secret = paymentIntent.data;

    const result = await stripe.confirmCardPayment(secret, {
      payment_method: paymentMethod.id,
    });

    if (result.error) {
      setPaymentError(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setPaymentError("");
      console.log("Payment Successful");
      const res = await confirmEnroll({ id, user });

      if (!res.success) {
        setPaymentError(res.message);
      }

      console.log(res);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Complete Your Payment
        </h2>

        {/* CardElement Wrapper */}
        <div className="border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
          <CardElement options={CARD_OPTIONS} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-lg disabled:opacity-50"
        >
          Pay ${price}
        </button>

        {/* Error Message */}
        {paymentError && (
          <p className="text-red-500 text-sm text-center">{paymentError}</p>
        )}

        {/* Security Footer */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Your payment is secure & encrypted
        </p>
      </form>
    </div>
  );
}
