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

const Navbar = ({ toggleSidebar }) => {
  /* eslint-disable no-unused-vars */
  const [scrollNav, setScrollNav] = useState(false);
  /* eslint-enable no-unused-vars */

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
            <NavLogo src={Logo} alt="logo-image"></NavLogo>
            Frost
          </NavLogoWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks
                href="about" //only need for SEO
                aria-label="Scroll to about section" //only need for SEO
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-40}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="services" //only need for SEO
                aria-label="Scroll to services section" //only need for SEO
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-40}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="gallery" //only need for SEO
                aria-label="Scroll to gallery section" //only need for SEO
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                offset={-40}>
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="testimonials" //only need for SEO
                aria-label="Scroll to testimonials section" //only need for SEO
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                offset={-40}>
                Testimonials
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href="contact" //only need for SEO
              aria-label="Scroll to contact section" //only need for SEO
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-40}>
              Contact
            </NavBtnLink>
          </NavBtn>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
