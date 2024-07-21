import { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../../theme";
import { HighlightedText, SectionHeading } from "../common/Text";
import { categoryDetails, categoryList } from "./data";
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
    // TODO: set from response
    setProducts(categoryDetails[category.id].products);
  }, [category]);

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
    // TODO: set from response
    setCategories(categoryList);
    setSelectedCategory(categoryList[0]);
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
