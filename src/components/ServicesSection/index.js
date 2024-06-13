import React from "react";
import {
  ServicesContainer,
  ServicesrWrapper,
  TitleRow,
  ServicesRow,
  CardWrap,
  Heading,
  Column1,
  Card,
  CardTitle,
  Column2,
  Img,
} from "./ServicesElements";
import designImg from "../../images/designImg.jpg";
import tatooingImg from "../../images/tatooingImg.jpg";
import exampleImg1 from "../../images/aboutImg.jpg";
import piercingImg from "../../images/piercingImg.jpg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <Heading>Services</Heading>

        <ServicesrWrapper>
          <ServicesRow>
            <Column1>
              <CardWrap>
                <Card>
                  <CardTitle>Design</CardTitle>
                  <Img src={designImg} alt="designImg" />
                </Card>
                <Card>
                  <CardTitle>Tattoo</CardTitle>
                  <Img src={tatooingImg} alt="tatooingImg" />
                </Card>
              </CardWrap>
            </Column1>

            <Column2>
              <CardWrap>
                <Card>
                  <CardTitle>Piercing</CardTitle>
                  <Img src={piercingImg} alt="piercingImg" />
                </Card>
                <Card>
                  <CardTitle>Microdermal</CardTitle>
                  <Img src={exampleImg1} alt="microdermalImage" />
                </Card>
              </CardWrap>
            </Column2>
          </ServicesRow>
        </ServicesrWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
