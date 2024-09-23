import React from "react";
import { ImgWrapper, Img } from "./BookingImgElements";
import AboutImage from "../../../images/aboutImg/aboutImg.jpg";

const BookingImg = () => {
  return (
    <ImgWrapper>
      <Img src={AboutImage} alt="aboutImage" />
    </ImgWrapper>
  );
};

export default BookingImg;
