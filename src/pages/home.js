import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/HomeNavbar";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import Gallery from "../components/GallerySection";
import Testimonials from "../components/TestimonialSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  const [$isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!$isOpen);
  };

  return (
    <>
      <Sidebar $isOpen={$isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
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
