import React, { useState } from "react";
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
  const [$slide, setSlide] = useState(0);

  return (
    <CarouselWrapper>
      <LeftArrow />
      {carouselData.slides.map((item, index) => {
        return (
          <Img $slide={$slide} src={item.src} alt={item.alt} key={index} />
        );
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
