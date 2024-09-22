import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  SettingsIcon,
  AddIcon,
} from "./FirefoxOperaMobileElements";

const FirefoxOperaMobile = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <SettingsIcon />
          {i18n.settings}
        </InstallStep>
        <InstallStep>
          <AddIcon />
          {i18n.add}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default FirefoxOperaMobile;
