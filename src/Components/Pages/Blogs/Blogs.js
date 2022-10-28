import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs)
    return (
        blogs.map(blog => {
         return <div key={blog.id} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={blog.photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{blog.ques}</h1>
            <p className="py-6">{blog.ans}</p>
           
          </div>
        </div>
      </div>
        })
    );
};

export default Blogs;