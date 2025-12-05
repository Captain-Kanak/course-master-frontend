import React, { Suspense } from "react";
import CoursesListing from "./components/CoursesListing";

export default function CoursesPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CoursesListing />
      </Suspense>
    </div>
  );
}
