import React from "react";
import { BlurAnimation } from "./BlurScreenElements";
import { useSwipeable } from "react-swipeable";

const BlurSceen = ({ toggleSettings, $settingsOpen }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      toggleSettings();
    },
    onTap: () => {
      toggleSettings();
    },
  });

  return (
    <BlurAnimation {...handlers} $settingsOpen={$settingsOpen}></BlurAnimation>
  );
};

export default BlurSceen;
