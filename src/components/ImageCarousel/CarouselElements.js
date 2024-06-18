import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  position: relative;
`;

// export const ImgWrapper = styled.div`
//   justify-content: center;
//   align-items: center;
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// `;

export const Img = styled.img`
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: ${({ $slide }) => ($slide === "slide" ? "flex" : "none")};
  z-index: 9;
`;

export const LeftArrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  inset: 0;
  margin: auto auto auto 5px;
  width: 25px;
  height: 25px;
  color: #fff;
  opacity: 50%;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
`;

export const RightArrow = styled(BsArrowRightCircleFill)`
  position: absolute;
  inset: 0;
  margin: auto 5px auto auto;
  width: 25px;
  height: 25px;
  color: #fff;
  opacity: 50%;
  cursor: pointer;
  filter: drop-shadow(0pc 0px 3px #555);
`;

export const IndicatorBtnsWrapper = styled.span`
  position: absolute;
  filter: drop-shadow(0pc 0px 2px #555);
`;

export const IndicatorBtns = styled.button`
  inset: 0;
  color: #fff;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  border: none;
  outline: none;
  margin: 0 0.25rem;
  cursor: pointer;
  opacity: 50%;
`;
