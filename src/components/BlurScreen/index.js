import React from "react";
import { BlurAnimation } from "./BlurScreenElements";
import { useSwipeable } from "react-swipeable";

const BlurSceen = ({
  toggleSettings,
  $settingsOpen,
  $pwaModalOpen,
  togglePwaModal,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if ($settingsOpen) {
        toggleSettings();
      }
    },
    onSwipedDown: () => {
      if ($pwaModalOpen) {
        togglePwaModal();
      }
    },
    onTap: () => {
      if ($settingsOpen) {
        toggleSettings();
      }
      if ($pwaModalOpen && !$settingsOpen) {
        togglePwaModal();
      }
    },
  });

  const handleClick = () => {
    if ($settingsOpen) {
      toggleSettings();
    }
    if ($pwaModalOpen && !$settingsOpen) {
      togglePwaModal();
    }
  };

  return (
    <BlurAnimation
      {...handlers}
      $settingsOpen={$settingsOpen}
      $pwaModalOpen={$pwaModalOpen}
      onClick={handleClick}></BlurAnimation>
  );
};

export default BlurSceen;
