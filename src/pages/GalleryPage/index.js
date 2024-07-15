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
        layout="rows"
        photos={photos}
        componentsProps={{
          containerProps: {
            style: { marginTop: "80px", maxWidth: 1200, marginInline: "auto" },
          },
        }}
        rowConstraints={(containerWidth) => ({
          maxPhotos: containerWidth > 600 ? 4 : 2,
        })}
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
