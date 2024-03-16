import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Collections from "./pages/Collections/Collections";
import Contacts from "./pages/Contacts/Contacts";
import Catalog from "./pages/Catalog/Catalog";
import Navbar from "./components/Navbar/Navbar";
import MenuSidebar from "./components/MenuSidebar/MenuSidebar";
import SearchSidebar from "./components/SearchSidebar/SearchSidebar";
import CatalogProduct from "./pages/CatalogProduct/CatalogProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";

function App() {

  return (

    <>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalogProduct/:id" element={<CatalogProduct />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/contacts" element={<Contacts />} />
          
        </Routes>

        <MenuSidebar />

        <SearchSidebar />

        <Footer />

      </BrowserRouter>
      
    </>

  );

}

export default App;