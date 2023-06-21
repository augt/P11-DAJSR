import React from "react";
import CardCSS from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, cover } = props;
  return (
    <Link className={CardCSS.card_global_styling} to={`/fiche-logement/${id}`}>
      <img src={cover} alt="aperçu du logement" />
      <div className={CardCSS.gradient}></div>
      <div className={CardCSS.title}>{title}</div>
    </Link>
  );
}

export default Card;
