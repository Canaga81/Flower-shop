import { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const searchHandleClose = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleClose,
        searchOpen,
        setSearchOpen,
        searchHandleClose,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;