import { useEffect, useRef, useState } from "react";
import "./detailProduct.css";
import { products } from "@mocks/caps.json";
import { useParams } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { useCart } from "@components/CartContext/CartContext";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["6 7/8", "7", "7 1/8", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4", "7 7/8", "8"];
  const {addCart} = useCart();

  const handleAddCart = () => {
    if (product) {
      addCart({
        id: product.id,
        image: product.thumbnail,
        name: product.title,
        price: product.price,
        quantity: 1,
        size: selectedSize
      })
    }
  }

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.thumbnail);
    }
  }, [id]);

  return (
    <>
      {product ? (
        <>
          <div className="product-details-content">
            <div className="product-details-gallery">
              <div className="product-details-thumbnails-vertical">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setActiveImage(img)}
                    className={`thumbnail ${
                      activeImage === img ? "active" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="product-details-thumbnails-mobile">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setActiveImage(img)}
                    className={`thumbnail ${
                      activeImage === img ? "active" : ""
                    }`}
                  />
                ))}
              </div>

              <img src={activeImage} alt="" className="product-details-image" />
            </div>

            <div className="product-details-info">
              <p className="product-details-name">{product.title}</p>
              <p className="product-details-price">${product.price}</p>
              <p className="product-details-priceQuotas">
                3 x ${(product.price / 3).toFixed(2)} Sin interés
              </p>
              <div className="product-details-sizes">
                {sizes.map((size) => {
                  return (
                    <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "size-button selected" : "size-button"}
                    >{size}</button>
                  )
                })}
              </div>
              <button className="product-details-cart" onClick={handleAddCart}>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1>Cargando...</h1>
      )}

    </>
    
  );
}
