import { useState, createContext, useEffect, useCallback } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProductsHandler = useCallback(() => {
    fetch("http://localhost:3000/flowers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // useEffect(() => {
  //   fetchProductsHandler();
  // }, [fetchProductsHandler]);

  return (
    <DataContext.Provider value={{ fetchProductsHandler, products }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
