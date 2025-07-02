import { useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import { IoClose } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import {FaArrowRotateLeft} from "react-icons/fa6"
import { MdOutlineSecurity } from "react-icons/md";

export function Modal({
  productId,
  productName,
  productPrice,
  productImage,
  productQuotas,
  productImages = [],
  onClose,
  productTeam,
}) {
  const [activeImage, setActiveImage] = useState(productImage);
  return (
    <>
      <div className="md-modal-overlay">
        <div className="md-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="md-modal-close" onClick={onClose}>
            <IoClose />
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
            <div className="md-modal-thumbnails-vertical-mobile">
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
            <p className="md-modal-team">
              {productTeam
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <p className="md-modal-name">{productName}</p>
            <p className="md-modal-price">${productPrice}</p>
            <p className="md-modal-priceQuotas">
              3 x ${productQuotas} Sin interés
            </p>
            <div className="md-modal-icons-container">
              <FaTruck className="md-modal-icons" />{" "}
              <p>Envío gratis a partir de los $400.00</p>
              <MdOutlineSecurity className="md-modal-icons" />
              <p>Compra protegida</p>
              <FaArrowRotateLeft className="md-modal-icons" />
              <p>Podes cambiar el talle</p>
            </div>
          <Link to={`/product/${productId}`}>
          <button className="md-modal-seeMore">
            Ver Mas
          </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
