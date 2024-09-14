import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 450px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: white;
  opacity: 80%;
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
  color: white;
  opacity: 80%;
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
  color: white;
  opacity: 60%;

  &[aria-label="true"] {
    opacity: 100%;
  }
`;
