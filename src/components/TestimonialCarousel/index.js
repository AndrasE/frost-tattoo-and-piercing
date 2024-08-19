import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import styles from "../../themes/splideCssOverwrite.css";
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
  ContentWrapper,
} from "./TestimonialCarousel";
import { testimonialsData } from "./carouselData";

const TestimonialCarousel = () => {
  return (
    <CarouselContainer>
      <Splide
        styles={styles}
        options={{
          rewind: true,
          rewindByDrag: true,
        }}>
        {testimonialsData.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <Card>
                <QuoteTop />
                <ContentWrapper>
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
                </ContentWrapper>
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
