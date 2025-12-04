import getCourses from "@/app/helpers/course/getCourses";
import React from "react";

export default async function PopularCourses() {
  const courses = await getCourses();
  console.log(courses);

  return <div>PopularCourses</div>;
}
