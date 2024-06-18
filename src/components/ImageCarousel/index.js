import React, { useState } from "react";
import carouselData from "./carouselData.json";
import {
  CarouselWrapper,
  ImgWrapper,
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
      <ImgWrapper>
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
      </ImgWrapper>
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
      <LeftArrow />
      <RightArrow />
    </CarouselWrapper>
  );
};

export default Carousel;
