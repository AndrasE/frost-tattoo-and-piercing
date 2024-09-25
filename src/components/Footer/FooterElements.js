import styled from "styled-components";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const FooterWrapper = styled.div`
  display: flex;
  position: relative;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const LinkWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 71px;
    height: 2px;
    border-radius: 4px;
    background-color: #1ebbd7;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export const Andras = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  line-height: 20px;
`;

export const ArrowRightDouble = styled(MdKeyboardDoubleArrowRight)`
  position: relative;
  bottom: 1px;
  opacity: 0%;
  color: #1ebbd7;
  font-size: 24px;
`;
