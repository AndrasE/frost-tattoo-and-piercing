import React from "react";
import { ImgWrapper, Img } from "./ServicesImgElements";
import { servicesImages } from "./servicesImgsData";

const ServicesImgs = () => {
  return (
    <ImgWrapper>
      {servicesImages.map((item, index) => {
        return <Img src={item.src} alt={item.alt} key={index} />;
      })}
    </ImgWrapper>
  );
};

export default ServicesImgs;
