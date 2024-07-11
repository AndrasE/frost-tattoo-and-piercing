import React, { useState } from "react";

import { GalleryContainer } from "./GalleryPageElements";
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
      {/* <GalleryContainer> */}
      <PhotoAlbum
        breakpoints={[300, 600, 1200]}
        layout="masonry"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails]}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
      {/* </GalleryContainer> */}
    </>
  );
};

export default Gallery;
