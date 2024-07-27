import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  min-height: min-content;
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;

  border-radius: 20px;
  padding: 24px;
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
  height: auto;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ImgWrapper = styled.div`
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
  text-align: center;
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardRating = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 26px;
`;
