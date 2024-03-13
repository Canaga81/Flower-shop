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

  //! Shopping Cart
  
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;

    setCart([...cart, item]);
  };

  const cartRemoveItem = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice()
  };

  const handleChange = (item, d) => {
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart]; // cart dizisinin kopyası oluşturuluyor
  
      updatedCart[cartItemIndex] = {
        ...updatedCart[cartItemIndex], // önceki öğenin tüm özellikleri kopyalanıyor
        amount: updatedCart[cartItemIndex].amount + d // amount özelliği güncelleniyor
      };
  
      if (updatedCart[cartItemIndex].amount <= 0) {
        // Eğer amount 1'den küçük veya eşitse, öğeyi sepetten kaldır.
        updatedCart.splice(cartItemIndex, 1);
      }
  
      setCart(updatedCart); // güncellenmiş kopya ile cart dizisi güncelleniyor
    }
  };

  const handlePrice = () => {
    let quantity = 0;
    cart.map((cartItem) => quantity += cartItem.amount * cartItem.price);
    setPrice(quantity);
  }

  useEffect(() => {
    handlePrice();
  });

  const clearCartFunc = () => {
    setCart([])
  }

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
        handleClick,
        cart,
        handleChange,
        cartRemoveItem,
        price,
        clearCartFunc
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;