import React from "react";
import { ImgWrapper, Img } from "./AboutImgElements";
import AboutImage from "../../../images/aboutImg/aboutImg.jpg";

const AboutImg = () => {
  return (
    <ImgWrapper>
      <Img src={AboutImage} alt="aboutImage" />
    </ImgWrapper>
  );
};

export default AboutImg;
