import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the ProductsContext
export const ProductsContext = createContext();

// Create the ProductsProvider component
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products/getall');
        setProducts(res.data.products);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching products.');
        console.error(error);
      }
    };

    getProduct();
  }, []);

  const getAllProducts = () => {
    return products;
  }

  return (
    <ProductsContext.Provider value={{ products, error, getAllProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Export the ProductsProvider
export default ProductsProvider;
