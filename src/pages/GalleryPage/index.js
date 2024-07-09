import React from "react";
import { GalleryContainer, ImgItemWrapper, Img } from "./GalleryPageElements";
import LightGallery from "lightgallery/react";
// import asd2 from "../../images/galleryPageImgs/images/1.jpg";
import asd from "../../images/galleryPageImgs/thumbnails/1.jpg";

// lightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "../GalleryPage/lightGallery.css";
// lightGallery plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgAutoplay from "lightgallery/plugins/autoplay";

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <LightGallery
          plugins={[lgZoom, lgAutoplay, lgThumbnail]}
          mode="lg-fade"
          lgAuto>
          <ImgItemWrapper>
            <a className="gallery-item" data-src={asd}>
              <Img
                alt="layers of blue."
                className="img-responsive"
                src="https://unsplash.it/680/420?random"
              />
            </a>
          </ImgItemWrapper>
          <ImgItemWrapper>
            <a
              className="gallery-item"
              data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
              <Img
                className="img-responsive"
                src="https://unsplash.it/740/480?random"
              />
            </a>
          </ImgItemWrapper>
          <ImgItemWrapper>
            <a
              className="gallery-item"
              data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
              <Img
                className="img-responsive"
                src="https://unsplash.it/500/680?random"
              />
            </a>
          </ImgItemWrapper>
          <ImgItemWrapper>
            <a
              className="gallery-item"
              data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
              <Img
                alt="layers of blue."
                className="img-responsive"
                src="https://unsplash.it/680/420?random"
              />
            </a>
          </ImgItemWrapper>
          <ImgItemWrapper>
            <a
              className="gallery-item"
              data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
              <Img
                className="img-responsive"
                src="https://unsplash.it/740/480?random"
              />
            </a>
          </ImgItemWrapper>
          <ImgItemWrapper>
            <a
              className="gallery-item"
              data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
              <Img
                className="img-responsive"
                src="https://unsplash.it/500/680?random"
              />
            </a>
          </ImgItemWrapper>
          {/* <a href="img/img2.jpg">
          <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ... */}
        </LightGallery>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
