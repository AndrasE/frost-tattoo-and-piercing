import React from "react";
import {
  ServicesContainer,
  ServicesrWrapper,
  ServicesRow,
  Column1,
  TextWrap,
  Heading,
  Content,
  Column2,
  ImgWrap,
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
          <Heading>Services</Heading>
          <ServicesRow>
            <ImgWrap>
              <Column1>
                <Img src={designImg} alt="designImg" />
                <Img src={tatooingImg} alt="tatooingImg" />
              </Column1>
            </ImgWrap>
            <Column2>
              <ImgWrap>
                <Img src={piercingImg} alt="piercingImg" />
                <Img src={exampleImg1} alt="ServicesImage" />
              </ImgWrap>
            </Column2>
          </ServicesRow>
        </ServicesrWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
