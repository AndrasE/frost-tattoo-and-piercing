import React from "react";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
} from "./HeroElements";

const HeroVideo = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          muted
          src={Video}
          onEnded={() => console.log("ended")}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Frost </HeroH1>
        <HeroH2>tattoo and piercing</HeroH2>
        <HeroP>Welcome to our offical website!</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroVideo;
