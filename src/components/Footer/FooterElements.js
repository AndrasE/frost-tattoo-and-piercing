import styled from "styled-components";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const FooterWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const LinkText = styled.p`
  display: flex;
`;

export const Link = styled.a`
  margin-left: 3px;
  text-decoration: none;
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 3px;
    width: 100%;
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

export const ArrowRightDouble = styled(MdKeyboardDoubleArrowRight)`
  position: relative;
  bottom: 1px;
  opacity: 0%;
  color: #1ebbd7;
  font-size: 24px;
`;
