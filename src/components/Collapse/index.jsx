import React, { useState } from "react";
import CollapseCSS from "./Collapse.module.css";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={CollapseCSS.collapse_global_styling}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{props.headerContent}</span>
        <img
          src="../chevron-icon.svg"
          alt="icône de chevron"
          className={!isOpen && CollapseCSS.rotated_chevron}
        />
      </button>
      {isOpen && (
        <div className={CollapseCSS.collapsable_content}>
          {props.paragraphContent && <p>{props.paragraphContent}</p>}
        </div>
      )}
    </div>
  );
}

export default Collapse;
