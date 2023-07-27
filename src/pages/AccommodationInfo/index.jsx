import React from "react";
import AccommodationInfoCSS from "./AccommodationInfo.module.css";
import Slideshow from "../../components/SlideShow";
import { useParams } from "react-router-dom";
import accommodationsList from "../../data/accommodations.json";

function AccommodationInfo() {
  const { id } = useParams();
  const accommodation = accommodationsList.find((item) => item.id === id);

  console.log(accommodation);

  return (
    <main className={AccommodationInfoCSS.accommodation_info_global_styling}>
      <Slideshow pictures={accommodation.pictures} />
    </main>
  );
}

export default AccommodationInfo;
