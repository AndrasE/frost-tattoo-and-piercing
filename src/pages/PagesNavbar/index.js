import React, { useState } from "react";
import Logo from "../../images/logoImgs/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavName,
  NavBtnLink,
  NavBtnWrapper,
  ArrowLeftDouble,
  ArrowLeft,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const PagesNavbar = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper onClick={toggleToTop}>
            <NavLogo src={Logo} alt="logo-image"></NavLogo>
            Frost
          </NavLogoWrapper>
          <NavMenu>
            <NavItem>
              <NavName to="gallery" onClick={toggleToTop}>
                Gallery
              </NavName>
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
