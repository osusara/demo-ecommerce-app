import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";

function ProductPage() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(
          `http://ec2-3-140-126-49.us-east-2.compute.amazonaws.com/product/${productId}/`
        );

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
