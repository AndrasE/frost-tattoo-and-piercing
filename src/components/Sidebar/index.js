import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtn,
  SidebarBtnLink,
} from "./SidebarElements";

const Sidebar = ({ $sidebarOpen, toggleSidebar, menu }) => {
  // Create navLinks using the translated labels from `menu`
  const navLinks = [
    { to: "about", label: menu.about },
    { to: "services", label: menu.services },
    { to: "gallery", label: menu.gallery },
    { to: "testimonials", label: menu.testimonials },
    { to: "contact", label: menu.contact },
  ];

  return (
    <SidebarContainer
      $sidebarOpen={$sidebarOpen}
      onClick={toggleSidebar}
      initial={{
        top: "-100%", // Set initial top position
      }}
      animate={{
        top: $sidebarOpen ? "0" : "-100%",
        opacity: $sidebarOpen ? 1 : 0.3,
      }}
      transition={{ duration: 0.3 }}>
      <SidebarWrapper>
        <SidebarMenu>
          {navLinks.map(({ to, label }, index) => (
            <SidebarLink
              key={index}
              href={to} // only needed for SEO
              aria-label={`Scroll to ${label} section`} // for SEO
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggleSidebar}>
              {label}
            </SidebarLink>
          ))}

          <SideBtn>
            <SidebarBtnLink
              href="booking" //only need for SEO
              aria-label="Scroll to contact section" //only need for SEO
              to="booking"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggleSidebar}>
              {menu.booking}
            </SidebarBtnLink>
          </SideBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
