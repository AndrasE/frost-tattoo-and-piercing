import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  align-content: center;

  /* &:hover {
    transition: 0.3s ease-in-out;
    background-color: #1b1f24;
  } */
`;

export const Card = styled.div`
  display: grid;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Img = styled.img`
  max-width: 50px;
  height: auto;
`;

export const HeaderText = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 10px;
`;

export const CardRating = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
`;

export const CardContent = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
  margin-bottom: 25px;
`;

export const LeftArrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  inset: 0;
  margin: auto auto auto 5px;
  width: 25px;
  height: 25px;
  color: #fff;
  opacity: 40%;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 80%;
    scale: 1.1;
  }
`;

export const RightArrow = styled(BsArrowRightCircleFill)`
  position: absolute;
  inset: 0;
  margin: auto 5px auto auto;
  width: 25px;
  height: 25px;
  color: #fff;
  opacity: 40%;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 80%;
    scale: 1.1;
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
  color: #fff;
  border-radius: 5px;
  width: 15px;
  height: 4px;
  border: none;
  outline: none;
  margin: 0 3px;

  opacity: 50%;
  filter: drop-shadow(0pc 0px 2px #555);
  transition: all 0.2s ease-in-out;
  &[aria-label="true"] {
    opacity: 80%;
  }
`;
