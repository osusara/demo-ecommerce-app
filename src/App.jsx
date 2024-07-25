import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCart } from "./hooks/useCart";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import CollectionsPage from "./pages/CollectionsPage";
import PageLayout from "./pages/PageLayout";
import "./App.css";

const cart_id = "be730553-8b56-49cb-9cf4-ff170d3e8a9e";

function App() {
  const { dispatch } = useCart();

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/carts/${cart_id}`
        );

        if (!response.ok) throw new Error("Error in getting cart data");

        const cart = await response.json();
        dispatch({
          type: "ADD_ITEMS",
          payload: { id: cart_id, items: cart.items },
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchCart();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
