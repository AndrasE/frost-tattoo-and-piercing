import React, { useState } from "react";
import { slides } from "./carouselData";
import { motion, AnimatePresence } from "framer-motion";
import {
  CarouselWrapper,
  Img,
  LeftArrow,
  RightArrow,
  IndicatorBtnsWrapper,
  IndicatorBtns,
} from "./CarouselElements";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };
  const handleNextSlide = () => {
    setDirection("right");
    setSlideIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevSlide = () => {
    setDirection("left");
    setSlideIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setDirection(index > slideIndex ? "right" : "left");
    setSlideIndex(index);
  };

  return (
    <CarouselWrapper>
      <AnimatePresence>
        <motion.img
          key={slideIndex}
          src={slides[slideIndex].src}
          alt={slides[slideIndex].alt}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          variants={slideVariants}
        />
      </AnimatePresence>
      <LeftArrow onClick={handlePrevSlide} />
      <RightArrow onClick={handleNextSlide} />

      {/* <IndicatorBtnsWrapper>
        {slides.map((_, index) => {
          return (
            <IndicatorBtns
              key={index}
              aria-label={slideIndex === index}
              onClick={() => {
                setSlideIndex(index);
              }}
            />
          );
        })}
      </IndicatorBtnsWrapper> */}
    </CarouselWrapper>
  );
};

export default Carousel;
