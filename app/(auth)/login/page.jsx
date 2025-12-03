import React from "react";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";

export default function LoginPage() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Login to continue learning
        </p>

        <LoginForm />

        <p className="text-sm text-center text-gray-600 mt-5">
          {"Don't have an account?"}{" "}
          <a
            href="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Register
          </a>
        </p>

        <SocialLogin />
      </div>
    </section>
  );
}
