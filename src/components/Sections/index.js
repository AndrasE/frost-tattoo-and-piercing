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

const Section = ({
  id,
  col1,
  col2,
  reversed,
  btnTo,
  btnLabel,
  openInNewTab,
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.2", "0.65 1"],
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
                <Heading reversed={reversed}>{col1.heading}</Heading>
                <Content>{col1.content}</Content>
                {btnLabel && (
                  <BtnWrapper>
                    <BtnLink
                      aria-label={`link to ${btnLabel}`}
                      to={btnTo}
                      target={openInNewTab ? "_blank" : "_self"}
                      rel={openInNewTab ? "noopener noreferrer" : ""}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
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
