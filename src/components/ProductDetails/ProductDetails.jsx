import { useEffect, useRef, useState } from "react";
import "./detailProduct.css";
import { products } from "@mocks/caps.json";
import { useParams } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { useCart } from "@components/CartContext/CartContext";
import { FaCheck } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";


export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["6 7/8", "7", "7 1/8", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4", "7 7/8", "8"];
  const {addCart} = useCart();
  const [isAdded, setIsAdded] = useState(null);

  const handleAddCart = () => {
    if (product) {
      setIsAdded("add");
      setTimeout(() => {
      addCart({
        id: product.id,
        image: product.thumbnail,
        name: product.title,
        price: product.price,
        quantity: 1,
        size: selectedSize
      })
      setIsAdded(null);
      }, 1000);
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
              <button className={`${isAdded === "add" ? "product-details-cart added" : "product-details-cart"}`} onClick={handleAddCart} disabled={!selectedSize}>
                <div className={`${isAdded === "add" ? "product-details-cart-content added" : "product-details-cart-content"}`}>
                <FaCartPlus className={`${isAdded === "add" ? "cart-icon-none" : "cart-icon" }`}/>
                Add to cart
                </div>
                <div className={`${isAdded === "add" ? "product-added" : "product-added none"}`}>
                  <FaCheck className="check-icon"/>
                </div>
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
