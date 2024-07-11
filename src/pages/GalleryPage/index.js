import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryContainer, Img } from "./GalleryPageElements";
import asd1 from "../../images/galleryPageImgs/images/1.jpg";
import asd2 from "../../images/galleryPageImgs/images/2.jpg";
import asd3 from "../../images/galleryPageImgs/images/3.jpg";
import asd4 from "../../images/galleryPageImgs/images/4.jpg";

const Gallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: { src: asd1 },
            alt: "image 1",

            srcSet: [{ src: asd1 }],
          },
          // ...
        ]}
      />
    </>
  );
};

export default Gallery;
