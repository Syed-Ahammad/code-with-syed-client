import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-full mt-3" style={{ backgroundImage: `url("https://www.clariwell.in/resources/best-web-development-course-top-training-institute-in-pune.webp")` }}>
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WEB DEVELOPMENT COURSES</h1>
            <p className="mb-5 text-xl">Practical project-based courses that are easy to understand and straight to the point with NO FLUFF.</p>
           <Link to={'/courses'}> <button className="btn btn-primary">Get Started Learning</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Home;