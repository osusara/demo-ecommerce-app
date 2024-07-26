import { useState } from "react";
import styled from "styled-components";
import { HighlightedText, SectionHeading } from "../common/Text";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

const ProductCategories = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [products, setProducts] = useState([]);

  /**
   * TODO:
   * Tab headers
   *  - Fetch the list of collections from the backend (GET /collection/)
   *  - Store the collections array in state
   *  - Loop over the array and create the tab headers
   *  - The Tab headers should have an onClick handler that sets the selected collection
   *
   * Tab content
   *  - When a collection is selected, fetch the products in that collection
   *  - GET /product/?collection_id={id}
   *  - Store the products array in state
   *  - Loop over the array and display the products
   *  - (If necessary, this can be lifted out into another component)
   */

  if (!collections) return null;

  return (
    <StyledSection>
      <SectionHeading>
        Our Latest <HighlightedText>Collection</HighlightedText>
      </SectionHeading>
      {/* Tab headers */}
      {/* Selected Tab */}
    </StyledSection>
  );
};

export default ProductCategories;
