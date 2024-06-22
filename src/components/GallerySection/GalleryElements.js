import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const GalleryContainer = styled.div`
  background: #010606;
`;

export const GalleryrWrapper = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const GalleryRow = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-gap: 0;
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  align-items: center;
  grid-area: col1;
`;

export const TextWrap = styled.div`
  margin: auto;
  max-width: 400px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Content = styled.p`
  max-width: 440px;
  font-size: 1rem;
  text-align: justify;
  line-height: 26px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-start;
`;

export const GalleryBtnLink = styled(LinkRoute)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #01bf71;
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1rem;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  padding-top: 3px;
  margin-left: 10px;
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  padding-top: 2px;
  margin-left: 10px;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Column2 = styled.div`
  align-items: center;
  grid-area: col2;
`;

export const CarouselWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
`;
