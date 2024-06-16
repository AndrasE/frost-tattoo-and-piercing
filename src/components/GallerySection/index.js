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
} from "./GalleryElements";
import ImageCarousel from "../ImageCarousel";

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
              <ImageCarousel />
            </Column2>
          </GalleryRow>
        </GalleryrWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
