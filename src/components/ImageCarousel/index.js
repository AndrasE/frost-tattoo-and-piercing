import React from "react";
import carouselData from "./carouselData.json";
import { Img } from "./CarouselElements";

const Carousel = () => {
  return (
    <div>
      {carouselData.slides.map((item, index) => {
        return <Img src={item.src} alt={item.alt} key={item.index} />;
      })}
    </div>
  );
};

export default Carousel;
