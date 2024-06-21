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
  const nextSlide = () => {
    setDirection("right");
    setSlideIndex(slideIndex === slideIndex.length - 1 ? 0 : slideIndex + 1);
  };
  const prevSlide = () => {
    setDirection("left");
    setSlideIndex(slideIndex === 0 ? slideIndex.length - 1 : slideIndex - 1);
  };

  return (
    <CarouselWrapper>
      <AnimatePresence>
        <motion.img
          key={slideIndex}
          src={slides[slideIndex].src}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          variants={slideVariants}
          alt={slides[slideIndex].alt}
        />
        {/* <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={prevSlide}>
          
          <LeftArrow onClick={prevSlide} />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={nextSlide}></motion.div>
        </div> */}
        {/* 
        {slides.map((item, index) => {
          return (
            <Img
              aria-hidden={slideIndex !== index}
              src={item.src}
              alt={item.alt}
              key={index}
            />
          );
        })} */}
      </AnimatePresence>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
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
