import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  min-height: min-content;
  max-height: 400px;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuoteTop = styled(RiDoubleQuotesL)`
  position: absolute;
  top: 0px;
  left: 15px;
  color: #1ebbd7;
  font-size: 5rem;
  opacity: 60%;
`;

export const QuoteButtom = styled(RiDoubleQuotesL)`
  position: absolute;
  bottom: 0px;
  right: 15px;
  transform: rotate(180deg);
  color: #1ebbd7;
  font-size: 5rem;
  opacity: 60%;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ImgWrapper = styled.div`
  width: 55px;
  border-radius: 100px;
  border: 2px solid #1ebbd7;
`;

export const Img = styled.img`
  height: auto;
`;

export const HeaderText = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 5px;
`;

export const Hr = styled.hr`
  color: #1ebbd7;
  border-top: 2px solid;
  border-radius: 50px;
  width: 50px;
  border-bottom: none;
  margin: 15px;
  opacity: 80%;
`;

export const CardContent = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`;

export const CardRating = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
`;

// export const LeftArrow = styled(BsArrowLeftCircleFill)`
//   position: absolute;
//   inset: 0;
//   margin: auto auto auto 5px;
//   width: 25px;
//   height: 25px;
//   color: #fff;
//   opacity: 40%;
//   cursor: pointer;
//   filter: drop-shadow(0pc 0px 3px #555);
//   transition: all 0.2s ease-in-out;
//   &:hover {
//     opacity: 80%;
//     scale: 1.1;
//   }
// `;

// export const RightArrow = styled(BsArrowRightCircleFill)`
//   position: absolute;
//   inset: 0;
//   margin: auto 5px auto auto;
//   width: 25px;
//   height: 25px;
//   color: #fff;
//   opacity: 40%;
//   cursor: pointer;
//   filter: drop-shadow(0pc 0px 3px #555);
//   transition: all 0.2s ease-in-out;
//   &:hover {
//     opacity: 80%;
//     scale: 1.1;
//   }
// `;

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
