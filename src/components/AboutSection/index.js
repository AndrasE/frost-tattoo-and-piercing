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
} from "./AboutElements";
import AboutImage from "../../images/aboutImg/aboutImg.jpg";
import { motion, useScroll } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id="about">
      <motion.div
        ref={ref} // Ref is used internally
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}>
        <Container>
          <Row>
            <Column1>
              <TextWrapper>
                <Heading>About</Heading>
                <Content>
                  Our store has opened 8 years ago, myself have 12 years of
                  years ago, myself hdasdas adasdasdave 12 re has opened 8 years
                  ago, myself.
                </Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={AboutImage} alt="aboutImage" />
              </ImgWrapper>
            </Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
