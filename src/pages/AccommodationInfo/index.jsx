import React from "react";
import AccommodationInfoCSS from "./AccommodationInfo.module.css";
import Slideshow from "../../components/SlideShow";
import { useParams } from "react-router-dom";
import accommodationsList from "../../data/accommodations.json";
import Error from "../Error";
import Collapse from "../../components/Collapse";
import StarBar from "../../components/StarBar";
import Tag from "../../components/Tag";

function AccommodationInfo() {
  const { id } = useParams();
  const accommodation = accommodationsList.find((item) => item.id === id);

  if (!accommodation) {
    return <Error />;
  }

  return (
    <main className={AccommodationInfoCSS.accommodation_info_global_styling}>
      <Slideshow pictures={accommodation.pictures} />
      <div className={AccommodationInfoCSS.accommodation_info_middle_block}>
        <div>
          <h2>{accommodation.title}</h2>
          <div className={AccommodationInfoCSS.accommodation_location}>
            {accommodation.location}
          </div>
          <div className={AccommodationInfoCSS.tags_block}>
            {accommodation.tags.map((tag, index) => (
              <Tag label={tag} key={index} />
            ))}
          </div>
        </div>
        <div className={AccommodationInfoCSS.host_and_starbar_block}>
          <div className={AccommodationInfoCSS.accommodation_host_block}>
            <div>
              {accommodation.host.name.split(" ")[0]} <br />
              {accommodation.host.name.split(" ")[1]}
            </div>
            <img src={accommodation.host.picture} alt="portrait de l'hôte" />
          </div>
          <StarBar rating={accommodation.rating} />
        </div>
      </div>

      <div className={AccommodationInfoCSS.collapses_group}>
        <Collapse
          headerContent="Description"
          paragraphContent={accommodation.description}
          isSmallFont={true}
        />
        <Collapse
          headerContent="Équipements"
          listContent={accommodation.equipments}
          isSmallFont={true}
        />
      </div>
    </main>
  );
}

export default AccommodationInfo;
