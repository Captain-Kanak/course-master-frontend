"use client";

import React, { useEffect, useState } from "react";
import axiosPublic from "@/lib/axiosPublic";
import { useSearchParams, useRouter } from "next/navigation";
import CourseCard from "./CourseCard";

export default function CoursesListing() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1 });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await axiosPublic.get("/api/courses?limit=1000");
      const allCourses = res.data.data;

      const uniqueCategories = [...new Set(allCourses.map((c) => c.category))];
      setCategories(uniqueCategories);
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      const query = new URLSearchParams({
        search,
        category,
        sort,
        page,
        limit: 6,
      });

      const res = await axiosPublic.get(`/api/courses?${query}`);
      setCourses(res.data?.data || []);
      setPagination(res.data?.pagination || {});
    };

    fetchCourses();
  }, [search, category, sort, page]);

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    params.set("page", 1);
    router.push(`/courses?${params.toString()}`);

    if (key === "search") setSearch(value);
    if (key === "category") setCategory(value);
    if (key === "sort") setSort(value);
    if (key === "page") setPage(value);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Our Courses</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Search */}
        <input
          value={search}
          onChange={(e) => updateQuery("search", e.target.value)}
          placeholder="Search..."
          className="border rounded-lg p-3"
        />

        <select
          value={category}
          onChange={(e) => updateQuery("category", e.target.value)}
          className="border rounded-lg p-3 bg-black cursor-pointer"
        >
          <option value="">All Categories</option>

          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => updateQuery("sort", e.target.value)}
          className="border rounded-lg p-3 bg-black cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
        </select>

        {/* Reset */}
        <button
          onClick={() => router.push("/courses")}
          className="bg-gray-800 text-white rounded-lg py-3"
        >
          Reset Filters
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No courses found
          </p>
        ) : (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          disabled={page <= 1}
          onClick={() => updateQuery("page", page - 1)}
          className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-700 
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Previous
        </button>

        <button
          disabled={page >= pagination.totalPages}
          onClick={() => updateQuery("page", page + 1)}
          className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-700 
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
