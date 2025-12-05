import CourseCard from "./CourseCard";
import axiosPublic from "@/lib/axiosPublic";

export default async function PopularCourses() {
  const response = await axiosPublic.get("/api/courses");
  const courses = response?.data?.data;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Most Popular Courses
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Learn new skills and boost your career with our top-rated courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              No courses available
            </p>
          )}

          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
