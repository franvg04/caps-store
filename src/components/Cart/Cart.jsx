import { useCart } from "@components/CartContext/CartContext";
import "./Cart.css";

export function Cart() {
  const { itemCart } = useCart();
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
                  <>
                    <div className="cart-item" key={product.id}>
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
                        <div className="cart-quantity-control">
                          <button className="cart-quantity-control-btn">
                            -
                          </button>
                          <input
                            type="number"
                            readOnly
                            value={product.quantity}
                            className="cart-quantity-control-input"
                          />
                          <button className="cart-quantity-control-btn">
                            +
                          </button>
                      
                        </div>
                        <button className="delete-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                          </button>
                      </div>
                      <p><strong>${product.price}</strong></p>
                    </div>
                  </>
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
            </div>
          </>
        )}
      </div>
    </>
  );
}
