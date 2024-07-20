import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavName,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const PagesNavbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Frost</NavLogo>
          <NavMenu>
            <NavItem>
              <NavName to="gallery">Gallery</NavName>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Home</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default PagesNavbar;
