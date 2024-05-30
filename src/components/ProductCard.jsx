import React, { useState } from 'react';

function ProductCard() {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageScaled, setIsImageScaled] = useState(false);
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsImageScaled(true);
    }, 10);
  };

  const handleCloseModal = () => {
    setIsImageScaled(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const handleRating = (stars) => {
    setRating(stars);
    const newTotalRatings = [...totalRatings, stars];
    setTotalRatings(newTotalRatings);
    const newAverageRating = newTotalRatings.reduce((a, b) => a + b, 0) / newTotalRatings.length;
    setAverageRating(newAverageRating);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
      <div
        className="p-8 rounded-t-lg relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          className="w-full h-full object-cover"
          src="https://www.sport5.co.il/Sip_Storage/FILES/5/size475x318/990045.jpg"
          alt="product image"
        />
        {isHovering && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
            <button
              className="text-white bg-gray-800 dark:bg-gray-600 rounded-full p-2 hover:bg-gray-700 dark:hover:bg-gray-500 transition duration-300 ease-in-out"
              onClick={handleOpenModal}
            >
              View Full Image
            </button>
          </div>
        )}
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((stars) => (
              <svg
                key={stars}
                onClick={() => handleRating(stars)}
                className={`w-4 h-4 ${stars <= rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'} cursor-pointer`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{averageRating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300">Add to cart</a>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div
            className={`relative transition-transform duration-500 ease-in-out ${isImageScaled ? 'scale-100' : 'scale-75'}`}
          >
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-white bg-gray-800 dark:bg-gray-600 rounded-full p-2 hover:bg-gray-700 dark:hover:bg-gray-500 transition duration-300 ease-in-out"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <img
              className="max-w-full max-h-full"
              src="https://www.sport5.co.il/Sip_Storage/FILES/5/size475x318/990045.jpg"
              alt="Product Image Full Screen"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
