import React from "react";
import { testimonialsData } from "./carouselData";

import {
  CarouselContainer,
  Card,
  QuoteTop,
  CardHeader,
  Hr,
  ImgWrapper,
  Img,
  HeaderText,
  CardContent,
  CardRating,
  QuoteButtom,
} from "./CarouselElements";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const TestimonialCarousel = () => {
  return (
    <CarouselContainer>
      <Splide>
        {testimonialsData.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <Card>
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
            </SplideSlide>
          );
        })}
      </Splide>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
