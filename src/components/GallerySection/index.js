import React from "react";
import {
  GalleryContainer,
  GalleryrWrapper,
  GalleryTitleRow,
  GalleryImgRow,
  Heading,
  ImgTitle,
  Img,
} from "./GalleryElements";
import designImg from "../../images/designImg.jpg";
import tatooingImg from "../../images/tatooingImg.jpg";
import exampleImg1 from "../../images/aboutImg.jpg";
import piercingImg from "../../images/piercingImg.jpg";

const Gallery = () => {
  return (
    <>
      <GalleryContainer id="gallery">
        <GalleryrWrapper>
          <GalleryTitleRow>
            <Heading>Gallery</Heading>
          </GalleryTitleRow>
          <GalleryImgRow>
            <ImgTitle>Design</ImgTitle>
            <Img src={designImg} alt="designImg" />
            <ImgTitle>Tattoo</ImgTitle>
            <Img src={tatooingImg} alt="tatooingImg" />
          </GalleryImgRow>
          <GalleryImgRow>
            <ImgTitle>Piercing</ImgTitle>
            <Img src={piercingImg} alt="piercingImg" />
            <ImgTitle>Microdermal</ImgTitle>
            <Img src={exampleImg1} alt="microdermalImage" />
          </GalleryImgRow>
        </GalleryrWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
