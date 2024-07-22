import React, { useState } from "react";
import { testimonialsData } from "./carouselData";

import { CarouselWrapper, IndicatorBtns, Card, Img } from "./CarouselElements";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  return (
    <CarouselWrapper>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
        {testimonialsData.map((item, index) => {
          return <Img src={item.src} alt={item.alt} key={item.index} />;
        })}
      </Carousel>

      {/* <LeftArrow />
      <RightArrow />
      <IndicatorBtnsWrapper>
        {testimonialsData.map((_, index) => {
          return (
            <IndicatorBtns key={index} aria-label={slideIndex === index} />
          );
        })}
      </IndicatorBtnsWrapper> */}
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;
