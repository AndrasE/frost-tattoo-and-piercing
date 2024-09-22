import React, { useState, useEffect, useRef } from "react";
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
  IndicatorBtnsWrapper,
  IndicatorBtns,
  NextBtnWrapper,
  NextBtn,
  PrevBtnWrapper,
  PrevBtn,
} from "./TestimonialCarousel";
import { testimonialsData } from "./carouselData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useTranslation } from "react-i18next";

const TestimonialCarousel = () => {
  const testimonialRef = useRef(null); // Use a unique ref
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const splide = testimonialRef.current?.splide;
    if (splide) {
      splide.on("moved", (newIndex) => {
        setCurrentSlide(newIndex);
      });
    }

    return () => {
      if (splide) {
        splide.off("moved");
      }
    };
  }, []);

  const goToNextSlide = () => {
    const splide = testimonialRef.current?.splide;
    if (splide) {
      splide.go(">");
    }
  };

  const goToPrevSlide = () => {
    const splide = testimonialRef.current?.splide;
    if (splide) {
      splide.go("<");
    }
  };

  return (
    <CarouselContainer>
      <Splide
        ref={testimonialRef} // Use the specific ref here
        options={{
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          pagination: false,
        }}
        aria-label="Testimonial slider">
        {t("testimonial18.slides").map((item, index) => (
          <SplideSlide key={index}>
            <Card>
              <QuoteTop />
              <ReviewLink href={item.link} target="_blank">
                <CardHeader>
                  <ImgWrapper>
                    <Img src={item.src} alt="testimonial-image" />
                  </ImgWrapper>
                  <HeaderText>{item.name}</HeaderText>
                </CardHeader>
              </ReviewLink>
              <Hr />
              <CardContent>{item.review}</CardContent>
              <Hr />
              <CardRating>{item.rating}</CardRating>
              <QuoteButtom />
            </Card>
          </SplideSlide>
        ))}
      </Splide>

      {/* Next Button */}
      <NextBtnWrapper>
        <NextBtn onClick={goToNextSlide} />
      </NextBtnWrapper>

      {/* Previous Button */}
      <PrevBtnWrapper>
        <PrevBtn onClick={goToPrevSlide} />
      </PrevBtnWrapper>

      {/* Custom Indicators */}
      <IndicatorBtnsWrapper>
        {testimonialsData.map((_, index) => (
          <IndicatorBtns key={index} aria-label={currentSlide === index} />
        ))}
      </IndicatorBtnsWrapper>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
