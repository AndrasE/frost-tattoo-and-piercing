import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/HomeNavbar";
import Section from "../components/Sections";
import AboutImg from "../components/AboutImg";
import ServicesImgs from "../components/ServicesImgs";
import GalleryCarousel from "../components/GalleryCarousel";
import ContactDetails from "../components/ContactDetails";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import SettingsModal from "../components/SettingsModal";
import HeroVideo from "../components/HeroSection"; // Import the memoized HeroVideo

const Home = ({ toggleTheme }) => {
  const [$sidebarOpen, setSidebarOpen] = useState(false);
  const [$settingsOpen, setSettingsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!$sidebarOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!$settingsOpen);
  };

  return (
    <>
      <Sidebar $sidebarOpen={$sidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <SettingsModal
        $settingsOpen={$settingsOpen}
        toggleSettings={toggleSettings}
      />
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
    </>
  );
};

export default Home;
