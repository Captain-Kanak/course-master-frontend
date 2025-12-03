import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Join us and start learning today!
        </p>

        <RegisterForm />

        <p className="text-sm text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
