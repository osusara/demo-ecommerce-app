import { useState } from "react"
import "./product.css"
import ProductImage from "./ProductImage"

const product = {
    id: 1,
    images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg', 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    name: 'Air Max Spider',
    description: 'Spiderman Styled Sneakers Men\'s Football Shoes Outdoor Non- slip Mens Shoes Zapatos Hombres Breathable Man Running Shoes',
    price: 120,
    sizes: [39, 40, 41]
}

const ProductDetails = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

  return (
    <div>
      <div className="row">
        <div className="column">
          <ProductImage productImages={product.images} productName={product.name} />
        </div>
        <div className="column text-start">
          <h1>{product.name}</h1>
          <h3>$ {product.price.toFixed(2)}</h3>
          <p>{product.description}</p>

          <div className="row">
            {product.sizes.map((size, index) => (
              <div key={index} className="column">
                <button
                  onClick={() => setSelectedSizeIndex(index)}
                  className={selectedSizeIndex === index && 'active-btn'}
                >{size}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails