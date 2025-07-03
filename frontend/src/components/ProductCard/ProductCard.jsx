import { useState, useRef, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { FaCartPlus } from "react-icons/fa";

export function ProductCard({
  productName,
  productPrice,
  productImage,
  productImagesCar,
  productId,
  productTeam,
}) {
  if (!productName || !productPrice || !productImage) return null;
  const productQuotas = (productPrice / 3).toFixed(2);
  const productNameUp = productName.toUpperCase();
  const [isBuying, setIsBuying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const tiltRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 20,
        speed: 500,
        glare: false,
        scale: 1.02,
      });
      return () => {
        tiltNode.VanillaTilt?.destroy();
      };
    }
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

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
            <p className="pr-productCard-priceQuotas">
              3 x ${productQuotas} Sin interés
            </p>
            <button className="pr-productCard-buyButton" onClick={handleClick}>
              <FaCartPlus className="cart"/>
            </button>
          </div>
        </header>
      </article>
      {showModal && (
        <Modal
          productId={productId}
          productName={productNameUp}
          productQuotas={productQuotas}
          productPrice={productPrice}
          productImage={productImage}
          productImages={productImagesCar}
          productTeam={productTeam}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
