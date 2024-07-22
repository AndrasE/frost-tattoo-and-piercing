import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const Nav = styled.nav`
  background: #16191d;
  height: 80px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogoWrapper = styled(LinkRoute)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 24px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
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
`;

export const NavName = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;

export const NavBtn = styled.nav`
  margin: 18px;
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkRoute)`
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
  font-size: 1rem;
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
