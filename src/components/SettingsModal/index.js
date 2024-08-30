import React, { useState } from "react";
import {
  Modal,
  ModalContainer,
  SettingsContainer,
  LabelContainer,
  LabelWrapper,
  SettingsLabel,
  SettingsWrapper,
  SettingWrapper,
  SettingLabel,
  ModalLabel,
  Sun,
  Moon,
  FlagIcon,
} from "./SettingsModalElemenets";
import Hun from "../../images/flagIcons/hu.svg";
import Eng from "../../images/flagIcons/gb.svg";
import Ger from "../../images/flagIcons/de.svg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Convert Modal into a motion component
const MotionModal = motion(Modal);

const SettingsModal = ({
  $settingsOpen,
  toggleSettings,
  theme,
  toggleTheme,
}) => {
  const [$themeSelected, $setThemeSelected] = useState(theme);

  // Function to handle theme selection
  function handleThemeSelect(selected) {
    $setThemeSelected(selected);
    toggleTheme(selected);
  }

  // Track the scroll position of the window
  const { scrollY } = useScroll();

  // Map scrollY value to control position
  const xPosition = useTransform(scrollY, [150, 800], [0, -300]); // Move out to the left
  const smoothXPosition = useSpring(xPosition, { stiffness: 150, damping: 20 });

  return (
    <MotionModal
      $settingsOpen={$settingsOpen}
      onClick={toggleSettings}
      style={{
        x: smoothXPosition, // Animate x position to slide out
      }}>
      <ModalContainer>
        <SettingsContainer $settingsOpen={$settingsOpen}>
          <SettingsLabel>Theme</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper
              onClick={() => handleThemeSelect("light")}
              $isSelected={$themeSelected === "light"}>
              <Sun />
              <SettingLabel>light</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => handleThemeSelect("dark")}
              $isSelected={$themeSelected === "dark"}>
              <Moon />
              <SettingLabel>dark</SettingLabel>
            </SettingWrapper>
          </SettingsWrapper>

          <SettingsLabel>Language</SettingsLabel>
          <SettingsWrapper>
            <FlagIcon src={Hun} />
            <FlagIcon src={Eng} />
            <FlagIcon src={Ger} />
          </SettingsWrapper>
        </SettingsContainer>

        <LabelContainer>
          <LabelWrapper>
            <ModalLabel>settings</ModalLabel>
          </LabelWrapper>
        </LabelContainer>
      </ModalContainer>
    </MotionModal>
  );
};

export default SettingsModal;
