import React from "react";
import TagCSS from "./Tag.module.css";

function Tag(props) {
  const { label } = props;
  return <div className={TagCSS.tag_global_styling}>{label}</div>;
}

export default Tag;
