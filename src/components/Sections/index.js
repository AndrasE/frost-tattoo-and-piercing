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
  BtnLink,
  ArrowRight,
  ArrowRightDouble,
  Column2,
} from "./SectionElements";
import { motion, useScroll } from "framer-motion";

const Section = ({ id, col2, reversed, btnTo, btnLabel }) => {
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
    <SectionWrapper id={id}>
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
                {btnLabel && (
                  <BtnWrapper>
                    <BtnLink
                      to={btnTo}
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}>
                      {btnLabel} {hover ? <ArrowRightDouble /> : <ArrowRight />}
                    </BtnLink>
                  </BtnWrapper>
                )}
              </TextWrapper>
            </Column1>
            <Column2>{col2}</Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Section;
