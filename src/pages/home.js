import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/HomeNavbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/ServicesSection";
import About from "../components/AboutSection";
import Gallery from "../components/GallerySection";
import Testimonials from "../components/TestimonialSection";

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
    </>
  );
};

export default Home;
