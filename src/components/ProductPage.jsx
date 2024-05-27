import React, { useState } from 'react';
import calculateDiscountPercentage from './discountCalculator';

function ProductPage() {
  const originalPrice = 90000;
  const discountedPrice = 60000;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex-1 p-4">
            <div
              className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                className="w-full h-full object-cover"
                src="./public/pictures/car.jpg"
                alt="Product Image"
              />
              {isHovering && (
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <button className="text-white bg-gray-800 dark:bg-gray-600 rounded-full p-2 hover:bg-gray-700 dark:hover:bg-gray-500 transition duration-300 ease-in-out">
                    View Full Image
                  </button>
                </div>
              )}
            </div>
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 ease-in-out">Add to Cart</button>
              <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ease-in-out">Add to Wishlist</button>
            </div>
          </div>
          <div className="md:flex-1 p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sample Company - Sample Model</h1>
            <div className="text-gray-700 dark:text-gray-300 space-y-1">
              <div><span className="font-bold">Engine Displacement (cc):</span> 2000</div>
              <div><span className="font-bold">Horsepower:</span> 300</div>
              <div><span className="font-bold">Seats:</span> 5</div>
              <div><span className="font-bold">Engine Type:</span> V6</div>
              <div><span className="font-bold">Car Type:</span> SUV</div>
              <div><span className="font-bold">Year:</span> 2023</div>
              <div>
                <span className="font-bold">Colors:</span>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700"></button>
                </div>
              </div>
              <div className="text-lg font-bold text-red-500 dark:text-red-400">
                <span className="line-through text-gray-600 dark:text-gray-400">${originalPrice.toLocaleString()}</span>
                <span className="ml-2">${discountedPrice.toLocaleString()}</span>
                <span className="text-sm text-red-500 dark:text-red-400 ml-2">({discountPercentage}%)</span>
              </div>
              <div>
                <span className="font-bold">Image Link:</span>
                <a href="https://example.com" className="text-blue-500 dark:text-blue-400 inline-block mt-2 hover:underline">https://example.com</a>
              </div>
              <div>
                <span className="font-bold">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                </p>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Company:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">Sample Company</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Model:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">Sample Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
