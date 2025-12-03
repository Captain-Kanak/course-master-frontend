"use client";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Login successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
          placeholder="example@email.com"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
          placeholder="*******"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
      >
        Login
      </button>
    </form>
  );
}
