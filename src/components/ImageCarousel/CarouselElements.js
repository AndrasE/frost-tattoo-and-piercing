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
  display: ${({ $slide }) => ($slide === 0 ? "flex" : "none")};
`;

export const LeftArrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  left: 1rem;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
`;

export const RightArrow = styled(BsArrowRightCircleFill)`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  right: 1rem;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
`;

export const IndicatorBtnsWrapper = styled.span`
  bottom: 1rem;
  display: flex;
  filter: drop-shadow(0pc 0px 2px #555);
`;

export const IndicatorBtns = styled.button`
  color: #fff;
  border-radius: 100%;
  width: 0.5rem;
  height: 0.5rem;
  border: none;
  outline: none;
  margin: 0 0.25rem;
  cursor: pointer;
`;
