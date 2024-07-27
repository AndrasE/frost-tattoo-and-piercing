import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import { slidesImages } from "./carouselData";
import "yet-another-react-lightbox/styles.css";

import {
  CarouselContainer,
  IndicatorBtnsWrapper,
  IndicatorBtns,
} from "./CarouselElements";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indicatorBtnIndex, setIndicatorBtnIndex] = useState(0);
  const updateIndex = ({ index: current }) => {
    setCurrentIndex(current);
    setIndicatorBtnIndex(current);
  };

  return (
    <CarouselContainer>
      <Lightbox
        styles={{ button: { padding: "0" } }}
        onClick={() => {
          console.log(currentIndex);
        }}
        index={currentIndex}
        slides={slidesImages}
        plugins={[Inline]}
        on={{
          view: updateIndex,
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            maxWidth: "400px",
            aspectRatio: "1 / 1",
            margin: "0 auto",
          },
        }}
      />
      <IndicatorBtnsWrapper>
        {slidesImages.map((_, index) => {
          return (
            <IndicatorBtns
              key={index}
              aria-label={index === indicatorBtnIndex}
            />
          );
        })}
      </IndicatorBtnsWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
