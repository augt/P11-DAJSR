import React from "react";
import HomeCSS from "./Home.module.css";
import Banner from "../../components/Banner";

import accommodationsList from "../../data/accommodations.json";
import Card from "../../components/Card";

function Home() {
  return (
    <main className={HomeCSS.home_global_styling}>
      <Banner isHomeBanner={true} image="../home-page-banner.jpg" />
      <div className={HomeCSS.cards_group}>
        {accommodationsList.map((accommodation) => {
          return (
            <Card
              key={accommodation.id}
              title={accommodation.title}
              id={accommodation.id}
              cover={accommodation.cover}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
