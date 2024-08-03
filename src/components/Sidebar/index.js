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
import { animateScroll as scroll } from "react-scroll";

const Sidebar = ({ $isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={$isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-30}
            onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-30}
            onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink
            to="gallery"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-30}
            onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-30}
            onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SideBtn>
            <SidebarBtnLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-30}
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
