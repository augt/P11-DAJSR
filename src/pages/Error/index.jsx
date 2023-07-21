import React from "react";
import ErrorCSS from "./Error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className={ErrorCSS.error_global_styling}>
      <p className={ErrorCSS.error_message_http_code}>404</p>
      <p className={ErrorCSS.error_message_text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={ErrorCSS.return_home_link} to={"/"}>
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
