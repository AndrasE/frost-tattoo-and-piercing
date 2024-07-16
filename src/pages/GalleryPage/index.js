import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Download,
  Fullscreen,
  Slideshow,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import { photos } from "./photosData";

import { PhotoAlbum } from "react-photo-album";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [autoplay, setAutoplay] = useState(false);

  const renderPhoto = ({ imageProps: { alt, style, ...restImageProps } }) => (
    <img
      alt={alt}
      style={{ ...style, width: "100%", borderRadius: 3 }}
      {...restImageProps}
    />
  );

  return (
    <>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 500) return 2;
          if (containerWidth < 900) return 3;
          return 4;
        }}
        componentsProps={{
          containerProps: {
            style: {
              marginTop: 80,
              maxWidth: 1000,
              marginInline: "auto",
              paddingLeft: 20,
              paddingRight: 20,
            },
          },
        }}
        renderPhoto={renderPhoto}
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails, Slideshow]}
        index={index}
        slides={photos}
        open={index >= 0}
        slideshow={{ autoplay, delay: 2000 }}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default Gallery;
