import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const {id, title, image, description} = useLoaderData();
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
             {description}
            </p>
            <Link to={`/checkout/${id}`}><button className="btn btn-primary">Click on Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
