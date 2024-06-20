import React, { useState } from "react";
import { slides } from "./carouselData";
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

  const nextSlide = () => {
    console.log(slides.length);
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <CarouselWrapper>
      {slides.map((item, index) => {
        return (
          <Img
            aria-hidden={slide !== index}
            src={item.src}
            alt={item.alt}
            key={index}
          />
        );
      })}
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      <IndicatorBtnsWrapper>
        {slides.map((_, index) => {
          return (
            <IndicatorBtns
              key={index}
              aria-label={slide === index}
              onClick={() => {
                setSlide(index);
              }}
            />
          );
        })}
      </IndicatorBtnsWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
