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
  console.log(carouselData.slides[0]);

  function da() {
    setSlide(2);
  }

  return (
    <>
      <CarouselWrapper>
        {/* {carouselData.slides.map((item, index) => { */}
        {/* return  */}
        <LeftArrow />
        <Img
          src={carouselData.slides[slide].src}
          alt={carouselData.slides[slide].alt}
        />
        <RightArrow />;{/* })} */}
        <IndicatorBtnsWrapper>
          {carouselData.slides.map((_, index) => {
            return <IndicatorBtns key={index} onClick={da} />;
          })}
        </IndicatorBtnsWrapper>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
