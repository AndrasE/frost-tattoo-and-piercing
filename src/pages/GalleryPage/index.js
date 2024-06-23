import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="img/img1.jpg">
          <img alt="img1" src="img/thumb1.jpg" />
        </a>
        <a href="img/img2.jpg">
          <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ...
      </LightGallery>
    </div>
  );
};

export default Gallery;
