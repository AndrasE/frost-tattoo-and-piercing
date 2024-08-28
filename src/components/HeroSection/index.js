import React, { useEffect, useState, memo } from "react";
import Video from "../../videos/video.mp4";
import { motion } from "framer-motion";
import DoubleArrowDown from "../../images/heroBottomArrowAnimation/doubleArrowDown.json";

import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  ScrollLink,
  LottieAnimation,
} from "./HeroElements";

const HeroVideo = memo(() => {
  // eslint-disable-next-line
  const [videoEnded, setVideoEnded] = useState(false);
  // eslint-disable-next-line
  const [scroll, setScroll] = useState(false);

  const changeScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => window.removeEventListener("scroll", changeScroll);
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <motion.video
          initial={{ opacity: 0 }} // Start with 0 opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1 }} // 1 second fade-in
          autoPlay
          muted
          src={Video}
          onEnded={() => setVideoEnded(true)}
          type="video/mp4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ensure the video covers its container
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>Frost</HeroH1>
        <HeroH2>tattoo and piercing</HeroH2>
        <HeroP>Welcome to our official website!</HeroP>
      </HeroContent>
      <ScrollLink
        href="about"
        aria-label="Scroll to about section"
        to="about"
        smooth={true}
        duration={500}
        offset={-80}></ScrollLink>
      <LottieAnimation animationData={DoubleArrowDown} />
    </HeroContainer>
  );
});

export default HeroVideo;
