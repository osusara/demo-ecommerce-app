import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import { API_URL } from "../../constants";

function ProductPage() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${API_URL}/product/${productId}/`);

        if (!response.ok)
          throw new Error(`Error in fetching product ${productId}`);

        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductById();
  }, [productId]);

  return product ? <ProductCard product={product} /> : <p>Loading...</p>;
}

export default ProductPage;
