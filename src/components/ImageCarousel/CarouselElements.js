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
`;

export const LeftArrow = styled(BsArrowLeftCircleFill)`
  color: #fff;
`;

export const RightArrow = styled(BsArrowRightCircleFill)`
  color: #fff;
`;

export const ButtonIndicator = styled.button`
  border: 1px solid red;
`;
