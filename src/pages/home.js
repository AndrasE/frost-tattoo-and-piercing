import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/ServicesSection";
import About from "../components/AboutSection";
import Gallery from "../components/GallerySection";
import Carousel from "../components/GalleryImgCarousel";
import Section from "../components/SectionComponent";
import AboutText from "../components/AboutElements/aboutText";
import AboutImg from "../components/AboutElements/aboutImg";

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
      <Section col1={<AboutText />} col2={<AboutImg />} />

      <About />
      {/* <Services />
      <Gallery /> */}
    </>
  );
};

export default Home;
