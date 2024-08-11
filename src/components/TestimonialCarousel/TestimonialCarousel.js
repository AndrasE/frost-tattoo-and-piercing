import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  max-height: 400px;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
`;

export const Card = styled.div`
  aspect-ratio: 1/1;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Asd = styled.div`
  padding: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1/1;
  padding: 0 24px;
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

export const ReviewLink = styled.a`
  text-decoration: none;
`;

export const CardHeader = styled.div`
  cursor: pointer;
  display: flex;
  height: auto;
  align-items: center;
  flex-direction: row;
  padding: 5px;
`;

export const ImgWrapper = styled.div`
  border-radius: 100px;
  border: 2px solid #1ebbd7;
`;

export const Img = styled.img`
  border-radius: 100px;
  height: 45px;
`;

export const HeaderText = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 8px;
`;

export const Hr = styled.hr`
  margin: 12px 0;
  color: #1ebbd7;
  border-top: 2px solid;
  border-radius: 25px;
  width: 50px;
  border-bottom: none;
  opacity: 80%;
`;

export const CardContent = styled.p`
  text-align: center;
  color: #fff;

  font-size: 1rem;
  line-height: 26px;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardRating = styled.p`
  color: #fff;
  font-size: 1rem;
`;