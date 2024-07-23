import React, { useState } from "react";
import { testimonialsData } from "./carouselData";

import {
  CarouselWrapper,
  Card,
  CardHeader,
  Img,
  HeaderText,
  CardRating,
  CardContent,
} from "./CarouselElements";
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
        autoPlay={false}
        interval={6100}>
        {testimonialsData.map((item, index) => {
          return (
            <Card>
              <CardHeader>
                <Img src={item.src} alt={item.alt} key={item.index} />
                <HeaderText>{item.name}</HeaderText>
              </CardHeader>

              <CardContent>{item.review}</CardContent>
              <CardRating>{item.rating}</CardRating>
            </Card>
          );
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
