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

const itemsMock = [
  {
    quantity: 1,
    product_variant: {
      product: {
        image_url:
          "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        price: 99.99,
        name: "Air Max 60",
        description: "High-quality running shoes for all terrains.",
        id: 2,
        collection: {
          name: "Sandals, Slippers, Boots, Sports, Chapals",
          id: 1,
        },
      },
      varient: "Size 9",
      id: 1,
      stock: 899,
    },
  },
  {
    quantity: 1,
    product_variant: {
      product: {
        image_url:
          "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg",
        price: 89.99,
        name: "Air Max 40",
        description: "High-quality running shoes for the track",
        id: 2,
        collection: {
          name: "Sandals, Slippers, Boots, Sports, Chapals",
          id: 1,
        },
      },
      varient: "Size 9",
      id: 2,
      stock: 899,
    },
  },
];

function App() {
  const { dispatch } = useCart();

  useEffect(
    function fetchCart() {
      dispatch({ type: "ADD_ITEMS", payload: itemsMock });
    },
    [dispatch]
  );

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
