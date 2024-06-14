import React from "react";
import {
  ServicesContainer,
  ServicesrWrapper,
  ServicesTitleRow,
  ServicesImgRow,
  Heading,
  ImgTitle,
  Img,
} from "./ServicesElements";
import designImg from "../../images/designImg.jpg";
import tatooingImg from "../../images/tatooingImg.jpg";
import exampleImg1 from "../../images/aboutImg.jpg";
import piercingImg from "../../images/piercingImg.jpg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesrWrapper>
          <ServicesTitleRow>
            <Heading>Services</Heading>
          </ServicesTitleRow>
          <ServicesImgRow>
            <ImgTitle>Design</ImgTitle>
            <Img src={designImg} alt="designImg" />
            <ImgTitle>Tattoo</ImgTitle>
            <Img src={tatooingImg} alt="tatooingImg" />
          </ServicesImgRow>
          <ServicesImgRow>
            <ImgTitle>Piercing</ImgTitle>
            <Img src={piercingImg} alt="piercingImg" />
            <ImgTitle>Microdermal</ImgTitle>
            <Img src={exampleImg1} alt="microdermalImage" />
          </ServicesImgRow>
        </ServicesrWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
