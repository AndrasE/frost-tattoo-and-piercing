import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  OpenIcon,
} from "./ChromiumsInstalledAlreadyDesktopElements";

const ChromiumsInstalledAlreadyDesktop = () => {
  return (
    <>
      <Divider />
      <Description>
        This PWA (Progressive Web Application) has already been installed.
      </Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <OpenIcon />
          Please click the icon in the addressbar to open.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstalledAlreadyDesktop;
