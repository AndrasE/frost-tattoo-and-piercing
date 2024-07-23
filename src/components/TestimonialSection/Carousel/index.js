import React, { useState } from "react";
import { testimonialsData } from "./carouselData";

import {
  CarouselContainer,
  Card,
  CardHeader,
  ImgWrapper,
  Img,
  HeaderText,
  CardRating,
  CardContent,
  Hr,
  QuoteTop,
  QuoteButtom,
} from "./CarouselElements";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  return (
    <CarouselContainer>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}>
        {testimonialsData.map((item, index) => {
          return (
            <Card key={item.index}>
              <QuoteTop />
              <CardHeader>
                <ImgWrapper>
                  <Img src={item.src} alt={item.alt} />
                </ImgWrapper>
                <HeaderText>{item.name}</HeaderText>
              </CardHeader>
              <Hr />
              <CardContent>{item.review}</CardContent>
              <Hr />
              <CardRating>{item.rating}</CardRating>
              <QuoteButtom />
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
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
