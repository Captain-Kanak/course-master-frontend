import React from "react";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 
    border border-gray-100 dark:border-gray-700"
    >
      <div
        className="h-40 bg-linear-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl 
      font-semibold"
      >
        {course.category || "Course"}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {course.description}
        </p>

        {/* Price */}
        <p className="text-orange-600 dark:text-orange-400 font-bold text-lg">
          ${course.price}
        </p>

        {/* Button */}
        <div className="flex gap-3">
          <Link
            href={`/payments/${course._id}`}
            className="block text-center w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium transition-all cursor-pointer"
          >
            Enroll Now
          </Link>
          <Link
            href={`/courses/${course._id}`}
            className="block text-center w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium 
            transition-all cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
