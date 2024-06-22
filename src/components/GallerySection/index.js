import React from "react";
import {
  GalleryContainer,
  GalleryrWrapper,
  GalleryRow,
  Column1,
  TextWrap,
  Heading,
  Content,
  Column2,
  CarouselWrapper,
} from "./GalleryElements";
import ImageCarousel from "../GalleryImgCarousel";

const Gallery = () => {
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
