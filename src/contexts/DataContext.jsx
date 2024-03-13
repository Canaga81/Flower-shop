import { useState, createContext, useCallback, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  const [visible, setVisible] = useState(6);

  const visiblePlusFunc = () => {
    setVisible((prevState) => prevState + products.length - visible);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    try {
      fetch("http://localhost:3000/flowers")
        .then((response) => response.json())
        .then((response) => setProducts(response));
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  // console.log(products);

  return (
    <DataContext.Provider
      value={{
        products,
        isLoading,
        error,
        setQuery,
        query,
        visible,
        visiblePlusFunc,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;