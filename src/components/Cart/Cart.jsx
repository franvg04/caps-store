import { useCart } from "@components/CartContext/CartContext"
import "./Cart.css"
 
export function Cart () {
    const {itemCart} = useCart();
    
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {
                itemCart.length === 0 ? (
                    <p>Add products at cart</p>
                ) : (
                    <>
                    <div className="cart-header">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Size</p>
                        <p>Total</p>    
                        <p>Action</p>
                    </div>
                    <ul className="cart-items">
                        {
                            itemCart.map((product) => {
                                return (
                                    <li className="cart-item" key={product.id}>
                                        <div className="product-info">
                                            <img src={product.image} alt={`${product.name}`} className="cart-product-image"/>
                                        </div>
                                        <span>{product.name}</span>
                                        <p>${product.price}</p>
                                        <div className="cart-quantity-control">
                                            <button className="cart-quantity-control-btn">
                                                -
                                            </button>
                                            <input type="number" readOnly value={product.quantity} className="cart-quantity-control-input" />
                                            <button className="cart-quantity-control-btn">
                                                +
                                            </button>
                                        </div>
                                        <p>{product.size}</p>
                                        <p>$0</p>
                                        <button className="delete-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                        </button>

                                    </li>
                                )
                            })
                        }
                    </ul>
                    </>
                )
            }
        </div>
    )
}