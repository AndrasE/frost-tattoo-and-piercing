import React, { useState } from "react";
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
  NavBtnWrapper,
  ArrowForward,
  ArrowRight,
  ArrowLeftDouble,
  ArrowLeft,
} from "./NavbarElements";

const PagesNavbar = ({ toggle }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

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
          <NavBtnWrapper>
            <NavBtnLink to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
              {hover ? <ArrowLeftDouble /> : <ArrowLeft />} Home
            </NavBtnLink>
          </NavBtnWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default PagesNavbar;
