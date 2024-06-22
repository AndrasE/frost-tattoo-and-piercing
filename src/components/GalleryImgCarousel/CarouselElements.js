import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  align-items: center;
  position: relative;
  border-radius: 10px;

  margin: auto;
  overflow: hidden;
`;

export const AnimateFramerMotion = styled(AnimatePresence)`
  //just to have all styling including FramerMotion in the CSS file instead of the main component (not necessary)
`;

export const Motion = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 25px;
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
  border-radius: 100%;
  width: 10px;
  height: 10px;
  border: none;
  outline: none;
  margin: 0 3px;
  cursor: pointer;
  opacity: 50%;
  filter: drop-shadow(0pc 0px 2px #555);
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 80%;
    scale: 1.1;
  }
  &[aria-label="true"] {
    opacity: 80%;
  }
`;
