"use client";

import getCourseById from "@/app/helpers/course/getCourseById";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const result = await getCourseById(id);
      setCourse(result.data);
    };
    fetchCourse();
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-orange-500 text-white rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-2 text-indigo-100">{course.category}</p>
        <p className="mt-4 text-lg">{course.description}</p>
        <p className="mt-4 text-2xl font-bold">${course.price}</p>
      </div>

      <Link href={`/payments/${id}`}>
        <button className="block text-center font-semibold w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition-all cursor-pointer">
          Enroll Now
        </button>
      </Link>

      {/* Syllabus */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Syllabus</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {course.syllabus?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Lessons */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
        <ul className="space-y-4">
          {course.lessons?.map((lesson) => (
            <li
              key={lesson._id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-between items-center"
            >
              <span>{lesson.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
