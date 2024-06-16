import React from "react";
import carouselData from "./carouselData.json";
import { Img, ButtonIndicator } from "./CarouselElements";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = () => {
  return (
    <div>
      <BsArrowLeftCircleFill />
      {carouselData.slides.map((item, index) => {
        return <Img src={item.src} alt={item.alt} key={item.index} />;
      })}
      <BsArrowRightCircleFill />
      {carouselData.slides.map((_, index) => {
        return <ButtonIndicator key={index} onClick={null} />;
      })}
    </div>
  );
};

export default Carousel;
