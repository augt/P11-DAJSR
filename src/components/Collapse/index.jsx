import React, { useState } from "react";
import CollapseCSS from "./Collapse.module.css";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={
        CollapseCSS.collapse_global_styling +
        (props.isSmallFont ? " " + CollapseCSS.small_font : "") +
        (isOpen ? "" : " " + CollapseCSS.hide_collapsable_background)
      }
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className={props.isSmallFont ? CollapseCSS.small_font : ""}>
          {props.headerContent}
        </span>
        <img
          src="../chevron-icon.svg"
          alt="icône de chevron"
          className={!isOpen ? CollapseCSS.rotated_chevron : ""}
        />
      </button>

      {isOpen && (
        <div className={CollapseCSS.collapsable_content}>
          {props.paragraphContent && <p>{props.paragraphContent}</p>}
          {props.listContent && (
            <ul>
              {props.listContent.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
