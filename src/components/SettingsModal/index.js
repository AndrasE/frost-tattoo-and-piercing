import React, { useState } from "react";
import {
  ModalContainer,
  SettingsContainer,
  LabelContainer,
  LabelWrapper,
  SettingsLabel,
  SettingsWrapper,
  SettingWrapper,
  SettingLabel,
  Modal,
  ModalLabel,
  Sun,
  Moon,
  FlagIcon,
} from "./SettingsModalElemenets";
import Hun from "../../images/flagIcons/hu.svg";
import Eng from "../../images/flagIcons/gb.svg";
import Ger from "../../images/flagIcons/de.svg";

const SettingsModal = ({
  $settingsOpen,
  toggleSettings,
  theme,
  toggleTheme,
}) => {
  const [$themeSelected, $setThemeSelected] = useState(theme);

  //sending theme back to parent App.js to make the change theme change, setting state in this component to handle the selection on element and pass it to styled components
  function handleThemeSelect(selected) {
    $setThemeSelected(selected);
    toggleTheme(selected);
  }

  return (
    <Modal $settingsOpen={$settingsOpen} onClick={toggleSettings}>
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
    </Modal>
  );
};

export default SettingsModal;
