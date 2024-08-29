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

  return (
    <Modal $settingsOpen={$settingsOpen} onClick={toggleSettings}>
      <ModalContainer>
        <SettingsContainer $settingsOpen={$settingsOpen}>
          <SettingsLabel>Theme</SettingsLabel>
          <SettingsWrapper>
            <SettingWrapper
              onClick={() => $setThemeSelected("light")}
              $isSelected={$themeSelected === "light"}>
              <Sun />
              <SettingLabel>light</SettingLabel>
            </SettingWrapper>
            <SettingWrapper
              onClick={() => $setThemeSelected("dark")}
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
