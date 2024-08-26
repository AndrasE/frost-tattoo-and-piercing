import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/HomeNavbar";
import SettingsModal from "../components/SettingsModal";
import HeroSection from "../components/HeroSection";
import Section from "../components/Sections";
import AboutImg from "../components/AboutImg";
import ServicesImgs from "../components/ServicesImgs";
import GalleryCarousel from "../components/GalleryCarousel";
import ContactDetails from "../components/ContactDetails";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";

const Home = ({ toggleTheme }) => {
  const [$sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!$sidebarOpen);
  };

  // could just wrap HeroSection with <motion.div> but I wanted to keep the Home return clean
  const HeroAnimation = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Sidebar $sidebarOpen={$sidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroAnimation>
        <HeroSection />
      </HeroAnimation>
      <SettingsModal />
      <button
        style={{ position: "absolute", right: 0, top: "20%" }}
        onClick={toggleTheme}>
        asdasdasd
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
