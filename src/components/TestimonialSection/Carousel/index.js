import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import styles from "./splideCssOverwrite.css";
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
import { testimonialsData } from "./carouselData";

const TestimonialCarousel = () => {
  return (
    <CarouselContainer>
      <Splide
        styles={styles}
        options={{
          rewind: true,
        }}>
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
