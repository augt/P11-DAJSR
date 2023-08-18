import React from "react";
import HeaderCSS from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={HeaderCSS.header_layout}>
      <h1>
        <img src="../kasa-logo-header.svg" alt="Kasa" />
      </h1>

      <nav>
        <ul className={HeaderCSS.header_links_list}>
          <li className={HeaderCSS.home_link}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? HeaderCSS.active_page : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a_propos"
              className={({ isActive }) =>
                isActive ? HeaderCSS.active_page : ""
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
