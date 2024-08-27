import React from "react";
import {
  ModalContainer,
  SettingsWrapper,
  SettingsContainer,
  Setting,
  Sun,
  Moon,
  LabelWrapper,
  ModalLabel,
  SettingsLabel,
  LabelContainer,
  SettingWrapper,
  FlagIcon,
} from "./SettingsModalElemenets";
import Hun from "../../images/flagIcons/hu.svg";
import Eng from "../../images/flagIcons/gb.svg";
import Ger from "../../images/flagIcons/de.svg";

const SettingsModal = () => {
  return (
    <ModalContainer>
      <SettingsContainer>
        <SettingsLabel>Theme</SettingsLabel>
        <SettingsWrapper>
          <SettingWrapper>
            <Setting>
              <Sun />
            </Setting>
          </SettingWrapper>
          <SettingWrapper>
            <Setting>
              <Moon />
            </Setting>
          </SettingWrapper>
        </SettingsWrapper>
        <SettingsLabel>Language</SettingsLabel>
        <SettingsWrapper>
          <SettingWrapper>
            <Setting>
              <FlagIcon src={Hun} />
            </Setting>
          </SettingWrapper>
          <SettingWrapper>
            <Setting>
              <FlagIcon src={Eng} />
            </Setting>
          </SettingWrapper>
          <SettingWrapper>
            <Setting>
              <FlagIcon src={Ger} />
            </Setting>
          </SettingWrapper>
        </SettingsWrapper>
      </SettingsContainer>
      <LabelContainer>
        <LabelWrapper>
          <ModalLabel>settings</ModalLabel>
        </LabelWrapper>
      </LabelContainer>
    </ModalContainer>
  );
};

export default SettingsModal;
