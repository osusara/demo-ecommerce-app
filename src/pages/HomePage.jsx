import HeroSection from "../components/Home/HeroSection";
import StatisticsBar from "../components/Home/StatisticsBar";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import ProductCategories from "../components/ProductCategories/ProductCategories";

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsBar />
      <WhatWeOffer />
      <ProductCategories />
    </>
  );
}

export default HomePage;
