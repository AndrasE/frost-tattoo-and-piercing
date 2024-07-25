import React from "react";
import {
  Card,
  QuoteTop,
  ImgWrapper,
  Img,
  HeaderText,
  Hr,
  CardHeader,
  CardRating,
  CardContent,
  QuoteButtom,
} from "./CarouselElements";
import { testimonialsData } from "./carouselData";

const Testical = () => {
  return (
    <Card>
      <QuoteTop />
      <CardHeader>
        <ImgWrapper>
          <Img src={testimonialsData[0].src} />
        </ImgWrapper>
        <HeaderText>{testimonialsData[0].name}</HeaderText>
      </CardHeader>
      <Hr />
      <CardContent>{testimonialsData[0].review}</CardContent>
      <Hr />
      <CardRating>{testimonialsData[0].rating}</CardRating>
      <QuoteButtom />
    </Card>
  );
};

export default Testical;
