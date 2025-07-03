import { useCart } from "@components/CartContext/CartContext";
import "./Cart.css";
import { QuantityControl } from "@components/Controls/QuantityControl";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Cart() {
  const { itemCart, removeFromCart } = useCart();
  return (
    <>
        {itemCart.length === 0 ? (
          <div className="cart-empty">
            <FaShoppingCart className="cart-empty-icon"/>
            <p>Agrega productos al carrito</p>
            <Link to="/">
            <button className="cart-empty-btn">Visitar productos</button>
            </Link>
          </div>
        ) : (
          <>
          <div className="cart-container">
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
                        <span className="cart-product-name">
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
              <h3>Tu compra</h3>
              <div className="cart-total-info">
                <p>
                  Productos (
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
                <button className="purchase-btn">Comprar</button>
              </div>
            </div>
      </div>
          </>
        )}
    </>
  );
}
