import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  max-width: 450px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
`;

export const Card = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1/1;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.accentColor};
    bottom: 1px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0); /* Start invisible */
    transition: transform 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.iconBorder};
  height: 50px;
  transition: all 0.2s ease-in-out;
`;

export const CardHeaderLink = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  height: auto;
  align-items: center;
  flex-direction: row;
  padding: 5px 0;

  &:hover ${HeaderText}::after {
    transform-origin: left; /* Animate from left to right */
    transform: scaleX(1); /* Show the underline */
  }
  &:hover ${Img} {
    border-color: ${({ theme }) => theme.accentColor};
  }
`;

export const Hr = styled.hr`
  margin: 12px 0;
  color: ${({ theme }) => theme.accentColor};
  border-top: 2px solid;
  border-radius: 4px;
  width: 50px;
  border-bottom: none;
  opacity: 80%;
`;

export const CardContent = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  line-height: 26px;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardRating = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const QuoteTop = styled(RiDoubleQuotesL)`
  position: absolute;
  top: 0px;
  left: 15px;
  color: ${({ theme }) => theme.accentColor};
  font-size: 5rem;
  opacity: 60%;

  @media screen and (max-width: 768px) {
    font-size: 4.3rem;
  }
`;

export const QuoteButtom = styled(RiDoubleQuotesL)`
  position: absolute;
  bottom: 0px;
  right: 15px;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.accentColor};
  font-size: 5rem;
  opacity: 60%;

  @media screen and (max-width: 768px) {
    font-size: 4.3rem;
  }
`;

// Custom buttons and pagination for react-splide due the a clash for framer-motion
export const NextBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
`;

export const NextBtn = styled(GrFormNext)`
  font-size: 30px;
  color: ${({ theme }) => theme.fontColor};
  opacity: 70%;

  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    opacity: 100%;
  }
`;

export const PrevBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
`;

export const PrevBtn = styled(GrFormPrevious)`
  font-size: 30px;
  color: ${({ theme }) => theme.fontColor};
  opacity: 70%;

  cursor: pointer;

  transition: transform 0.2s;
  &:hover {
    opacity: 100%;
  }
`;

export const IndicatorBtnsWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: 5px;
  margin: auto;
`;
export const IndicatorBtns = styled.button`
  border-radius: 15px;
  width: 20px;
  height: 3px;
  border: none;
  outline: none;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.fontColor};
  opacity: 40%;

  &[aria-label="true"] {
    opacity: 100%;
  }
`;
