import logo from "@img/logo.png";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@components/CartContext/CartContext";
import { FaShoppingCart, FaSearch } from "react-icons/fa";


export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const {itemCart} = useCart();
  let counter = itemCart.reduce((sum, product) => sum + product.quantity, 0);

  
  return (
    <section className="hd-header">
      <Link to="/" onClick={(e) => {
        if (location.pathname === "/") {
          e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="navbar-icons">
       {/* <button className="navbar-icons-search">
          <FaSearch />
        </button>
        */}
        <Link to="/cart" className="icon-button">
          <FaShoppingCart />
          <span className={counter > 0 ? "counter" : "counter hidden"}>{counter}</span>
        </Link>
      </div>
    </section>
  );
}
