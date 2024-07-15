import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Download,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import { photos } from "./photosdata";

import { PhotoAlbum } from "react-photo-album";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
        componentsProps={{
          containerProps: {
            style: {
              marginTop: 80,
              maxWidth: 1200,
              marginInline: "auto",
              paddingLeft: 20,
              paddingRight: 20,
            },
          },
        }}
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails]}
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default Gallery;
