import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  display: flex;
`;

export const Card = styled.div`
  background-color: rebeccapurple;
  width: 400px;
  height: 400px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
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
