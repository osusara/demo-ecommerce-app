import HeroSection from "../components/Home/HeroSection";
import StatisticsBar from "../components/Home/StatisticsBar";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import ProductCategories from "../components/Product/ProductCategories";
import PageLayout from "./PageLayout";

function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <StatisticsBar />
      <WhatWeOffer />
      <ProductCategories />
    </PageLayout>
  );
}

export default HomePage;
