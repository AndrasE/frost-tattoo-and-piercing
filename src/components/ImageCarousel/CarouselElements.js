import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  height: 400px;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
`;

// export const Img = styled.img`
//   border-radius: 20px;
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   z-index: 9;
//   display: flex;

//   &[aria-hidden="true"] {
//     display: none;
//   }
// `;

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
  }

  &[aria-label="true"] {
    opacity: 80%;
  }
`;
