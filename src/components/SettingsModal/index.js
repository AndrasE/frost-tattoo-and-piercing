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
  InstallPwaBtn,
} from "./SettingsModalElements";
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
  togglePwaModal,
  settings,
}) => {
  const [$themeSelected, $setThemeSelected] = useState(theme);
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language); // Store current language
  const [$isStandalone, $setIsStandalone] = useState(false); // Track standalone mode

  useEffect(() => {
    setSelectedLang(i18n.language); // Update when the language changes
  }, [i18n.language]);

  useEffect(() => {
    // Detect if the app is running in standalone mode
    const checkStandaloneMode = () => {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;
      $setIsStandalone(standalone);
    };
    checkStandaloneMode();
  }, []);

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
  const xPosition = useTransform(scrollY, [135, 800], [0, -300]); // Move out to the left
  const smoothXPosition = useSpring(xPosition, { stiffness: 150, damping: 20 });

  return (
    <MotionModal
      $settingsOpen={$settingsOpen}
      style={{
        x: smoothXPosition, // Animate x position to slide out settings button
      }}
      initial={{
        left: "-197px", // Set initial left position
      }}
      animate={{
        left: $settingsOpen ? "0" : "-197px", // Control left position based on $settingsOpen
      }}
      transition={{ duration: 0.3 }}>
      <ModalContainer onClick={toggleSettings}>
        <SettingsContainer $settingsOpen={$settingsOpen}>
          {/* Themes */}
          <SettingsLabel>{settings.theme}</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper
              onClick={() => handleThemeSelect("light")}
              $isSelected={$themeSelected === "light"}>
              <Sun />
              <SettingLabel>{settings.light}</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => handleThemeSelect("dark")}
              $isSelected={$themeSelected === "dark"}>
              <Moon />
              <SettingLabel>{settings.dark}</SettingLabel>
            </SettingWrapper>
          </SettingsWrapper>
          {/* Languages */}
          <SettingsLabel>{settings.lngs}</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper
              onClick={() => changeLng("hu-HU")}
              $isSelected={selectedLang === "hu-HU"}>
              <FlagIcon src={Hun} alt="Hungary_flag" />
              <SettingLabel>Hun</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => changeLng("en-GB")}
              $isSelected={selectedLang === "en-GB"}>
              <FlagIcon src={Eng} alt="United_Kingdom_flag" />
              <SettingLabel>Eng</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => changeLng("de-DE")}
              $isSelected={selectedLang === "de-DE"}>
              <FlagIcon src={Ger} alt="Germany_flag" />
              <SettingLabel>Ger</SettingLabel>
            </SettingWrapper>
          </SettingsWrapper>

          {/* Conditionally render PWA install button if not in standalone mode */}
          {!$isStandalone && (
            <>
              <SettingsLabel $isStandalone={$isStandalone}>App</SettingsLabel>
              <SettingsWrapper>
                <SettingWrapper>
                  <InstallPwaBtn
                    alt="inslall-pwa-button"
                    onClick={togglePwaModal}>
                    {settings.install}
                  </InstallPwaBtn>
                </SettingWrapper>
              </SettingsWrapper>
            </>
          )}
        </SettingsContainer>
        <LabelContainer>
          <LabelWrapper>
            <ModalLabel>{settings.settings}</ModalLabel>
          </LabelWrapper>
        </LabelContainer>
      </ModalContainer>
    </MotionModal>
  );
};

export default SettingsModal;
