import React, { useEffect, useState, memo } from "react";
import Video from "../../videos/video.mp4";
import Captions from "../../videos/video_caption.vtt";
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
  MotionVideo,
} from "./HeroElements";
import { useSwipeable } from "react-swipeable";

const HeroVideo = memo(({ toggleSettings }) => {
  // eslint-disable-next-line
  const [videoEnded, setVideoEnded] = useState(false);
  // eslint-disable-next-line
  const [scroll, setScroll] = useState(false);

  //useSwipe to trigger modal open in parent
  const handlers = useSwipeable({
    onSwipedRight: () => {
      toggleSettings();
    },
  });

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
    <HeroContainer {...handlers}>
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
