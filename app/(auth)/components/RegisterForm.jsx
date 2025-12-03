"use client";

import registerUser from "@/app/helpers/registerUser";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await registerUser({ name, email, password });

    console.log(result);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
          placeholder="John Doe"
        />
      </div>

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
        Register
      </button>
    </form>
  );
}
