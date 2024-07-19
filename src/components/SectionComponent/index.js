import React from "react";
import {
  Container,
  Row,
  Column1,
  TextWrapper,
  Column2,
  ImgWrapper,
  Img,
} from "./SectionElements";

const Section = ({ col1, col2 }) => {
  return (
    <>
      <Container id="about">
        <Row>
          <Column1>
            <TextWrapper>{col1}</TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>{col2}</ImgWrapper>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Section;
