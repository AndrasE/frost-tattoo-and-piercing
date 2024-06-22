import React, { useState } from "react";
import {
  GalleryContainer,
  GalleryrWrapper,
  GalleryRow,
  Column1,
  TextWrap,
  Heading,
  Content,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
  Column2,
  CarouselWrapper,
  GalleryBtnLink,
} from "./GalleryElements";
import ImageCarousel from "../GalleryImgCarousel";

const Gallery = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <GalleryContainer id="gallery">
        <GalleryrWrapper>
          <GalleryRow>
            <Column1>
              <TextWrap>
                <Heading>Gallery</Heading>
                <Content>
                  Feel free to check out some of my work. If you would like to
                  see more head over to Gallery.
                </Content>
                <BtnWrapper>
                  <GalleryBtnLink
                    to="gallery"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    More {hover ? <ArrowForward /> : <ArrowRight />}
                  </GalleryBtnLink>
                </BtnWrapper>
              </TextWrap>
            </Column1>
            <Column2>
              <CarouselWrapper>
                <ImageCarousel />
              </CarouselWrapper>
            </Column2>
          </GalleryRow>
        </GalleryrWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
