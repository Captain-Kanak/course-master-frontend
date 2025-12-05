"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axiosPublic from "@/lib/axiosPublic";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const result = await axiosPublic.get(`/api/courses/${id}`);
      setCourse(result?.data?.data);
    };
    fetchCourse();
  }, [id]);

  if (!course) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-orange-500 text-white rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        <p className="mt-2 text-indigo-100">{course.category}</p>

        {/* Instructor */}
        {course.instructorName?.length > 0 && (
          <p className="mt-2 text-sm">
            <span className="font-semibold">Instructor:</span>{" "}
            {course.instructorName.join(", ")}
          </p>
        )}

        <p className="mt-4 text-lg">{course.description}</p>

        <p className="mt-4 text-2xl font-bold">${course.price}</p>
      </div>

      {/* Enroll */}
      <Link href={`/payments/${id}`}>
        <button
          className="block text-center font-semibold w-full bg-orange-600 
        hover:bg-orange-700 text-white py-3 rounded-lg transition-all cursor-pointer mb-6"
        >
          Enroll Now
        </button>
      </Link>

      {/* Syllabus */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Syllabus</h2>

        <ul className="space-y-4">
          {course.syllabus?.map((item, index) => (
            <li
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Lessons */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>

        <ul className="space-y-4">
          {course.lessons?.map((lesson, index) => (
            <li
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{lesson.title}</p>
                <p className="text-gray-500 text-sm">{lesson.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
