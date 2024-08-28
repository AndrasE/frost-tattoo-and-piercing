import React, { useState, useEffect } from "react";
import Navbar from "../../components/HomeNavbar";
import Sidebar from "../../components/Sidebar";
import SettingsModal from "../../components/SettingsModal";
import HeroVideo from "../../components/HeroSection";
import Section from "../../components/Sections";
import AboutImg from "../../components/AboutImg";
import ServicesImgs from "../../components/ServicesImgs";
import GalleryCarousel from "../../components/GalleryCarousel";
import ContactDetails from "../../components/ContactDetails";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import Footer from "../../components/Footer";
import ProgressBar from "../../components/ProgressBar";
import { BlurAnimation } from "./HomePageElements";

const Home = ({ toggleTheme }) => {
  const [$sidebarOpen, setSidebarOpen] = useState(false);
  const [$settingsOpen, setSettingsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!$sidebarOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!$settingsOpen);
  };

  // Disable scrolling when the settings modal is open
  useEffect(() => {
    if ($settingsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [$settingsOpen]);

  return (
    <>
      <SettingsModal
        $settingsOpen={$settingsOpen}
        toggleSettings={toggleSettings}
      />
      {/* Blur effect applied when settings modal is open */}
      <BlurAnimation $settingsOpen={$settingsOpen}>
        <Sidebar $sidebarOpen={$sidebarOpen} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />
        <HeroVideo />
        <button
          style={{ position: "absolute", right: 0, top: "20%" }}
          onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Section id="about" col2={<AboutImg />} />
        <Section id="services" col2={<ServicesImgs />} reversed />
        <Section
          id="gallery"
          col2={<GalleryCarousel />}
          btnLabel="Gallery"
          btnTo="gallery"
        />
        <Section id="testimonials" col2={<TestimonialCarousel />} reversed />
        <Section id="contact" col2={<ContactDetails />} />
        <Footer />
        <ProgressBar />
      </BlurAnimation>
    </>
  );
};

export default Home;
