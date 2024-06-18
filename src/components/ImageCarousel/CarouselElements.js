import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 400px;
  height: 400px;
`;

export const Img = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: ${({ $isVisable }) => ($isVisable ? "none" : "block")};
`;

export const LeftArrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: #fff;
  left: 1rem;
  cursor: pointer;
`;

export const RightArrow = styled(BsArrowRightCircleFill)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: #fff;
  right: 1rem;
  cursor: pointer;
`;

export const IndicatorBtnsWrapper = styled.span`
  bottom: 1rem;
  display: flex;
`;

export const IndicatorBtns = styled.button`
  color: #fff;
  border-radius: 100%;
  width: 0.4rem;
  height: 0.4rem;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
`;
