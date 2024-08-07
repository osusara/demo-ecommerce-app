import { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../../theme";
import { HighlightedText, SectionHeading } from "../common/Text";
import ProductCard from "./ProductCard";
import { API_URL } from "../../../constants";

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

const NoContentMessage = styled.div`
  grid-column: 2;
  text-align: center;
  font-size: 20px;
  margin: 90px 0px;
`;

const ProductCategoryTab = ({ products }) => {
  return (
    <TabContent>
      {!products?.length && (
        <NoContentMessage>No products in this collection</NoContentMessage>
      )}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </TabContent>
  );
};

const ProductCategories = () => {
  const [collections, setCollections] = useState(null);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch(`${API_URL}/collection/`);

        if (!response.ok) throw new Error("Error in fetching categories");

        const collections = await response.json();
        setCollections(collections);
        setSelectedCollectionId(collections[0].id);
        fetchProducts(collections[0].id);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCollections();
  }, []);

  async function fetchProducts(collectionId) {
    try {
      setSelectedCollectionId(collectionId);
      const response = await fetch(
        `${API_URL}/product/?collection_id=${collectionId}`,
        { cache: "force-cache" }
      );

      if (!response.ok)
        throw new Error("Error in fetching products by category");

      const productsByCategory = await response.json();
      setProducts(productsByCategory.items);
    } catch (error) {
      console.log(error);
    }
  }

  if (!collections) return null;

  return (
    <StyledSection>
      <SectionHeading>
        Our Latest <HighlightedText>Collection</HighlightedText>
      </SectionHeading>
      <TabHeaders role="tablist">
        {collections.map((collection) => (
          <TabItem
            $active={selectedCollectionId === collection.id}
            onClick={() => fetchProducts(collection.id)}
            key={collection.id}
            id={collection.id}
          >
            {collection.name}
          </TabItem>
        ))}
      </TabHeaders>
      <ProductCategoryTab products={products} />
    </StyledSection>
  );
};

export default ProductCategories;
