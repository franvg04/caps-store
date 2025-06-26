import logo from "@img/logo.png";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@components/CartContext/CartContext";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const {itemCart} = useCart();
  
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
        <button className="navbar-icons-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 0 24 24"
            width="35px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>

        <Link to="/cart" className="icon-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 0 24 24"
            width="35px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="counter">0</span>
        </Link>
      </div>
    </section>
  );
}
