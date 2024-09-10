import React, { useState } from "react";
import PagesNavbar from "../PagesNavbar";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styles from "../../themes/lightboxCssOverwrite.css";
import {
  Download,
  Fullscreen,
  Slideshow,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import { photos } from "./photosData";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);
  /* eslint-disable no-unused-vars */
  const [autoplay, setAutoplay] = useState(false);
  /* eslint-enable no-unused-vars */

  const renderPhoto = ({ imageProps: { alt, style, ...restImageProps } }) => (
    <img
      alt={alt}
      style={{ ...style, width: "100%", borderRadius: 3 }}
      {...restImageProps}
    />
  );

  return (
    <>
      <PagesNavbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
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
          styles={styles}
          renderPhoto={renderPhoto}
          photos={photos}
          onClick={({ index: current }) => setIndex(current)}
        />
      </motion.div>

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

export default GalleryPage;
