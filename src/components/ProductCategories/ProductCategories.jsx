import { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../../theme";
import { HighlightedText, SectionHeading } from "../common/Text";
import ProductCard from "./ProductCard";

const TabHeaders = styled.nav`
  width: 100%;
  margin: 40px 0 auto;
  display: flex;
  justify-content: space-between;
`;

const TabItem = styled.a`
  font-family: "Bruno Ace SC", sans-serif;
  display: inline-block;
  margin: 0 20px;
  font-size: 20px;
  max-width: 250px;
  cursor: pointer;
  color: ${(props) => (props.$active ? color.text.accent : color.text.heading)};
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

const TabContent = styled.div`
  width: 100%;
  padding-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

const ProductCategoryTab = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/products?collection_id=${1}&page=0`
        );

        if (!response.ok)
          throw new Error("Error in fetching products by category");

        const productsByCategory = await response.json();
        setProducts(productsByCategory.items);
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchProductsByCategory();
  }, []);

  if (!category) return null;

  return (
    <TabContent>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </TabContent>
  );
};

const ProductCategories = () => {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/collections"
        );

        if (!response.ok) throw new Error("Error in fetching categories");

        const categories = await response.json();
        setCategories(categories);
        setSelectedCategory(categories[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  if (!categories) return null;

  return (
    <StyledSection>
      <SectionHeading>
        Our Latest <HighlightedText>Collection</HighlightedText>
      </SectionHeading>
      <TabHeaders role="tablist">
        {categories.map((category) => (
          <TabItem
            $active={selectedCategory.id === category.id}
            onClick={() => setSelectedCategory(category)}
            key={category.id}
            id={category.id}
          >
            {category.name}
          </TabItem>
        ))}
      </TabHeaders>
      <ProductCategoryTab category={selectedCategory} />
    </StyledSection>
  );
};

export default ProductCategories;
