import "./product.css"
import { useState } from "react"

const ProductImage = ({ productImages, productName }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    return (
        <div className="product-image-container">
            <div className="product-main-image">
                <img
                    src={productImages[selectedImageIndex]}
                    alt={`${productName} ${selectedImageIndex}`}
                />
            </div>
            <div className="row">
                {productImages.map((image, index) => (
                    <div key={index} className="column">
                        <button onClick={() => setSelectedImageIndex(index)}>
                            {index}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImage