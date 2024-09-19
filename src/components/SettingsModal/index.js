import React, { useState, useEffect } from "react";
import {
  MotionModal,
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
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Hun from "../../images/flagIcons/hu.svg";
import Eng from "../../images/flagIcons/gb.svg";
import Ger from "../../images/flagIcons/de.svg";

const SettingsModal = ({
  $settingsOpen,
  toggleSettings,
  theme,
  toggleTheme,
  browserSettings,
}) => {
  const [$themeSelected, $setThemeSelected] = useState(theme);
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language); // Store current language

  useEffect(() => {
    setSelectedLang(i18n.language); // Update when the language changes
  }, [i18n.language]);

  // Function to handle theme selection
  function handleThemeSelect(selected) {
    $setThemeSelected(selected);
    toggleTheme(selected);
  }

  // Function to change language and set the selected language
  function changeLng(lng) {
    i18n.changeLanguage(lng);
    setSelectedLang(lng); // Update selected language
  }

  // Track the scroll position of the window
  const { scrollY } = useScroll();

  // Map scrollY value to control position
  const xPosition = useTransform(scrollY, [150, 800], [0, -300]); // Move out to the left
  const smoothXPosition = useSpring(xPosition, { stiffness: 150, damping: 20 });

  return (
    <MotionModal
      $settingsOpen={$settingsOpen}
      style={{
        x: smoothXPosition, // Animate x position to slide out settings button
      }}
      initial={{
        left: "-214px", // Set initial left position
      }}
      animate={{
        left: $settingsOpen ? "0" : "-214px", // Control left position based on $settingsOpen
      }}
      transition={{ duration: 0.3 }}>
      <ModalContainer onClick={toggleSettings}>
        <SettingsContainer $settingsOpen={$settingsOpen}>
          {/* Themes */}
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
          {/* Languages */}
          <SettingsLabel>Language</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper
              onClick={() => changeLng("hu")}
              $isSelected={selectedLang === "hu"}>
              <FlagIcon src={Hun} alt="Hungary_flag" />
              <SettingLabel>Hun</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => changeLng("en")}
              $isSelected={selectedLang === "en"}>
              <FlagIcon src={Eng} alt="United_Kingdom_flag" />
              <SettingLabel>Eng</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => changeLng("de")}
              $isSelected={selectedLang === "de"}>
              <FlagIcon src={Ger} alt="Germany_flag" />
              <SettingLabel>Ger</SettingLabel>
            </SettingWrapper>
          </SettingsWrapper>
          {/* PWA  */}
          <SettingsLabel>App</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper>
              <SettingLabel>{browserSettings.name}</SettingLabel>
              <SettingLabel>{browserSettings.os}</SettingLabel>
            </SettingWrapper>
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
