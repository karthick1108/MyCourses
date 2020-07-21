import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  //const counter = 2;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);
  // console.log(courses);
  return (
    <>
      <h2>Courses</h2>;
      <CourseList courses={courses} />;
    </>
  );
}

export default CoursesPage;
