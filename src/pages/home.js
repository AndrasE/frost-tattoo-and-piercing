import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/ServicesSection";
import About from "../components/AboutSection";
import Gallery from "../components/GallerySection";
import Carousel from "../components/GalleryImgCarousel";
import Section from "../components/SectionComponent";
import About2 from "../components/AboutSection2";

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
      <Section col1={<About2 />} col2={<Carousel />} />
    </>
  );
};

export default Home;
