import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";

const productMock = {
  image_urls: [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  price: 99.99,
  product_variant: [
    {
      varient: "Size 9",
      id: 1,
      stock: 45,
    },
    {
      varient: "Size 10",
      id: 2,
      stock: 56,
    },
  ],
  name: "Air Max Spider",
  description:
    "Spiderman Styled Sneakers Men's Football Shoes Outdoor Non- slip Mens Shoes Zapatos Hombres Breathable Man Running Shoes",
  id: 1,
  collection: {
    name: "Sandals, Slippers, Boots, Sports, Chapals",
    id: 1,
  },
};

function ProductPage() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/products/${productId}`
        );

        if (!response.ok)
          throw new Error(`Error in fetching product ${productId}`);

        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
        setProduct(productMock); // mock a product
      }
    }

    fetchProductById();
  }, [productId]);

  return product ? <ProductCard product={product} /> : <p>Loading...</p>;
}

export default ProductPage;
