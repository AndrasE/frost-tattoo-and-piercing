import React from "react";
import {
  AboutContainer,
  AboutrWrapper,
  AboutRow,
  Column1,
  TextWrap,
  Heading,
  Content,
  Column2,
  ImgWrap,
  Img,
} from "./AboutElements";
import AboutImage from "../../images/aboutImg.jpg";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutrWrapper>
          <AboutRow>
            <Column1>
              <TextWrap>
                <Heading>About</Heading>
                <Content>
                  Our store has opened 8 years ago, myself have 12 years of
                  experiance. Our store has opened 8 years ago, myself have 12
                  years of experiance. Our store has opened 8 years ago, myself
                  have 12 years of experiance. Our store has opened 8 years ago,
                  myself.
                </Content>
              </TextWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={AboutImage} alt="aboutImage" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutrWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
