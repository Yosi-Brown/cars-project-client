import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/CartContextProduct.jsx";
import { useNavigate } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";

function Products() {
  const [singleProduct, setSingleProduct] = useState(false)

  const { getAllProducts,setIsModalOpen  } = useContext(ProductsContext);
  const products = getAllProducts(); 
  console.log(singleProduct)

  const [ratings, setRatings] = useState({});
  const [userHasRated, setUserHasRated] = useState({});

  // const navigate = useNavigate();

  const handleRating = (productId, stars) => {
    if (userHasRated[productId]) return;

    const newRating = stars * 2;
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: prevRatings[productId]
        ? [...prevRatings[productId], newRating]
        : [newRating],
    }));
    setUserHasRated((prevStatus) => ({
      ...prevStatus,
      [productId]: true,
    }));
  };

  const handleOnClick = (productId) => {
    console.log(productId);
    navigate("/page", { state: { productId } });
  };

  const getAverageRating = (productId) => {
    const productRatings = ratings[productId];
    if (!productRatings || productRatings.length === 0) return 0;
    return productRatings.reduce((a, b) => a + b, 0) / productRatings.length;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto justify-center pt-5">
      {products.map((product) => (
      // <Link to={`/product/${product._id}`}>    
          <div
        
          key={product._id}
          className="bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="p-4 rounded-t-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src={product.image_link}
              alt={`${product.model} image`}
              // onError={(e) => {
              //   console.error(`Error loading image for product ${product._id}: ${product.image_link}`);
              //   e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Available'; // Fallback image on error
              // }}
            />
          </div>
          <div className="px-4 pb-4">
            {/* <Link to={`/product/${product._id}`}> */}
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
              {product.model}
            </h5>
            {/* </Link> */}
            <p className="text-gray-700 dark:text-gray-400 mb-1">
              Company: <span className="font-medium">{product.company}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-1">
              Car Type: <span className="font-medium">{product.car_type}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-1">
              Year: <span className="font-medium">{product.year}</span>
            </p>
            <div className="mt-3 mb-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
            </div>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    onClick={() => handleRating(product._id, index + 1)}
                    className={`w-6 h-6 ${
                      index < getAverageRating(product._id) / 2
                        ? "text-yellow-300"
                        : "text-gray-200 dark:text-gray-600"
                    } cursor-pointer`}
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
                {getAverageRating(product._id).toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button
            
                  
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition duration-300"
                  onClick={() =>console.log("yosi")}
                >
                  Add to cart
                </button>
                <button
                onClick={()=> {setSingleProduct(product)
                  setIsModalOpen(true)}
                }
                // onClick={()=> {setSingleProduct(product)
                //   setIsModalOpen(true)}
                // }
                  // to="/page"
                  // state={{ id: product._id }}
                  // className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      // </Link>
      ))}
    {singleProduct && <ProductPage product={singleProduct} />}

    </div>
  );
}

export default Products;
