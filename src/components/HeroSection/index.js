import React, { useEffect, useState } from "react";
import Video from "../../videos/video.mp4";
import { motion } from "framer-motion";
import DoubleArrowDown from "../../images/heroBottomArrowAnimation/doubleArrowDown.json";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  ScrollLink,
  LottieAnimation,
} from "./HeroElements";

const HeroVideo = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeSctroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeSctroll);
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: videoEnded ? 0 : 1 }}
          transition={{ duration: 2 }}>
          <VideoBg
            autoPlay
            muted
            src={Video}
            onEnded={() => setVideoEnded(true)}
            type="video/mp4"
          />
        </motion.div>
      </HeroBg>
      <HeroContent>
        <HeroH1>Frost </HeroH1>
        <HeroH2>tattoo and piercing</HeroH2>
        <HeroP>Welcome to our official website!</HeroP>
      </HeroContent>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-40}
        animationData={DoubleArrowDown}></ScrollLink>
      <LottieAnimation animationData={DoubleArrowDown} />
    </HeroContainer>
  );
};

export default HeroVideo;
