import { useState } from "react";
import { ProductCard } from "@components/ProductCard/ProductCard";
import "./modal.css";

export function Modal({
  productName,
  productPrice,
  productImage,
  productQuotas,
  productImages = [],
  onClose,
}) {
  const [activeImage, setActiveImage] = useState(productImage);
  return (
    <>
      <div className="md-modal-overlay">
        <div className="md-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="md-modal-close" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <div className="md-modal-images">
            <div className="md-modal-thumbnails-vertical">
              {productImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setActiveImage(img)}
                  className={`thumbnail ${activeImage === img ? "active" : ""}`}
                />
              ))}
            </div>

            <img src={activeImage} alt="" className="md-modal-image" />
          </div>

          <div className="md-modal-info">
            <p className="md-modal-name">{productName}</p>
            <p className="md-modal-price">${productPrice}</p>
            <p className="md-modal-priceQuotas">
              3 x ${productQuotas} Sin interés
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
