import React, { useState, useEffect } from "react";
import SwipeSceen from "../../components/SwipeScreen";
import BlurSceen from "../../components/BlurScreen";
import Navbar from "../../components/HomeNavbar";
import Sidebar from "../../components/Sidebar";
import SettingsModal from "../../components/SettingsModal";
import PwaModal from "../../components/PwaModal";
import HeroVideo from "../../components/HeroSection";
import Section from "../../components/Sections";
import AboutImg from "../../components/SectionsEmelents/AboutImg";
import ServicesImgs from "../../components/SectionsEmelents/ServicesImgs";
import GalleryCarousel from "../../components/SectionsEmelents/GalleryCarousel";
import TestimonialCarousel from "../../components/SectionsEmelents/TestimonialCarousel";
import ContactDetails from "../../components/SectionsEmelents/ContactDetails";
import FormSubmit from "../../components/SectionsEmelents/FormSubmit";
import Footer from "../../components/Footer";
import ProgressBar from "../../components/ProgressBar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = ({ toggleTheme, theme, browserSettings, deferredPrompt }) => {
  const { t } = useTranslation();
  const [$sidebarOpen, setSidebarOpen] = useState(false);
  const [$settingsOpen, setSettingsOpen] = useState(false);
  const [$pwaModalOpen, setPwaModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!$sidebarOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!$settingsOpen);
  };

  const togglePwaModal = () => {
    setPwaModalOpen(!$pwaModalOpen);
  };

  // disable scrolling when the settings modals or sidebar are open
  useEffect(() => {
    if ($settingsOpen || $sidebarOpen || $pwaModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [$settingsOpen, $sidebarOpen, $pwaModalOpen]);

  return (
    <>
      {/* blur and swipe area for settings modal, listens to scrollY when modal btn animated out, swipe will be disabled;
      z-indexes changes according to modal position. order is: closed: blur, hero, swipe, modal, nav || open: hero, swipe, nav, blur, modal*/}

      <BlurSceen
        toggleSettings={toggleSettings}
        $settingsOpen={$settingsOpen}
        $pwaModalOpen={$pwaModalOpen}
        togglePwaModal={togglePwaModal}
      />
      <SwipeSceen
        toggleSettings={toggleSettings}
        $settingsOpen={$settingsOpen}
      />
      <Navbar
        $sidebarOpen={$sidebarOpen}
        toggleSidebar={toggleSidebar}
        $settingsOpen={$settingsOpen}
        menu={t("nav18")}
      />
      <Sidebar
        $sidebarOpen={$sidebarOpen}
        toggleSidebar={toggleSidebar}
        menu={t("nav18")}
      />
      <SettingsModal
        $settingsOpen={$settingsOpen}
        toggleSettings={toggleSettings}
        theme={theme}
        toggleTheme={toggleTheme}
        togglePwaModal={togglePwaModal}
        settings={t("settings18")}
      />
      <PwaModal
        $pwaModalOpen={$pwaModalOpen}
        togglePwaModal={togglePwaModal}
        browserSettings={browserSettings}
        deferredPrompt={deferredPrompt}
        pwa={t("pwa18")}
      />

      {/* animation onload on herosection */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <HeroVideo hero18={t("hero18")} />
      </motion.div>

      {/* sections start, reusable component passed col1 and col2 as prop for content as well some other props*/}
      <Section id="about" col1={t("about18")} col2={<AboutImg />} />
      <Section
        reversed
        id="services"
        col1={t("services18")}
        col2={<ServicesImgs />}
      />
      <Section
        id="gallery"
        col1={t("gallery18")}
        col2={<GalleryCarousel />}
        btnLabel={t("gallery18").heading}
        btnTo="gallery"
      />
      <Section
        reversed
        id="testimonials"
        col1={t("testimonials18")}
        col2={<TestimonialCarousel />}
      />
      <Section id="contact" col1={t("contact18")} col2={<ContactDetails />} />
      <Section
        reversed
        id="booking"
        col1={t("booking18")}
        col2={<FormSubmit i18n={t("formsubmit18")} />}
        btnLabel={t("booking18").heading}
        openInNewTab
        btnTo={process.env.REACT_APP_SALONIC_URL}
      />
      <Footer />
      <ProgressBar />
    </>
  );
};

export default Home;
