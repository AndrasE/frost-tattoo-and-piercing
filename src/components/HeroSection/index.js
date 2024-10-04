import React, { useEffect, useState, memo } from "react";
import Video from "../../videos/video.mp4";
import Captions from "../../videos/video_caption.vtt";
import DoubleArrowDown from "../../images/heroArrowAnimation/doubleArrowDown.json";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroH2,
  ScrollLink,
  LottieAnimation,
  MotionVideo,
} from "./HeroElements";

const HeroVideo = memo(({ welcome }) => {
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
        <MotionVideo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1 }} // 1 second fade-in
          autoPlay
          muted
          src={Video}
          onEnded={() => setVideoEnded(true)}
          type="video/mp4">
          <track kind="captions" src={Captions} srcLang="en" label="English" />
        </MotionVideo>
      </HeroBg>
      <HeroContent>
        <HeroH1>Frost</HeroH1>
        <HeroH2>tattoo and piercing</HeroH2>
        <HeroH2>{welcome.welcome}</HeroH2>
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
