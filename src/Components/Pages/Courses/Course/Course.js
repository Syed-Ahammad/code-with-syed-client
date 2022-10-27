import React from "react";

const Course = ({ course }) => {
  const { title, id, price, description, image } = course;
  return (
    <div className="card w-80 shadow-xl">
      <figure className="pt-3">
        <img className="h-44 w-3/4" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-around">
          <p className="text-xl">
            Price: ${" "}
            <span className="text-orange-600 font-semibold">{price}</span>
          </p>
          <button className="btn btn-primary">
            <span className="mr-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </span>
            Enroll in Course
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Course;
