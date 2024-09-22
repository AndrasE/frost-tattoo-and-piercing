import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  OpenIcon,
} from "./ChromiumsInstalledAlreadyDesktopElements";

const ChromiumsInstalledAlreadyDesktop = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <OpenIcon />
          {i18n.open}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstalledAlreadyDesktop;
