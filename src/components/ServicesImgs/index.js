import React from "react";
import { ImgWrapper, Img } from "./ServicesImgElements";
import designImg from "../../images/servicesImgs/design.jpg";
import tatooingImg from "../../images/servicesImgs/tattoo.jpg";
import piercingImg from "../../images/servicesImgs/piercing.jpg";
import microdermalImg from "../../images/servicesImgs/microdermal.jpg";

const ServicesImgs = () => {
  return (
    <ImgWrapper>
      <Img src={designImg} alt="designImg" />
      <Img src={tatooingImg} alt="tatooingImg" />
      <Img src={piercingImg} alt="piercingImg" />
      <Img src={microdermalImg} alt="microdermalImage" />
    </ImgWrapper>
  );
};

export default ServicesImgs;
