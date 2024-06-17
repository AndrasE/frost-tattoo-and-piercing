import React from "react";
import carouselData from "./carouselData.json";
import {
  CarouselWrapper,
  Img,
  LeftArrow,
  RightArrow,
  ButtonIndicator,
} from "./CarouselElements";

const Carousel = () => {
  return (
    <div>
      <LeftArrow />
      <CarouselWrapper>
        {carouselData.slides.map((item, index) => {
          return <Img src={item.src} alt={item.alt} key={item.index} />;
        })}
      </CarouselWrapper>
      <RightArrow />
      {carouselData.slides.map((_, index) => {
        return <ButtonIndicator key={index} onClick={null} />;
      })}
    </div>
  );
};

export default Carousel;
