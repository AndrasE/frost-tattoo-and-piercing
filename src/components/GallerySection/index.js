import React, { useRef, useState } from "react";
import {
  SectionWrapper,
  Container,
  Row,
  Column1,
  TextWrapper,
  Heading,
  Content,
  BtnWrapper,
  ArrowRight,
  ArrowRightDouble,
  Column2,
  CarouselWrapper,
  BtnLink,
} from "./GalleryElements";
import Carousel from "./Carousel";
import { motion, useScroll } from "framer-motion";

const Gallery = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id="gallery">
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}>
        <Container>
          <Row>
            <Column1>
              <TextWrapper>
                <Heading>Gallery</Heading>
                <Content>
                  Feel free to check out some of my work. If you would like to
                  see more head over to Gallery.
                </Content>
                <BtnWrapper>
                  <BtnLink
                    to="gallery"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}>
                    More {hover ? <ArrowRightDouble /> : <ArrowRight />}
                  </BtnLink>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <CarouselWrapper>
                <Carousel />
              </CarouselWrapper>
            </Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Gallery;
