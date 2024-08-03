import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper to="/" onClick={toggleHome}>
            <NavLogo src={Logo}></NavLogo>
            Frost
          </NavLogoWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}>
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}>
                Testimonials
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}>
              Contact
            </NavBtnLink>
          </NavBtn>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
