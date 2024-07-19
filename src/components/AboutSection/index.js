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
} from "./AboutElements";
import AboutImage from "../../images/aboutImg/aboutImg.jpg";

const About = () => {
  return (
    <>
      <Container id="about">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>About</Heading>
              <Content>
                Our store has opened 8 years ago, myself have 12 years of
                experiance. Our sasdasdasdasda adasdac adada tore has opened 8
                years ago, myself hdasdas adasdasdave 12 re has opened 8 years
                ago, myself.
              </Content>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={AboutImage} alt="aboutImage" />
            </ImgWrapper>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default About;
