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
  CarouselWrapper,
} from "./TestimonialsElements";
import TestimonialCarousel from "./Carousel";
import { motion, useScroll } from "framer-motion";

const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id="testimonials">
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
                <Heading>Testimonials</Heading>
                <Content>
                  Swipe through some on the reviews left on Google and Facebook.
                </Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <CarouselWrapper>
                <TestimonialCarousel />
              </CarouselWrapper>
            </Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Testimonials;
