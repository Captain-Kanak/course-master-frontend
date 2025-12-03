"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <div className="flex flex-col items-center mt-2">
      <p className="text-gray-500">Or Continue With</p>

      <div className="flex items-center gap-5">
        <button type="button" onClick={() => handleSocialLogin("google")}>
          <FcGoogle size={30} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
