import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import CollectionsPage from "./pages/CollectionsPage";
import PageLayout from "./pages/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
