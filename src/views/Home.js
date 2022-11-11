import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Voosh</h1>
        <p className="text-center text-gray-500">
          10 Minutes Delivery. 100% Satisfaction.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-8">
        <Link
          to="/create-order" // This is the route to the CreateOrder component
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Order
        </Link>
        <Link
          to="/all-order" // This is the route to the AllOrders component
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View All Orders
        </Link>
      </div>
    </div>
  );
};

export default Home;
