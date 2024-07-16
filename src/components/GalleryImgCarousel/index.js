import React, { useState } from "react";
import { slidesImages } from "./carouselData";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

import {
  CarouselContainer,
  AnimateFramerMotion,
  LeftArrow,
  RightArrow,
  IndicatorBtnsWrapper,
  IndicatorBtns,
  Motion,
} from "./CarouselElements";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const updateIndex = ({ currentIndex: current }) => setCurrentIndex(current);
  // const slideVariants = {
  //   hiddenRight: {
  //     x: "100%",
  //     opacity: 0,
  //   },
  //   hiddenLeft: {
  //     x: "-100%",
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: "0",
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0.9,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  // const handleNextSlide = () => {
  //   setDirection("right");
  //   setSlideIndex((prevIndex) =>
  //     prevIndex + 1 === slidesImages.length ? 0 : prevIndex + 1
  //   );
  // };
  // const handlePrevSlide = () => {
  //   setDirection("left");
  //   setSlideIndex((prevIndex) =>
  //     prevIndex - 1 < 0 ? slidesImages.length - 1 : prevIndex - 1
  //   );
  // };
  // const handleDotClick = (index) => {
  //   setDirection(index > slideIndex ? "right" : "left");
  //   setSlideIndex(index);
  // };

  return (
    <CarouselContainer>
      {/* <AnimateFramerMotion mode="wait">
        <Motion
          key={slideIndex}
          src={slidesImages[slideIndex].src}
          alt={slidesImages[slideIndex].alt}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          variants={slideVariants}
        />
      </AnimateFramerMotion>

      <LeftArrow onClick={handlePrevSlide} />
      <RightArrow onClick={handleNextSlide} />
      <IndicatorBtnsWrapper>
        {slidesImages.map((_, index) => {
          return (
            <IndicatorBtns
              key={index}
              aria-label={slideIndex === index}
              onClick={() => {
                handleDotClick(index);
              }}
            />
          );
        })}
      </IndicatorBtnsWrapper> */}

      <Lightbox
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
            <IndicatorBtns key={index} aria-label={index === currentIndex} />
          );
        })}
      </IndicatorBtnsWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
