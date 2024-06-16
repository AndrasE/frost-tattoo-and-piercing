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
            <ImageCarousel />
            {/* <Column1>
              <TextWrap>
                <Heading>Gallery</Heading>
                <Content>
                  Our store has opened 8 years ago, myself have 12 years of
                  experiance. Our store has opened 8 years ago, myself have 12
                  years of experiance. Our store has opened 8 years ago, myself
                  have 12 years of experiance. Our store has opened 8 years ago,
                  myself.
                </Content>
              </TextWrap>
            </Column1>
            <Column2>
              <ImageCarousel />
            </Column2> */}
          </GalleryRow>
        </GalleryrWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
