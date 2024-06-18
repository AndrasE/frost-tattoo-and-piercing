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
  const [$isVisable, setIsVisiable] = useState(false);

  return (
    <CarouselWrapper>
      <LeftArrow />
      {carouselData.slides.map((item, index) => {
        return (
          <Img
            $isVisable={$isVisable}
            src={item.src}
            alt={item.alt}
            key={index}
          />
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
