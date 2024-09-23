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
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleSidebar, $sidebarOpen, $settingsOpen, menu }) => {
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

  // Create navLinks using the translated labels from `menu`
  const navLinks = [
    { to: "about", label: menu.about },
    { to: "services", label: menu.services },
    { to: "gallery", label: menu.gallery },
    { to: "testimonials", label: menu.testimonials },
    { to: "contact", label: menu.contact },
  ];

  return (
    <>
      <Nav $settingsOpen={$settingsOpen}>
        <NavbarContainer>
          <NavLogoWrapper to="/" onClick={toggleHome}>
            <NavLogo src={Logo} alt="logo-image"></NavLogo>
            Frost
          </NavLogoWrapper>
          <NavMenu>
            {navLinks.map(({ to, label }, index) => (
              <NavItem key={index}>
                <NavLinks
                  href={to} // only needed for SEO
                  aria-label={`Scroll to ${label} section`} // for SEO
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
              href="booking" //only need for SEO
              aria-label="Scroll to contact section" //only need for SEO
              to="booking"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}>
              {menu.booking}
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
