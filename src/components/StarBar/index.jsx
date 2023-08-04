import React from "react";
import StarBarCSS from "./StarBar.module.css";

function StarBar(props) {
  const rating = parseInt(props.rating);

  const fullStarsArray = Array.from({ length: rating });

  const emptyStarsArray = Array.from({ length: 5 - rating });

  return (
    <div className={StarBarCSS.starbar_global_styling}>
      {fullStarsArray.map(() => (
        <img src="../full-star-icon.svg" alt="icône étoile colorée" />
      ))}
      {emptyStarsArray.map(() => (
        <img src="../empty-star-icon.svg" alt="icône étoile colorée" />
      ))}
    </div>
  );
}

export default StarBar;
