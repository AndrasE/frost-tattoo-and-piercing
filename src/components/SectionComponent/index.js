import React from "react";
import {
  Container,
  Row,
  Column1,
  TextWrap,
  Column2,
  ImgWrap,
} from "./SectionElements";

const Section = ({ col1, col2 }) => {
  return (
    <>
      <Container id="about">
        <Row>
          <Column1>
            <TextWrap>{col1}</TextWrap>
          </Column1>
          <Column2>
            <ImgWrap>{col2}</ImgWrap>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Section;
