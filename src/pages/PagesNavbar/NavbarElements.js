import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.backgroundColor};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  position: sticky;
  box-shadow: 0 5px 15px ${({ theme }) => theme.navDropShadow};
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
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

  @media screen and (max-width: 550px) {
    display: none;
  }
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
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
`;

export const NavName = styled.div`
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 400;
  height: 100%;
`;

export const NavBtnWrapper = styled.div`
  display: flex;
  margin: 25px;
  align-items: center;
  justify-content: center;
`;

export const NavBtn = styled.nav`
  margin: 18px;
  align-items: center;
  justify-content: center;
`;

export const NavBtnLink = styled(LinkRoute)`
  position: relative;
  padding-left: 55px;
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
  padding: 10px 20px 10px 38px;
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

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  position: absolute;
  left: 1px;
  padding-bottom: 3px;
  margin-left: 8px;
  font-size: 24px;
`;

export const ArrowLeftDouble = styled(MdKeyboardDoubleArrowLeft)`
  position: absolute;
  left: 0px;
  padding-bottom: 3px;
  margin-left: 8px;
  font-size: 24px;
`;
