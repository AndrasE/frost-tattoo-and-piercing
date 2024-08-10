import React, { useEffect, useState } from "react";
import Navbar from "../components/HomeNavbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import Gallery from "../components/GallerySection";
import Testimonials from "../components/TestimonialSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";

const Home = () => {
  const [$isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!$isOpen);
  };

  window.addEventListener("load", function () {
    // Scroll to 0,1 to hide the address bar
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 10);
  });

  useEffect(() => {
    const hideAddressBar = () => {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 10);
    };

    window.addEventListener("load", hideAddressBar);

    return () => {
      window.removeEventListener("load", hideAddressBar);
    };
  }, []);

  // could just whap it HeroSection with <motion.div> but i wanted the keep the Home return clean
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
      <Sidebar $isOpen={$isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroAnimation>
        <HeroSection />
      </HeroAnimation>
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ProgressBar />
    </>
  );
};

export default Home;
