import React from "react";
import {
  Container,
  Row,
  Column1,
  TextWrapper,
  Heading,
  Content,
  Column2,
  ImgWrapper,
  Img,
} from "./ServicesElements";
import designImg from "../../images/servicesImgs/design.jpg";
import tatooingImg from "../../images/servicesImgs/tattoo.jpg";
import piercingImg from "../../images/servicesImgs/piercing.jpg";
import microdermalImg from "../../images/servicesImgs/microdermal.jpg";

const Services = () => {
  return (
    <>
      <Container id="services">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>Services</Heading>
              <Content>
                Our store has opened 8 years ago, myself have 12 years of
                experiance. Our store has opened 8 years ago,ned 8 years ago,
                myself.
              </Content>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={designImg} alt="designImg" />
              <Img src={tatooingImg} alt="tatooingImg" />
              <Img src={piercingImg} alt="piercingImg" />
              <Img src={microdermalImg} alt="microdermalImage" />
            </ImgWrapper>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Services;
