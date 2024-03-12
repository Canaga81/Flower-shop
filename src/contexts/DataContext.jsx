import { useState, createContext, useCallback } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  const [visible, setVisible] = useState(6);

  const visiblePlusFunc = () => {
    setVisible(item => item.length);
  };

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/flowers");

      if (response.status !== 200) {
        throw new Error("Data'da yanlisliq var !");
      }

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   fetchProductsHandler();
  // }, [fetchProductsHandler]);

  return (
    <DataContext.Provider value={{ fetchProductsHandler, products, isLoading, error, setQuery, query, visible, visiblePlusFunc }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
