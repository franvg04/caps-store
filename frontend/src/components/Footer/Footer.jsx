import "./footer.css";
import { FaGithub } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p >
          &copy; {new Date().getFullYear()} Caps Store. Todos los derechos reservados.
        </p>
        <p>
          Proyecto de Franvg <a href="https://github.com/franvg04" target="new" className="github"><FaGithub /></a>
        </p>
      </div>
    </footer>
  );
}