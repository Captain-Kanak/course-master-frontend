"use client";

import React from "react";
import learningLottie from "@/public/lotties/learning.json";
import Lottie from "lottie-react";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="uppercase tracking-wide text-sm font-semibold text-orange-500">
            Upgrade Your Skills
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn From the Best{" "}
            <span className="text-orange-500">Online Courses</span>
            <br />
            to Boost Your Career
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Explore our expert-led courses designed to help you master in-demand
            skills. Learn anytime, anywhere with high-quality lessons,
            real-world projects, and personalized guidance.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <Lottie animationData={learningLottie} loop={true} />
        </div>
      </div>
    </section>
  );
}
