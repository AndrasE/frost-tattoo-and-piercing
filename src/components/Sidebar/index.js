import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtn,
  SidebarBtnLink,
} from "./SidebarElements";

const Sidebar = ({ $isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={$isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            href="about" //only need for SEO
            aria-label="Scroll to about section" //only need for SEO
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink
            href="services" //only need for SEO
            aria-label="Scroll to services section" //only need for SEO
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink
            href="gallery" //only need for SEO
            aria-label="Scroll to gallery section" //only need for SEO
            to="gallery"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink
            href="testimonials" //only need for SEO
            aria-label="Scroll to testimonials section" //only need for SEO
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SideBtn>
            <SidebarBtnLink
              href="contact" //only need for SEO
              aria-label="Scroll to contact section" //only need for SEO
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggle}>
              Contact
            </SidebarBtnLink>
          </SideBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
