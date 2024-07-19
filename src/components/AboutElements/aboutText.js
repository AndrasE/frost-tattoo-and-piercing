import React from "react";
import {
  AboutContainer,
  TextWrap,
  Heading,
  Content,
} from "./AboutTextElements";

const AboutText = () => {
  return (
    <>
      <AboutContainer id="about">
        <TextWrap>
          <Heading>About</Heading>
          <Content>
            Our store has opened 8 years ago, myself have 12 years of
            experiance. Our store has opened 8 years ago, myself have . Our
            store has opened 8 years ago, myself.
          </Content>
        </TextWrap>
      </AboutContainer>
    </>
  );
};

export default AboutText;
