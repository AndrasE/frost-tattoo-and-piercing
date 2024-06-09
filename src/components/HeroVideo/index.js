import React from "react";
import Video from "../../videos/video.mp4";
import { HeroVideoContainer, HeroVideoBg, VideoBg } from "./HeroVideoElements";

const HeroVideo = () => {
  return (
    <HeroVideoContainer>
      <HeroVideoBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroVideoBg>
    </HeroVideoContainer>
  );
};

export default HeroVideo;
