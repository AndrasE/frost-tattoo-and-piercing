import React from "react";
import { GalleryContainer, ImgItemWrapper, Img } from "./GalleryPageElements";
import LightGallery from "lightgallery/react";
import asd1 from "../../images/galleryPageImgs/images/1.jpg";
import asd2 from "../../images/galleryPageImgs/images/2.jpg";
import asd3 from "../../images/galleryPageImgs/images/3.jpg";
import asd4 from "../../images/galleryPageImgs/images/4.jpg";

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
          <a className="gallery-item" href={asd1}>
            <div>
              <Img className="img-responsive" alt="img2" src={asd1} />
            </div>
          </a>
          <a className="gallery-item" href={asd2}>
            <div>
              <Img className="img-responsive" alt="img2" src={asd2} />
            </div>
          </a>
          <a className="gallery-item" href={asd3}>
            <div>
              <Img className="img-responsive" alt="img3" src={asd3} />
            </div>
          </a>
          <a className="gallery-item" href={asd4}>
            <div>
              <img className="img-responsive" alt="img2" src={asd4} />
            </div>
          </a>
        </LightGallery>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
