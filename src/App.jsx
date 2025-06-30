import { useState } from "react";
import "./components/ProductCard/style_ProductCard.css";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import bannerImg from "./img/banner3.jpg";
import { Banner } from "./components/Banner/Banner";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { useLocation } from "react-router-dom";
import { CartProvider } from "@components/CartContext/CartContext";
import { Cart } from "@components/Cart/Cart";

function useFilters() {
  const [filters, setFilter] = useState({
    category: 'all',
    team: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category ||
          product.team === filters.team
        )
      );
    });
  };

  return { filterProducts, setFilter };
}


export function App() {
  return (
    <>
      <CartProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner
                bannerImage={bannerImg}
                altText="Banner New Era"
              />
              <Filters />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </CartProvider>
    </>
  );
}

