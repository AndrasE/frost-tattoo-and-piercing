import React, { useState } from "react";
import {
  Container,
  Row,
  Column1,
  TextWrapper,
  Heading,
  Content,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
  Column2,
  CarouselWrapper,
  BtnLink,
} from "./GalleryElements";
import Carousel from "./Carousel";

const Gallery = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container id="gallery">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>Gallery</Heading>
              <Content>
                Feel free to check out some of my work. If you would like to see
                more head over to Gallery.
              </Content>
              <BtnWrapper>
                <BtnLink
                  to="gallery"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true">
                  More {hover ? <ArrowForward /> : <ArrowRight />}
                </BtnLink>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <CarouselWrapper>
              <Carousel />
            </CarouselWrapper>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
