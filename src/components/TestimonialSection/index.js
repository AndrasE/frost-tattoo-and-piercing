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
} from "./TestimonialsElements";
import TestimonialCarousel from "./Carousel";

const Testimonials = () => {
  return (
    <>
      <Container id="testimonials">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>Testimonials</Heading>
              <Content>
                Swipe through some on the reviews left on Google and Facebook.
              </Content>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <TestimonialCarousel />
            </ImgWrapper>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Testimonials;
