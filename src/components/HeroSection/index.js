import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { motion } from "framer-motion";

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
  const [videoEnded, setVideoEnded] = useState(false);

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
    </HeroContainer>
  );
};

export default HeroVideo;
