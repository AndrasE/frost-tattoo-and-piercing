import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.div)`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.fontColor};
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  opacity: 90%;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;

  &:hover {
    color: #1ebbd7;
    opacity: 100%;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtn = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarBtnLink = styled(LinkScroll)`
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-radius: 50px;
  background-color: #1ebbd7;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }
`;
