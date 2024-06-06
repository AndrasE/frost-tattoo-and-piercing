import React from "react";
import Video from "../../videos/video.mp4";
import { HomeVideoContainer, HomeVideoBg, VideoBg } from "./HomeVideoElements";

const HomeVideo = () => {
  return (
    <HomeVideoContainer>
      <HomeVideoBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeVideoBg>
    </HomeVideoContainer>
  );
};

export default HomeVideo;
