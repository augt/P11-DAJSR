import React from "react";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={HeaderCSS.header_layout}>
      <img src="../kasa-logo-header.svg" alt="Logo de Kasa" />
      <nav>
        <ul className={HeaderCSS.header_links_list}>
          <li>
            <Link to="/" className={HeaderCSS.home_link}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/a_propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
