import React from "react";
import Logo from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
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
          <NavLogoWrapper to="/">
            <NavLogo src={Logo}></NavLogo>
            Frost
          </NavLogoWrapper>
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
