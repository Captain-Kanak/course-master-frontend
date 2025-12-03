"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
          onChange={handleChange}
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
          onChange={handleChange}
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
