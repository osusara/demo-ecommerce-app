import { useEffect } from "react";
import "./App.css";
import { useCart } from "./hooks/useCart";
import ProductPage from "./pages/ProductPage";

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
  const { dispatch } = useCart()

  useEffect(function fetchCart() {
    dispatch({ type: 'ADD_ITEMS', payload: itemsMock })
  }, [dispatch])
  
  return (
      <ProductPage />
  );
}

export default App;
