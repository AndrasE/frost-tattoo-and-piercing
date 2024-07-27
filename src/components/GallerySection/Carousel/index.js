import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import styles from "../Carousel/splideCssOverwrite.css";
import { CarouselContainer, Img } from "./CarouselElements";
import { slidesImages } from "./carouselData";

const Carousel = () => {
  return (
    <CarouselContainer>
      <Splide
        styles={styles}
        options={{
          rewind: true,
        }}>
        {slidesImages.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <Img src={item.src} alt={item.alt} />
            </SplideSlide>
          );
        })}
      </Splide>
    </CarouselContainer>
  );
};

export default Carousel;
