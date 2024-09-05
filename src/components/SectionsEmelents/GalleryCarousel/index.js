import React, { useState, useEffect, useRef } from "react";
import {
  CarouselContainer,
  Img,
  IndicatorBtnsWrapper,
  IndicatorBtns,
  NextBtnWrapper,
  NextBtn,
  PrevBtnWrapper,
  PrevBtn,
} from "./GalleryCarouselElements";
import { slidesImages } from "./carouselData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const GalleryCarousel = () => {
  const galleryRef = useRef(null); // Use a unique ref
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const splide = galleryRef.current?.splide;
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
    const splide = galleryRef.current?.splide;
    if (splide) {
      splide.go(">");
    }
  };

  const goToPrevSlide = () => {
    const splide = galleryRef.current?.splide;
    if (splide) {
      splide.go("<");
    }
  };

  return (
    <CarouselContainer>
      <Splide
        ref={galleryRef} // Use the specific ref here
        options={{
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          pagination: false,
        }}
        aria-label="Example images of the Gallery Page">
        {slidesImages.map((item, index) => (
          <SplideSlide key={index}>
            <Img src={item.src} alt={item.alt} />
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
        {slidesImages.map((_, index) => (
          <IndicatorBtns key={index} aria-label={currentSlide === index} />
        ))}
      </IndicatorBtnsWrapper>
    </CarouselContainer>
  );
};

export default GalleryCarousel;
