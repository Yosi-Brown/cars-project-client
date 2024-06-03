import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FALLBACK_IMAGE_URL = 'https://via.placeholder.com/150?text=Image+Not+Available';

function ProductItem({ product }) {
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [userHasRated, setUserHasRated] = useState(false);

  const handleRating = (stars) => {
    if (userHasRated) return;

    const newRating = stars * 2;
    setRating(newRating);
    const newTotalRatings = [...totalRatings, newRating];
    setTotalRatings(newTotalRatings);
    const newAverageRating = newTotalRatings.reduce((a, b) => a + b, 0) / newTotalRatings.length;
    setAverageRating(newAverageRating);
    setUserHasRated(true);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
      <div className="p-8 rounded-t-lg relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image_link || FALLBACK_IMAGE_URL}
          alt={`${product.model} image`}
          onError={(e) => {
            console.error(`Error loading image for product ${product._id}: ${product.image_link}`);
            e.target.src = FALLBACK_IMAGE_URL;
          }}
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {product.model}
          </h5>
        </a>
        <p className="text-gray-700 dark:text-gray-400">Company: {product.company}</p>
        <p className="text-gray-700 dark:text-gray-400">Car Type: {product.car_type}</p>
        <p className="text-gray-700 dark:text-gray-400">Colors: {product.colors.join(', ')}</p>
        <p className="text-gray-700 dark:text-gray-400">Engine Type: {product.engine_type}</p>
        <p className="text-gray-700 dark:text-gray-400">Engine Displacement: {product.engine_displacement_cc} cc</p>
        <p className="text-gray-700 dark:text-gray-400">Horsepower: {product.horsepower} HP</p>
        <p className="text-gray-700 dark:text-gray-400">Seats: {product.seats}</p>
        <p className="text-gray-700 dark:text-gray-400">Year: {product.year}</p>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => handleRating(index + 1)}
                className={`w-6 h-6 ${index < rating / 2 ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'} cursor-pointer`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {averageRating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <div className="flex space-x-2">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300">
              Add to cart
            </a>
            <Link to={`/product/${product._id}`} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition duration-300">
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
