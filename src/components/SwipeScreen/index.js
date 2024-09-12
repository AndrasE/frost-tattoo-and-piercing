import React from "react";
import { SwipeSceenContainer } from "./SwipeScreenElement";
import { useSwipeable } from "react-swipeable";
import { useScroll } from "framer-motion";

const SwipeSceen = ({ toggleSettings, $settingsOpen }) => {
  // Track the scroll position of the window
  const { scrollY } = useScroll();

  // Swipe handlers with a conditional check based on scrollY
  const handlers = useSwipeable({
    onSwipedRight: () => {
      // Trigger toggleSettings if scrollY is less than 150px as we animate out modal btn and wd look silly if we still trigger it
      if (scrollY.get() < 170) {
        toggleSettings();
      }
    },
  });

  return (
    <SwipeSceenContainer
      {...handlers}
      $settingsOpen={$settingsOpen}></SwipeSceenContainer>
  );
};

export default SwipeSceen;
