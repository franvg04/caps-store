import { useCart } from "@components/CartContext/CartContext";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";


export function QuantityControl({ productId, productSize }) {
  const { itemCart, incrementCart, decrementCart } = useCart();

  const handleIncrement = () => {
    incrementCart(productId, productSize);
  };

  const handleDecrement = () => {
    decrementCart(productId, productSize);
  };

    const product = itemCart.find(
    (p) => p.id === productId && p.size === productSize
  );
  const quantity = product ? product.quantity : 0;

  return (
    <div className="cart-quantity-control">
      <IoIosRemove onClick={handleDecrement} className="cart-quantity-control-btn"/>
      <input
        type="number"
        readOnly
        value={quantity} 
        className="cart-quantity-control-input"
      />
      <IoIosAdd onClick={handleIncrement} className="cart-quantity-control-btn"/>
    </div>
  );
}