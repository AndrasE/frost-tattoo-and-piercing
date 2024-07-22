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
} from "./TestimonialsElements";
import AboutImage from "../../images/aboutImg/aboutImg.jpg";

const Testimonials = () => {
  return (
    <>
      <Container id="testimonials">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>Testimonials</Heading>
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

export default Testimonials;
