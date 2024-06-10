import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InforWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InforWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>topline</TopLine>
                <Heading>heading</Heading>
                <SubTitle>subtitle</SubTitle>
                <BtnWrap>
                  <Button to="home">button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InforWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
