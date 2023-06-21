import React from "react";
import BannerCSS from "./Banner.module.css";
function Banner(props) {
  const { isHomeBanner, image } = props;
  let bannerClassList = BannerCSS.banner_global_styling;
  if (isHomeBanner === true) {
    bannerClassList = `${bannerClassList} ${BannerCSS.mobile_home_banner}`;
  }

  return (
    <div className={bannerClassList}>
      <img src={image} alt="bannière" />
      {isHomeBanner && (
        <div>
          Chez vous, <br></br> partout et ailleurs
        </div>
      )}
    </div>
  );
}

export default Banner;
