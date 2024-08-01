import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import styles from "./splideCssOverwrite.css";
import {
  CarouselContainer,
  Card,
  QuoteTop,
  QuoteButtom,
  ReviewLink,
  CardHeader,
  Hr,
  ImgWrapper,
  Img,
  HeaderText,
  CardContent,
  CardRating,
  Asd,
} from "./CarouselElements";
import { testimonialsData } from "./carouselData";

const TestimonialCarousel = () => {
  return (
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
              <Asd>
                <ReviewLink href={item.link} target="_blank">
                  <CardHeader>
                    <ImgWrapper>
                      <Img src={item.src} alt={item.alt} />
                    </ImgWrapper>
                    <HeaderText>{item.name}</HeaderText>
                  </CardHeader>
                </ReviewLink>
                <Hr />
                <CardContent>{item.review}</CardContent>
                <Hr />
                <CardRating>{item.rating}</CardRating>
              </Asd>
              <QuoteButtom />
            </Card>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default TestimonialCarousel;
