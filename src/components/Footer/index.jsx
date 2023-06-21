import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <footer className={FooterCSS.footer_global_styling}>
      <img src="../kasa-logo-footer.svg" alt="Logo de Kasa" />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
