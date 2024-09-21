import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  position: fixed;
  box-shadow: 0 5px 15px ${({ theme }) => theme.navDropShadow};
  top: 0;
  z-index: ${({ $settingsOpen }) => ($settingsOpen ? 5 : 4)};
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0;
  max-width: 1300px;
`;

export const NavLogoWrapper = styled(LinkRoute)`
  color: ${({ theme }) => theme.fontColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 24px;
  text-decoration: none;
`;

export const NavLogo = styled.img`
  width: 35px;
  margin-right: 5px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  color: ${({ theme }) => theme.fontColor};
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    padding-top: 2px;
  }
`;

export const NavBtn = styled.nav`
  margin: 18px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkScroll)`
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  font-size: 1rem;
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

export const ToggleBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  display: none;

  @media screen and (max-width: 870px) {
    display: flex;
    justify-self: flex-end;
    align-self: center;
    cursor: pointer;
    margin: 20px;
  }
`;

export const Svg = styled.svg`
  margin-top: 6px;
  width: 32px;
  height: 32px;
`;

export const MotionPath = styled(motion.path)`
  stroke-width: 1.7;
  stroke: ${({ theme }) => theme.fontColor};
`;
