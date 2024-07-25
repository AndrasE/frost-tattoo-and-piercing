import React, { useState } from "react";
import { testimonialsData } from "./carouselData";
import { Lightbox, useLightboxState } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import {
  CarouselContainer,
  Card,
  QuoteTop,
  CardHeader,
  Hr,
  ImgWrapper,
  Img,
  HeaderText,
  CardContent,
  CardRating,
  QuoteButtom,
} from "./CarouselElements";

import "@splidejs/splide/css";
import Testical from "./test";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indicatorBtnIndex, setIndicatorBtnIndex] = useState(0);

  const updateIndex = ({ index: current }) => {
    setCurrentIndex(current);
    setIndicatorBtnIndex(current);
  };

  //  const slides= [
  //    {testimonialsData.map((item, index) => {
  //   return (

  //       <Card>
  //         <QuoteTop />
  //         <CardHeader>
  //           <ImgWrapper>
  //             <Img src={item.src} alt={item.alt} />
  //           </ImgWrapper>
  //           <HeaderText>{item.name}</HeaderText>
  //         </CardHeader>
  //         <Hr />
  //         <CardContent>{item.review}</CardContent>
  //         <Hr />
  //         <CardRating>{item.rating}</CardRating>
  //         <QuoteButtom />
  //       </Card>

  //   );
  // })}

  // }

  return (
    <CarouselContainer>
      {/*
        {testimonialsData.map((item, index) => {
          return (
              <Card>
                <QuoteTop />
                <CardHeader>
                  <ImgWrapper>
                    <Img src={item.src} alt={item.alt} />
                  </ImgWrapper>
                  <HeaderText>{item.name}</HeaderText>
                </CardHeader>
                <Hr />
                <CardContent>{item.review}</CardContent>
                <Hr />
                <CardRating>{item.rating}</CardRating>
                <QuoteButtom />
              </Card>
          );
        })}
  */}

      <Lightbox
        render={{
          slideFooter: () => <Testical />,
        }}
      />

      {/* <button
        onClick={() => {
          console.log(testimonialsData);
        }}>
        asd
      </button> */}
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
