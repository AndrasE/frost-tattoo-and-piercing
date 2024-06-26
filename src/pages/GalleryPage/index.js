import React from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import asd2 from "../../images/galleryPageImgs/images/1.jpg";
import asd from "../../images/galleryPageImgs/thumbnails/1.jpg";
import lgAutoplay from "lightgallery/plugins/autoplay";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "../GalleryPage/lightGallery.css";

const Gallery = () => {
  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgAutoplay, lgThumbnail]}
        mode="lg-fade"
        lgAuto>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        <a href={asd2}>
          <img alt="img1" src={asd} />
        </a>
        {/* <a href="img/img2.jpg">
          <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ... */}
      </LightGallery>
    </>
  );
};

export default Gallery;
