import { useCart } from "@components/CartContext/CartContext";
import "./Cart.css";
import { QuantityControl } from "@components/Controls/QuantityControl";
import { FaTrashAlt } from "react-icons/fa";

export function Cart() {
  const { itemCart, removeFromCart } = useCart();
  return (
    <>
      <h2>Cart</h2>
      <div className="cart-container">
        {itemCart.length === 0 ? (
          <p>Add products at cart</p>
        ) : (
          <>
            <div className="cart-header">
              {itemCart.map((product) => {
                return (
                    <div className="cart-item" key={`${product.id}-${product.size}`}>
                      <div className="product-image">
                        <img
                          src={product.image}
                          alt={`${product.name}`}
                          className="cart-product-image"
                        />
                      </div>
                      <div className="cart-product-info">
                        <span>
                          <strong>{product.name} </strong>
                          (Size: {product.size})
                        </span>
                        <div className="control">
                          <QuantityControl
                        productId={product.id}
                        productSize={product.size}
                        />
                        <FaTrashAlt className="delete-btn" onClick={() =>removeFromCart(product.id, product.size)}/>
                        </div>
                        
                      </div>
                      <div className="cart-product-price">
                        <p>${product.price}</p>
                        <strong>${(product.price * product.quantity).toFixed(2)}</strong>
                      </div>
                    </div>
                );
              })}
            </div>
            <div className="cart-total">
              <p>Your purchase</p>
              <div className="cart-total-info">
                <p>
                  Products (
                  {itemCart.reduce((sum, product) => sum + product.quantity, 0)}
                  )
                </p>
                <p>
                  $
                  {itemCart.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  ).toFixed(2)}
                </p>
              </div>
              <div className="purchase-button">
                <button className="purchase-btn">Purchase</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
