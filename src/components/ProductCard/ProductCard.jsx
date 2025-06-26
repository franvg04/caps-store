import { useState, useRef, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

export function ProductCard({ productName, productPrice, productImage, productImagesCar, productId }) {
  if (!productName || !productPrice || !productImage) return null;
  const productQuotas = (productPrice / 3).toFixed(2);
  const productNameUp = productName.toUpperCase();
  const [isBuying, setIsBuying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const tiltRef = useRef(null);
  const navigate = useNavigate();
   useEffect(() => {
      const tiltNode = tiltRef.current
      if (tiltNode) {
        VanillaTilt.init(tiltNode, {
          max: 20,
          speed: 500,
          glare: false
        });
        return () => {
          tiltNode.VanillaTilt?.destroy();
        }
      }
    }, []);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`)
  }
  return (
    <>
      <article className="pr-productCard" ref={tiltRef}>
        <Link to={`/product/${productId}`}>
        <div className="pr-productCard-imageContainer">
          <img
            src={productImage}
            alt="Imagen del producto"
            className="pr-productCard-image"
          />
        </div>
        </Link>
        <header className="pr-productCard-header">
          <div className="pr-productCard-info">
            <p className="pr-productCard-name">{productNameUp}</p>
            <strong className="pr-productCard-price">${productPrice}</strong>
            <p className="pr-productCard-priceQuotas">3 x ${productQuotas} Sin interés</p>
            <button className="pr-productCard-buyButton" onClick={handleClick}>
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
            </button>
          </div>
        </header>
      </article>
      {showModal && (
    <Modal 
        productName = {productNameUp}
        productQuotas = {productQuotas}
        productPrice = {productPrice}
        productImage = {productImage}
        productImages={productImagesCar}
        onClose = {() => setShowModal(false)}
    />
  )}
    </>
  );
}
