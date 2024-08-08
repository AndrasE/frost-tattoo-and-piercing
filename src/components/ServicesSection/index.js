import React, { useRef } from "react";
import {
  SectionWrapper,
  Container,
  Row,
  Column1,
  TextWrapper,
  Heading,
  Content,
  Column2,
  ImgWrapper,
  Img,
} from "./ServicesElements";
import designImg from "../../images/servicesImgs/design.jpg";
import tatooingImg from "../../images/servicesImgs/tattoo.jpg";
import piercingImg from "../../images/servicesImgs/piercing.jpg";
import microdermalImg from "../../images/servicesImgs/microdermal.jpg";
import { motion, useScroll } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id="services">
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
                <Heading>Services</Heading>
                <Content>
                  Our store has opened 8 years ago, myself have 12 years of
                  experiance. Our store has opened 8 years ago,ned 8 years ago,
                  myself.
                </Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={designImg} alt="designImg" />
                <Img src={tatooingImg} alt="tatooingImg" />
                <Img src={piercingImg} alt="piercingImg" />
                <Img src={microdermalImg} alt="microdermalImage" />
              </ImgWrapper>
            </Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
