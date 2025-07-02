import { useCart } from "@components/CartContext/CartContext";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import "./quantityControls.css";
import spinner from "@img/spinner.svg";


export function QuantityControl({ productId, productSize }) {
  const { itemCart, incrementCart, decrementCart } = useCart();
  const [isBusy, setIsBusy] = useState(false);
  const [isClicked, setIsClicked] = useState(null);

  const handleIncrement = () => {
    if (isBusy) return;
    setIsBusy(true);
    setIsClicked("inc");
    setTimeout(() => {
      incrementCart(productId, productSize);
      setIsBusy(false);
    }, 1000); 
  };

  const handleDecrement = () => {
    if (isBusy) return;
    setIsBusy(true);
    setIsClicked("dec");
    setTimeout(() => {
      decrementCart(productId, productSize);
      setIsBusy(false);
    }, 1000);
  };

    const product = itemCart.find(
    (p) => p.id === productId && p.size === productSize
  );
  const quantity = product ? product.quantity : 0;

  return (
    <div className="cart-quantity-control">
      <IoIosRemove onClick={handleDecrement} className={`cart-quantity-control-btn-dec ${isClicked === "dec" ? "clicked" : ""} ${isBusy ? "none" : ""}`} />
      <img src={spinner} alt="spinner" className={isBusy ? "spinner" : "none"} />
      <span className={isBusy ? "none" : "cart-quantity-control-input"}>{quantity}</span>
      <IoIosAdd onClick={handleIncrement} className={`cart-quantity-control-btn-inc ${isClicked === "inc" ? "clicked" : ""} ${isBusy ? "none" : ""}`}/>
    </div>
  );
}


