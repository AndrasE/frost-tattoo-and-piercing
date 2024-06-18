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
  const [slide, setSlide] = useState(0);

  return (
    <CarouselWrapper>
      {carouselData.slides.map((item, index) => {
        return (
          <Img
            $slide={slide === index ? "slide" : "hidden"}
            src={item.src}
            alt={item.alt}
            key={index}
          />
        );
      })}
      <LeftArrow />
      <RightArrow />
      <IndicatorBtnsWrapper>
        {carouselData.slides.map((_, index) => {
          return (
            <IndicatorBtns
              key={index}
              onClick={() => {
                setSlide(1);
              }}
            />
          );
        })}
      </IndicatorBtnsWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
