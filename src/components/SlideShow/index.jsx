import React, { useState } from "react";
import SlideshowCSS from "./Slideshow.module.css";

function Slideshow(props) {
  const { pictures } = props;
  const [pictureToShow, setPictureToShow] = useState(pictures[0]);

  function showNextPicture() {
    let indexOfNextPicture = pictures.indexOf(pictureToShow) + 1;
    if (indexOfNextPicture > pictures.length - 1) {
      indexOfNextPicture = 0;
    }
    setPictureToShow(pictures[indexOfNextPicture]);
  }

  function showPreviousPicture() {
    let indexOfNextPicture = pictures.indexOf(pictureToShow) - 1;
    if (indexOfNextPicture < 0) {
      indexOfNextPicture = pictures.length - 1;
    }
    setPictureToShow(pictures[indexOfNextPicture]);
  }
  return (
    <div className={SlideshowCSS.slideshow_global_styling}>
      <img src={pictureToShow} alt="logement" />
      {pictures.length > 1 && (
        <div className={SlideshowCSS.picture_rank_container}>
          <div className={SlideshowCSS.picture_rank}>
            {pictures.indexOf(pictureToShow) + 1}/{pictures.length}
          </div>
        </div>
      )}
      {pictures.length > 1 && (
        <div className={SlideshowCSS.slideshow_buttons_container}>
          <button onClick={showPreviousPicture}>
            <img src="../arrow-left.svg" alt="flèche gauche" />
          </button>
          <button onClick={showNextPicture}>
            <img src="../arrow-right.svg" alt="flèche gauche" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
