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
} from "./SectionElements";
import { motion, useScroll } from "framer-motion";

const Section = ({ Id, reversed, Col2 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id={Id}>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}>
        <Container>
          <Row reversed={reversed}>
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
            <Column2>{Col2}</Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Section;
