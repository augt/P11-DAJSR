import React from "react";
import StarBarCSS from "./StarBar.module.css";

function StarBar(props) {
  const rating = parseInt(props.rating);

  const fullStarsArray = Array.from({ length: rating });

  const emptyStarsArray = Array.from({ length: 5 - rating });

  return (
    <div className={StarBarCSS.starbar_global_styling}>
      {fullStarsArray.map((item, index) => (
        <img
          src="../full-star-icon.svg"
          alt="icône étoile colorée"
          key={index}
        />
      ))}
      {emptyStarsArray.map((item, index) => (
        <img
          src="../empty-star-icon.svg"
          alt="icône étoile colorée"
          key={index}
        />
      ))}
    </div>
  );
}

export default StarBar;
