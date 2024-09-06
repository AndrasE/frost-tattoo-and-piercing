import React, { useEffect, useState } from "react";
import Logo from "../../images/logoImgs/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ToggleBtn,
  Svg,
  MotionPath,
} from "./NavbarElements";
import { navLinks } from "./navlinksData";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleSidebar, $sidebarOpen }) => {
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
    if ($sidebarOpen) {
      toggleSidebar();
    }
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
            {navLinks.map(({ to, label }, index) => (
              <NavItem key={index}>
                <NavLinks
                  href={to} // only need for SEO
                  aria-label="Scroll to testimonials section" // only need for SEO
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}>
                  {label}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href="contact" //only need for SEO
              aria-label="Scroll to contact section" //only need for SEO
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}>
              Contact
            </NavBtnLink>
          </NavBtn>{" "}
          {/* toggle button w animation */}
          <ToggleBtn onClick={toggleSidebar}>
            <Svg
              $sidebarOpen={$sidebarOpen}
              viewBox="0 0 23 23"
              aria-label="svg_toggle_button">
              <MotionPath
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                initial="closed"
                animate={$sidebarOpen ? "open" : "closed"}
              />
              <MotionPath
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                initial="closed"
                animate={$sidebarOpen ? "open" : "closed"}
              />
              <MotionPath
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                initial="closed"
                animate={$sidebarOpen ? "open" : "closed"}
              />
            </Svg>
          </ToggleBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
