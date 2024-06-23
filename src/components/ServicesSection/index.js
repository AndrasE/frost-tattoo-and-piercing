import React from "react";
import {
  ServicesContainer,
  ServicesRow,
  Column1,
  TextWrap,
  Heading,
  Content,
  Column2,
  ImgWrap,
  Img,
} from "./ServicesElements";
import designImg from "../../images/servicesImgs/design.jpg";
import tatooingImg from "../../images/servicesImgs/tattoo.jpg";
import piercingImg from "../../images/servicesImgs/piercing.jpg";
import microdermalImg from "../../images/servicesImgs/microdermal.jpg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesRow>
          <Column1>
            <TextWrap>
              <Heading>Services</Heading>
              <Content>
                Our store has opened 8 years ago, myself have 12 years of
                experiance. Our store has opened 8 years ago, myself have 12
                years of experiance. Our store has opened 8 years ago, myself
                nce. Our store has opened 8 years ago, myself.
              </Content>
            </TextWrap>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={designImg} alt="designImg" />
              <Img src={tatooingImg} alt="tatooingImg" />
              <Img src={piercingImg} alt="piercingImg" />
              <Img src={microdermalImg} alt="microdermalImage" />
            </ImgWrap>
          </Column2>
        </ServicesRow>
      </ServicesContainer>
    </>
  );
};

export default Services;
