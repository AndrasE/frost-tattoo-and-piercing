import React, { useState, useEffect } from "react";
import Navbar from "../../components/HomeNavbar";
import Sidebar from "../../components/Sidebar";
import SettingsModal from "../../components/SettingsModal";
import HeroVideo from "../../components/HeroSection";
import Section from "../../components/Sections";
import AboutImg from "../../components/SectionsEmelents/AboutImg";
import ServicesImgs from "../../components/SectionsEmelents/ServicesImgs";
import GalleryCarousel from "../../components/SectionsEmelents/GalleryCarousel";
import ContactDetails from "../../components/SectionsEmelents/ContactDetails";
import TestimonialCarousel from "../../components/SectionsEmelents/TestimonialCarousel";
import Footer from "../../components/Footer";
import ProgressBar from "../../components/ProgressBar";
import { BlurAnimation } from "./HomePageElements";
import { motion } from "framer-motion";

const Home = ({ toggleTheme, theme }) => {
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
    if ($settingsOpen || $sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [$settingsOpen, $sidebarOpen]);

  return (
    <>
      <SettingsModal
        $settingsOpen={$settingsOpen}
        toggleSettings={toggleSettings}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {/* Blur effect applied when settings modal is open + diable scrolling*/}
      <BlurAnimation $settingsOpen={$settingsOpen}>
        <Sidebar $sidebarOpen={$sidebarOpen} toggleSidebar={toggleSidebar} />
        <Navbar $sidebarOpen={$sidebarOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <HeroVideo toggleSettings={toggleSettings} />
        </motion.div>
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
