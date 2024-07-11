import React, { useState } from "react";

import GalleryContainer from "./GalleryPageElements";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Download,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import { slides } from "./slidesdata";

import PhotoAlbum from "react-photo-album";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={slides}
        targetHeight={180}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails]}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default Gallery;
