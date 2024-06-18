import React from "react";
import carouselData from "./carouselData.json";
import {
  CarouselWrapper,
  Img,
  LeftArrow,
  RightArrow,
  IndicatorBtnsWrapper,
  IndicatorBtns,
} from "./CarouselElements";

const Carousel = () => {
  return (
    <CarouselWrapper>
      <LeftArrow />
      {carouselData.slides.map((item, index) => {
        return <Img src={item.src} alt={item.alt} key={index} />;
      })}
      <RightArrow />
      <IndicatorBtnsWrapper>
        {carouselData.slides.map((_, index) => {
          return <IndicatorBtns key={index} onClick={null} />;
        })}
      </IndicatorBtnsWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
