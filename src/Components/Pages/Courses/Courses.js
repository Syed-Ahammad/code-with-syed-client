import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course/Course";

const Courses = () => {
  const allCourses = useLoaderData();

  return (
    <div className="grid grid-cols-5 mt-3">
      <ul className="menu bg-base-100 w-11/12 mr-4">
        {
            allCourses.map(course =>  <li key={course.id}><Link>{course.title}</Link></li>)
        }
       
      </ul>
      <div className="grid grid-cols-3 gap-4 col-span-4 mx-2">
        {allCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
