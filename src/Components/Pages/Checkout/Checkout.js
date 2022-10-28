import React from "react";
import { FaBeer, FaCreditCard } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const {id, title, image, description, price} = useLoaderData();
  
  return (
    <div className="grid grid-cols-2 gap-4 m-4">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
             {description}
            </p>
           
          </div>
        </div>
      </div>
      <div>
        <div className="card w-auto m-auto mt-4 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Billing information</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input">
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note</span>
              </label>
              <label className="input">
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                />
              </label>
            </div>
            <h2 className="card-title justify-center">Payment Mathod</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <span>Card </span>
                
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input input-bordered"
                />
                <span>MM/YY CVC</span>
              </label>
            </div>
            <button className="btn btn-primary text-2xl">Pay: {price} $</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
