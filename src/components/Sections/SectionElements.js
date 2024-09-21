import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export const SectionWrapper = styled.div`
  /* this is only needed to attach the id for it so the navbar correctly target the section as while using framer-motion to scale in the container and content while the scale not 100% completed it will offset the scroll -->>  import { animateScroll as scroll } from "react-scroll"  */
`;

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    margin-top: 50px;
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ reversed }) =>
    reversed
      ? "minmax(0, 1fr) minmax(0, 1.4fr)"
      : "minmax(0, 1.4fr) minmax(0, 1fr)"};

  grid-template-areas: ${({ reversed }) =>
    reversed
      ? `"col2 col1"`
      : `"col1 col2"`}; /* ajust grid-template-areas on prop */
  grid-gap: 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: ${({ reversed }) =>
      reversed
        ? "minmax(0, 1fr) minmax(0, 1.3fr)"
        : "minmax(0, 1.3fr) minmax(0, 1fr)"};
    grid-gap: 40px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "col1" "col2"; /*  stack columns on mobile */
    align-content: center;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;

  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const TextWrapper = styled.div`
  border-radius: 20px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 25px;

  @media screen and (min-width: 769px) {
    text-align: ${({ reversed }) => (reversed ? "start" : "end")};
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 26px;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

//button styles on if exist on prop
export const BtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  padding-right: 25px;
  justify-content: flex-end;
`;

export const BtnLink = styled(LinkRoute)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  padding: 10px 17px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  position: relative;
  left: 1px;
  padding-top: 3px;
  margin-left: 5px;
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArrowRightDouble = styled(MdKeyboardDoubleArrowRight)`
  position: relative;
  left: 3px;
  padding-top: 2px;
  margin-left: 5px;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
